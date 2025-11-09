# Simple Authentication System

## Overview

The previous JWT-based authentication has been **completely removed** and replaced with a simple, lightweight authentication system that's perfect for demos and internal tools.

## How It Works

### 1. **Backend Simple Auth Middleware** (`backend/middlewares/SimpleAuth.js`)

```javascript
const extractUserId = (req, res, next) => {
  // Check for custom header, fallback to demo user
  const userId = req.headers['x-user-id'] || 'demo-user';
  req.userId = userId;
  next();
};
```

**What it does:**
- Looks for an `x-user-id` header in the HTTP request
- If found, uses that as the user identifier
- If not found, defaults to `'demo-user'`
- Attaches `userId` to the request object for controllers to use

**No passwords, no JWT tokens, no complex verification** - just simple user identification!

---

### 2. **Frontend Integration** (`frontend/src/lib/api.ts`)

```javascript
api.interceptors.request.use(async (config) => {
  if (typeof window !== 'undefined') {
    const userId = localStorage.getItem('user-id');
    if (userId) {
      config.headers['x-user-id'] = userId;
    }
  }
  return config;
});
```

**What it does:**
- Checks localStorage for a `user-id`
- If found, sends it as the `x-user-id` header with every request
- If not found, backend uses `'demo-user'`

---

### 3. **Python Embeddings Service** (`embeddings/main.py`)

```python
# Defaults to 'demo-user' if userId not provided
user_id = data.get("userId", "demo-user")
```

**What it does:**
- Accepts optional `userId` in requests
- Defaults to `'demo-user'` if not provided
- Filters Pinecone queries by userId (if provided)

---

## Changes Made

### ✅ Removed (Old Auth)
- `backend/middlewares/AuthMiddleware.js` - JWT verification
- JWT token generation in controllers
- Token cookies and localStorage handling
- Protected routes in Next.js middleware
- All `req.user` references

### ✅ Added (Simple Auth)
- `backend/middlewares/SimpleAuth.js` - Simple userId extraction
- `req.userId` in all controllers
- Optional `x-user-id` header support
- Default `'demo-user'` fallback everywhere

---

## Usage Examples

### **Option 1: Single Demo User (Default)**
Do nothing! All requests automatically use `'demo-user'` as the identifier.

```bash
# All users share the same data
curl http://localhost:5000/api/journal/history
```

---

### **Option 2: Multi-User Support**

**From Frontend:**
```javascript
// Set user ID in localStorage (once)
localStorage.setItem('user-id', 'alice');

// All subsequent API calls will use 'alice' as userId
```

**From API Client (Postman, curl, etc):**
```bash
# Request as user 'bob'
curl http://localhost:5000/api/journal/history \
  -H "x-user-id: bob"
```

---

## Benefits

✅ **No OTP/Email flows** - eliminated login complexity  
✅ **No JWT secrets** - no token management  
✅ **No session storage** - stateless and simple  
✅ **Multi-user capable** - just send different `x-user-id` headers  
✅ **Demo-friendly** - works immediately without login  
✅ **Error-free** - no auth errors to debug!

---

## Testing

### Backend
```bash
cd backend
npm start
```

### Python Embeddings Service
```bash
cd embeddings
# Activate your virtual environment first
# On Windows: .\myvenv\Scripts\activate
pip install -r requirements.txt
python main.py
```

### Frontend
```bash
cd frontend
npm run dev
```

---

## Data Isolation

- Each `userId` has its own separate data in MongoDB and Pinecone
- If you don't specify a `userId`, everything goes to `'demo-user'`
- To test multi-user: set different `user-id` in localStorage or send different `x-user-id` headers

---

## Security Note

⚠️ **This is NOT suitable for production apps with sensitive data!**

This simple auth system is designed for:
- Demos and prototypes
- Internal tools
- Development/testing environments
- Hackathons and MVPs

For production, you'd need:
- Proper authentication (OAuth, JWT with secure secrets)
- User registration/login flows
- Password hashing
- Session management
- HTTPS enforcement

---

## Quick Start

1. **Default usage (single demo user):**
   ```bash
   # Just start the servers - no auth needed!
   cd backend && npm start
   cd embeddings && python main.py
   cd frontend && npm run dev
   ```

2. **Multi-user testing:**
   ```javascript
   // In browser console on frontend
   localStorage.setItem('user-id', 'your-unique-id');
   // Refresh page - now all requests use your ID
   ```

3. **API testing:**
   ```bash
   # Test with curl
   curl http://localhost:5000/api/user/me -H "x-user-id: test-user"
   ```

That's it! Simple, clean, and error-free! 🎉
