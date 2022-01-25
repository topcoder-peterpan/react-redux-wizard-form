import React, { Component } from "react"
import { browserHistory as history } from "react-router"

export default class Accepted extends Component {

    render() {
        return (
            <div className="main-page">
                <div className="form-title margin-bottom-48">
                    Submit Canceled
                </div>
                <div className="link" onClick={()=>history.push("/")}>back to main page</div>
                <div className="margin-top-6 link" onClick={()=>history.push("form")}>Continue your application</div>
            </div>
        )
    }
}