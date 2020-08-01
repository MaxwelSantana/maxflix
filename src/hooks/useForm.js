import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function clearForm() {
    setValues(valoresIniciais);
  }

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChanges(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  return {
    clearForm,
    handleChanges,
    values,
  };
}

export default useForm;
