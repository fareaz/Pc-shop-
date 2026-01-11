# 🖥️ PC Shop — Full Stack Next.js Project

This is the first project I built using Next.js. I faced several challenges with routing, deployment, protected routes, and authentication. I tried to fix all of them; some were solved, but I couldn’t implement protected routes properly.

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
