
# 🌟 Financial API 🌟

![API Banner](https://via.placeholder.com/1200x400?text=Financial+API+Made+Simple)

A powerful **Financial Management API** to handle user authentication, income, expenses, balances, and monthly reports. This API is built with **Node.js**, **Express**, and **Sequelize ORM**, making it robust, scalable, and easy to integrate.

---

## ✨ Features
1. **Authentication**:
   - Register new users.
   - Login with JWT-based authentication.

2. **Balance Management**:
   - Retrieve user balance.

3. **Income Management**:
   - Add income records.
   - Retrieve income records (filter by month and year).

4. **Expense Management**:
   - Add expense records.
   - Retrieve expense records (filter by month and year).

5. **Monthly Reports**:
   - Generate detailed reports for a specific month, including total income, expenses, and remaining balance.

---

## 🛠️ Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/username/repository-name.git
   cd repository-name
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=5000
   JWT_SECRET=your_jwt_secret
   DB_NAME=database_name
   DB_USER=database_user
   DB_PASS=database_password
   DB_HOST=localhost
   DB_PORT=3306
   DB_DIALECT=mysql
   ```

4. **Run the server**:
   ```bash
   npm start
   ```

---

## 🚀 API Endpoints

### **Authentication**
| Method | Endpoint              | Description              |
|--------|-----------------------|--------------------------|
| POST   | `/api/auth/register`  | Register a new user.     |
| POST   | `/api/auth/login`     | Login and get a JWT.     |

### **Balance**
| Method | Endpoint              | Description              |
|--------|-----------------------|--------------------------|
| GET    | `/api/balance`        | Retrieve user balance.   |

### **Income**
| Method | Endpoint              | Description                                     |
|--------|-----------------------|-------------------------------------------------|
| GET    | `/api/income`         | Retrieve income records (filter by month/year). |
| POST   | `/api/income`         | Add a new income record.                        |

### **Expense**
| Method | Endpoint              | Description                                     |
|--------|-----------------------|-------------------------------------------------|
| GET    | `/api/expense`        | Retrieve expense records (filter by month/year).|
| POST   | `/api/expense`        | Add a new expense record.                       |

### **Monthly Report**
| Method | Endpoint              | Description                                     |
|--------|-----------------------|-------------------------------------------------|
| GET    | `/api/report`         | Generate a detailed monthly financial report.   |

---

## 📂 Project Structure

```
📂 repository-name
├── 📂 config         # Database configuration
├── 📂 controllers    # Business logic
├── 📂 models         # Sequelize models
├── 📂 routes         # API routes
├── server.js         # Server entry point
├── .env              # Environment variables
├── package.json      # Project dependencies
```

---

## 💻 Technologies Used
- **Node.js**: Backend runtime.
- **Express**: Web framework.
- **Sequelize**: ORM for database management.
- **MySQL**: Database.
- **JWT (jsonwebtoken)**: Authentication.
- **bcryptjs**: Password hashing.

---

## 🤝 Contribution

Contributions are welcome! Follow these steps:
1. **Fork this repository**.
2. **Create a new branch**:
   ```bash
   git checkout -b feature-name
   ```
3. **Commit your changes**:
   ```bash
   git commit -m "Add your message here"
   ```
4. **Push to the branch**:
   ```bash
   git push origin feature-name
   ```
5. **Open a Pull Request**.

---

## 📄 License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

---

## 🌐 Contact
For any questions or feedback, feel free to reach out:

📧 Email: adiyohanes19@gmail.com
🔗 LinkedIn: [Adi Yohanes] https://www.linkedin.com/in/yohanes-wicaksono-adi-807316165/ 
