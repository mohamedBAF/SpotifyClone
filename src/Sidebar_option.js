import React from 'react';
import './Sidebar_option.css'

function Sidebar_option ({title,Icon})  {
    return (
        <div className="sidebaroption">
            {Icon && <Icon className="sidebaroption_icon" />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    );
}

export default Sidebar_option;
