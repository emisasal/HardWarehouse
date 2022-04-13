import { useState } from "react"

const useInputEdit = data => {
  const [value, setValue] = useState(data)

  const onChange = event => {
    setValue(event.target.value)
  }

  return { value, onChange, setValue }
}

export default useInputEdit
