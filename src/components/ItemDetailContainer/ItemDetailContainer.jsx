import { useEffect, useState } from 'react'
import './detailStyle.css'
import { useParams } from 'react-router-dom'
import { getData, filterID } from '../../server/products'

function ItemDetailContainer(props){

    const [item, setItems] = useState([])
    const {ID} = useParams()
    console.log(ID)

    useEffect(()=>{
    

        const fetchDataId = async () => {
            const asyncFilter = ID ? filterID : getData
            try {
                const data = await asyncFilter(ID)
                setItems(data)
                console.log(data)
            }
            catch (error) {
                console.log("Error en la carga de datos")
            }
            
        }
        
        fetchDataId()
        
    },[ID])
    
    return (
        <div>
            {item.map((item) => (
                <div className='detail-container' key={item.id}>
                    <div className='detail-style'>
                        <img src={item.img} alt={item.name} className='item-img'/>
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                        <p>{item.desc}</p>
                    </div>
                    
                </div>
            ))}
        </div>
    )
}

export default ItemDetailContainer