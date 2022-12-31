import logo from "../../../assets/logo.svg"

export default function NavbarSection() {
  return (
    <nav className="navbar navbar-light bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="Just Bhutan Logo"
            width="113"
            className="d-inline-block align-text-top"
          />
        </a>
      </div>
    </nav>
  );
}
