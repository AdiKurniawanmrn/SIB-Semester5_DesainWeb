
function Team() {
  const members = [
    {
      name: "Adit",
      role: "Fullstack Developer",
      img: "Images/Adit.jpg",
      desc: "Ahli frontend & backend, fokus pada efisiensi aplikasi.",
    },
    {
      name: "Budi",
      role: "Backend Developer",
      img: "Images/Budi.jpg",
      desc: "Spesialis API dan database, suka problem solving.",
    },
    {
      name: "Citra",
      role: "UI/UX Designer",
      img: "Images/Citra.jpg",
      desc: "Mendesain pengalaman pengguna yang sederhana & elegan.", 
    },
  ];

  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4 fw-bold">Our Team</h2>
      <div className="row justify-content-center">
        {members.map((member, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div
              className="card shadow-lg border-0 rounded-4 h-100 p-3 team-card"
              style={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(0,0,0,0.1)";
              }}
            >
              <img
                src={member.img}
                className="rounded-circle mx-auto d-block"
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
                alt={member.name}
              />
              <div className="card-body">
                <h5 className="card-title mt-3">{member.name}</h5>
                <p className="text-muted">{member.role}</p>
                <p className="small">{member.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
