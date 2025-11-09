# 🌌 NeuraTwin – Your AI-Powered Growth Companion

<div align="center">

![NeuraTwin Banner](https://github.com/ronitrai27/NeuraTwin-2.0/blob/main/frontend/public/show1.png?raw=true)

**An emotionally intelligent AI companion that grows, learns, and evolves alongside you**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_NeuraTwin-7B68DA?style=for-the-badge)](https://www.ronitrox.xyz)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![Made with ❤️](https://img.shields.io/badge/Made_with-❤️-red?style=for-the-badge)](https://github.com/ishivxnshh/NeuraTwin-HackCBS-Project)

</div>

---

## 📋 Table of Contents

- [Introduction](#-introduction--a-vision-beyond-productivity)
- [Core Features](#-core-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Setup](#environment-setup)
  - [Running the Application](#running-the-application)
- [Project Structure](#-project-structure)
- [API Documentation](#-api-documentation)
- [Screenshots](#-screenshots)
- [Why NeuraTwin?](#-why-neuratwin)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Introduction – A Vision Beyond Productivity

NeuraTwin is a **next-generation AI-powered personal development platform** that goes far beyond typical habit trackers and journal apps. It's your **digital shadow**—an AI twin that watches, listens, learns, and guides you toward becoming your best self.

### What Makes NeuraTwin Unique?

- 🧬 **Personality-Aware**: Understands you through the **OCEAN personality model** (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism)
- 🔄 **Evolving Intelligence**: Your AI twin learns from your journals, routines, and behaviors—adapting its personality to match yours
- 🎯 **Context-Aware Guidance**: Provides hyper-personalized suggestions based on your unique psychological profile
- 💭 **Memory-Enabled**: Uses vector embeddings to remember and understand the context of your entire journey
- 🗣️ **Conversational**: Talk to your twin using voice—it responds with empathy and understanding

Whether you're aiming to hit your goals, understand yourself better, or just need someone to talk to – *NeuraTwin* is here.

---

## 🚀 Core Features

### 🎯 **Goal Tracking**
Set meaningful goals with deadlines. Your AI twin monitors your progress daily, provides intelligent nudges, and celebrates your wins.

### ⏰ **Routine Builder & Tracker**
Design your ideal day with custom routines. The AI analyzes your adherence patterns and suggests optimizations to help you build lasting habits.

### 📔 **Smart Journaling with Vector Embeddings**
Write, reflect, and grow. Every journal entry is transformed into semantic embeddings using `sentence-transformers`, allowing your AI twin to truly *understand* your thoughts, emotions, and patterns over time.

### 🧠 **Dynamic Personality Mapping (OCEAN Traits)**
- Complete an intelligent MCQ-based personality assessment
- Your OCEAN traits (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism) are mapped
- Watch your personality evolve as your behaviors and journal entries influence your psychological profile
- Visualize changes with beautiful, interactive charts

### 🗣️ **Conversational AI (Voice-Enabled)**
- Talk to your AI twin using voice input (WebSpeech API)
- Get spoken responses using browser text-to-speech (SpeechSynthesis API)
- Natural conversations powered by **Groq LLM** with personality-aware context
- Your twin remembers your entire history through RAG (Retrieval Augmented Generation)

### 📊 **Personality Trend Analytics**
Track how your behaviors influence your OCEAN traits over time. Visualize your mental and emotional growth with dynamic charts and insights.

### 💡 **Hyper-Personalized AI Suggestions**
Get contextual advice tailored to:
- Your unique personality profile
- Current goals and progress
- Daily routines and adherence
- Journaling patterns and emotional states
- Historical context from your entire journey

### 🌌 **Dream Mode (Experimental)**
An immersive, starry-night visualization of your possible future—complete with AI narration and ambient music. A poetic, meditative experience powered by your own growth data.

### 🛎️ **Smart Reminders & Encouragements**
Your AI twin occasionally speaks to you through browser voice synthesis—motivating you, checking in, and providing timely reminders like a friend who truly cares.

---

## 🛠 Tech Stack

### **Frontend**
| Technology | Purpose |
|-----------|---------|
| **Next.js 15** | React framework with App Router |
| **TypeScript** | Type-safe development |
| **TailwindCSS** | Utility-first styling |
| **shadcn/ui** | Beautiful, accessible component library |
| **Framer Motion** | Smooth animations |
| **Zod** | Runtime type validation |
| **React Hook Form** | Form state management |
| **Axios** | HTTP client |
| **SpeechSynthesis API** | Text-to-speech |
| **WebSpeech API** | Speech recognition |
| **Howler.js** | Audio playback |
| **Recharts** | Data visualization |

### **Backend**
| Technology | Purpose |
|-----------|---------|
| **Node.js + Express** | RESTful API server |
| **MongoDB + Mongoose** | NoSQL database & ODM |
| **Redis** | Session storage & caching |
| **JWT** | Authentication (optional) |
| **Nodemailer** | Email notifications |
| **Groq SDK** | LLM API integration |

### **AI & ML**
| Technology | Purpose |
|-----------|---------|
| **Python Flask** | Embeddings microservice |
| **PyTorch** | Deep learning framework |
| **sentence-transformers** | Semantic text embeddings (`all-MiniLM-L6-v2`) |
| **Pinecone** | Vector database for RAG |
| **Groq LLM** | Conversational AI (Meta Llama models) |
| **NumPy** | Numerical computations |

### **DevOps & Tools**
| Technology | Purpose |
|-----------|---------|
| **pnpm** | Fast, disk-efficient package manager |
| **Git** | Version control |
| **dotenv** | Environment variable management |

---

## 🏗 Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        Frontend (Next.js)                       │
│  ┌─────────┐  ┌─────────┐  ┌──────────┐  ┌────────────────┐   │
│  │  Pages  │  │ Actions │  │Components│  │ Speech/Voice   │   │
│  └────┬────┘  └────┬────┘  └─────┬────┘  └────────┬───────┘   │
└───────┼────────────┼─────────────┼─────────────────┼───────────┘
        │            │             │                 │
        └────────────┴─────────────┴─────────────────┘
                            │ HTTP/REST
        ┌───────────────────┴──────────────────────────────────┐
        │                                                        │
┌───────▼──────────────────────┐      ┌──────────────────────▼──┐
│   Backend API (Express)      │      │  Embeddings Service     │
│  ┌──────────┐ ┌────────────┐│      │      (Flask + ML)       │
│  │Controllers│ │Middlewares ││      │  ┌──────────────────┐  │
│  └─────┬────┘ └──────┬─────┘│      │  │sentence-transformers │
│        │             │       │      │  └─────────┬────────┘  │
│  ┌─────▼─────┐ ┌────▼─────┐ │      │  ┌─────────▼────────┐  │
│  │  Models   │ │  Routes  │ │      │  │  all-MiniLM-L6-v2│  │
│  └─────┬─────┘ └────┬─────┘ │      │  └──────────────────┘  │
└────────┼────────────┼────────┘      └──────────┬──────────────┘
         │            │                           │
    ┌────▼────┐  ┌───▼──────┐           ┌────────▼────────┐
    │ MongoDB │  │  Redis   │           │  Pinecone DB    │
    │ (Data)  │  │ (Cache)  │           │  (Vectors/RAG)  │
    └─────────┘  └──────────┘           └─────────────────┘
                      │
              ┌───────▼────────┐
              │   Groq LLM     │
              │ (Meta Llama)   │
              └────────────────┘
```

### Key Architectural Highlights

1. **Microservices Design**: Separate embeddings service for ML workload isolation
2. **Vector RAG**: Journal embeddings stored in Pinecone for semantic search
3. **Personality Evolution**: OCEAN traits dynamically updated based on user behavior
4. **Session Management**: Redis for fast OTP verification and session handling
5. **Simple Authentication**: Header-based auth (`x-user-id`) for demo/development

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** v18+ ([Download](https://nodejs.org/))
- **Python** 3.8+ ([Download](https://python.org/))
- **pnpm** ([Install](https://pnpm.io/installation))
- **MongoDB** (Local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- **Redis** (Local or [Redis Cloud](https://redis.com/))
- **Git**

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/ishivxnshh/NeuraTwin-HackCBS-Project.git
cd NeuraTwin-HackCBS-Project
```

2. **Install Backend Dependencies**
```bash
cd backend
pnpm install
```

3. **Install Frontend Dependencies**
```bash
cd ../frontend
pnpm install
```

4. **Set up Python Environment for Embeddings Service**
```bash
cd ../embeddings
python -m venv venv

# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### Environment Setup

#### **Backend** (`backend/.env`)
```env
# Server
PORT=5000

# MongoDB
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/neuratwin

# Redis
REDIS_HOST=your-redis-host
REDIS_PORT=6379
REDIS_PASSWORD=your-redis-password

# Email (Nodemailer)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Groq AI
GROQ_API_KEY=your-groq-api-key

# Pinecone
PINECONE_API_KEY=your-pinecone-api-key
PINECONE_INDEX_NAME=neuratwin-embeddings
```

#### **Frontend** (`frontend/.env.local`)
```env
# API Configuration
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000

# Groq AI (for client-side features)
NEXT_PUBLIC_GROQ_KEY=your-groq-api-key
```

#### **Embeddings Service** (`embeddings/.env`)
```env
PINECONE_API_KEY=your-pinecone-api-key
PINECONE_INDEX_NAME=neuratwin-embeddings
```

### Running the Application

#### **1. Start Backend Server**
```bash
cd backend
node server.js
```
Server will run on `http://localhost:5000`

#### **2. Start Embeddings Service**
```bash
cd embeddings
python main.py
```
Service will run on `http://localhost:6000`

#### **3. Start Frontend**
```bash
cd frontend
pnpm dev
```
App will run on `http://localhost:3001`

### Accessing the Application

Open your browser and navigate to:
```
http://localhost:3001
```

---

## 📁 Project Structure

```
NeuraTwin-HackCBS-Project/
│
├── backend/                    # Express.js API Server
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── controllers/           # Route handlers
│   │   ├── chatController.js
│   │   ├── GoalController.js
│   │   ├── JournalController.js
│   │   ├── PersonalityController.js
│   │   └── ...
│   ├── middlewares/
│   │   └── SimpleAuth.js      # Authentication middleware
│   ├── models/                # Mongoose schemas
│   │   ├── User.js
│   │   ├── Journal.js
│   │   ├── Routine.js
│   │   └── chatHistory.js
│   ├── routes/                # API routes
│   ├── helper/
│   │   ├── groq.js           # Groq LLM integration
│   │   ├── mailer.js         # Email service
│   │   └── redisClient.js    # Redis client
│   ├── validators/            # Zod schemas
│   ├── server.js             # Express app entry
│   └── package.json
│
├── frontend/                  # Next.js 15 App
│   ├── src/
│   │   ├── app/              # Next.js App Router
│   │   │   ├── home/
│   │   │   ├── login/
│   │   │   ├── personality-test/
│   │   │   └── profile-update/
│   │   ├── components/       # React components
│   │   │   ├── ui/           # shadcn components
│   │   │   ├── GoalManager.tsx
│   │   │   ├── PersonalityChart.tsx
│   │   │   └── ...
│   │   ├── lib/              # Utilities
│   │   │   ├── api.ts        # Axios instance
│   │   │   ├── groqClient.ts
│   │   │   └── ...
│   │   ├── schemas/          # Zod validation
│   │   └── types/            # TypeScript types
│   ├── public/               # Static assets
│   └── package.json
│
├── embeddings/               # Python Embeddings Service
│   ├── main.py              # Flask API
│   ├── requirements.txt     # Python dependencies
│   └── .env
│
├── README.md                # This file
└── package.json
```

---

## 📡 API Documentation

### Authentication
All requests require `x-user-id` header (defaults to `demo-user` for development)

### Core Endpoints

#### **Journals**
```http
GET    /api/journal/getJournals
POST   /api/journal/createJournal
DELETE /api/journal/deleteJournal/:id
```

#### **Goals**
```http
GET    /api/goal/getGoals
POST   /api/goal/createGoal
PUT    /api/goal/updateGoal/:id
DELETE /api/goal/deleteGoal/:id
```

#### **Routines**
```http
GET    /api/routine/getRoutines
POST   /api/routine/createRoutine
PUT    /api/routine/updateRoutine/:id
DELETE /api/routine/deleteRoutine/:id
```

#### **Personality**
```http
GET    /api/personality/getPersonality
PUT    /api/personality/updatePersonality
```

#### **Chat**
```http
POST   /api/chat/chat
GET    /api/chat/history
```

#### **Embeddings**
```http
POST   http://localhost:6000/embed
```
**Request Body:**
```json
{
  "text": "Your journal entry or text",
  "userId": "user-id" // optional
}
```

---

## 📸 Screenshots

### Landing Page
![Landing](https://github.com/ronitrai27/NeuraTwin-2.0/blob/main/frontend/public/show1.png?raw=true)

### Login Experience
![Login](https://github.com/ronitrai27/NeuraTwin-2.0/blob/main/frontend/public/shows2.png?raw=true)

### Dashboard
<img width="1918" height="881" alt="Dashboard" src="https://github.com/user-attachments/assets/9dab628a-73e6-4611-8b4d-3bba50cd1d3c" />

---

## 🤖 Why NeuraTwin?

In a world flooded with productivity tools, **NeuraTwin stands apart**:

| Traditional Apps | NeuraTwin |
|-----------------|-----------|
| ❌ Generic advice | ✅ Personality-aware guidance |
| ❌ Forgets your history | ✅ Remembers everything via embeddings |
| ❌ One-size-fits-all | ✅ Evolves with YOUR personality |
| ❌ Silent trackers | ✅ Conversational, voice-enabled friend |
| ❌ Static data | ✅ Dynamic psychological insights |

**NeuraTwin doesn't just manage your tasks – it mirrors your mind**, gently guiding you to become who you truly want to be.

### It's **your future self, living beside you.**

---

## 🧪 Development Status

| Status | Description |
|--------|-------------|
| 🚧 **MVP Complete** | Core features implemented and tested |
| 🎯 **Hackathon Ready** | Competing in national competitions |
| 👥 **Early Access** | Open for testing and feedback |
| 🔬 **Active Development** | New features in progress |

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Areas We Need Help With:
- 🐛 Bug fixes
- 📝 Documentation improvements
- 🎨 UI/UX enhancements
- 🧪 Testing
- 🌐 Internationalization (i18n)
- ♿ Accessibility improvements

---

## 🙏 Acknowledgments

- **Groq** for blazing-fast LLM inference
- **Pinecone** for vector database
- **shadcn/ui** for beautiful components
- **Hugging Face** for transformer models
- All our early testers and supporters! 💙

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🌐 Links

- 🔗 **Live Demo**: [ronitrox.xyz](https://www.ronitrox.xyz)
- 📧 **Contact**: www.shivansh065@gmail.com
- 🐦 **Twitter**: [Your Twitter]
- 💼 **LinkedIn**: [Your LinkedIn]

---

<div align="center">

**Made with ❤️ by the NeuraTwin Team**

⭐ **Star us on GitHub** — it helps!

[Report Bug](https://github.com/ishivxnshh/NeuraTwin-HackCBS-Project/issues) · [Request Feature](https://github.com/ishivxnshh/NeuraTwin-HackCBS-Project/issues)

</div>
