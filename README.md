<h1 align = "center"> HungryBox </h1>

## Problem Statement
Managing tiffin services efficiently is a significant challenge for both providers and customers. Providers struggle with handling subscriptions, payments, and order management, while customers often face difficulties in accessing reliable services with transparent pricing and smooth payment processes. HungryBox addresses these issues by providing an integrated platform for managing tiffin orders, subscriptions, and payments seamlessly.

## 🔗Live Website
User: [HungryBox](https://hungrybox-frontend.onrender.com/) <br>
Admin: [HungryBox-Admin](https://hungrybox-admin.onrender.com/)


## 📖Introduction
HungryBox is a comprehensive Tiffin Delivery Service Platform developed using the MERN stack (MongoDB, Express.js, React.js, Node.js) and integrated with Stripe for secure payment processing. This project efficiently handles tiffin orders, user accounts, and administrative tasks, ensuring a seamless experience for both users and admins.

## 🔍Features
### User Features:
<ul type="none">
   <li><b>🌎 Browse Menu:</b> Explore various tiffin plans, menu items, and pricing options.</li>
   <li><b>🍽️ Order Placement:</b> Place orders for your preferred tiffin plans.</li>
   <li><b>✨ Secure Payment:</b> Leverage Stripe integration for safe and hassle-free payment processing.</li>
   <li><b>🕜 Order History:</b> Access past orders and track current ones with ease.</li>
   <li><b>🔐 Profile Management:</b> Update your profile and personal information effortlessly.</li>
   <li><b>🌐 Responsive Design:</b> Enjoy a seamless experience across desktop and mobile devices.</li>
</ul>

### Admin Features:
<ul type="none">
   <li><b>📊 Dashboard:</b> A user-friendly admin panel to manage orders, users, and menu items.</li>
   <li><b>📃 Order Management:</b> View, update, and process customer orders.</li>
   <li><b>🖋️ Menu Management:</b> Add, edit, or delete menu items and tiffin plans with ease.</li>
</ul>

### Backend Features:
<ul type="none">
   <li><b>💻 API Endpoints:</b> RESTful API endpoints for user authentication, order handling, and menu management.</li>
   <li><b>📂 Database Integration:</b> Store user data, orders, and menu items in MongoDB.</li>
   <li><b>💳 Stripe Integration:</b> Ensure secure payment processing via the Stripe API.</li>
   <li><b>🔒 Authentication:</b> Robust authentication and authorization using JWT (JSON Web Tokens).</li>
</ul>

## 🌍Project Structure
The project is organized into three main folders:

- **`admin`:** Contains the admin panel for managing orders, users, and menu items.
- **`frontend`:** The React-based frontend application for users.
- **`backend`:** The Node.js and Express.js backend managing server-side logic and API requests.

## 🛠️Getting Started
To get started with HungryBox, follow these steps:

### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB server running locally or accessible through a cloud service.
- Stripe account for payment processing.

### Installation
1. **Clone the repository:**
   
   ```bash
   git clone https://github.com/your-username/hungrybox.git
   cd hungrybox

2. **Backend**
  - Navigate to the backend directory:
   
    ```bash
    cd backend     
  - Create a .env file in the backend directory with the following variables:
    
    ```bash
    MONGO_URI=your-mongodb-connection-string
    STRIPE_SECRET_KEY=your-stripe-secret-key
    JWT_SECRET=your-jwt-secret
  - Install the required npm packages:

    ```bash
    npm install
  - Start the backend server:

    ```bash
    npm run server

3. **Frontend**
  - Navigate to the frontend directory:

    ```bash
    cd ../frontend
  - Install the required npm packages:

    ```bash
    npm install
  - Start the frontend application:

    ```bash
    npm start
    
4. **Admin**
  - Navigate to the admin directory:

    ```bash
    cd ../admin
  - Install the required npm packages:

    ```bash
    npm install
  - Start the admin application:

    ```bash
    npm run dev

## 🔧Troubleshooting
If you encounter any issues during the setup, please check the following:
- Ensure MongoDB is running and accessible.
- Verify your Stripe credentials and environment variables are correctly set.
- Check the console output for any error messages and refer to them for troubleshooting.

## 🌈Contributing
Contributions are welcome! If you have suggestions or improvements, please follow these steps:

1. **Fork the repository.**

2. **Create a new branch:**

   ```bash
   git checkout -b feature-branch
3. **Commit your changes:**

    ```bash
   git commit -am 'Add new feature'
4. **Push to the branch:**

   ```bash
   git push origin feature-branch

5. **Open a Pull Request.**


## Contributors

A big shoutout and heartfelt thanks to all our amazing contributors for their incredible efforts and dedication! This project wouldn’t be where it is without you. 💖

<a href="https://github.com/Mahak008/HungryBox/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Mahak008/HungryBox" />
</a>


## Show some ❤️
If you like this project, please give it a ⭐ on [Github](https://github.com/Mahak008/HungryBox)
