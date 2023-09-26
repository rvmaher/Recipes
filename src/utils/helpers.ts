const fetchApi = async (url: string) => {
  try {
    const resp = await fetch(url);
    const result = await resp.json();
    return Promise.resolve(result.meals);
  } catch (err) {
    return Promise.reject(err);
  }
};

export {fetchApi};
