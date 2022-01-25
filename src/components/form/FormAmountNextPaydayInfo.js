import React, { Component } from "react"
import TextField from "material-ui/TextField"
import SelectField from "material-ui/SelectField"
import MenuItem from "material-ui/MenuItem"
import PrevNextPageButton from "../PrevNextPageButton"
import { connect } from "react-redux"

import { updateForm } from "../../action/FormAction"

const textFieldStyle = {width:"100%"}

class FormAmountNextPaydayInfo extends Component {

    changeTextField = (stateType, event, newValue) => {
        this.props.updateForm(stateType, newValue)
    }

    render() {
        return(
            <div className="form-page">
                <div className="form-title">Amount & Next Payday Information</div>
                <div className="form-subtitle">Please insert your amount&next payday information to the form below.</div>
                <div>
                    <TextField
                        type="number"
                        floatingLabelText="Requested Amount"
                        onChange={this.changeTextField.bind(this, "requestedAmount")}
                        value={this.props.requestedAmount != 0 ? this.props.requestedAmount : ''}
                        style={textFieldStyle}
                    />
                </div>
                <div>
                    <SelectField
                        floatingLabelText="Income Type"
                        value={this.props.incomeType}
                        onChange={this.changeTextField.bind(this, "incomeType")}
                    >
                        <MenuItem value={0} primaryText="Job Income" />
                        <MenuItem value={1} primaryText="Benifits" />
                    </SelectField>
                </div>
                <div>
                    <TextField
                        type="number"
                        floatingLabelText="Pay Frequency"
                        onChange={this.changeTextField.bind(this, "payFrequency")}
                        value={this.props.payFrequency != 0 ? this.props.payFrequency : ''}
                        style={textFieldStyle}
                    />
                </div>
                <div>
                    <TextField
                        type="number"
                        floatingLabelText="Monthly Income"
                        onChange={this.changeTextField.bind(this, "monthlyIncome")}
                        value={this.props.monthlyIncome != 0 ? this.props.monthlyIncome : ''}
                        style={textFieldStyle}
                    />
                </div>
                {/* <div>
                    <SelectField
                        floatingLabelText="Account Type"
                        value={this.props.accountType}
                        onChange={this.changeTextField.bind(this, "accountType")}
                    >
                        <MenuItem value={0} primaryText="Savings" />
                        <MenuItem value={1} primaryText="Deposit" />
                    </SelectField>
                </div> */}
                {/* <div>
                    <TextField
                        floatingLabelText="Purpose of Bank Account"
                        onChange={this.changeTextField.bind(this, "accountPurpose")}
                        multiLine={true}
                        rows={1}
                        rowsMax={5}
                        value={this.props.accountPurpose}
                        style={textFieldStyle}
                    />
                </div> */}
                <PrevNextPageButton prev={2} next={4}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    requestedAmount: state.FormReducer.requestedAmount,
    incomeType: state.FormReducer.incomeType,
    payFrequency: state.FormReducer.payFrequency,
    monthlyIncome: state.FormReducer.monthlyIncome,
})

const mapDispatchToProps = (dispatch) => ({
    updateForm: (stateType, value) => dispatch(updateForm(stateType, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FormAmountNextPaydayInfo)