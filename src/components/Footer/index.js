import React from 'react'
import './style.css'
import CopyrightIcon from '@mui/icons-material/Copyright';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function BottomNavBar() {
    return (
        <div className='bottom-nav1'>
            <div className='left-content'>
                <div className='bottom-nav-text' style={{ listStyleType: 'none' }}>
                    <span className='copyright-div'>
                        <CopyrightIcon
                            style={{
                                fontSize: '0.9rem',
                                fontWeight: '100',
                                marginTop: '0.13rem'
                            }} />
                    </span>
                    <span>2022 Airbnb, Inc</span>
                    <span class="bullet-dot">·</span>
                    <span>Privacy</span>
                    <span class="bullet-dot">·</span>
                    <span>Terms</span>
                    <span class="bullet-dot">·</span>
                    <span>Sitemap</span>
                    <span class="bullet-dot">·</span>
                    <span>Company details</span>
                    <span class="bullet-dot">·</span>
                    <span>Destinations</span>
                </div>
            </div>
            <div className='right-content'>
                <div className='language-div'>
                    <LanguageRoundedIcon
                        style={{
                            fontSize: '1rem',
                            fontWeight: '100'
                        }} />
                    <span className='language-name'>English (IN)</span>
                </div>
                <div className='rupee-div'>
                    <span>₹ INR</span>
                </div>
                <div className='support-and-arrow-div'>
                    <span className='support-span'>Support & resources</span>
                    <KeyboardArrowUpIcon
                        style={{
                            fontSize: '1.5rem',
                            fontWeight: '100'
                        }} />
                </div>
            </div>
        </div>
    )
}

export default BottomNavBar;
