import logo from "../../../assets/logo.svg"

export default function NavbarSection() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid px-3 px-lg-5 py-1 py-lg-3">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="Just Bhutan Logo"
            // width="138"
            className="d-inline-block align-text-top w-75"
          />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end pt-lg-0 pt-2" id="navbarNav">
          <ul className="navbar-nav fw-semibold gap-5 align-items-end">
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="#">The Problem</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="#">The Solution</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="#">Sign Up!</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
