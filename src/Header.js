import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from "react-router-dom";
import './Header.css';

function Header()  {

    const [inputSearch, setInputSearch] = useState("");
    return (
    <div className = "header">
        <div className="header_left">
        <MenuIcon/>
        <Link to="/"><img 
        className="header__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/9/98/YouTube_Logo.svg" 
        alt=""
    /></Link>
        </div>
        <div className="header__input">
        <input 
        onChange={(e) => setInputSearch(e.target.value)} 
        value={inputSearch} 
        placeholder="Search"
        type="text" />
        <Link to={`/search/${inputSearch}`}>
            <SearchIcon className="header__inputButton"/>
        </Link>
        </div>

        <div className="header__icons">
        <VideoCallIcon className="header__icon"/>
        <AppsIcon/>
        <NotificationsIcon/>
        <AccountCircleIcon/>
        </div>

</div>
);

}

export default Header 
