import { Component } from 'react';
import './Body.css';

class Body extends Component {
  render() {
    const { cover, title, description } = this.props;
    
    return (
      <main>
        <img src={ cover } alt={ title }/>
        <h1>{ title }</h1>
        <h2>{ description }</h2>
      </main>
    )
  }
}

export default Body;