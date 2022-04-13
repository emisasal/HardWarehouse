import { useState } from "react"

const useInputNumber = () => {
  const [value, setValue] = useState(null)

  const onChange = event => {
    setValue(event.target.value)
  }

  return { value, onChange, setValue}
}

export default useInputNumber
