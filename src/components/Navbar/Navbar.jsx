import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home"); // Default active menu to "home"
  const { getTotalCartAmount,token,setToken } = useContext(StoreContext);

 const navigate=useNavigate();
  const logout=()=>{
       localStorage.removeItem("token");
       setToken("");
       navigate("/")

  }
  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
      <ul className="navbar-menu">
        <li>
          <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        </li>
        <li>
          <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
        </li>
        <li>
          <a href='#app-download' onClick={() => setMenu("mobile App")} className={menu === "mobile App" ? "active" : ""}>Mobile App</a>
        </li>
        <li>
          <a href='#footer' onClick={() => setMenu("contact us")} className={menu === "contact us" ? "active" : ""}>Contact us</a>
        </li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className='navbar-searchicon'>
          <Link to='/cart'>
            <img src={assets.basket_icon} alt="" />
            {getTotalCartAmount() > 0 && <div className="dot"></div>}
          </Link>
        </div>
        {!token? <button onClick={() => setShowLogin(true)}>sign in</button>
       : <div className='navbar-profile'>
        <img src={assets.profile_icon} alt="" />
        <ul className="nav-profile-dropdown">
          <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
          <hr />
          <li onClick={logout} ><img src={assets.logout_icon} alt="" /><p>logout</p></li>
        </ul>
       </div>}
      </div>
    </div>
  );
}

export default Navbar;
