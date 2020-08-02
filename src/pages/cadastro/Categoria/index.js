/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChanges, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://max-heroku-json-server.herokuapp.com/categorias';

    fetch(URL)
      .then(async (res) => {
        const data = await res.json();
        setCategorias([
          ...data,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        clearForm(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          value={values.nome}
          name="nome"
          onChange={handleChanges}
        />

        <FormField
          label="Descricao"
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

        <Button>
          Cadastrar
        </Button>
      </form>

      {
        categorias.length === 0 && (
        <div>
          Loading...
        </div>
        )
      }
      <ul>
        {
          categorias.map((categoria, index) => (
            <li key={`${categoria.titulo}${index}`}>{categoria.titulo}</li>
          ))
        }
      </ul>
      <Link to="/">
        Ir para home
      </Link>

    </PageDefault>
  );
}

export default CadastroCategoria;
