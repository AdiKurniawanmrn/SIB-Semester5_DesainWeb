<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Form Nilai Ujian</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 0;
      background: linear-gradient(to right, #74ebd5, #ACB6E5);
    }

    .container {
      background: white;
      padding: 25px 30px;
      border-radius: 12px;
      width: 350px;
      margin: 80px auto;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    }

    h2 {
      text-align: center;
      color: #333;
      margin-bottom: 20px;
    }

    label {
      display: block;
      margin-bottom: 6px;
      color: #333;
      font-weight: 500;
    }

    input {
      width: calc(100% - 16px);
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 6px;
      outline: none;
      transition: all 0.2s ease;
    }

    input:focus {
      border-color: #007bff;
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
    }

    button {
      margin-top: 15px;
      width: 100%;
      padding: 10px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
      transition: background 0.3s ease;
    }

    button:hover {
      background-color: #0056b3;
    }

    .hasil {
      margin-top: 20px;
      background-color: #e7f3fe;
      
      padding: 12px;
      border-radius: 6px;
    }

  
  </style>
</head>
<body>

  <div class="container">
    <h2>Form Penilaian Ujian</h2>

    <form method="POST" action="">
      <label>Nama:</label>
      <input type="text" name="nama" required>

      <label>Email:</label>
      <input type="email" name="email" required>

      <label>Nilai Ujian:</label>
      <input type="number" name="nilai" required>

      <button type="submit" name="submit">Kirim</button>
    </form>

    <?php
      // Mengecek apakah form sudah dikirim
      if (isset($_POST['submit'])) {
        $nama  = $_POST['nama'];
        $email = $_POST['email'];
        $nilai = $_POST['nilai'];

        // Struktur kendali
        if ($nilai > 70) {
          $status = "Lulus";
        } else {
          $status = "Remedial";
        }

        // menampilkan hasil
        echo "<div class='hasil'>";
        echo "Nama: <strong>$nama</strong><br>";
        echo "Email: <strong>$email</strong><br>";
        echo "Nilai Ujian: <strong>$nilai</strong><br>";
        echo "Status: <strong>$status</strong>";
        echo "</div>";
      }
    ?>
  </div>

</body>
</html>
