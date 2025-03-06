# Todo List API

![Screenshot 2025-03-07 002412](https://github.com/user-attachments/assets/26fcd124-9701-4fec-95cb-6d1570da7602)

## 📌 Overview
Todo List API adalah sebuah API berbasis .NET Core yang menyediakan fitur CRUD (Create, Read, Update, Delete) untuk mengelola daftar tugas. API ini menggunakan SQL Server sebagai database dan jQuery AJAX untuk komunikasi dengan front-end. Project ini juga sudah include dengan Web Application untuk melakukan view data To-do list pada To-do List API.

## 🚀 Fitur Utama
- **Menampilkan daftar tugas** 
- **Menambahkan tugas baru** 
- **Mengedit tugas**
- **Menghapus tugas** 
- **Melakukan Checklist Tugas** 


## 🛠️ Teknologi yang Digunakan
- **.NET Core 9.0** - Backend API
- **Entity Framework Core** - ORM untuk database
- **SQL Server** - Database utama
- **HTML, CSS, jQuery AJAX** - Frontend
- **Postman** - Dokumentasi dan Penguji API

## 📂 Struktur Folder
```
TodoListWebApp/
│── TodoListAPI/
│   ├── wwwroot/                 # Folder untuk file frontend (HTML, CSS, JS)
│   │   ├── index.html           # Halaman utama
│   │   ├── script.js            # Script AJAX untuk interaksi API
│   │   ├── styles.css           # Styling halaman
│   ├── Controllers/             # Folder untuk API Controller
│   │   ├── ClientsController.cs # Controller untuk Client API
│   ├── Migrations/              # Folder untuk migrasi database
│   │   ├── 20250306084955_FirstMigration.cs
│   │   ├── 20250306094711_SecondMigration.cs
│   │   ├── ApplicationDbContextModelSnapshot.cs
│   ├── Models/                  # Folder untuk model database
│   │   ├── Client.cs
│   ├── DTOs/                    # Folder untuk DTO (Data Transfer Object)
│   │   ├── ClientDto.cs
│   ├── Services/                 # Folder untuk database context
│   │   ├── ApplicationDbContext.cs
│   ├── appsettings.json          # Konfigurasi aplikasi
│   ├── Program.cs                # Entry point aplikasi
│   ├── TodoListAPI.http          # File testing API
│   ├── README.md                 # File Readme
```

## 🏗️ Instalasi dan Penggunaan

### 1️⃣ Clone Repository
```bash
git clone https://github.com/username/tefa-net-namaAnda.git
cd tefa-net-namaAnda
```

### 2️⃣ Setup Database
1. Pastikan SQL Server sudah berjalan.
2. Konfigurasikan **appsettings.json** dengan connection string database Anda.

### 3️⃣ Jalankan Migrasi Database
```bash
dotnet ef database update
```

### 4️⃣ Jalankan Aplikasi
```bash
dotnet run
```
Akses API di `https://localhost:4000/api/clients`.

## 🔧 Endpoint API
| Method | Endpoint         | Deskripsi |
|--------|----------------|-----------|
| GET    | /api/clients   | Mendapatkan semua tugas |
| GET    | /api/clients/{id} | Mendapatkan tugas berdasarkan ID |
| POST   | /api/clients   | Menambahkan tugas baru |
| PUT    | /api/clients/{id} | Mengupdate tugas berdasarkan ID |
| DELETE | /api/clients/{id} | Menghapus tugas berdasarkan ID |

---
✨ _Dibuat dengan ❤️ oleh Muhamad Faqih Zacky
