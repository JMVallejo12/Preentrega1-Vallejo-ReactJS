import './ItemListStyle.css'
import { useEffect, useState } from 'react'
import { getData, filterData } from '../../server/products'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import { Link } from 'react-router-dom'

function ItemListContainer(props){

    const [item, setItems] = useState([])
    const {catID} = useParams()
    console.log(catID)

    useEffect(()=>{
    

        const fetchData = async () => {
            const asyncFilter = catID ? filterData : getData
            try {
                const data = await asyncFilter(catID)
                setItems(data)
            }
            catch (error) {
                console.log("Error en la carga de datos")
            }
        
        }
        fetchData()
    },[catID])




    

    return (

        <div className="item-container">
            <div className='item-list'>
                
                    {item.map((item) => {
                        return(
                            <div className='item-card'>
                                <img src={item.img} alt="{item.name}" className='item-img'/>
                                <h3>{item.name}</h3>
                                <p>${item.price}</p>
                                {/* <Link><button className='btn-detail' onClick={ItemDetailContainer}>VER DETALLE</button></Link> */}
                                <Link to="/item/{item.id}"><button className='btn-detail'>VER DETALLE</button></Link>

                            </div>
                        )
                    })}
                
            </div>
        </div>

    )
}

export default ItemListContainer