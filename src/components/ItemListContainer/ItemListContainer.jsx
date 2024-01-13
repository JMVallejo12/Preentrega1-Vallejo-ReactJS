import './ItemListStyle.css'

function ItemListContainer(props){

    return (

        <div className="item-container">
            <div className='item-list'>{props.greeting}</div>
        </div>

    )
}

export default ItemListContainer