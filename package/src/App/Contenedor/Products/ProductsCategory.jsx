import Category from './Category/Category';
import './ProductsCategory.css'

function ProductsCategory({categorias, estadoCategorias, setCategorias}) {


    const listItems = categorias.menu.map(category =>
        <Category 
            name={category.name} 
            products={category.products} 
            id={category.id} 
            estadoCategorias={estadoCategorias}
            setCategorias={setCategorias}
            key={category.id} 
            />
        
    );
    return (
        <ul>
            {listItems}
        </ul>
    )

}

export default ProductsCategory;
