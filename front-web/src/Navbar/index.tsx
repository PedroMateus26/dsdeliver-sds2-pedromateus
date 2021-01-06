import './styles.css'
import {ReactComponent as Logo} from './Logo.svg';

const Navbar=()=>{
    return (
        <nav className="main-navbar">
            <Logo/>
            <a href="home" className="logo-text">DS Dlivery</a>
            
        </nav>
    )
}

export default Navbar;