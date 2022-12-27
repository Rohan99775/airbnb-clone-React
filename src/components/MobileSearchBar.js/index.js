import React from 'react'
import './style.css';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import svg from './filterImg.svg';
import CircleIcon from '@mui/icons-material/Circle';
import { padding } from '@mui/system';

function MobileSearchBar() {
  return (
    <div className='mobile-search-bar'>
      <div className='search-icon-and-text-div'>
        <div className='seach-icon-div'>
          <SearchRoundedIcon 
          style={
            {
              color:'var(--dark-grey)',
              fontSize:'1.8rem',
              padding:'0.5rem',
              marginTop:'0.5rem'
            }
          }/>
        </div>
        <div className='moile-search-bar-text'>
          <div className='where-to-div'>Where to?</div>
          <div className='moile-search-bar-text2'>
            <div className='any-text'>Anywhere <CircleIcon
              style={
                {
                  fontWeight: '100',
                  fontSize: '0.2rem',
                  marginBottom: '0.15rem'
                }
              } />
            </div>
            <div className='any-text'>Any week <CircleIcon
              style={
                {
                  fontWeight: '100',
                  fontSize: '0.2rem',
                  marginBottom: '0.15rem'
                }
              } />
            </div>
            <div className='any-text'>Add guests</div>
          </div>
        </div>
      </div>
      <div className="svg-div">
        <img className='img-tag' src={svg} alt='' />
      </div>
    </div >
  )
}

export default MobileSearchBar;
