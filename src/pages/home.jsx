function Home() {
  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Selamat Datang di Website Saya</h1>
        <p className="text-muted">
          Temukan informasi, produk, dan layanan terbaik kami hanya di sini.
        </p>
        <div className="mt-3">
          <a href="/contact" className="btn btn-primary me-2">
            Hubungi Kami
          </a>
          <a href="/team" className="btn btn-outline-primary">
            Tentang Kami
          </a>
        </div>
      </div>

      <div className="text-center mb-5">
        <img
          src="../Images/tim.jpg"
          alt="banner"
          className="img-fluid rounded shadow"
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />
      </div>

      <h3 className="text-center mb-4">Kenapa Memilih Kami?</h3>
      <div className="row text-center">
        <div className="col-md-4 mb-3">
          <div className="card shadow h-100 p-3">
            <h5 className="fw-bold">⚡ Cepat & Responsif</h5>
            <p>Kami selalu memberikan pelayanan yang cepat dan ramah</p>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card shadow h-100 p-3">
            <h5 className="fw-bold">💎 Kualitas Terbaik</h5>
            <p>Layanan kami selalu terjamin kualitasnya</p>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card shadow h-100 p-3">
            <h5 className="fw-bold">🎯 Terpercaya</h5>
            <p>Sudah dipercaya oleh banyak pelanggan dari berbagai daerah</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
