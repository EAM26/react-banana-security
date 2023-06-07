import React, {useContext} from 'react';
import logo from '../assets/banana-01.png';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function NavBar() {

    const navigate = useNavigate();
    const {isAuth, user, logout} = useContext(AuthContext)


    function handleClick(e) {
        e.preventDefault()
        logout()
    }

    return (
        <nav>
            <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
            </Link>

            <div>
                {isAuth ?

                    <>  <p> user: {user} is logged in</p>
                        <button type="button" onClick={handleClick}>Log out</button>
                    </> :
                    <>
                        <button
                            type="button"
                            onClick={() => navigate('/signin')}
                        >
                            Log in
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate('/signup')}
                        >
                            Registreren
                        </button>
                    </>}

            </div>
        </nav>
    );
}

export default NavBar;