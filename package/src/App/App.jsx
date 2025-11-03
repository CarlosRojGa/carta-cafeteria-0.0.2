import { useState } from 'react';
import './App.css'
import Contenedor from './Contenedor/Contenedor'
import MyButton from './MyButton';
import CountText from './CountText';


function App() {
  
  const categorias = {
    "menu": [
      { id: 1,
        "name": "coffee",
        "photoURL": "",
        "products": [
        { id: 1, "name": "French Vanilla", "price": 3.00 },
        { id: 2, "name": "Caramel Macchiato", "price": 3.75 },
        { id: 3, "name": "Pumpkin Spice", "price": 3.50 },
        { id: 4, "name": "Hazelnut", "price": 4.00 },
        { id: 5, "name": "Mocha", "price": 4.50 }
      ]},
      { id: 2,
        "name": "desserts",
        "photoURL": "",
        "products": [
        { id: 1, "name": "Donut", "price": 1.50 },
        { id: 2, "name": "Cherry Pie", "price": 2.75 },
        { id: 3, "name": "Cheesecake", "price": 3.00 },
        { id: 4, "name": "Cinnamon Roll", "price": 2.50 }
      ]
    }]
  }

  const [menu, setMenu] = useState(categorias);
  return (
    <div className="contenedor">
      <Contenedor categorias={categorias} />
    </div>
  )
}

export default App
