import React, { useState } from 'react'
import { links } from '../../assets/images-links';
import './style.css';

function Filter() {

    const [selectedFilter, setSelectedFilter] = useState();

    return (
        <div className='filter-div'>
            {links.map((item, i) => (
                <div key={i} className={`links-box ${i === selectedFilter && 'selected-box'}`}
                    onClick={()=> {
                        setSelectedFilter(i);
                    }}>
                    <img src={item.imgSrc} alt='' className='links-img' />
                    <p className='links-label'>{item.label}</p>
                </div>
            ))}
        </div>
    );
}

export default Filter;
