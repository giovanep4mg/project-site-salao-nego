import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home1 from './components/pages/Home/Home1';
import Produtos from './components/pages/Produtos/Produtos';
import Servicos from './components/pages/Servicos/Servicos';
import Profile from './components/pages/Profile/Profile';
import About from './components/pages/About/About';


function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home1/>}></Route>
                <Route path="/home" element={<Home1/>}></Route>
                <Route path="/servicos" element={<Servicos/>}></Route>
                <Route path="/produtos" element={<Produtos/>}></Route>
                <Route path='/contato' element={<Profile/>}></Route>
                <Route path='/sobre' element={<About/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;