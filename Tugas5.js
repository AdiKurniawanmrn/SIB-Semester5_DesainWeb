let produkList = [
  { id: 1, nama: "Samsung a 25 5g", harga: 3500000 },
  { id: 2, nama: "Iphone 11", harga: 5000000 },
  { id: 3, nama: "Realme 40 Hot", harga: 2700000 },
  { id: 4, nama: "Iphone 17 Pro Max", harga: 17000000 },
  { id: 5, nama: "Oppo a 5s", harga: 2000000 },
];

const eventHandler = {
  // Spread Operator untuk menambah produk
  tambahProduk: function (id, nama, harga) {
    const produkBaru = { id, nama, harga };
    produkList = [...produkList, produkBaru];
    console.log(`Produk "${nama}" berhasil ditambahkan!`);
  },

  // Rest Parameter untuk menghapus Produk
  hapusProduk: function (...id) {
    produkList = produkList.filter((produk) => !id.includes(produk.id));
    console.log(`Produk dengan ID ${id.join(", ")} berhasil dihapus!`);
  },

  // Destructuring
  tampilkanProduk: function () {
    console.log("== Daftar Produk ==");
    produkList.forEach(({ id, nama, harga }) => {
      console.log(`ID: ${id} | Nama: ${nama} | Harga: Rp ${harga}`);
    });
  },
};

// Pemanggilan lewat eventHandler
eventHandler.tampilkanProduk();
eventHandler.tambahProduk(6, "Samsung S25 Unltra", 23000000);
eventHandler.tampilkanProduk();
eventHandler.hapusProduk(5);
eventHandler.tampilkanProduk();
