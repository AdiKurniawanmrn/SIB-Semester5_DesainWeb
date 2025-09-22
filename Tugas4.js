
class Kendaraan {
  constructor(merk, tahun) {
    // Menceegah agar class Kendaraan tidak bisa diinstansiasi langsung
    if (this.constructor === Kendaraan) {
      throw new Error("Kelas Kendaraan tidak boleh dibuat sebagai instance langsung!");
    }
    this.merk = merk;  
    this.tahun = tahun; 
  }

  deskripsi() {
    throw new Error("Method 'deskripsi()' harus diimplementasikan di subclass!");
  }
}

class Mobil extends Kendaraan {
  constructor(merk, tahun) {
    super(merk, tahun);
  }

  // Implementasi method abstrak
  deskripsi() {
    return `${this.merk} (${this.tahun}) - Mobil`;
  }
}

class Motor extends Kendaraan {
  constructor(merk, tahun) {
    super(merk, tahun);
  }

  deskripsi() {
    return `${this.merk} (${this.tahun}) - Motor`;
  }
}

class Pelanggan {
  // Menggunakan private field (#) agar tidak bisa diakses langsung dari luar
  #nama;
  #nomorTelepon;
  #kendaraanDisewa;

  constructor(nama, nomorTelepon, kendaraan) {
    this.#nama = nama;
    this.#nomorTelepon = nomorTelepon;
    this.#kendaraanDisewa = kendaraan;
  }

  // Method untuk menampilkan info pelanggan dan kendaraan yang disewa
  getInfo() {
    if (this.#kendaraanDisewa) {
      return `${this.#nama} (${this.#nomorTelepon}) menyewa ${this.#kendaraanDisewa.deskripsi()}`;
    } else {
      return `${this.#nama} (${this.#nomorTelepon}) belum menyewa kendaraan`;
    }
  }
}

class SistemTransportasi {
  constructor() {
    this.daftarPelanggan = []; // simpan semua pelanggan yang menyewa kendaraan
  }

  // Menambahkan transaksi sewa kendaraan
  sewaKendaraan(nama, nomorTelepon, kendaraan) {
    const pelanggan = new Pelanggan(nama, nomorTelepon, kendaraan);
    this.daftarPelanggan.push(pelanggan);
  }

  // Menampilkan semua pelanggan yang sedang menyewa
  tampilkanDaftarPelanggan() {
    console.log("=== Daftar Pelanggan yang Menyewa Kendaraan ===");
    this.daftarPelanggan.forEach((p, i) => {
      console.log(`${i + 1}. ${p.getInfo()}`);
    });
  }
}

// Membuat objek kendaraan
const avanza = new Mobil("Toyota Avanza", 2022);
const beat = new Motor("Honda Beat", 2021);
const brio = new Mobil("Brio", 2019);
const kawasaki = new Motor("Kawasaki", 2022);

// sistem transportasi
const sistem = new SistemTransportasi();

// Catat transaksi penyewaan
sistem.sewaKendaraan("Budi", "08123456789", avanza);
sistem.sewaKendaraan("Siti", "08234567890", beat);
sistem.sewaKendaraan("Adit", "08234567854", brio);
sistem.sewaKendaraan("Jdi", "08234567854", kawasaki);

// Tampilkan daftar pelanggan yang menyewa
sistem.tampilkanDaftarPelanggan();
