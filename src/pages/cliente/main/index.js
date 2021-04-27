import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.css';
 
export default class Main extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            cliente: [],
            erro: null
        };
    }
 
    componentDidMount() {
        fetch(`https://backend-cliente-eng.herokuapp.com/cliente`)
            .then(cliente =>
                cliente.json().then(cliente => this.setState({ cliente }))
            )
            .catch(erro => this.setState({ erro }));
    }
 
    render() {
        const { cliente } = this.state;
        return cliente.map((cliente, index) => (
 
            <div className="cliente-list">
                <div key={index} className="card mb-4">
                    <h5 className="card-header">{cliente.nome}</h5>
 
                    <article key={cliente._id}>
                        <strong> {cliente.salario} </strong>
                        <p> <Link to={`/clientes/${cliente.id}`}> Acessar </Link> </p>
                        <br />
                    </article>
                </div>
            </div>
        ))
    };
}
