import React from 'react';
// import { Component } from 'react';

class Nome extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nome: "Michelle",
            email: "miolivc@outlook.com"
        }

        this.changeState = this.changeState.bind(this);
        this.resetState = this.resetState.bind(this);
        this.changeInput = this.changeInput.bind(this);
    }

    // Função que modifica o state dado um determinado evento
    changeState() {
        this.setState({
            nome: "Michelle Oliveira da Costa"
        })
    }

    resetState() {
        this.setState({
            nome: "Michelle"
        })
    }

    changeInput(event) {
        let target = event.target
        let index = target.name
        
        this.setState({
            [index]: target.value
        })
    }

    render() {
        return (
            <div>

                <form>
                    <label>
                        Nome 
                        <input type="text" name="nome" value={this.state.nome} onChange={this.changeInput} />
                    </label>

                    <label>
                        Email 
                        <input type="email" name="email" value={this.state.email} onChange={this.changeInput} />
                    </label> 
                </form>

                <p>
                    {this.state.nome} - {this.state.email}
                </p>
                
                <button onClick={this.changeState}>Alterar Nome</button>
                <button onClick={this.resetState}>Reset Nome</button>
            </div>
        );
    }
}

export default Nome;
