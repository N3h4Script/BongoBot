import { useState } from "react";
import axios from "axios";

export default function Chatbot() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;
    const userMessage = { sender: "user", text: message };
    setChat((prevChat) => [...prevChat, userMessage]);
    setMessage("");
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/chat", { message });
      const botMessage = { sender: "bot", text: response.data.response || "No response" };
      setChat((prevChat) => [...prevChat, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      setChat((prevChat) => [...prevChat, { sender: "bot", text: "Error: Unable to reach server" }]);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col w-full max-w-md mx-auto p-4 border rounded-lg shadow-md">
      <div className="h-80 overflow-y-auto border-b mb-4 p-2">
        {chat.map((msg, index) => (
          <div key={index} className={`p-2 my-1 rounded ${msg.sender === "user" ? "bg-blue-100" : "bg-gray-200"}`}>
            <strong>{msg.sender === "user" ? "You" : "BongoBot"}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          className="flex-1 border p-2 rounded-l"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-r"
          onClick={sendMessage}
          disabled={loading}
        >
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}
