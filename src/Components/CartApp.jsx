import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./NavBar";
import { ProductsScreen } from "./Routes/ProductsScreen";
import { CartScreen } from "./Routes/CartScreen";
import { ProductProvider } from "../Context/ProductProvider";
import { CartProvider } from "../Context/CartProvider";

export function CartApp() {
    return (
        <ProductProvider>
            <CartProvider>
                <NavBar></NavBar>

                <h1>CartApp</h1>

                <hr />

                <div>
                    <Routes>
                        <Route path='/products' element={<ProductsScreen />}></Route>
                        <Route path='/cart' element={<CartScreen />}></Route>
                        <Route path='/' element={<Navigate to='/' />}></Route>
                    </Routes>
                </div>

            </CartProvider>
        </ProductProvider>
    )
}
