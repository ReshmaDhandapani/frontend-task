import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './Header.css';
function Header() {
    return (
    <div className = "header">
        <div className="header_left">
        <MenuIcon/>
        <img className="header__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/9/98/YouTube_Logo.svg" 
        alt=""
    />
        </div>
        <div className="header__input">
        <input className="header__input"
        placeholder="Search"
        type="text" />
        <SearchIcon className="header__inputButton"/>
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
