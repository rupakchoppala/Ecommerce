# 🛒 eCommerce Website

A modern, responsive, and stylish eCommerce web application built using **React + TypeScript**. Designed to offer a smooth shopping experience with user-friendly navigation, cart handling, product browsing, animations, and a beautiful red-and-white UI theme.

---

## 🚀 Live Demo

🌐 [View Demo](https://your-live-site-link.com)  
📁 [Frontend GitHub Repo](https://github.com/your-username/ecommerce-frontend)

---

## 📌 Features

- ✅ Fully responsive & modern UI (red + white theme)
- 🔍 Product browsing, search, and filtering
- 🛒 Add to cart, remove from cart
- ❤️ Wishlist functionality
- 🧾 Checkout page (dummy or integrated with payment gateway)
- 👥 Authentication (optional: JWT/Auth)
- 📦 Order summary & confirmation
- 📬 Waitlist/Newsletter component
- 🎯 About Us page with animations
- 🌈 Framer Motion & Tailwind styling

---

## 📂 Project Structure

ecommerce-client/
├── public/
├── src/
│ ├── assets/ # Images, logos
│ ├── components/ # Reusable components
│ │ ├── Header.tsx
│ │ ├── Footer.tsx
│ │ ├── ProductCard.tsx
│ │ ├── Waitlist.tsx
│ │ └── AboutUs.tsx
│ ├── pages/ # Pages like Home, Products, Cart, Checkout
│ │ ├── Home.tsx
│ │ ├── Products.tsx
│ │ └── Cart.tsx
│ ├── hooks/ # Custom hooks
│ ├── utils/ # Utility functions
│ ├── types/ # TypeScript types/interfaces
│ ├── App.tsx
│ └── main.tsx
├── tailwind.config.js
├── package.json
└── tsconfig.json

---

## ⚙️ Installation

### Prerequisites

- Node.js ≥ 18.x
- npm / pnpm / yarn

### Steps

```bash
git clone https://github.com/your-username/ecommerce-client.git
cd ecommerce-client
npm install
npm run dev
