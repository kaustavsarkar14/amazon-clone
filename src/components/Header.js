import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useStateValue } from '../StateProvider';

export default function Header() {
    const [{basket}] = useStateValue()

    return (
        <div className='header' >
            <Link to="/" >
                <img className='header_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="" />
            </Link>
            <div className="search">
                <input className="header_searchInput" placeholder='Search Amazon.in' />
                <SearchIcon className='header_searchIcon' />
            </div>

            <div className="header_nav">
                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className='header_optionLineOne' >Hello Kaustav</span>
                        <span className='header_optionLineTwo' >Accounts & Lists</span>
                    </div>
                </Link>

                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className='header_optionLineOne' >Returns</span>
                        <span className='header_optionLineTwo' >& Orders </span>
                    </div>
                </Link>

                <Link to="/checkout" className='header_link' >
                    <div className="header_optionCart">
                        <ShoppingCartOutlinedIcon fontSize='large' />
                        <span>{basket?.length}</span>
                    </div>
                </Link>
            </div>

        </div>
    )
}
