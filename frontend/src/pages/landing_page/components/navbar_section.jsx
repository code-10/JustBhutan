
import logo from "../../../assets/logo.svg"

export default function NavbarSection() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-md px-4 px-lg-5 py-1">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="Just Bhutan Logo"
            // width="138"
            className="d-inline-block align-text-top navbar-logo"
          />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end pt-lg-0 pt-2" id="navbarNav">
          <ul className="navbar-nav fw-base gap-md-5 gap-2 align-items-end">
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="#plant">The Problem</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="#forest">The Solution</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="#survey">Sign Up!</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
