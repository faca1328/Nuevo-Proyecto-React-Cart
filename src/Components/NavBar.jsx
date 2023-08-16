import { Badge } from "@mui/material";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../Context/CartContext";



export function NavBar() {

    const {productsList} = useContext(CartContext)

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink to='/' className="navbar-brand" href="#">Home</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink to='/products' className="nav-link" href="#">Products</NavLink>
                        </li>
                    </ul>
                    <Badge badgeContent={productsList.length} color="secondary">
                        <NavLink to='/cart' className="nav-link" href="#">🛒</NavLink>
                    </Badge>
                </div>
            </nav>
        </>
    )
}
