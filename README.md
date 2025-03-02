# E-Commerce Platform

Welcome to **PhitShop** – a modern e-commerce platform where buyers and sellers can interact, manage products, and complete transactions securely.

## Features

### 🔐 Authentication
- Users can **create an account**.
- Users can **log in** and **log out** securely.

### 🛒 User Roles
- Users can register as either a **Buyer** or a **Seller**.
- Sellers can **create, update, and delete products**.
- Buyers can **add products to the cart and check out**.

### 🛍️ Product Management
- Sellers can **add products** with details like name, price, category, size, and color.
- Sellers can **update or delete** their products.

### 🛒 Cart & Checkout
- Buyers can **add products to their cart**.
- Buyers can **proceed to checkout** using **SSLCommerz** for secure payments.
- Upon checkout, the **order status is set to 'Pending'**.

### 📦 Order Management
- Admin can **change order status**:
  - `Pending`
  - `Approved`
  - `Canceled`
  - `Delivered`

### 👤 User Profile
- Users can **update their profile information** (name, phone, location, etc.).

## 🚀 Tech Stack
### Backend
- **Django** (Django REST Framework) – for authentication, products, orders, and user roles.
- **PostgreSQL** – for storing user, product, and order data.
- **SSLCommerz** – for handling online payments.

### Frontend
- **React.js** – for the user interface.
- **Tailwind CSS** – for modern and responsive styling.
- **React Router DOM** – for seamless navigation.
- **React-Toastify** – for user notifications.
- **PrimeReact** – for UI components.

## Installation & Setup

### Backend Setup (Django)
```bash
# Clone the repository
git clone https://github.com/tntanvir/phitShop.git
cd phitShop

# Create a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Apply migrations
python manage.py migrate

# Run the server
python manage.py runserver
```

### Frontend Setup (React)
```bash
# Navigate to the frontend folder
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

## API Endpoints
### Authentication
- `POST /api/register/` – User registration
- `POST /api/login/` – User login
- `POST /api/logout/` – User logout

### Products (Seller Only)
- `GET /api/products/` – Get all products
- `POST /api/products/` – Create a new product
- `PUT /api/products/{id}/` – Update a product
- `DELETE /api/products/{id}/` – Delete a product

### Cart & Checkout (Buyer Only)
- `POST /api/cart/add/` – Add a product to the cart
- `GET /api/cart/` – View cart items
- `POST /api/checkout/` – Checkout and place an order

### Order Management
- `GET /api/orders/` – View all orders (Admin/Seller)
- `PUT /api/orders/{id}/status/` – Update order status (Admin Only)

## 📸 Screenshots
Coming soon!

## 🔥 Contributing
We welcome contributions! Feel free to fork this repository and submit a pull request.

## 💖 Support
If you like this project, give it a ⭐ on [GitHub](https://github.com/tntanvir/style)!

## 📄 License
This project is licensed under the MIT License.

---
🚀 Happy Coding!

