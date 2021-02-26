import { Component } from 'react';
import './Body.css';
import Product from './Product';

class Body extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isProductVisibile: false,
    }
  }
  
  showProducts() {
    this.setState({ isProductVisibile: true });
  }

  render() {
    const { data, cover, title, description } = this.props;

    return (  
      <main className="Body">
      { 
        this.state.isProductVisibile ?
        <div className="productsWrapper"> <Product products={ data.products }/> </div> :
        <>
          <img src={ cover } alt={ title } className="main--img"/>
          <button className="showProductsBtn" onClick={ () => this.showProducts() }>Show Products!</button>
          <h1>{ title }</h1>
          <h2>{ description }</h2>      
        </>
      }
      </main>
    )
  }
}

export default Body;