import React from 'react';

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
                <table>
                    <tr>
                        <th>nome</th>
                        <th>email</th>
                    </tr>
                    {list.map((item) => {
                        return <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                        </tr>
                    })}
                </table>
            </div>
        );
    }

}

export default User;