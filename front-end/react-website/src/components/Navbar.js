import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars, faAlarmClock, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { Button } from './Button';
import './Navbar.css'


function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [showName, setShowName] = useState(false);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    const checkShowName = () =>{
        if(window.innerWidth <= 1200){
            setShowName(false)
        }else{
            setShowName(true)
        }
    }

    window.addEventListener('resize', showButton);
    window.addEventListener('resize', checkShowName);

    useEffect(() => {
        showButton();
        checkShowName();
    },[])
    

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                {showName ? "Game Dev Group" : "GDG"} &nbsp; <FontAwesomeIcon icon={faGamepad} />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <FontAwesomeIcon icon={click ? faTimes : faBars} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        FAQ
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/terminal' className='nav-links' onClick={closeMobileMenu}>
                        Terminal
                    </Link>
                </li>
                {/* <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Sign up
                    </Link>
                </li> */}
            </ul>
            {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar
