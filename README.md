# 📚 Book Management System

A full-stack CRUD (Create, Read, Update, Delete) application built using **Spring Boot (Backend)** and a simple **HTML, CSS, JavaScript (Frontend)** interface.

This project demonstrates clean REST API design along with a beginner-friendly frontend to interact with the backend.

---

## 🚀 Features

### 📌 Backend Features

- Add new books
- View all books
- View book by ID
- Update existing books
- Delete books
- RESTful API design
- Three-layer architecture (Controller → Service → Repository)

### 🌐 Frontend Features (Beginner Level)

- Simple HTML form for adding/updating books
- Table to display books
- Delete button with confirmation
- Fetch API used for backend communication
- Basic responsive design with CSS

---

## 🛠 Tech Stack

### 🔹 Backend

| Technology | Description |
|------------|------------|
| Spring Boot 4.0.1 | Backend framework |
| Spring Web MVC | REST API |
| Spring Data JPA | Database interaction |
| MySQL | Relational database |
| Java 17 | Programming language |
| Maven | Build tool |
| Lombok | Boilerplate reduction |

### 🔹 Frontend

| Technology | Description |
|------------|------------|
| HTML5 | Structure |
| CSS3 | Basic styling |
| Vanilla JavaScript | Logic |
| Fetch API | HTTP requests |

---

## 🏗 Architecture

### Backend Architecture
Controller Layer -> Service Layer -> Repository Layer -> MySQL Database

- Controller handles HTTP requests
- Service contains business logic
- Repository interacts with database

### Frontend Architecture

- HTML handles structure
- CSS handles styling
- JavaScript handles API calls and DOM updates


## 📡 API Endpoints

| Method | Endpoint            | Description        |
|--------|--------------------|--------------------|
| GET    | `/root/getAll`     | Get all books      |
| GET    | `/root/get/{id}`   | Get book by ID     |
| POST   | `/root/add`        | Add book           |
| PUT    | `/root/update/{id}`| Update book        |
| DELETE | `/root/delete/{id}`| Delete book        |


## 🎯 Learning Objectives

This project demonstrates:

- REST API development with Spring Boot  
- CRUD operations using Spring Data JPA  
- Three-layer backend architecture  
- Connecting frontend to backend using Fetch API  
- Basic full-stack application structure  

---

## 🚀 Future Improvements

- Add validation  
- Add global exception handling  
- Add pagination  
- Add Swagger documentation  
- Add authentication & authorization  
- Improve frontend UI  

---

## 👨‍💻 Author

Developed as a backend-focused learning project with a simple frontend interface for interaction.

