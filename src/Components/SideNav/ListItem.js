import React, { useState } from 'react'
// import './ListItem.css'
import './SideNav.css'

const ListItem = ({ img }) => {

    return (
        <div style={img[2]} className='listItem '>
            <img src={img[1]} alt="" />
            <p>{img[0]}</p>
        </div>
    )
}

export default ListItem
