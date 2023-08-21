import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { NavBar } from "./NavBar/NavBar";
import { ProductsScreen } from "./Routes/ProductsScreen";
import { CartScreen } from "./Routes/CartScreen";
import { ProductProvider } from "../Context/ProductProvider";
import { CartProvider } from "../Context/CartProvider";
import { Home } from "./Routes/HomeScreen/Home";
import { useState } from 'react';



export function CartApp() {

    const [category, setCategory] = useState('All');

    return (
        <ProductProvider>
            <CartProvider>
                <NavBar category={category} setCategory={setCategory}></NavBar>

                
                <Outlet/>
                

                <div>
                    <Routes>

                        <Route path='/products' element={<ProductsScreen category={category}/>}></Route>
                        <Route path='/cart' element={<CartScreen />}></Route>
                        <Route path='/' element={<Home/>}></Route>
                    </Routes>
                </div>

            </CartProvider>

                
        </ProductProvider>

    )
}
