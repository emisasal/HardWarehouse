import { TextareaAutosize } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"

import { postProduct } from "../store/products"
import tagFunction from "../utils/tagsFunction"

import useInput from "../hooks/useInput"

const AdminProductForm = () => {
    const author =  useSelector(state => state.user.data.data)
    const title = useInput("title")
    const category = useInput("category")
    const details = useInput("details")
    const image = useInput("image")
    const price = useInput("price")
    const stock = useInput("stock")
    const tag1 = useInput("tag1")

  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    const tags = tagFunction(tag1.value)

    dispatch(
      postProduct({
        title: title.value,
        author: author.fullName,
        category: category.value,
        stock: parseInt(stock.value),
        price: parseInt(price.value),
        image: image.value,
        details: details.value,
        tags,
      })
    )
    title.setValue("")
    category.setValue("")
    details.setValue("")
    image.setValue("")
    price.setValue("")
    stock.setValue("")
    tag1.setValue("")
  }

  return (
    <>
      <div className="loginContainer">
        <h2>AGREGAR NUEVO PRODUCTO</h2>
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

          <input
            className="logInputs"
            {...tag1}
            type="text"
            placeholder="Tags (sin espacios separados por comas)"
          />

          <button className="logBtn" type="submit">
            AGREGAR
          </button>

          <div></div>
        </form>
      </div>
    </>
  )
}

export default AdminProductForm
