import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Contact() {
  const navigate = useNavigate();

  // state sederhana untuk form
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    pesan: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data terkirim:", formData);

    alert("Pesan berhasil dikirim ✅");

    navigate("/ "); // redirect ke halaman Home
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row justify-content-center">
        
        <div className="col-md-5 mb-4">
          <div className="card shadow p-4 text-center h-100">
            <h4 className="mb-3">Hubungi Kami</h4>
            <p>
              Jika ada pertanyaan, kritik, atau saran, silakan hubungi kami
              melalui form atau sosial media berikut:
            </p>
            <div className="d-flex justify-content-center gap-4 mt-3">
              <a
                href="https://www.instagram.com/adikurniawan1171?igsh=MWtoZzB1M3c0NW5nOQ=="
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size={28} color="#E1306C" />
              </a>
              <a
                href="https://www.linkedin.com/in/adi-kurniawan-789401293"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={28} color="#0A66C2" />
              </a>
              <a
                href="https://github.com/AdiKurniawanmrn"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={28} color="black" />
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-7 mb-4">
          <div className="card shadow p-4 h-100">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Nama</label>
                <input
                  type="text"
                  name="nama"
                  className="form-control"
                  placeholder="Masukkan nama Anda"
                  value={formData.nama}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Masukkan email Anda"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Pesan</label>
                <textarea
                  name="pesan"
                  className="form-control"
                  rows="4"
                  placeholder="Tulis pesan Anda..."
                  value={formData.pesan}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Kirim
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
