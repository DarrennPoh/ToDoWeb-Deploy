# 📝 TodoWeb — Full-Stack Todo Application

A modern, containerized todo application built with **Docker, Express, Prisma ORM, and PostgreSQL**.

Supports user registration, JWT-based login, and full CRUD todo management.

**Live Demo:** [https://to-do-web-deploy.vercel.app/](https://to-do-web-deploy.vercel.app/)

---

## ☁️ Deployment

The application is deployed using **Vercel** and **Supabase**.

- **[Vercel](https://vercel.com/)** — Hosts the application and automatically redeploys it when changes are pushed to the connected GitHub repository.
- **[Supabase](https://supabase.com/)** — Provides the hosted PostgreSQL database used to store user accounts and todo records.
- **Prisma ORM** — Connects the backend to the Supabase database and manages database queries and migrations.

**Deployment Architecture:**

```text
User
  |
  v
Vercel (Express Application)
  |
  v
Prisma ORM
  |
  v
Supabase (PostgreSQL Database)
```

---

## 📖 Table of Contents

1. [Features](#-features)
2. [Tech Stack](#️-tech-stack)
3. [Author](#-author)

---

## ✨ Features

- ✅ Full CRUD — Create, read, update, and delete todos
- 🔐 JWT Authentication — Secure register and login
- 🐳 Docker Containerisation — One-command setup, no manual DB installation
- 🗄️ PostgreSQL + Prisma — Type-safe database with automated migrations
- 📱 Responsive UI — Clean, mobile-friendly interface
- 🎨 Tab Filtering — View All, Open, or Completed todos
- 💾 Persistent Sessions — Auto-login with stored tokens
- ☁️ Cloud Deployment — Deployed using Vercel and Supabase
- ⚡ Optimistic UI Updates — Faster interactions with fewer unnecessary API requests

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, Vanilla JavaScript (ES6+), Fanta.css |
| Backend | Node.js 22, Express 5 |
| Database | PostgreSQL (Supabase) |
| ORM | Prisma |
| Auth | JWT, bcryptjs |
| DevOps | Docker, Docker Compose |
| Deployment | Vercel |

---

## 💡 What I Learned

- **Docker & Docker Compose** — Multi-container orchestration and containerised deployments.
- **Prisma ORM** — Type-safe database queries and schema-driven migrations.
- **PostgreSQL** — Relational database design with foreign key relationships.
- **JWT Authentication** — Token-based authentication flow and middleware implementation.
- **Express Middleware** — Building reusable request processing pipelines.
- **Async JavaScript** — Promises and async/await patterns throughout.
- **MVC Architecture** — Separating routes, middleware, and data access layers.
- **Database Migrations** — Managing existing databases and keeping schema changes consistent across environments.
- **Cloud Deployment** — Deploying an Express application using Vercel and Supabase.
- **Performance Optimisation** — Using optimistic UI updates and reducing unnecessary API requests.
- **Debugging** — Diagnosing Docker startup errors, Prisma migration issues and database configuration problems.

---

## 👤 Author

**Darren Poh**

- GitHub: [@DarrennPoh](https://github.com/DarrennPoh)
- LinkedIn: [darren-poh-aa8b1a26b](https://www.linkedin.com/in/darren-poh-aa8b1a26b/)

---

## 🙏 Acknowledgments

- [Prisma](https://www.prisma.io/) — Next-generation Node.js ORM
- [Fanta.css](https://github.com/clumsycomputer/fanta.css) — Lightweight CSS framework
- [Express](https://expressjs.com/) — Fast, minimalist web framework
- [Docker](https://www.docker.com/) — Containerisation platform
- [Supabase](https://supabase.com/) — Hosted PostgreSQL database
- [Vercel](https://vercel.com/) — Cloud deployment platform
- [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) — VS Code API testing extension

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 📸 DEMO PICTURES

- [Signup](screenshots/ToDoWeb_SignUp.png)
- [Login](screenshots/ToDoWeb_Login.png)
- [Dashboard 1](screenshots/ToDoWeb_dashboard1.png)
- [Dashboard 2](screenshots/ToDoWeb_dashboard2.png)
- [Dashboard 3](screenshots/ToDoWeb_dashboard3.png)