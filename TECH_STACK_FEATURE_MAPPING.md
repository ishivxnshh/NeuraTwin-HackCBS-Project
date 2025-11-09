# 🛠 Tech Stack → Purpose Mapping

## 📋 Quick Reference: Frontend | Backend | GenAI

---

## 🎨 **FRONTEND STACK** → User Interface & Experience

| Tech | Purpose |
|------|---------|
| **Next.js 15 + React 19** | UI framework & components |
| **TailwindCSS** | Styling |
| **shadcn/ui + Radix UI** | UI component library |
| **Framer Motion** | Animations |
| **Recharts** | Data visualization (charts) |
| **React Hook Form + Zod** | Forms & validation |
| **Web Speech API** | Voice input/output |
| **Howler.js** | Audio playback |
| **Axios** | API calls to backend |

**Purpose:** Build user interface, handle user interactions, display data, animations

---

## ⚙️ **BACKEND STACK** → Server Logic & Data Management

| Tech | Purpose |
|------|---------|
| **Node.js + Express** | API server & routing |
| **MongoDB + Mongoose** | Database (users, journals, goals, routines) |
| **Redis** | Caching (OTP codes) |
| **JWT** | Authentication tokens |
| **Nodemailer** | Send emails (OTP) |
| **Zod** | Server-side validation |
| **Flask (Python)** | Embeddings microservice |

**Purpose:** Handle business logic, store data, authenticate users, manage APIs

---

## 🤖 **GENAI STACK** → AI & Machine Learning

| Tech | Purpose |
|------|---------|
| **Groq API + Llama 4** | Generate AI responses, analyze journals |
| **Pinecone** | Vector database for semantic search |
| **SentenceTransformers** | Convert text to embeddings |
| **Flask Service** | Generate & store embeddings |

**Purpose:** AI chat, journal analysis, personalized responses, RAG (context-aware AI)

---

## 🎯 **FEATURE → TECH STACK MAPPING**

| Feature | Frontend | Backend | GenAI |
|---------|----------|---------|-------|
| **Authentication** | React Forms | Express, JWT, Redis, MongoDB | - |
| **Journaling** | React UI | Express, MongoDB | Groq API, Pinecone |
| **Goals** | Next.js, Recharts | Express, MongoDB | - |
| **Routines** | React Hook Form | Express, MongoDB | - |
| **Personality Test** | React, Recharts | MongoDB | - |
| **AI Chat** | Next.js Chat UI | Express, MongoDB | Groq API, Pinecone |
| **Speech** | Web Speech API | - | - |
| **Dream Mode** | Next.js, Web Speech API | Express | Groq API |

---

## 🔄 **FLOW**

```
Frontend (UI) → Backend (API) → GenAI (AI Services)
     ↓              ↓                ↓
  Next.js      Express         Groq API
  React        MongoDB         Pinecone
  TailwindCSS  Redis           SentenceTransformers
```

---

**Summary:** Frontend = UI, Backend = Data & Logic, GenAI = AI Features 🚀
