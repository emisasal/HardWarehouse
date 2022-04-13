import React from 'react'
import {

    Button,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemText,
    Typography,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router';
import { editOneProduct, getSingleProduct } from '../store/products';
import { alertCheckout } from '../utils/alerts';
import { buyCart } from "../store/user";




function Checkout() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cart = useSelector((state) => state.user.data.data.carrito);
    const user = useSelector((state) => state.user.data.data);
    const productoSingular = useSelector((state) => state.products.singleProduct)

    const addition = (acc, currentvalue) => {
        return acc + currentvalue.price * currentvalue.cantidad;
    };
    const total = cart.reduce(addition, 0);




    const comprarHandle = () => {

        cart.map(product => {
            let idProducto = product.product
            dispatch(getSingleProduct(idProducto))
            let nuevoStock = productoSingular.stock - product.cantidad
            dispatch(editOneProduct({
                id: idProducto,
                stock: parseInt(nuevoStock)
            }))    
        })
        
        alertCheckout()
        
        dispatch(buyCart({id:user._id}))
        
        navigate("/carrito")
        

    }

    return (
        <div>



            <Grid
                container
                sx={{ margin: "20px 0px", alignItems: "center", color: "#13ffd5", justifyContent: "center" }}
            >
                <Grid item xs={6}>
                    <Typography variant="h4" component="div" gutterBottom>
                        Genial {user.fullName}!, ya estas a punto de concluir tu compra.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container sx={{ width: "60%", margin: "0 auto", backgroundColor: "rgb(231, 231, 231)", borderRadius: "8px", justifyContent: "center" }}>

                <Grid item xs={12}>
                    <Typography variant="h5" component="div" gutterBottom>

                        Ultimos requisitos:
                        <Divider />
                    </Typography>
                </Grid>

                <Grid item xs={12}>

                    <Grid container sx={{ justifyContent: "center", }}>
                        <Grid item xs={8}>
                            <Typography variant="subtitle2" component="div" gutterBottom>

                                informacion personal
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Grid container spacing={3} sx={{ justifyContent: "left" }}>
                                <form className="logForm" >
                                    <Grid item xs={12}>

                                        <input
                                            className="logInputs"
                                            type="text"
                                            value={user.fullName}
                                            placeholder="Nombre Completo"
                                        />

                                    </Grid>
                                    <Grid item xs={12}>
                                        <input
                                            className="logInputs"
                                            type="text"
                                            placeholder="Dirección de envio"
                                        />
                                        <input
                                            className="logInputs"
                                            type="number"
                                            placeholder="Codigo Postal"
                                        />
                                    </Grid>
                                    <input
                                        className="logInputs"
                                        value={user.email}
                                        type="email"
                                        placeholder="Email"
                                    />

                                </form>
                            </Grid>
                        </Grid>
                        <Grid item xs={8} >
                            <Typography variant="subtitle2" component="div" gutterBottom>
                                Datos del metodo de pago Tarjeta
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Grid container spacing={3} sx={{ justifyContent: "left" }}>
                                <form className="logForm" >
                                    <input
                                        className="logInputs"
                                        type="number"
                                        placeholder="Numero de la tarjeta"
                                    />
                                    <Grid item xs={12}>

                                        <input
                                            className="logInputs"
                                            type="text"
                                            placeholder="Nombre que figura en tarjeta"
                                        />
                                        <input
                                            className="logInputs"
                                            type="text"
                                            placeholder="Apellido que figura en tarjeta"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>

                                        <input
                                            className="logInputs"
                                            type="text"
                                            placeholder="Codigo de seguridad"
                                        />
                                        <input
                                            className="logInputs"
                                            type="date"
                                            placeholder="Vencimiento"
                                        />
                                    </Grid>
                                </form>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Grid container sx={{ justifyContent: "center" }}>
                        <Grid item xs={8} sx={{ backgroundColor: "white" }} >
                            <List >

                                <ListItemText
                                    sx={{ textAlign: "center" }}
                                    primary="Lista de productos finales"

                                />
                                <Divider />

                                <ListItem>
                                    <ListItemText
                                        primary="producto"
                                    />
                                    <ListItemText
                                        sx={{ textAlign: "right" }}
                                        primary="subtotal"
                                    />
                                </ListItem>
                                <Divider />

                                {cart.map(product => {
                                    return (
                                        <ListItem>
                                            <ListItemText
                                                secondary={`${product.title} x ${product.cantidad} `}
                                            />
                                            <ListItemText
                                                sx={{ textAlign: "right" }}
                                                secondary={product.price * product.cantidad}
                                            />
                                        </ListItem>
                                    )
                                })}
                                <Divider />
                                <ListItem>
                                    <ListItemText
                                        primary="Total a pagar"
                                    />
                                    <ListItemText
                                        sx={{ textAlign: "right" }}
                                        primary={total}
                                    />
                                </ListItem>
                            </List>
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={2}>
                    <Button
                        onClick={() => {comprarHandle() }}
                        variant="contained"
                        size="large"
                        sx={{
                            textDecoration: "none",
                            backgroundColor: "#13ffd5",
                            marginBottom: "20px",
                            color: "black",
                        }}
                    >
                        Comprar
                    </Button>
                </Grid>

            </Grid>
        </div>
    )
}

export default Checkout