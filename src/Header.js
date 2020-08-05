import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"

function Header() {
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
          <Link to="/login" className="header__link">
            <div className="header__option">
              <span className="header__optionLine1">Hello Suri</span>
              <span  className="header__optionLine2">Sign In</span>
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
                <span className="header__optionLine2 header__optionBasketCount">0</span>
            </div>
          </Link>
        </div>
      </nav>
    );
}

export default Header
