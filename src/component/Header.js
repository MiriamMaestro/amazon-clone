import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import LogoAmazon from './media/amazon-logo.png'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom";
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';

function Header(){
    const [{basket, user}, dispatch] = useStateValue();
    const handleAuthentication = () =>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/">
                <img className='header-logo' src={LogoAmazon} alt="logo-amazon"/>
            </Link>
            <div className="header-searchbar">
                <input className="header-searchInput" type="text"/> 
                <SearchIcon className="header-searchIcon"/>
            </div>
            <div className="header-nav">
                <Link to={!user && '/login'}>
                <div onClick={handleAuthentication} className="header-option">
                    <span className="header-optionLineOne">HelloGuest</span>
                    <span className="header-optionLineTwo">{user ? 'Sing Out': 'Sign In'}</span>
                </div>
                </Link>
                
                <div className="header-option">
                    <span className="header-optionLineOne">Your</span>
                    <span className="header-optionLineTwo">Prime</span>
                </div>
                <Link to='/orders'>
                <div className="header-option">
                    <span className="header-optionLineOne">Returns</span>
                    <span className="header-optionLineTwo">&Orders</span>
                </div>
                </Link>
                
                <Link to="/checkout">
                <div className="header-optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header-optionLineOne header-basketCount">{basket?.length}</span>
                </div>
                </Link>
                
            </div>
        </div>
    )
}

export default Header
