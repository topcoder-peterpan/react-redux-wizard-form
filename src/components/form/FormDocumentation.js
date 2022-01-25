import React, { Component } from "react"
import RaisedButton from "material-ui/RaisedButton"
import Dialog from "material-ui/Dialog"
import PrevNextPageButton from "../PrevNextPageButton"
import { connect } from "react-redux"
import { browserHistory as history } from "react-router"

import { updateForm, fetchResponse } from "../../action/FormAction"

class FormDocumentation extends Component {
    constructor() {
        super()
        this.state = {
            openDialog: false
        }
    }

    handleFileUpload = (stateType, e) => {
        e.preventDefault()
        let fileName = e.target.files[0].name
        this.props.updateForm(stateType, fileName)
    }

    handleSubmit = () => {
        this.props.fetchResponse().then(()=>{
            history.push("accepted")
        })     
    }

    render() {
        return (
            <div className="form-page">
                <div className="form-title">Submit</div>
                <div className="form-subtitle">Please submit when you are ready</div>
                <PrevNextPageButton prev={4} submit={()=>this.setState({openDialog: true})}/>
                <Dialog
                    open={this.state.openDialog}
                    onRequestClose={()=>this.setState({openDialog:false})}
                >
                    <div>
                        <div className="form-title">Choose Response</div>
                        <div className="dialog-action-container">
                            <RaisedButton secondary={true} label="Example Rejected" onClick={()=>history.push("rejected")} className="dialog-action"/>
                            <RaisedButton primary={true} label="Example Accepted" onClick={()=>this.handleSubmit()} className="dialog-action"/>
                        </div>
                    </div>
                </Dialog>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    documentationUtilityBill: state.FormReducer.documentationUtilityBill,
    documentationSocialSecurityNumber: state.FormReducer.documentationSocialSecurityNumber,
})

const mapDispatchToProps = (dispatch) => ({
    updateForm: (stateType, value) => dispatch(updateForm(stateType, value)),
    fetchResponse: () => dispatch(fetchResponse()),
})

export default connect(mapStateToProps, mapDispatchToProps)(FormDocumentation)