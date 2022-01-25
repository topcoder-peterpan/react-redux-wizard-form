import React, { Component } from "react"
import { connect } from "react-redux"

import FormTnc from "../form/FormTnc"
import FormPersonalInfo from "../form/FormPersonalInfo"
import FormEmploymentInfo from "../form/FormEmploymentInfo"
import FormAmountNextPaydayInfo from "../form/FormAmountNextPaydayInfo"
import FormBankInfo from "../form/FormBankInfo"
import FormDocumentation from "../form/FormDocumentation"

import Stepper from "../Stepper"
import StepperMobile from "../StepperMobile"

class FormPage extends Component {

    renderForm = (step) => {
        switch(step){
            // case 1: return <FormTnc/>
            case 1: return <FormPersonalInfo/>
            case 2: return <FormEmploymentInfo/>
            case 3: return <FormAmountNextPaydayInfo/>
            case 4: return <FormBankInfo/>
            case 5: return <FormDocumentation/>
        }
    }

    render() {
        return (
            <div className="form-page adaptive-content">
                <Stepper step={this.props.step}/>
                <StepperMobile step={this.props.step}/>
                {this.renderForm(this.props.step)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    step: state.FormReducer.step
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(FormPage)