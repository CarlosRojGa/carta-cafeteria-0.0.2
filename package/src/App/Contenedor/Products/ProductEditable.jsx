import { useState } from 'react';
import './ProductEditable.css';

function ProductEditable({ name, price, id, categoriaID, estadoCategorias, setCategorias }) {
    const [editable, setEditable] = useState(false);
    const [nombreBotonModificar, setNombreBotonModificar] = useState("Modificar");
    const [nuevoNombre, setNuevoNombre] = useState(name);
    const [nuevoPrecio, setNuevoPrecio] = useState(price);

function borrarProducto() {
    let categoriasCopia = { ...estadoCategorias };
    const menu = categoriasCopia.menu || [];

        for (let i = 0; i < menu.length; i++) {
        const categoria = menu[i];
        if (categoria.id === categoriaID) {
            categoria.products = categoria.products.filter(producto => producto.id !== id);
            break;
            }
        }

        setCategorias(categoriasCopia);
    }

    function modificarProducto() {
        if (editable) {
            let categoriasCopia = { ...estadoCategorias };
            const menu = categoriasCopia.menu || [];

        for (let i = 0; i < menu.length; i++) {
            const categoria = menu[i];
        if (categoria.id === categoriaID) {
            const producto = categoria.products.find(p => p.id === id);
        if (producto) {
        producto.name = nuevoNombre;
        producto.price = parseFloat(nuevoPrecio);
        }
        break;
        }
    }
            setNombreBotonModificar("Modificar");
            setCategorias(categoriasCopia);
        } else {
            setNombreBotonModificar("Guardar");
        }
            setEditable(!editable);
        }

    return (
        <li className="product">
            {editable ? (
                <>
                    <input
                        type="text"
                        value={nuevoNombre}
                        onChange={(e) => setNuevoNombre(e.target.value)}
                    />
                    <input
                        type="number"
                        value={nuevoPrecio}
                        onChange={(e) => setNuevoPrecio(e.target.value)}
                    />
                </>
            ) : (
                <>
                    <p className='name'>{name}</p>
                    <p className='price'>{price.toFixed(2)}</p>
                </>
            )}
        <button className="borrar" onClick={borrarProducto}>Borrar</button>
        <button className="modificar" onClick={modificarProducto}>{nombreBotonModificar}</button>
        </li>
        );
}

export default ProductEditable;