from flask import Flask, request, jsonify
from transformers import pipeline
import os
from gtts import gTTS
import whisper

app = Flask(__name__)

# Load Bengali GPT model
model_name = "sagorsarker/bangla-gpt"
generator = pipeline("text-generation", model=model_name)

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    message = data.get("message", "")
    if not message:
        return jsonify({"error": "No message provided"}), 400

    response = generator(message, max_length=100, num_return_sequences=1)
    reply = response[0]["generated_text"]
    return jsonify({"response": reply})

@app.route("/tts", methods=["POST"])
def text_to_speech():
    data = request.json
    text = data.get("text", "")
    if not text:
        return jsonify({"error": "No text provided"}), 400

    tts = gTTS(text=text, lang="bn")
    audio_path = os.path.join("static", "output.mp3")
    tts.save(audio_path)
    return jsonify({"audio_url": f"/static/output.mp3"})

@app.route("/stt", methods=["POST"])
def speech_to_text():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]
    file_path = os.path.join("uploads", file.filename)
    file.save(file_path)

    model = whisper.load_model("base")
    result = model.transcribe(file_path)
    return jsonify({"text": result["text"]})

if __name__ == "__main__":
    os.makedirs("static", exist_ok=True)
    os.makedirs("uploads", exist_ok=True)
    app.run(host="0.0.0.0", port=5000, debug=True)
