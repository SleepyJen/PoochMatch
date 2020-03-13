import React , { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import axios from 'axios';



function NavBar (props) {

  const [ id , setId ] = useState( getUserById );
  const query = `?user_id=${ id }`;
  
  /* GET Request - add query to /use Link */
  async function getUserById () {
    try {

      const result = await axios.get('/user/check-user');
      console.log('ID Result:' , result.data)
      return await (result.data.user) 
      ? setId( result.data.user._id ) : setId( '' );

    } catch (err) { console.log(err) }
  };

  /*  check id hook */
  // useEffect( () => { 
  //   console.log('Nav ID:' , id)
  // } , [ id ])

  

  /* GET Request - logout existing user */
  const signOutAuth = async () => {
    try {
      
        const result = await axios.get('/user/logout');
        console.log('Check Logout:' , result.data)
        
        props.setAuth( result.data.auth )
        // props.history.push('/')

    } catch (err) { console.log(err) } 
  }

  /* check props from App > Header */
  // useEffect( () => { 
  //   console.log('Nav Props:' , props)
  // } , [ props ])



  /* close navbar by clicking on icon */
  const toggleNav = (event) => {
    const $menuBar = event.currentTarget.querySelector('i');
    $menuBar.classList.toggle('fa-bars')
    $menuBar.classList.toggle('fa-times') 
    document.querySelector('.navbar').classList.toggle('active')
  };

  /* close navbar by esc. key */
  const escKeyNav = event => {
    if (event.key === "Escape") {
      const $menuBar = document.querySelector(".menu-bar i");
      $menuBar.classList.remove("fa-times");
      $menuBar.classList.add("fa-bars");
      document.querySelector(".navbar").classList.remove("active");
    }
  };

  /* close navbar by clicking away from icon */
  const unDetectNav = event => {
    const $menuBar = document.querySelector(".menu-bar i");
    if (!$menuBar.contains(event.target)) {
      $menuBar.classList.remove("fa-times");
      $menuBar.classList.add("fa-bars");
      document.querySelector(".navbar").classList.remove("active");
    }
  };

  /* close navbar by window size grow/shrink */
  const winSizeNav = () => {
    const $menuBar = document.querySelector(".menu-bar i");
    if ($menuBar.classList.contains("fa-times")) {
      $menuBar.classList.remove("fa-times");
      $menuBar.classList.add("fa-bars");
      document.querySelector(".navbar").classList.remove("active");
    }
  };

  /* listen to event */
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
            ( props.auth )
            ? (
              <>
                <li>
                  <Link to={`/user${ query }`}>
                    User
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/"
                    onClick={ signOutAuth }
                  >Logout
                  </Link>
                </li>
              </>
            )
            : (
            <>
              <li>
                <Link to="/user/auth/sign-in">Log In</Link>
              </li>

              <li>
                <Link to="/user/auth/sign-up">Sign Up</Link>
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
