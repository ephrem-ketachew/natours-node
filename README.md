# 🌍 Natours App

A full-featured tour booking website built with **Node.js**, **Express**, and **MongoDB**, developed during [Jonas Schmedtmann's Node.js Bootcamp Course](https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/).

> **Natours** is a complete backend application implementing RESTful APIs, MVC architecture, secure authentication & authorization, map and email integrations, and real-world deployment.

---

## 🚀 Features

### 🧭 Tour Management System

- Create, update, delete, and view detailed tours
- Image uploading and resizing with **Multer** and **Sharp**

### 👥 User System

- Sign up, login, logout
- Role-based access control (`admin`, `guide`, `user`)
- Update user profile and password
- Forgot/reset password via email

### 📝 Review & Booking System

- Leave and manage reviews for tours
- Booking with **Stripe** payment integration
- View and manage personal bookings

### 🌍 Interactive Maps

- Display tour locations on a map using **Mapbox**

### 💳 Stripe Integration

- Real-time payment system for booking tours

### 📬 Email Integration

- Development: **Mailtrap**
- Production: **SendGrid**
- Emails for welcome, password reset, etc.

### 🧠 Advanced Backend Concepts

- MVC architecture
- RESTful API with **Postman** testing
- Data modeling with **Mongoose**
- Robust error handling
- Security: rate limiting, sanitization, etc.

### 💻 Server-Side Rendering

- Dynamic pages rendered with **Pug** templating engine

---

## 🛠 Tech Stack

| Area       | Technologies                        |
| ---------- | ----------------------------------- |
| Frontend   | HTML, CSS (by Jonas), Pug Templates |
| Backend    | Node.js, Express.js                 |
| Database   | MongoDB (Atlas + Compass), Mongoose |
| Auth       | JWT, Cookies, Sessions              |
| Payments   | Stripe API                          |
| Maps       | Mapbox GL JS                        |
| Email      | SendGrid (prod), Mailtrap (dev)     |
| Deployment | Heroku (legacy), Localhost          |

---

## 📁 Project Structure

natours/
├── controllers/ # Route logic (tours, users, reviews, bookings)
├── models/ # Mongoose schemas & models
├── routes/ # API & view routes
├── utils/ # Utilities (error handling, emails, etc.)
├── views/ # Pug templates (SSR)
├── public/ # Static assets
├── config.env # Environment variables
├── app.js # App config
└── server.js # Entry point

---

## 🧪 Learning & Tools

During development, I’ve gained hands-on experience with:

- Node.js core modules
- Express middleware (custom & 3rd-party)
- MongoDB schema design & advanced queries
- RESTful API development and Postman
- JWT-based authentication
- Role-based authorization
- File uploads and image processing
- Secure deployment and environment configuration
- Dev tools: **Git**, **Heroku**, **VS Code**, **MongoDB Atlas/Compass**

---

## 🧠 What I Learned

This project has been a **major milestone** in my journey toward becoming a **MERN stack developer**.

From database design to API architecture, from authentication to deployment — **Natours** taught me how to structure a **production-level backend app** using industry best practices and modern tools.

---

## 🚧 Status

✅ **Fully Functional** (Learning Project)

---

## 📎 Credits

- **Design & base idea**: [Jonas Schmedtmann](https://codingheroes.io/)
- **All development**: _Ephrem Ketachew (me! 😊)_
