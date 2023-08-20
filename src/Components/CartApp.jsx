import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { NavBar } from "./NavBar/NavBar";
import { ProductsScreen } from "./Routes/ProductsScreen";
import { CartScreen } from "./Routes/CartScreen";
import { ProductProvider } from "../Context/ProductProvider";
import { CartProvider } from "../Context/CartProvider";
import { Home } from "./Routes/HomeScreen/Home";



export function CartApp() {
    return (
        <ProductProvider>
            <CartProvider>
                <NavBar></NavBar>

                
                <Outlet/>
                

                <div>
                    <Routes>

                        <Route path='/products' element={<ProductsScreen />}></Route>
                        <Route path='/cart' element={<CartScreen />}></Route>
                        <Route path='/' element={<Home/>}></Route>
                    </Routes>
                </div>

            </CartProvider>

                
        </ProductProvider>

    )
}
