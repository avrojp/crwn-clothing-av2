import "./header.scss";
// Import FontAwesome components and icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
// HEADER

function Header() {
  return (
    <>
      <header>
        <div className="row">
          <nav>
            <a className="logo text-neutral fw-700 fs-450" href="/">
              CLOTHX
              <sup>
                <span className="text-neutral">TM</span>
              </sup>
            </a>
            <ul className="nav-center text-cap fw-700">
              <li>
                <a href="#home" className="text-neutral">
                  Home
                </a>
              </li>
              <li>
                <a href="#men" className="text-neutral">
                  Men
                </a>
              </li>
              <li>
                <a href="#women" className="text-neutral">
                  Women
                </a>
              </li>
              <li>
                <a href="#kids" className="text-neutral">
                  Kids
                </a>
              </li>
            </ul>

            <ul className="nav-right">
              <li>
                <a href="#" className="text-neutral btn btn-cart">
                <FontAwesomeIcon icon={faCartShopping} />
                </a>
              </li>
              <li>
                <a href="#">
                  <button className="btn btn-sign-in text-neutral fw-700">
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
