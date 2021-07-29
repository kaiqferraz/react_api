import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';

export default class Main extends Component {
  state = {
    filmes: [],
  };

  componentDidMount() {
    this.loadFilmes();
  }

  loadFilmes = async () => {
    const response = await api.get('batman');

    this.setState({ filmes: response.data });
  };

  render() {
    const { filmes } = this.state;
    return (
      <div className="filme-list">
        <h1>Recomendações</h1>
        {filmes.map((filme) => (
          <li key={filme.show.id}>
            <h2>{filme.show.name}</h2>

            <p> {filme.show.type} </p>
            <img src={filme.show.image.medium} alt="image" />

            <a href="">Acessar</a>
          </li>
        ))}
      </div>
    );
  }
}
