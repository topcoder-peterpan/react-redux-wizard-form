import React, { Component } from "react"
import {TextField, DatePicker} from "material-ui"
import PrevNextPageButton from "../PrevNextPageButton"
import { connect } from "react-redux"

import { updateForm } from "../../action/FormAction"

// import DateFnsUtils from '@date-io/date-fns';
// import {
//     MuiPickersUtilsProvider,
//     KeyboardDatePicker
// } from '@material-ui/pickers';

const textFieldStyle = {width:"100%"}

class FormPersonalInfo extends Component {

    changeTextField = (stateType, event, newValue) => {
        console.log(newValue);
        this.props.updateForm(stateType, newValue)
    }

    render() {
        return (
            <div className="form-page">
                <div className="form-title">Personal Info</div>
                <div className="form-subtitle">Please insert your personal information to the form below.</div>
                <div className="two-col">
                    <div>
                        <TextField
                            floatingLabelText="First Name"
                            onChange={this.changeTextField.bind(this, "firstName")}
                            value={this.props.firstName}
                            style={textFieldStyle}
                        />
                    </div>
                    <div>
                        <TextField
                            floatingLabelText="Last Name"
                            onChange={this.changeTextField.bind(this, "lastName")}
                            value={this.props.lastName}
                            style={textFieldStyle}
                        />
                    </div>
                    <div>
                        <TextField
                            floatingLabelText="Address City"
                            onChange={this.changeTextField.bind(this, "addressCity")}
                            value={this.props.addressCity}
                            style={textFieldStyle}
                        />
                    </div>
                    <div>
                        <TextField
                            floatingLabelText="State"
                            onChange={this.changeTextField.bind(this, "state")}
                            value={this.props.state}
                            style={textFieldStyle}
                        />
                    </div>
                    <div>
                        <TextField
                            floatingLabelText="Zip Code"
                            onChange={this.changeTextField.bind(this, "zipCode")}
                            value={this.props.zipCode}
                            style={textFieldStyle}
                        />
                    </div>
                    <div>
                        <TextField
                            floatingLabelText="Email"
                            onChange={this.changeTextField.bind(this, "email")}
                            value={this.props.email}
                            style={textFieldStyle}
                        />
                    </div>
                </div>
                <div className="two-col">
                    <div>
                        <TextField
                            floatingLabelText="Home Phone"
                            onChange={this.changeTextField.bind(this, "homePhone")}
                            value={this.props.homePhone}
                            style={textFieldStyle}
                        />
                    </div>
                    <div>
                        <TextField
                            floatingLabelText="Work Phone"
                            onChange={this.changeTextField.bind(this, "workPhone")}
                            value={this.props.workPhone}
                            style={textFieldStyle}
                        />
                    </div>
                    <div>
                        <TextField
                            floatingLabelText="Best Time To Call"
                            onChange={this.changeTextField.bind(this, "bestTimeToCall")}
                            value={this.props.bestTimeToCall}
                            style={textFieldStyle}
                        />
                    </div>
                    <div>
                        <TextField
                            floatingLabelText="SSN"
                            onChange={this.changeTextField.bind(this, "ssn")}
                            value={this.props.ssn}
                            style={textFieldStyle}
                        />
                    </div>
                    <DatePicker 
                        floatingLabelText="Birth Date"
                        value={ this.props.birthDate }
                        onChange={this.changeTextField.bind(this, "birthDate")}
                        style={textFieldStyle}
                    />
                </div>
                <PrevNextPageButton next={2}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    firstName: state.FormReducer.firstName,
    lastName: state.FormReducer.lastName,
    addressCity: state.FormReducer.addressCity,
    state: state.FormReducer.state,
    zipCode: state.FormReducer.zipCode,
    email: state.FormReducer.email,
    homePhone: state.FormReducer.homePhone,
    workPhone: state.FormReducer.workPhone,
    bestTimeToCall: state.FormReducer.bestTimeToCall,
    ssn: state.FormReducer.ssn,
    birthDate: state.FormReducer.birthDate,
})

const mapDispatchToProps = (dispatch) => ({
    updateForm: (stateType, value) => dispatch(updateForm(stateType, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FormPersonalInfo)
