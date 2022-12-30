import React from 'react'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import './style.css';

function Showmap() {
    return (
        <div className='show-map-box'>
            <div className='show-map-container'>
                <div className='show-map-text'>
                    <span>Show map</span>
                    <MapOutlinedIcon 
                    style={{
                        fontSize:'1rem'
                    }}/>
                </div>
            </div>
        </div>
    )
}

export default Showmap;
