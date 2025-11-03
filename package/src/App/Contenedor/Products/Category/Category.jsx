import './Category.css';
import CategoriaLectura from './CategoriaLectura';
import CategoriaEscritura from './CategoriaEscritura';
import ProductEditable from '../ProductEditable';
import { useState } from 'react';

function Category({ name, products, id, estadoCategorias, setCategorias }) {
    const [editable, setEditable] = useState(false);
    const [nombreBotonModificar, setNombreBotonModificar] = useState("Modificar");
    const [nuevaCategoria, setNuevaCategoria] = useState(name);
    const [nuevoProductoNombre, setNuevoProductoNombre] = useState("");
    const [nuevoProductoPrecio, setNuevoProductoPrecio] = useState("");
    const [contadorID, setContadorID] = useState(1); 

    const productList = products.map(product =>
        <ProductEditable
            name={product.name}
            price={product.price}
            id={product.id}
            categoriaID={id}
            estadoCategorias={estadoCategorias}
            setCategorias={setCategorias}
            key={product.id}
        />
    );

    function borrarCategoria() {
        let categoriasCopia = { ...estadoCategorias };
        const menu = categoriasCopia.menu || [];
        for (let i = 0; i < menu.length; i++) {
            const categoria = menu[i];
        if (categoria.id === id) {
             menu.splice(i, 1);
            break;
            }
        }
        setCategorias(categoriasCopia);
    }

    function modificarCategoria() {
        if (editable) {
            let categoriasCopia = { ...estadoCategorias };
            const menu = categoriasCopia.menu || [];

            for (let i = 0; i < menu.length; i++) {
                const categoria = menu[i];
                if (categoria.id === id) {
                categoria.name = nuevaCategoria;
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

    function agregarProducto() {
        if (!nuevoProductoNombre || !nuevoProductoPrecio) return;
        const nuevoProducto = {
            id: contadorID,
            name: nuevoProductoNombre,
            price: parseFloat(nuevoProductoPrecio)
        };

        setContadorID(contadorID + 1);

        let categoriasCopia = { ...estadoCategorias };
        const menu = categoriasCopia.menu || [];

        for (let i = 0; i < menu.length; i++) {
            if (menu[i].id === id) {
            menu[i].products.push(nuevoProducto);
            break;
            }
        }

        setCategorias(categoriasCopia);
        setNuevoProductoNombre("");
        setNuevoProductoPrecio("");
    }

    let content = editable ? (
        <CategoriaEscritura
            name={name}
            nuevaCategoria={nuevaCategoria}
            setNuevaCategoria={setNuevaCategoria}
        />
    ) : (
        <CategoriaLectura name={name} />
    );

    return (
        <li>
            <div className="contenedor-categoria">
            {content}
            <button className="borrar" onClick={borrarCategoria}>Borrar</button>
            <button className="modificar" onClick={modificarCategoria}>{nombreBotonModificar}</button>
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Nombre del producto"
                    value={nuevoProductoNombre}
                    onChange={(e) => setNuevoProductoNombre(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Precio"
                    value={nuevoProductoPrecio}
                    onChange={(e) => setNuevoProductoPrecio(e.target.value)}
                />
                <button onClick={agregarProducto}>Añadir producto</button>
            </div>

        <ul>
                {productList}
            </ul>
        </li>
    );
}

export default Category;
