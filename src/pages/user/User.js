import React from 'react';
import UserForm from './UserForm';

class User extends React.Component {

    render() {
        let list = [
            {
                name: "Natan",
                email: "natanseverolp@gmail.com"
            },
            {
                name: "Michelle",
                email: "miolivc@outlook.com"
            }
        ]

        return (
            <div>
                <UserForm></UserForm>
                <table>
                    <thead>
                        <tr>
                            <th>nome</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item) => {
                            return <tr>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default User;