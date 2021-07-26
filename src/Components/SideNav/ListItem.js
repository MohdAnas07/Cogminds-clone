import React, { useState } from 'react'

import './SideNav.css'

const ListItem = ({ data }) => {

    return (
        <div style={data[2]} className='listItem '>
            <img src={data[1]} alt="" />
            <p style={data[3]} >{data[0]}</p>
        </div>
    )
}

export default ListItem
