import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControl/FormsControl";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" placeholder={"Login"} name={'login'} component={Input}
                validate={[required]}/>
            </div>
            <div>
                <Field type="text" placeholder={"Password"} name={'password'} component ={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field type="checkbox" name={'rememberMe'} component ={Input}/>
                Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    };
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
};

export default Login;