import React from "react";

export function Box(props){
    return <div className="box col-sm-3 col-6">
        <span className="material-icons" style={{fontSize: "100px" , color: props.color, value: props.value, unit: props.unit}}>{props.icon}</span>
    </div>
}