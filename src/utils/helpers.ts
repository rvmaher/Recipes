const randomNumber = (number: number, id: string) => {
  return Math.ceil(Number(id) % number);
};

const DIFFICULTIES = ['Easy', 'Medium', 'Hard'];

const getStat = (text: string, range: number, id: string) => {
  let statText = !text
    ? DIFFICULTIES[randomNumber(range, id)]
    : randomNumber(range, id) + '\n' + text;
  return statText;
};

export {getStat};
