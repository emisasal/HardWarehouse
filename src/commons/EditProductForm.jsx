import { TextareaAutosize } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"

import { editOneProduct } from "../store/products"

import useInputEdit from "../hooks/useInputEdit"
import { Link } from "react-router-dom"

const EditProductForm = () => {
  const editProduct = useSelector(state => state.products.singleProduct)
  const title = useInputEdit(editProduct.title)
  const category = useInputEdit(editProduct.category)
  const details = useInputEdit(editProduct.details)
  const image = useInputEdit(editProduct.image)
  const price = useInputEdit(editProduct.price)
  const stock = useInputEdit(editProduct.stock)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()

    await dispatch(
        editOneProduct({
        id: editProduct._id,
        title: title.value,
        category: category.value,
        stock: parseInt(stock.value),
        price: parseInt(price.value),
        image: image.value,
        details: details.value,
      })
    )
      navigate("/admin/administrador")
  }

  return (
    <>
      <div className="loginContainer">
        <h2>EDITAR PRODUCTO</h2>
        <form className="logForm" onSubmit={handleSubmit}>
          <input
            className="logInputs"
            {...title}
            type="text"
            placeholder="Titulo"
          />

          <label for="category"></label>
          <select
            className="logInputs"
            name="category"
            {...category}
            type="text"
          >
            <option value="">- Categoria -</option>
            <option value="componentes">Componentes</option>
            <option value="equipos armados">Equipos Armados</option>
            <option value="notebooks">Notebooks</option>
            <option value="monitores">Monitores</option>
            <option value="perifericos">Perifericos</option>
          </select>

          <input
            className="logInputs"
            {...price}
            type="number"
            placeholder="Precio"
          />

          <TextareaAutosize
            className="logInputs"
            {...details}
            type="text"
            placeholder="Descripción"
            minRows={3}
          />

          <input
            className="logInputs"
            {...image}
            type="text"
            placeholder="url imagen"
          />

          <input
            className="logInputs"
            {...stock}
            type="number"
            placeholder="Stock"
          />

          <button className="logBtn" type="submit">
            EDITAR
          </button>

          <div></div>
          <Link to="/admin/administrador">
          <button className="logBtn">
            CANCELAR
          </button>
          </Link>
          
        </form>
      </div>
    </>
  )
}

export default EditProductForm
