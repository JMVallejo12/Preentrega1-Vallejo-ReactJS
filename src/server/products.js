export const products = [

{
    id: 1,
    name: 'Snegmion',
    price: 100,
    cat: 'food',
    desc: 'Fideos poco picantes',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ27iKgS21ce9qYTJGvbgESdvF_6A5Bqivkw00Xgp-lOSSaW5bICYpm1eMduktSorlUEx4&usqp=CAU'
},
{
    id: 2,
    name: 'Yeul',
    price: 110,
    cat: 'food',
    desc: 'Fideos picantes',
    img: 'https://http2.mlstatic.com/D_NQ_NP_967751-MLA48996374780_022022-O.webp'
},
{ 
    id: 3,
    name: 'Jin ramen',
    price: 105,
    cat: 'food',
    desc: 'Fideos poco picantes',
    img: 'https://http2.mlstatic.com/D_NQ_NP_901630-MLA47501033274_092021-O.webp'
},
{
    id: 4,
    name: 'Llavero de corazon',
    price: 85,
    cat: 'souvenir',
    desc: 'Llavero haciendo un corazón con sus dedos',
    img: 'https://files.cults3d.com/uploaders/21981313/illustration-file/b816df28-c032-44ac-ae1e-473add9f70bd/Coraz%C3%B3n-Coreano.jpg'
    
},
{
    id: 5,
    name: 'Llavero con bandera',
    price: 75,
    cat: 'souvenir',
    desc: 'Llavero redondo con la bandera de Corea del Sur',
    img: 'https://rlv.zcache.es/llavero_moda_de_corea_del_sur_deportes_bandera_coreana-r29e6586940884feaaa63a5d6e4b77782_cuguw_307.jpg?rlvnet=1'

},
{
    id: 6,
    name: 'Llavero de Kakao Friends',
    price: 98,
    cat: 'souvenir',
    desc: 'Llavero con personaje de Kakao Friends',
    img: 'https://haruhanashop.com/wp-content/uploads/2023/05/Llaveros-Kakao-friends.webp'
},
{
    id: 7,
    name: 'Hanbok',
    price: 1500,
    cat: 'cloth',
    desc: 'Traje tradicional para hombre y para mujer',
    img: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Hanbok_%28female_and_male%29.jpg'
},
{
    id: 8,
    name: 'Camiseta de Seul',
    price: 800,
    cat: 'cloth',
    desc: 'Camiseta de mangas largas, en blanco y negro',
    img: 'https://m.media-amazon.com/images/I/A1Rz2T5IgLL._AC_CLa%7C2140%2C2000%7C61PFkM7Wv6L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UY580_.png'
},
{
    id: 9,
    name: 'Camiseta negra',
    price: 790,
    cat: 'cloth',
    desc: 'Camiseta de mangas largas color negra, con el nombre de Seul',
    img: 'https://m.media-amazon.com/images/I/A1nYNISnPeL._CLa%7C2140%2C2000%7CA1A6xFflHdL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png'
}


]

export function getData(){
    return new Promise((resolve, reject)=>{
        if (products.length === 0){
            reject(new Error("Error en la carga de datos"))
        }else{
            resolve(products)
        }
    })
}



export function filterData(cat){
    const filter_data = products.filter((product) => product.cat === cat)
    return filter_data
}

export function filterID(id){
    const filter_data = products.filter((product)=> product.id == id)
    return filter_data
}
