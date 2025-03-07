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
│──README.md                      # File Readme
```
---

## 🏗️ Set Up To Test API
Akses API di `https://localhost:4000/api/clients`.

### 1. Clone Repository
```sh
git clone https://github.com/yourusername/tefa-net-yourname.git
cd tefa-net-yourname
```

### 2. Configure Database Connection
Edit file **appsettings.json** dan sesuaikan connection string dengan konfigurasi SQL Server Anda.
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=YOUR_SERVER;Database=TodoListDB;Trusted_Connection=True;"
  }
}
```

### 3. Apply Database Migrations
Jalankan perintah berikut untuk membuat dan memperbarui database:
```sh
dotnet ef database update
```

### 4. Run the Application in Visual Studio 2022
1. Buka **Visual Studio 2022**.
2. Pilih **Open a project or solution** dan buka folder proyek `TodoListAPI`.
3. Pastikan `TodoListAPI` diatur sebagai **Startup Project**.
4. Tekan `Ctrl + F5` untuk menjalankan aplikasi tanpa debugging.
5. Aplikasi akan berjalan di `https://localhost:4000`.

### 5. Test API Endpoints
Gunakan **Postman** untuk menguji API:

#### Get All Clients
```sh
GET https://localhost:4000/api/clients
```

#### Get Client by ID
```sh
GET https://localhost:4000/api/clients/{id}
```

#### Create New Client
```sh
POST https://localhost:4000/api/clients
Content-Type: application/json

{
  "title": "New Task",
  "description": "This is a test task",
  "createdAt": "07/03/2025"
}
```

#### Update Client
```sh
PUT https://localhost:4000/api/clients/{id}
Content-Type: application/json

{
  "title": "Updated Task",
  "description": "Updated description",
  "createdAt": "07/03/2025"
}
```

#### Delete Client
```sh
DELETE https://localhost:4000/api/clients/{id}
```

---

## 📜 Dokumentasi Postman
Dokumentasi API dapat diakses dengan menggunakan file Postman berikut:

1. Buka **Postman**.
2. Klik **Import**.
3. Pilih file `PostmanDocumentation.json` dari repository.
4. Jalankan dan uji endpoint API.

---

## 🔧 Endpoint API
| Method | Endpoint         | Deskripsi |
|--------|----------------|-----------|
| GET    | /api/clients   | Mendapatkan semua tugas |
| GET    | /api/clients/{id} | Mendapatkan tugas berdasarkan ID |
| POST   | /api/clients   | Menambahkan tugas baru |
| PUT    | /api/clients/{id} | Mengupdate tugas berdasarkan ID |
| DELETE | /api/clients/{id} | Menghapus tugas berdasarkan ID |

---
✨ Dibuat dengan ❤️ oleh Muhamad Faqih Zacky
