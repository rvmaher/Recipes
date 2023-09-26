const fetchApi = async (url: string) => {
  try {
    const resp = await fetch(url);
    const result = await resp.json();
    return Promise.resolve(result.meals);
  } catch (err) {
    return Promise.reject(err);
  }
};

const randomNumber = (number: number, id: string) => {
  return Math.ceil(Number(id) % number);
};

export {fetchApi, randomNumber};
