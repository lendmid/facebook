import {connect} from "react-redux";
import {compose} from "redux";
import {reduxForm} from "redux-form"
import {logIn} from "../../redux/authReducer";
import LogIn from "./LogIn";


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.authorizedUserId,
});

const LogInContainer = compose(
    connect(mapStateToProps, {logIn}),
    reduxForm({
        form: 'logIn',
    }),
)(LogIn);

export default LogInContainer;