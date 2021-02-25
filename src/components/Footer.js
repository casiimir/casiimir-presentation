import './Footer.css';

function Footer({ company }) {
  return(
    <footer>
      <p>Javascript</p> 
      <p>{ new Date().getFullYear() } © { company }</p>
    </footer>
  )
}

export default Footer;