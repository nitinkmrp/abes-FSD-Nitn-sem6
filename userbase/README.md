# UserBase — Full Stack User Management

A full-stack CRUD application with an Express + MongoDB backend and a polished dark-theme admin frontend.

---

## Folder Structure

```
userbase/
├── backend/
│   ├── config/
│   │   └── db.js                  # MongoDB connection
│   ├── controllers/
│   │   └── user.controller.js     # All CRUD logic
│   ├── middleware/
│   │   └── errorHandler.js        # Global error handler
│   ├── models/
│   │   └── User.js                # Mongoose schema
│   ├── routes/
│   │   └── user.routes.js         # Express router
│   ├── .env                       # Environment variables (do not commit)
│   ├── .env.example               # Template for .env
│   ├── package.json
│   └── server.js                  # Entry point
│
└── frontend/
    ├── css/
    │   └── style.css              # All styles
    ├── js/
    │   ├── api.js                 # API call functions
    │   ├── ui.js                  # UI helper functions
    │   └── app.js                 # Main controller (wires everything)
    └── index.html                 # Main HTML page
```

---

## API Endpoints

| Method | Endpoint             | Description          |
|--------|----------------------|----------------------|
| POST   | /api/users           | Create a new user    |
| GET    | /api/users           | Get all users        |
| GET    | /api/users/:email    | Get user by email    |
| PUT    | /api/users/:email    | Update user by email |
| DELETE | /api/users/:email    | Delete user by email |
| GET    | /health              | API health check     |

---

## Getting Started

### 1. Backend Setup

```bash
cd backend
npm install
```

Edit `.env` with your MongoDB URI:
```
PORT=8800
MONGO_URI=mongodb+srv://<user>:<pass>@cluster0.example.mongodb.net/
```

Start the server:
```bash
# Development (auto-restart)
npm run dev

# Production
npm start
```

The API will be live at `http://localhost:8800`

---

### 2. Frontend Setup

The frontend is plain HTML/CSS/JS — no build step needed.

**Option A — Open directly in browser:**
```bash
open frontend/index.html
```
> Note: ES modules (`type="module"`) require a server. Use Option B if imports fail.

**Option B — Serve with a local server (recommended):**
```bash
# Using VS Code Live Server extension, or:
npx serve frontend

# Or with Python
python3 -m http.server 3000 --directory frontend
```

Then visit `http://localhost:3000`

Make sure the base URL in the top-right of the UI matches where your backend is running.

---

## User Schema

| Field    | Type   | Required | Notes                          |
|----------|--------|----------|--------------------------------|
| name     | String | ✓        | min 2 characters               |
| email    | String | ✓        | unique, validated format       |
| password | String | ✓        | min 6 characters               |
| gender   | String | ✓        | enum: `M`, `F`, `Male`, `Female` |

---

## Bug Fixes Applied (vs original code)

1. **`deleteUser`** — `next` was missing from the function signature, causing crashes on errors.
2. **`errorHandler`** — `err.status` could be `undefined`, sending `500: undefined`. Fixed with `err.status || 500`.
3. **`updateUser`** — was using `req.query` for both finding AND updating, causing the email to overwrite itself. Fixed to use `req.params.email` to find and `req.body` to update.
4. **Duplicate email** — added explicit 409 check before create.
5. **Routes** — prefixed all routes under `/api/users` for clarity.
