import { PropTypes } from 'prop-types';
import './Footer.css';

function Footer({ company }) {
  return(
    <footer>
      <p>Javascript</p> 
      <p>{ new Date().getFullYear() } © { company }</p>
    </footer>
  )
}

Footer.propTypes = {
  company: PropTypes.string.isRequired,
}

export default Footer;