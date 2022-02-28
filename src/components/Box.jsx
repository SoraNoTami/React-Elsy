import React from "react";


export class Box extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {
        if (this.props.icon !== "local_drink") {
            return (
                <div className="box col-sm-3 col-6">
                    <span className="material-icons" style={{ fontSize: "100px", color: this.props.color }}>
                        {this.props.icon}
                    </span>
                    <p>{this.props.value} {this.props.unit}</p>
                    <input type="range" min={this.props.min} max={this.props.max} value={this.props.value} onInput={this.props.onChange} />
                </div>
            )
        } else {
            return (
                <div className="box col-sm-3 col-6">
                    <span className="material-icons" style={{ fontSize: "100px", color: this.props.color }}>
                        {this.props.icon}
                    </span>
                    <p>{this.props.value} {this.props.unit}</p>
                </div>
            )
        }


    }
}