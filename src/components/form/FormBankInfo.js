import React, { Component } from "react"
import TextField from "material-ui/TextField"
import SelectField from "material-ui/SelectField"
import MenuItem from "material-ui/MenuItem"
import PrevNextPageButton from "../PrevNextPageButton"
import { connect } from "react-redux"

import { updateForm } from "../../action/FormAction"

const textFieldStyle = {width:"100%"}

class FormBankInfo extends Component {

    changeTextField = (stateType, event, newValue) => {
        this.props.updateForm(stateType, newValue)
    }

    render() {
        return(
            <div className="form-page">
                <div className="form-title">Account Information</div>
                <div className="form-subtitle">Please insert your account information to the form below.</div>
                <div>
                    <TextField
                        floatingLabelText="Bank Name"
                        onChange={this.changeTextField.bind(this, "bankName")}
                        value={this.props.bankName}
                        style={textFieldStyle}
                    />
                </div>
                <div>
                    <TextField
                        floatingLabelText="Bank Phone"
                        onChange={this.changeTextField.bind(this, "bankPhone")}
                        value={this.props.bankPhone}
                        style={textFieldStyle}
                    />
                </div>
                <div>
                    <TextField
                        floatingLabelText="Bank ABA"
                        onChange={this.changeTextField.bind(this, "bankABA")}
                        value={this.props.bankABA}
                        style={textFieldStyle}
                    />
                </div>
                <div>
                    <TextField
                        floatingLabelText="Bank Account Number"
                        onChange={this.changeTextField.bind(this, "bankAccountNumber")}
                        value={this.props.bankAccountNumber}
                        style={textFieldStyle}
                    />
                </div>
                <div>
                    <SelectField
                        floatingLabelText="Bank Account Type"
                        value={this.props.bankAccountType}
                        onChange={this.changeTextField.bind(this, "bankAccountType")}
                    >
                        <MenuItem value={0} primaryText="M&T Bank" />
                        <MenuItem value={1} primaryText="MetaBank" />
                    </SelectField>
                </div>
                <PrevNextPageButton prev={3} next={5}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    bankName: state.FormReducer.bankName,
    bankPhoto: state.FormReducer.bankPhoto,
    bankABA: state.FormReducer.bankABA,
    bankAccountNumber: state.FormReducer.bankAccountNumber,
    bankAccountType: state.FormReducer.bankAccountType,
})

const mapDispatchToProps = (dispatch) => ({
    updateForm: (stateType, value) => dispatch(updateForm(stateType, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FormBankInfo)