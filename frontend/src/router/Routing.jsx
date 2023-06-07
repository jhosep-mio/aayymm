import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { PublicLayout } from '../components/public/PublicLayout';
import Home from '../components/public/pages/Home';
import { Nosotros } from '../components/public/pages/Nosotros';
import { Productos } from '../components/public/pages/Productos';
import { Servicios } from '../components/public/pages/Servicios';
import { Contacto } from '../components/public/pages/Contacto';
import { Categorias } from '../components/public/pages/Categorias';



export const Routing = () => {
  return (
    <BrowserRouter>
      {/* <AuthProvider> */}
        <Routes>

            {/* PUBLIC */}

            <Route path='/' element={<PublicLayout/>}>
                <Route index element={<Home/>}/>
                <Route path='nosotros' element={<Nosotros/>}/>
                <Route path='productos' element={<Productos/>}/>
                <Route path='categorias/:id' element={<Categorias/>}/>
                <Route path='servicios' element={<Servicios/>}/>
                <Route path='contacto' element={<Contacto/>}/>

            </Route>
            
            <Route path='*' element={
                <>
                  <Error/>
                </>
            } />
        </Routes>
      {/* </AuthProvider> */}
    </BrowserRouter>
    )
}
