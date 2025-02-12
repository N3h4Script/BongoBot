# BongoBot: Bengali Conversational AI

## 📝 Project Overview
BongoBot is a fully functional Bengali chatbot powered by a self-hosted GPT model. It features:
- ✅ **Self-hosted Bengali GPT model** (Hugging Face)
- ✅ **Flask backend** with conversation history
- ✅ **React frontend** with a sleek chat interface
- ✅ **Real-time chat functionality**
- ✅ **Speech-to-text** (Whisper) and **text-to-speech** (gTTS)
- ✅ **Docker support** for deployment

## 🚀 Installation & Setup
1️⃣ **Clone the repository**  
```sh
git clone https://github.com/yourusername/BongoBot.git
cd BongoBot
```
2️⃣ **Setup Backend (Flask)**  
```sh
cd backend
python -m venv venv
source venv/bin/activate  # (Windows: venv\Scripts\activate)
pip install -r requirements.txt
python app.py
```
3️⃣ **Setup Frontend (React)**  
```sh
cd frontend
npm install
npm start
```
4️⃣ **Docker Deployment**  
```sh
docker-compose up --build
```

## 🤖 API Endpoints
| Endpoint  | Method | Description |
|-----------|--------|-------------|
| `/chat`   | POST  | Send a message and receive a response |
| `/stt`    | POST  | Upload an audio file for speech-to-text |
| `/tts`    | POST  | Convert text to Bengali speech |

🚀 **Developed by Neha Bari**
