import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaServidor) => {
      if (respostaServidor.ok) {
        const res = await respostaServidor.json();
        return res;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaServidor) => {
      if (respostaServidor.ok) {
        const res = await respostaServidor.json();
        return res;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

export default {
  getAll,
  getAllWithVideos,
};
