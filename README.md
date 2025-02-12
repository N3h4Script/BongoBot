# BongoBot - Bengali Conversational AI

BongoBot is a **self-hosted Bengali Conversational AI chatbot** designed for seamless communication using a **Hugging Face Bengali GPT model**. It supports **real-time text interactions** with a modern UI and conversation history.

## 🚀 Features
- **Self-hosted Bengali GPT model** (Hugging Face)
- **Flask-based Backend** with conversation history
- **React Frontend** with a modern chat interface
- **Real-time Chat Functionality**
- **Database integration for conversation storage** (SQLite)
- **REST API for chatbot communication**

## 🛠️ Tech Stack
- **Frontend**: React, Tailwind CSS (used for styling components in `frontend/src/App.css` and `frontend/src/components/ChatInterface.js`)
- **Backend**: Flask, Hugging Face Transformers, Flask-CORS
- **Database**: SQLite
- **Deployment**: Docker (Optional)

## 🔧 Installation & Setup
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/N3h4Script/BongoBot.git
cd BongoBot
```

### 2️⃣ Setup Backend (Flask)
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

### 3️⃣ Setup Frontend (React)
```bash
cd ../frontend
npm install
npm start
```

### 4️⃣ Run Using Docker (Optional)
```bash
docker-compose up --build
```

## 📜 API Endpoints
| Method | Endpoint  | Description  |
|--------|----------|--------------|
| POST   | `/chat`  | Sends user input and gets a response from BongoBot |
| GET    | `/history` | Retrieves conversation history |

## 🏗️ Future Enhancements
- ✅ Speech-to-Text (Whisper) & Text-to-Speech (gTTS)
- ✅ WebSocket-based real-time responses
- ✅ Enhanced NLP processing
- ✅ Multi-user chat support

---
💡 **Contributions & Feedback are Welcome!** Fork the repo, create a pull request, or reach out for suggestions.

❤️ Made with love by Neha

