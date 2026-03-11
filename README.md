<div align="center">

# ✅ NextJS Todo List App

**A full-stack Todo List application built with Next.js 14 and MongoDB**

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

[Features](#-features) • [Tech Stack](#%EF%B8%8F-tech-stack) • [Getting Started](#-getting-started) • [API Reference](#-api-reference) • [Roadmap](#-roadmap)

</div>

---

## 📸 Preview

> A clean, minimal interface to manage your daily tasks — powered by a real database and built for speed.

---

## ✨ Features

| Feature | Description |
|---|---|
| ➕ Add Todo | Quickly add new tasks to your list |
| 📋 View All Todos | See all your tasks in one organized place |
| ✅ Complete Todo | Mark tasks as done with a single click |
| 🗑️ Delete Todo | Remove tasks you no longer need |
| 🗄️ MongoDB Integration | Persistent storage — your todos survive page refreshes |
| ⚡ Real-time Updates | Instant UI feedback without full page reloads |
| 🎨 Clean UI | Minimal, distraction-free interface with Tailwind CSS |

---

## 🛠️ Tech Stack

**Frontend**
- [Next.js 14](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)

**Backend**
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Axios](https://axios-http.com/)

---

## 📂 Project Structure

```
todo-next-app/
│
├── app/
│   ├── api/
│   │   └── route.js          # API route handlers (GET, POST, PUT, DELETE)
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.js             # Root layout
│   └── page.js               # Home page
│
├── Components/
│   ├── Navbar.jsx            # Top navigation bar
│   └── Todo.jsx              # Individual todo item component
│
├── lib/
│   ├── config/
│   │   └── db.js             # MongoDB connection setup
│   └── models/
│       └── TodoModel.js      # Mongoose schema & model
│
├── public/
├── .gitignore
├── jsconfig.json
├── next.config.mjs
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A [MongoDB](https://www.mongodb.com/) instance (local or [Atlas](https://www.mongodb.com/cloud/atlas))

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/Riyaban583/NextJS-Todo-List.git
cd NextJS-Todo-List
```

**2. Install dependencies**
```bash
npm install
```

**3. Configure environment variables**

Create a `.env.local` file in the root directory:
```env
MONGODB_URI=your_mongodb_connection_string_here
```

> 💡 Don't have a MongoDB URI? [Create a free cluster on MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register).

**4. Start the development server**
```bash
npm run dev
```

**5. Open in your browser**
```
http://localhost:3000
```

---

## 📡 API Reference

All endpoints are available at `/api`.

### Get All Todos
```http
GET /api
```
**Response:** `200 OK` — Array of todo objects

---

### Create a Todo
```http
POST /api
```
**Request Body:**
```json
{
  "title": "Buy groceries",
  "description": "Milk, eggs, and bread"
}
```
**Response:** `201 Created` — The newly created todo object

---

### Mark Todo as Completed
```http
PUT /api
```
**Request Body:**
```json
{
  "mongoId": "64abc123..."
}
```
**Response:** `200 OK` — Updated todo object

---

### Delete a Todo
```http
DELETE /api?mongoId=64abc123...
```
**Response:** `200 OK` — Confirmation message

---

## 🗺️ Roadmap

- [ ] ✏️ Edit existing todos
- [ ] 🔍 Search and filter todos
- [ ] 🌙 Dark mode UI
- [ ] 🔐 User authentication (NextAuth.js)
- [ ] 📅 Due dates & reminders
- [ ] 🏷️ Todo categories/tags
- [ ] 🚀 Deploy to Vercel

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m 'Add some feature'`
4. Push to your branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👩‍💻 Author

**Riya Bansal**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Riyaban583)

---

<div align="center">

⭐ **If you found this project helpful, please give it a star on GitHub!** ⭐

Made with ❤️ by [Riya Bansal](https://github.com/Riyaban583)

</div>
