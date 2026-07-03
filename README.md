# 🌐 Full Stack Portfolio Website

A modern Full Stack Portfolio Website built using **HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB**. The application displays portfolio information dynamically from the backend, allows visitors to send messages through a contact form, and stores data securely in MongoDB.

---

## 🚀 Features

- Responsive and Mobile-Friendly Design
- Dynamic Portfolio Data
- RESTful API Architecture
- Projects Section
- Skills Section
- About Me Section
- Contact Form
- MongoDB Database Integration
- Email Notification using Nodemailer
- MVC Project Structure
- Environment Variable Configuration
- CORS Enabled
- Production Ready

---

## 🛠️ Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Other Packages

- dotenv
- cors
- nodemailer
- express-validator
- bcryptjs
- nodemon

---

## 📁 Project Structure

```
Portfolio
│
├── Frontend
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── images
│
├── Backend
│   ├── config
│   ├── controllers
│   |
│   ├── models
│   ├── routes
│   ├── services
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/SonamKol2004/Portfolio-website.git
```

### Open Project

```bash
cd Portfolio/Backend
```

### Install Dependencies

```bash
npm install
```

### Create .env File

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

EMAIL_USER=your_email@gmail.com

EMAIL_PASS=your_google_app_password
```

### Start Server

```bash
node server.js
```

or

```bash
npm run dev
```

---

## 📡 API Endpoints

### Get Profile

```
GET /api/profile
```

### Get Projects

```
GET /api/projects
```

### Add Project

```
POST /api/projects
```

### Contact Form

```
POST /api/contact
```

---

## 📤 Sample Project JSON

```json
{
    "title":"Portfolio Website",
    "description":"Modern Full Stack Portfolio Website",
    "technologies":[
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express",
        "MongoDB"
    ],
    "githubLink":"https://github.com/yourusername/portfolio",
    "liveDemo":"https://portfolio.vercel.app",
    "image":"portfolio.png"
}
```

---

## 📷 Screenshots

### Home Page

<img width="1835" height="907" alt="image" src="https://github.com/user-attachments/assets/871bc9e9-275c-481b-9a6d-9f3078ee0cd7" />


### About Section

<img width="1822" height="892" alt="image" src="https://github.com/user-attachments/assets/7ce10185-adf8-45b9-aef6-cf130f86492b" />

<img width="1827" height="871" alt="image" src="https://github.com/user-attachments/assets/90e81c56-a9ae-4e70-be14-a67f5e604233" />
<img width="1812" height="500" alt="image" src="https://github.com/user-attachments/assets/a3c4cb65-9bf4-46e6-ac7d-11730a0ea233" />


### Projects Section

<img width="1826" height="656" alt="image" src="https://github.com/user-attachments/assets/5d1db8e9-d83e-431a-ae01-de70eecfb777" />


### Contact Section

<img width="1817" height="892" alt="image" src="https://github.com/user-attachments/assets/59415e17-9459-4241-b37a-7c9dd6bb9453" />


---

## 📌 Future Improvements


- Blog Section
- Dark Mode
- Animations
- Image Upload
- Project Categories

---

## 👩‍💻 Author

**Sonam Kol**

Computer Science Student

Full Stack Developer

---

## 📧 Contact

Email:
sonamkol232@gmail.com

GitHub:
https://github.com/Sonamkol2004


---

## ⭐ Support

If you like this project, please give it a ⭐ on GitHub.
