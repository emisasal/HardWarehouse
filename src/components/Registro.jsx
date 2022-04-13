import React from "react"
import useInput from "../hooks/useInput"
import useInputCheck from "../hooks/useInputCheck"

import { useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { sendRegisterRequest } from "../store/user"

const Registro = () => {
  const user = useSelector(state => state.user.data)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const fullName = useInput()
  const email = useInput()
  const password = useInput()
  const check = useInputCheck()

  const handleSubmit = event => {
    event.preventDefault()

    dispatch(
      sendRegisterRequest({
        fullName: fullName.value,
        email: email.value,
        password: password.value,
        admin: check.value
      })
    )
    alert("Registro exitoso")
    navigate("/login")
    console.log(user)
    }
  return (
    <div className="loginContainer">
      <h2>Registrarme</h2>
      <form className="logForm" onSubmit={handleSubmit}>
        <input
          className="logInputs"
          {...fullName}
          type="text"
          placeholder="Ingresá tu nombre completo."
        />
        <input
          className="logInputs"
          {...email}
          type="text"
          placeholder="Ingresá un email."
        />
        <input
          className="logInputs"
          {...password}
          type="password"
          placeholder="Definí una contraseña."
        />
        <label>
          <input
            {...check}
            className="logInputs"
            type="checkbox"
            placeholder="Definí una contraseña."
   
          />
          Administrador
        </label>
        <button className="logBtn" type="submit">
          REGISTRARME
        </button>
      </form>
    </div>
  )
}

export default Registro
