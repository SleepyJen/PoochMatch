
import React , { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import Auth from '../../../auth/Auth.js'



function NavBar () {

  // const [Auth, setAuth] = useState();

  const toggleNav = (event) => {
    const $menuBar = event.currentTarget.querySelector('i');
    $menuBar.classList.toggle('fa-bars')
    $menuBar.classList.toggle('fa-times') 
    document.querySelector('.navbar').classList.toggle('active')
  };

  const escKeyNav = event => {
    if (event.key === "Escape") {
      const $menuBar = document.querySelector(".menu-bar i");
      $menuBar.classList.remove("fa-times");
      $menuBar.classList.add("fa-bars");
      document.querySelector(".navbar").classList.remove("active");
    }
  };

  const unDetectNav = event => {
    const $menuBar = document.querySelector(".menu-bar i");
    if (!$menuBar.contains(event.target)) {
      $menuBar.classList.remove("fa-times");
      $menuBar.classList.add("fa-bars");
      document.querySelector(".navbar").classList.remove("active");
    }
  };

  const winSizeNav = () => {
    const $menuBar = document.querySelector(".menu-bar i");
    if ($menuBar.classList.contains("fa-times")) {
      $menuBar.classList.remove("fa-times");
      $menuBar.classList.add("fa-bars");
      document.querySelector(".navbar").classList.remove("active");
    }
  };

  useEffect(() => {
    document.addEventListener("keyup", escKeyNav);
    document.addEventListener("mouseup", unDetectNav);
    window.addEventListener("resize", winSizeNav);
    return () => {
      document.removeEventListener("keyup", escKeyNav);
      document.removeEventListener("mouseup", unDetectNav);
      window.removeEventListener("resize", winSizeNav);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <ul className="nav-opts">
          <li>
            <Link to="/">Home</Link>
          </li>
          
          {
            ( Auth.getAuth() )
            ? (
              <>
                <li>
                  <Link to="/user">
                    User
                  </Link>
                </li>
                <li>
                  <a 
                    href="/user/logout" 
                    onClick={ () => {
                      Auth.signOut();
                    } }
                  >Logout
                  </a>
                </li>
              </>
            )
            : (
              <>
                <li>
                  <Link to="/user/auth/sign-in">
                    Sign-In
                  </Link>
                </li>

                <li>
                  <Link to="/user/auth/sign-up">
                    Sign-Up
                  </Link>
                </li>
              </>   
            )
          }
        </ul>
      </nav>
      <div className="menu-bar" onClick={toggleNav}>
        <i className="fas fa-bars"></i>
      </div>
    </>
  );
}

export default NavBar;
