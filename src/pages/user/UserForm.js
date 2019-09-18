import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import React from 'react';

const UserFormFunc = props => {
    return (
        <form>
            <label for="name">Nome: </label>
            <input type="text" component="input" name="name" />
            <br />
            <label for="email">E-mail: </label>
            <input type="text" component="input" name="email" />
        </form>
    );
}

const UserForm = (reduxForm({
    form: 'formUser'
}))(UserFormFunc)

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(UserForm);