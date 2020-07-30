import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

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
    const { getAttribute, value } = event.target;
    setValue(
      getAttribute('name'), 
      value
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

        <div>
          <label>
            Nome da Categoria:
          <input
              type="text"
              value={values.nome}
              name="nome"
              onChange={handleChanges}
            />
          </label>
        </div>
        <div>
          <label>
            Descricao:
          <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChanges}
            />
          </label>
        </div>
        <div>
          <label>
            Cor:
          <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChanges}
            />
          </label>
        </div>

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