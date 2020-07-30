import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  };

  const [values, setValues] = useState(valoresIniciais);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value
    });
  }

  function handleChanges(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria {values.nome}</h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);

        setValues(valoresIniciais);
      }}>

        <FormField
          label="Nome da Categoria"
          type="text"
          value={values.nome}
          name="nome"
          onChange={handleChanges}
        />

        <FormField
          label="Descricao:"
          type="textarea"
          value={values.descricao}
          name="descricao"
          onChange={handleChanges}
        />

        <FormField
          label="Cor"
          type="color"
          value={values.cor}
          name="cor"
          onChange={handleChanges}
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {
          categorias.map((categoria, index) => {
            return (
              <li key={`${categoria.nome}${index}`}>{categoria.nome}</li>
            )
          })
        }
      </ul>
      <Link to="/">
        Ir para home
        </Link>

    </PageDefault>
  );
}

export default CadastroCategoria;