// import { Link } from '@mui/material'
import CartWidget from '../CartWidget/Cartwidget'
import './Navbarstyle.css'
import { Link } from 'react-router-dom'


function Navbar(){

    return <div className="nav-bar">
        <ul className='logo-container'>
        <Link to="/" className='h1-index'><h1>K-MANIA</h1></Link>
        </ul>
        <ul className="list-container">
        <Link to="/category/food" className='list-style'>COMIDA</Link>
        <Link to="/category/souvenir" className='list-style'>SOUVENIRS</Link>
        <Link to="/category/cloth" className='list-style'>ROPA</Link>
            <li><CartWidget/></li>
        </ul>
    </div>
}

export default Navbar