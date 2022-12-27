import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <div
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className='profile-menu-flex'
            >
                <MenuRoundedIcon style={{ fontSize: '1.2rem', padding: '0.6rem', fontWeight: '500', color: 'var(--dark-grey)' }} />
                <AccountCircleRoundedIcon style={{ fontSize: '2rem', padding: '0.2rem', color: 'var(--font-grey)' }} />
            </div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                sx={{
                    '.MuiPaper-root': {
                        borderRadius: '1rem',
                        minWidth:'250px',
                        marginTop: '0.8rem',
                        boxShadow: '0 1px 2px rgb(0 0 0 / 12%), 0 4px 12px rgb(0 0 0 / 8%)'
                    },
                }}
            >
                <MenuItem className='menu-items' onClick={handleClose}>Sign up</MenuItem>
                <MenuItem className='menu-items1' onClick={handleClose}>Log in</MenuItem>
                <div style={{ height: '1px', backgroundColor: 'var(--grey)', width: '100%' }}></div>
                <MenuItem className='menu-items2' onClick={handleClose}>Airbnb your home</MenuItem>
                <MenuItem className='menu-items' onClick={handleClose}>Host an experience</MenuItem>
                <MenuItem className='menu-items' onClick={handleClose}>Help</MenuItem>
            </Menu>
        </div>
    );
}