import { useState } from 'react'
import './Contenedor.css'
import EntradaCategoria from './EntradaCategoria/EntradaCategoria'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Products from './Products/ProductsCategory'
import Spacer from './Spacer/Spacer'

function Contenedor({categorias}) {
  const [estadoCategorias, setCategorias] = useState(categorias);

  return (
    <>
        <EntradaCategoria categorias={estadoCategorias} setCategorias={setCategorias}/>
        <Header />
        <Spacer />
        <Products categorias={estadoCategorias} estadoCategorias={estadoCategorias}
          setCategorias={setCategorias}/>
        <Spacer />
        <Footer />
    </>
    )
}

export default Contenedor
