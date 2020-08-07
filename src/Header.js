import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from './StateProvider'
import { auth } from './firebase'

function Header() {

    const login = () => {
      if (user) {
        auth.signOut();
      }
    }

    const [{basket, user}] = useStateValue();
    return (
      <nav className="header">
        {/** Logo on the left */}
        <Link to="/">
          <img
            className="header__logo"
            alt="amazon"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>
        {/** Search box */}
        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>
        {/** 3 links*/}
        <div className="header__nav">
          {/** 1st link*/}
          <Link to={!user && "/login"} className="header__link">
            <div onClick={login} className="header__option">
    <span className="header__optionLine1">Hello {user? user.email: ','}</span>
    <span className="header__optionLine2">{!user? 'Sign In' : 'Log Out'}</span>
            </div>
          </Link>
          {/** 2nd link*/}
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLine1">Return </span>
              <span className="header__optionLine2">& Orders</span>
            </div>
          </Link>
          {/** 3rd link*/}
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLine1">Your</span>
              <span className="header__optionLine2">Prime</span>
            </div>
          </Link>
          {/** Cart icon link*/}
          <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
              {/** Shopping basket icon */}
              <ShoppingBasketIcon />
              {/** Number of items */}
              <span className="header__optionLine2 header__optionBasketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </nav>
    );
}

export default Header
