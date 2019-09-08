import React from 'react';
import List from './List';

function User(props) {
    return (
        <div>
            <p> 
            User: {props.nome} 
            Foto: <img src={props.foto} /> 
            
        </p>
    </div>
    );
}

export default User;
