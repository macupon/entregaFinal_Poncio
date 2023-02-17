/* ####################################################
                    IMPORTACIONES
######################################################*/
// Modulos
import { Link } from 'react-router-dom'
// Componentes
import ItemCount from '../itemCount/ItemCount'
import { useState, useEffect, useContext } from 'react'
// import {CartProvider, useCartContext} from '../context/CartContext'
import { CartContext } from '../context/CartContext'
// Estilos
import './ItemDetail.css'

// Core

/* ####################################################
                    LOGICA
######################################################*/
const  ItemDetail = (props) => { //Funcion constructora
    // desempaquetamos props
    const {id, nombre, precio, medida, img, stock, categoria} = props.data;

    // retorno que se va a randerizar
    const [cantidadProductos, setCantidadProductos] = useState(0)
    const {itemsCarrito, addItem, removeItem} = useContext(CartContext);
    
    
    const cantidadHijo = (cantidadX) => {
        setCantidadProductos(cantidadX)
    }

    const onAdd = (item, cant) => {
        addItem(item, cant)
    }
    const clickComprar = () => {
        // console.log(nombre, cantidadProductos)
        onAdd(props.data, cantidadProductos)
        // console.log(CartContext._currentValue)
    }


    return (
        <div className='datail_card'>
            <div className='card_style tam_card_detail container'>
                <div className='card'>
                <img className='card-img-top card' src={img} alt=""></img>
                <div className='card-body'>
                    <div className='title_card'>
                        <h5 className='card-title title_card'>{nombre} </h5>
                        <p className='card-price'>${precio}.-</p>
                    </div>
                    <p className='card-text'>Tamaño: {medida} cm</p>
                    <div className='bloque_count'>
                        <ItemCount stock={stock} guardarCantidadAComprar={cantidadHijo} />     
                        <div className='button-count'>
                            <button onClick={clickComprar} id='onadd'>Añadir al carrito</button>
                        </div>
                    </div>
                    <div className='product_details'>
                        <Link to="/productos" > volver a mis productos</Link>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    )
}


/* ####################################################
                    EXPORTACIONES
######################################################*/
export default ItemDetail

// guardarCantidadAComprar={cantidadHijo}