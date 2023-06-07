import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { AuthProvider } from '../context/AuthProvider';
import { PrivateLayout } from '../components/private/PrivateLayout';
import { Login } from '../components/public/Login';
import ListaProductos from '../components/private/tables/categorias-productos/ListaProductos';
import AgregarCategoria from '../components/private/tables/categorias-productos/AgregarCategoria';
import EditarCategoria from '../components/private/tables/categorias-productos/EditarCategoria';
import AgregarProducto from '../components/private/tables/categorias-productos/AgregarProducto';
import EditarProducto from '../components/private/tables/categorias-productos/EditarProducto';
import { Welcome } from '../components/private/tables/welcome/Welcome';

export const Routing = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='admin' element={<PrivateLayout/>}>
                {/* CATEGORIAS */}
                <Route index element={<Welcome/>}/>
                <Route path='productos' element={<ListaProductos/>}/>
                <Route path='productos/agregar/categoria' element={<AgregarCategoria/>}/>
                <Route path='productos/editar/categoria/:id' element={<EditarCategoria/>}/>     
                {/* PRODUCTOS */}
                <Route path='productos/agregar/producto' element={<AgregarProducto/>}/>
                <Route path='productos/editar/producto/:id' element={<EditarProducto/>}/>
            </Route>
            <Route path='*' element={
                <>
                    <p>
                        <h1>ERROR 404</h1>
                    </p>
                </>
            } />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
    )
}
