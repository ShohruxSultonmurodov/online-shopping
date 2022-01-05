import React, {useState} from "react";
import { Link } from "react-router-dom";
import logo from '../image/logo.png';
import menubtn from '../image/menu.png';
import cartbtn from '../image/shopping-cart.png';
import { setIsOpen } from "../store/cart";
import {connect} from 'react-redux';
function Navbar({setIsOpen, isOpen, cartProducts}) {
    const [showMenu, setShowMenu] = useState(false);
    return <div className="navbar">
        <div className="logo">
            <Link to={'/'}>
                <img src={logo}/>
            </Link>
        </div>
        <ul className={showMenu?'show-menu':''}>
            <li>
                <Link to={'/'}>
                    <button onClick={()=>setShowMenu(false)}>Kitoblar</button>
                </Link>
            </li>
            <li>
                <Link to={'/computers'}>
                    <button onClick={()=>setShowMenu(false)}>Kompyuter va orgtexnika</button>
                </Link>
            </li>
            <li>
                <Link to={'/smartfons'}>
                    <button onClick={()=>setShowMenu(false)}>Smartfonlar va gadjetlar</button>
                </Link>
            </li>
            <li>
                <Link to={'/kitchenutensils'}>
                    <button onClick={()=>setShowMenu(false)}>Oshxona buyumlari</button>
                </Link>
            </li>
            <li>
                <Link to={'/households'}>
                    <button onClick={()=>setShowMenu(false)}>Maishiy texnikalar</button>
                </Link>
            </li>
        </ul>
        <div className="btns">
            <div onClick={()=>setShowMenu(p=>!p)} className="menu-btn">
                <img src={menubtn} />
            </div>
            <div onClick={()=>setIsOpen(!isOpen)} className="cart-btn">
                <span className="badge">{cartProducts.length}</span>
                <img src={cartbtn} />
            </div>
        </div>
    </div>
}
export default connect(({cart:{isOpen}, cartproduct:{cartProducts}})=>({isOpen, cartProducts}), {setIsOpen})(Navbar);