import Swal from "sweetalert2"

export const alertRegister = () => {
  return Swal.fire({
    position: "top-start",
    icon: "success",
    title: "El usuario ha sido registrado EXITOSAMENTE",
    // text: `Bienvenido a Hard-WAREHOUSE`,
    showConfirmButton: false,
    timer: 1500,
  })
}

export const alertLogin = fullName => {
  return Swal.fire({
    position: "top-start",
    icon: "success",
    title: "El usuario ha sido logueado con EXITO",
    text: `Bienvenido a Hard-WAREHOUSE`,

    showConfirmButton: false,
    timer: 2000,
  })
}

export const alertLogout = () => {
  return Swal.fire({
    position: "top-center",
    icon: "success",
    title: "El usuario se deslogueo EXITOSAMENTE",
    text: `adios, esperamos vuelvas pronto`,
  })
}

export const alertCheckout = () => {
  return Swal.fire(
    "Fue una compra EXITOSA!!",
    "Gracias por elegir Hard-WAREHOUSE",
    "success"
  )
}
