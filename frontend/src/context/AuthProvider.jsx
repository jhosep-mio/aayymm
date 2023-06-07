// import React from 'react';
import { useState,useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Global } from './../helper/Global';
// import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({});
    const [loading] = useState(true);
    const [cart, setCart] = useState([]);
    const [search, setSearch] = useState('');

    const navigate = useNavigate();

    const onSeachChange = ({target}) =>{
        navigate("/search");
        setSearch(target.value);
    }

    const addProduct = (item, newCantidad) =>{
        const {cantidad = 0} = cart.find((prod => prod.id === item.id)) || {};
        const newCart = cart.filter(prod => prod.id !== item.id);
        setCart([...newCart, {...item, cantidad: cantidad + newCantidad}]);
        localStorage.setItem('cart', JSON.stringify([...newCart, {...item, cantidad: cantidad + newCantidad}]));
    }

    const removeItemFromCart = (item) => {
        setCart((prevCart) => {
            const updatedCart = [...prevCart];
            const index = updatedCart.findIndex((cartItem) => cartItem.id === item.id);
            if (index !== -1) {
            updatedCart.splice(index, 1);
            }
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    const decreaseItemQuantity = (item) => {
        setCart((prevCart) => {
          const updatedCart = [...prevCart];
          const index = updatedCart.findIndex((cartItem) => cartItem.id === item.id);
          if (index !== -1) {
            if (updatedCart[index].cantidad === 1) {
              updatedCart.splice(index, 1);
            } else {
              updatedCart[index].cantidad--;
            }
          }
          localStorage.setItem('cart', JSON.stringify(updatedCart)); // Actualizar el almacenamiento local
          return updatedCart;
        });
    };

    const increaseItemQuantity = (item) => {
        setCart((prevCart) => {
          const updatedCart = [...prevCart];
          const index = updatedCart.findIndex((cartItem) => cartItem.id === item.id);
          if (index !== -1) {
            updatedCart[index].cantidad++;
          }
          localStorage.setItem('cart', JSON.stringify(updatedCart)); // Actualizar el almacenamiento local
          return updatedCart;
        });
    };

    // const authUser = async() =>{
    //     //SACAR DATOS DEL USUARIO IDENTIFICADO DEL LOCALSTORAGE
    //     let token = localStorage.getItem("token");
    //     let user = localStorage.getItem("user");

    //     //COMPROBRAR SI TENGO EL TOKEN Y EL USER
    //     if(!token || !user){
    //         setLoading(false);
    //         return false;
    //     }

    //     //PETICION AJAX AL BACKEND QUE COMPRUEBE EL TOKEN Y QUE RETORNE DATOS DEL USER
    //     let respuesta= await axios.get(`${Global.url}/user-profile`, {
    //         headers:{
    //             'Authorization': `Bearer ${token}`
    //         }
    //     });

    //     //SETEAR LOS DATOS
    //     setAuth(respuesta.data.user);
    //     setLoading(false);
    // }

    const calculateItemSubtotal = (item) => {
        return item.precio * item.cantidad;
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + calculateItemSubtotal(item), 0);
    };

    // useEffect(()=>{
    //     authUser();
    // }, []);
    useEffect(() => {
        // Recuperar el carrito del almacenamiento local cuando la página se cargue
        const storedCart = JSON.parse(localStorage.getItem('cart'));
        if (storedCart) {
            setCart(storedCart);
        }
    }, []);


  return (
        <AuthContext.Provider value={{
                auth,
                setAuth,
                loading,
                cart,
                setCart,
                addProduct,
                removeItemFromCart,
                decreaseItemQuantity,
                increaseItemQuantity,
                calculateItemSubtotal,
                calculateTotal,
                search,
                setSearch,
                onSeachChange
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
