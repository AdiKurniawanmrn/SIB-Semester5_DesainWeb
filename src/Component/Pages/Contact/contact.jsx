import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card shadow-sm p-4">
            <h4 className="text-center mb-3">Hubungi Kami</h4>
            <p className="text-center">
              Jika ada pertanyaan, kritik, atau saran, silakan hubungi kami
              melalui form atau sosial media berikut:
            </p>
            <div className="d-flex justify-content-center gap-3 mt-3">
              <a href="https://www.instagram.com/adikurniawan1171?igsh=MWtoZzB1M3c0NW5nOQ==" target="_blank" rel="noreferrer">
                <FaInstagram size={28} color="#E4405F" />
              </a>
              <a href="https://www.linkedin.com/in/adi-kurniawan-789401293" target="_blank" rel="noreferrer">
                <FaLinkedin size={28} color="#0077b5" />
              </a>
              <a href="https://github.com/AdiKurniawanmrn" target="_blank" rel="noreferrer">
                <FaGithub size={28} color="#000" />
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm p-4">
            <form>
              <div className="mb-3">
                <label className="form-label">Nama</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Masukkan nama Anda"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Masukkan email Anda"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Pesan</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Tulis pesan Anda..."
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
