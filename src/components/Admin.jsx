import {useState, useEffect } from 'react'
import AdminProductsList from "./AdminProductsList"
import AdminProductForm from "../commons/AddProductForm"
import EditProductForm from "../commons/EditProductForm"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { useLocation } from "react-router"
import { Container, Grid, MobileStepper, Button } from "@mui/material";
import {
  Star,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";

import { getProducts } from '../store/products'

const Admin = () => {
  const editProduct = useSelector(state => state.products.singleProduct)
  const admin = useSelector(state => state.user)
  const location = useLocation()
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  const searchedProducts = useSelector((state) => state.products.search);

  
  const maxSteps = allProducts.pages;
  
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  
  useEffect(() => {
    setActiveStep(0)
     dispatch(getProducts());
    
  }, []);
  

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    dispatch(getProducts(activeStep + 2))
    
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
    dispatch(getProducts(activeStep))
  };


  return (
    <>
    {admin.logged  && admin.data.data.admin ? (
      <>
      {location.pathname === "/admin/administrador" ? <AdminProductForm /> : <EditProductForm />}
      <AdminProductsList />
      </>
    )
    : 
      (
        <>
      <h1>No tiene permisos de Administrador</h1>
      <Link to="/">IR A INICIO</Link>
        </>
      )
  }
  <Container>
  <MobileStepper
                   
                   variant="text"
                   steps={maxSteps}
                   position="static"
                   activeStep={activeStep}
                   nextButton={
                     <Button
                       size="small"
                       onClick={() => handleNext()}
                       disabled={activeStep === maxSteps - 1}
                     >
                       {theme.direction === "rtl" ? (
                         <KeyboardArrowLeft />
                       ) : (
                         <KeyboardArrowRight />
                       )}
                     </Button>
                   }
                   backButton={
                     <Button
                       size="small"
                       onClick={handleBack}
                       disabled={activeStep === 0}
                     >
                       {theme.direction === "rtl" ? (
                         <KeyboardArrowRight />
                       ) : (
                         <KeyboardArrowLeft />
                       )}
                     </Button>
                   }
                   sx={{
                     marginTop: "20px",
                     
                   }}
                 />
                 </Container>
  </>
  )
}

export default Admin
