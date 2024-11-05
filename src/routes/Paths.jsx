import { BrowserRouter, Route, Routes } from "react-router-dom";
import Produtos from "../pages/Produtos";
import Home from "../pages/Home";
import PageLayout from "../layouts/PageLayout";
import NotFound from "../pages/NotFound";
import Produtoss from "../pages/Produtoss";


const Paths = () => {
    return ( 
        <>
        <BrowserRouter>
             <Routes >
                <Route path="/" element={<PageLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="/produtos" element={<Produtoss/>}/>
                <Route path="/produtoss/:id/:nome" element={<Produtos/>}/>
                </Route>
                <Route path="*" element={<NotFound/>}/>
          
        </Routes>
           </BrowserRouter>
        </>
     );
}
 
export default Paths;