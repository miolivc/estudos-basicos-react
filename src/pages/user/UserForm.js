import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { submitUserAction } from '../../actions/user/UserAction';
import React from 'react';

const UserFormFunc = props => {

    const { handleSubmit } = props;

    const submit = (data, submitUserAction) => submitUserAction(data)

    return (
        <form onSubmit={handleSubmit((fields) => submit(fields, submitUserAction))}>
            <label>Nome: </label>
            <Field type="text" component="input" name="name" />
            <br />

            <label>E-mail: </label>
            <Field type="text" component="input" name="email" />
            <br />

            <button type="submit">Submit</button>
        </form>
    );
}

const UserForm = (reduxForm({
    form: 'formUser'
}))(UserFormFunc)

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {submitUserAction})(UserForm);