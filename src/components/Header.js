import './Header.css';

function Header({ logo, name }) {
  return(
    <header>
      <img src={ logo } alt={ name }/>
      <span>{ name }</span>
    </header>
  )
}

export default Header;