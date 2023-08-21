
import { useNavigate } from 'react-router-dom';
import '../../Styles/NavInputStyle.css'


export function NavInput({ category, setCategory}) {


    const navigate = useNavigate();

    // Paso 2: Manejar el cambio de categoría seleccionada
    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory);

        navigate(`/products`);
    };

    return (
        <>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <button className="button btn-light dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {category || 'All'} {/* Muestra la categoría seleccionada o "Categories" si no se ha seleccionado ninguna */}
                    </button>
                    <div className="dropdown-menu">
                        {/* Paso 3: Agregar eventos de clic para las categorías */}
                        <a className="dropdown-item" href="#" onClick={() => handleCategoryChange("All")}>All</a>
                        <a className="dropdown-item" href="#" onClick={() => handleCategoryChange('electronics')}>Electronics</a>
                        <a className="dropdown-item" href="#" onClick={() => handleCategoryChange('jewelery')}>Jewelery</a>
                        <a className="dropdown-item" href="#" onClick={() => handleCategoryChange("men's clothing")}>Men's clothing</a>
                        <a className="dropdown-item" href="#" onClick={() => handleCategoryChange("women's clothing")}>Women's clothing</a>
                    </div>
                </div>
                {/* Paso 4: Puedes utilizar 'category' como filtro en tu lista de productos en otro componente */}
                <input type="text" className="form-control" aria-label="Text input with dropdown button" />
            </div>
        </>
    );
}
