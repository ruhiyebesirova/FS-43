import { Link, NavLink, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/AppContext.jsx";
import { RiGiftLine } from "react-icons/ri";

const Navbar = () => {
  const { user } = useGlobalContext();
  const navigate = useNavigate();

  return (
    <nav className="custom-nav">
      <Link to="/" className="nav-brand">
        <RiGiftLine /> SweetBox
      </Link>

      <ul className="nav-menu">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "menu-link active" : "menu-link"
            }
          >
            Ana səhifə
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "menu-link active" : "menu-link"
            }
          >
            Haqqında
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "menu-link active" : "menu-link"
            }
          >
            Əlaqə
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "menu-link active" : "menu-link"
            }
          >
            Profil
          </NavLink>
        </li>
      </ul>

      {user ? (
        <span className="nav-user-profile" onClick={() => navigate("/profile")}>
          {user.fullName}
        </span>
      ) : (
        <button className="nav-btn" onClick={() => navigate("/login")}>
          Giriş / Qeydiyyat
        </button>
      )}
    </nav>
  );
};

export default Navbar;
