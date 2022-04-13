import { useState } from "react";

const useInputCheck = () => {
  const [value, setValue] = useState(false);

  const onChange = (event) => {
    setValue(event.target.checked);
  };

  return { value, onChange };
};

export default useInputCheck;