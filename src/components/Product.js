import { PropTypes } from 'prop-types';
import './Product.css';

function Product(props) {
  return (
    <>
      {
        props.products.map((product, i) => {
          const { title, price, description, category, image } = product;

          return (
            <div className="Product" key={ i }>
              <img src={ image } alt={ title } className="Product__image"/>
              <div className="Product__info">
                <p className="Product__info--category">
                  { category }
                </p>
                <h2 className="Product__info--title">
                  { title }
                </h2>
                <p className="Product__info--description">
                  { description }
                </p>
                <p className="Product__info--price">
                  { price }
                </p>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

Product.propTypes = {
  title: PropTypes.object.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Product;