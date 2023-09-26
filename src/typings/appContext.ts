export type AppContextType = {
  user: string;
  handleUser: (user: string) => void;
  favouriteItems: {[key: string]: string};
  handleFavourites: (id: string) => void;
};
