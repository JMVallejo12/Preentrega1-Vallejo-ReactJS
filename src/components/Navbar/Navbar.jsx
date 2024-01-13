import CartWidget from '../CartWidget/Cartwidget'
import './Navbarstyle.css'

function Navbar(){

    return <div className="nav-bar">
        <ul className='logo-container'>
            <h1><a href="" className='h1-index'>K-MANIA</a></h1>
        </ul>
        <ul className="list-container">
            <li><a href="" className='list-style'>COMIDA</a></li>
            <li><a href="" className='list-style'>SOUVENIRS</a></li>
            <li><a href="" className='list-style'>ROPA</a></li>
            <li><CartWidget/></li>
        </ul>
    </div>
}

export default Navbar