import { Link } from "react-router-dom";
import members from "../data/members";

function Team() {
  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4 fw-bold">Our Team</h2>
      <div className="row justify-content-center">
        {members.map((member) => (
          <div className="col-md-4 mb-4" key={member.id}>
            <Link to={`/team/${member.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <div className="card shadow-lg border-0 rounded-4 h-100 p-3 team-card">
                <img
                  src={member.img}
                  className="rounded-circle mx-auto d-block"
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                  alt={member.name}
                />
                <div className="card-body">
                  <h5 className="card-title mt-3">{member.name}</h5>
                  <p className="text-muted">{member.role}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
