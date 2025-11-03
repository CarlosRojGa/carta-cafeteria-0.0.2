import { useState } from "react";

export default function EntradaCategoria({ categorias, setCategorias }) {
    const [nuevaCategoria, setNuevaCategoria] = useState("");

    function incluirCategoria() {
        let categoriasCopia = { ...categorias };
        const menu = categoriasCopia.menu || [];

        // Obtener el último id (si no hay, empieza en 0)
        const ultimoId = menu.length > 0 ? menu[menu.length - 1].id : 0;

        // Crear nueva categoría con id + 1
        const categoria = {
            id: ultimoId + 1,
            name: nuevaCategoria,
            photoURL: "",
            products: []
        };

        // Añadir la nueva categoría
        categoriasCopia.menu = [...menu, categoria];

        setCategorias(categoriasCopia);
    }

    function onNuevaCategoria(nuevaCategoria) {
        setNuevaCategoria(nuevaCategoria);
    }

    return (
        <div className="entrada-categoria">
            <input placeholder="Categoria..." type="text"
                onChange={(e) =>  onNuevaCategoria(e.target.value)}  />
            <button onClick={incluirCategoria}>Añadir categoría</button>
        </div>

    );
}

