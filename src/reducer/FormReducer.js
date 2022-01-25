import {SET_STEP, UPDATE_FORM, RESET_FORM, RESET_FORM_RESPONSE, FETCH_RESPONSE_SUCCESS} from '../action/FormAction'

const initialState = {
    step: 1,
    agree: false,
    applicationNumber: 1,

    firstName: '',
    // middleName: '',
    lastName: '',
    addressCity: '',
    state: '',
    zipCode: '',
    email: '',
    homePhone: '',
    workPhone: '',
    bestTimeToCall: '',
    ssn: '',
    birthDate: '',
    requestedAmount: 0,
    employerName: '',
    jobTitle: '',
    supervisorName: '',
    supervisorPhone: '',
    employerCity: '',
    driversLicenseNumber: '',
    driversLicenseState: '',
    incomeType: '',
    payFrequency: 0,
    monthlyIncome: 0,
    bankName: '',
    bankPhone: '',
    bankABA: '',
    bankAccountNumber: '',
    bankAccountType: '',
    // K's endpoint
    
    mobilePhone: '',
    mailingAddress: '',
    socialSecurityNumber: '',

    employerAddress: '',
    jobPosition: '',

    accountType: '',
    accountPurpose: '',
    accountWhere: '',
    accountHow: '',

    documentationUtilityBill: '',
    documentationSocialSecurityNumber: '',

    response: {}
}

const FormReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_STEP:
            return{
                ...state,
                step: action.payload
            }
        case UPDATE_FORM:
            return{
                ...state,
                [action.payload.stateType]: action.payload.value
            }
        case RESET_FORM:
            return{
                ...initialState,
                applicationNumber: state.applicationNumber
            }
        case RESET_FORM_RESPONSE:
            return{
                ...state,
                response: {}
            }
        case FETCH_RESPONSE_SUCCESS:
            return{
                ...initialState,
                applicationNumber: state.applicationNumber + 1,
                response: action.payload.data,
            }
    }
    return state
}

export default FormReducer