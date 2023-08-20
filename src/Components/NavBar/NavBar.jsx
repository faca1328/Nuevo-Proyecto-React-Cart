import { Badge } from "@mui/material";
import { useContext } from "react";
import { NavLink, Route } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { NavInput } from "./NavInput";
import { NavLogin } from "./NavLogin"
import '../../Styles/NavBarStyle.css'



export function NavBar() {

    const { productsList } = useContext(CartContext)

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <NavLink to='/' className="navbar-brand" href="#">Home</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <NavLogin />

                <NavInput />
                <NavLink to='/products' className="nav-link" href="#">Products</NavLink>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <Badge badgeContent={productsList.length} color="secondary">
                        <NavLink to='/cart' className="nav-link" href="#">🛒</NavLink>
                    </Badge>
                </div>
            </nav>
        </>
    )
}
