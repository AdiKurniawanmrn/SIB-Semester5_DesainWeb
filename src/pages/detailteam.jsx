import { useParams, Link } from "react-router-dom";
import members from "../data/members";

function DetailTeam() {
  const { id } = useParams();
  const member = members.find((m) => m.id === parseInt(id));

  if (!member) {
    return (
      <div className="container text-center mt-5">
        <h2 className="fw-bold text-danger">Member tidak ditemukan</h2>
        <Link to="/team" className="btn btn-primary mt-3">
          Kembali ke Team
        </Link>
      </div>
    );
  }

  return (
    <div className="container text-center mt-5">
      <div className="card shadow-lg border-0 rounded-4 p-4">
        <img
          src={member.img}
          alt={member.name}
          className="rounded-circle mx-auto d-block mb-3"
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
        <h3 className="fw-bold">{member.name}</h3>
        <p className="text-muted">{member.role}</p>
        <p className="mt-3">{member.desc}</p>
        <Link to="/team" className="btn btn-outline-primary mt-4">
          Back
        </Link>
      </div>
    </div>
  );
}

export default DetailTeam;
