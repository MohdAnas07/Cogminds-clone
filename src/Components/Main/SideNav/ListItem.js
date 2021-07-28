import React, { useState } from 'react'

import './SideNav.css'

const ListItem = ({ data }) => {

    return (
        <>
            <img src={data[1]} alt="" />
            <p style={data[2]} >{data[0]}</p>
        </>
    )
}

export default ListItem
