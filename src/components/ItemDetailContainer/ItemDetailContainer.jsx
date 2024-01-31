import { useEffect, useState } from 'react'
import './detailStyle.css'
import { useParams } from 'react-router-dom'
import { getData, filterID } from '../../server/products'

function ItemDetailContainer(props){

    const [item, setItems] = useState([])
    const {ID} = useParams()
    console.log(ID)

    useEffect(()=>{
    

        const fetchData = async () => {
            const asyncFilter = ID ? filterID : getData
            try {
                const data = await asyncFilter(ID)
                setItems(data)
            }
            catch (error) {
                console.log("Error en la carga de datos")
            }
        
        }
        fetchData()
    },[ID])

    {item.map((item)=>{

        return(
            <div className='detail-container'>
                hola
            </div>
            
        )

    })}
    

}

export default ItemDetailContainer