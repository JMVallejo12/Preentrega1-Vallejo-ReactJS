            
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './Cartstyle.css'

function CartWidget(){

    return (
        <div className='icon-container'>
            <a href=""><ShoppingBasketIcon className="cart-icon"/></a>
            <div className='cart-number'>4</div>
        </div>
    )
}

export default CartWidget