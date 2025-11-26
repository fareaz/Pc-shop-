# 🖥️ PC Shop — Full Stack Next.js Project

A modern PC Shop application built with **Next.js 16**, **Next Auth**, **Firebase**, and **MongoDB**.  
This is my first full Next.js project where I learned routing, API integration, authentication, backend deployment, and state management.

---

## 🚀 Live Demo  
👉 Frontend Live: https://pc-shop-nine.vercel.app/  
👉 Backend Repository: https://github.com/fareaz/pc-shop-server.git  

---

## 📌 Features

### 🔐 Authentication
- User Registration & Login (Firebase Auth + Next Auth)
- Authenticated users get a **user dropdown** in the navbar
- (Future Update) Protected Routes

### 🛒 Product Management
- **Add Product:** Authenticated users can add new products  
- **Manage Products:** View and delete own added products  
- **All Products:** Shows all products from the database  
- SweetAlert2 for beautiful confirmation alerts  
- Toast notifications for success/error

### 🎨 UI / UX
- Responsive design  
- Modern components using React Icons & Carousel  
- Marquee text for dynamic UI effects  

---

## 🏗️ Tech Stack

### **Frontend**
- React 19
- Next.js 16.0.3 (App Router)
- React Hook Form
- React Icons
- React Toastify
- SweetAlert2

### **Backend**
- Node.js + Express  
- MongoDB + Mongoose  
- Bcrypt for password hashing  

---

## 📦 Dependencies

```json
"bcrypt": "^6.0.0",
"firebase": "^12.6.0",
"icons": "^1.0.0",
"mongoose": "^9.0.0",
"next": "16.0.3",
"next-auth": "^4.24.13",
"react": "^19.2.0",
"react-dom": "19.2.0",
"react-fast-marquee": "^1.6.5",
"react-hook-form": "^7.66.1",
"react-icons": "^5.5.0",
"react-responsive-carousel": "^3.2.23",
"react-toastify": "^11.0.5",
"sweetalert2": "^11.26.3"
