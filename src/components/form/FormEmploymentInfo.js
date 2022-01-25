import React, { Component } from "react"
import TextField from "material-ui/TextField"
import PrevNextPageButton from "../PrevNextPageButton"
import { connect } from "react-redux"

import { updateForm } from "../../action/FormAction"

const textFieldStyle = {width:"100%"}

class FormEmploymentInfo extends Component {

    changeTextField = (stateType, event, newValue) => {
        this.props.updateForm(stateType, newValue)
    }

    render() {
        return (
            <div className="form-page">
                <div className="form-title">Employement Information</div>
                <div className="form-subtitle">Please insert your employement information to the form below.</div>                
                <div>
                    <TextField
                        floatingLabelText="Employer Name"
                        onChange={this.changeTextField.bind(this, "employerName")}
                        value={this.props.employerName}
                        style={textFieldStyle}
                    />
                </div>
                <div>
                    <TextField
                        floatingLabelText="Job Title"
                        onChange={this.changeTextField.bind(this, "jobTitle")}
                        value={this.props.jobTitle}
                        style={textFieldStyle}
                    />
                </div>
                <div>
                    <TextField
                        floatingLabelText="Supervisor Name"
                        onChange={this.changeTextField.bind(this, "supervisorName")}
                        value={this.props.supervisorName}
                        style={textFieldStyle}
                    />
                </div>
                <div>
                    <TextField
                        floatingLabelText="Supervisor Phone"
                        onChange={this.changeTextField.bind(this, "supervisorPhone")}
                        value={this.props.supervisorPhone}
                        style={textFieldStyle}
                    />
                </div>
                <div>
                    <TextField
                        floatingLabelText="Employer City"
                        onChange={this.changeTextField.bind(this, "employerCity")}
                        value={this.props.employerCity}
                        style={textFieldStyle}
                    />
                </div>
                <div>
                    <TextField
                        floatingLabelText="Drivers License Number"
                        onChange={this.changeTextField.bind(this, "driversLicenseNumber")}
                        value={this.props.driversLicenseNumber}
                        style={textFieldStyle}
                    />
                </div>
                <div>
                    <TextField
                        floatingLabelText="Drivers License State"
                        onChange={this.changeTextField.bind(this, "driversLicenseState")}
                        value={this.props.driversLicenseState}
                        style={textFieldStyle}
                    />
                </div>
                <div>
                    <TextField
                        floatingLabelText="Drivers License State"
                        onChange={this.changeTextField.bind(this, "driversLicenseState")}
                        value={this.props.driversLicenseState}
                        style={textFieldStyle}
                    />
                </div>
                <PrevNextPageButton prev={1} next={3}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    employerName: state.FormReducer.employerName,
    jobTitle: state.FormReducer.jobTitle,
    supervisorName: state.FormReducer.supervisorName,
    supervisorPhone: state.FormReducer.supervisorPhone,
    employerCity: state.FormReducer.employerCity,
    driversLicenseNumber: state.FormReducer.driversLicenseNumber,
    driversLicenseState: state.FormReducer.driversLicenseState,
})

const mapDispatchToProps = (dispatch) => ({
    updateForm: (stateType, value) => dispatch(updateForm(stateType, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FormEmploymentInfo)