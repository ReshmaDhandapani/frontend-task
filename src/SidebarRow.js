import React from 'react'
import "./sidebarRow.css"

function SidebarRow({ selected,Icon,title }) {
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>
            <Icon className="sidebarRow__icon"/>
            <h4 className="sidebarRoe__title">{title}</h4>
        </div>
    )
}

export default SidebarRow
