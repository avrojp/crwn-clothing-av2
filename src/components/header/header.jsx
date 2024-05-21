import "./header.scss";

// HEADER

function Header() {
  return (
    <>
      <header>
        <div className="row">
          <nav>
            <a className="logo text-blueish fw-700 fs-400" href="/">
              CapstoneBD
              <sup>
                <span className="text-redish">TM</span>
              </sup>
            </a>
            <ul className="nav-center">
              <li>
                <a href="#features" className="text-neutral">
                  Features
                </a>
              </li>
              <li>
                <a href="#links" className="text-neutral">
                  Links
                </a>
              </li>
              <li>
                <a href="#newsletter" className="text-neutral">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#links" className="text-neutral">
                  About
                </a>
              </li>
            </ul>

            <ul className="nav-right">
              <li>
                <a href="#" className="text-neutral">
                  Support
                </a>
              </li>
              <li>
                <a href="#">
                  <button className="border btn btn-sign-in text-neutral">
                    Sign In
                  </button>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Header;
