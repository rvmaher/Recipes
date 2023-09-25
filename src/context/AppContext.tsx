import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';

type AppContextType = {
  user: string;
  handleUser: (user: string) => void;
  favouriteItems: {[key: string]: string};
  handleFavourites: (id: string) => void;
};
export const AppContext = createContext<AppContextType>({
  user: '',
  handleUser: () => {},
  favouriteItems: {},
  handleFavourites: () => {},
});

const AppProvider = ({children}: {children: JSX.Element}) => {
  const [user, setUser] = useState<string>('');
  const [favouriteItems, setFavouriteItems] = useState<{[key: string]: string}>(
    {},
  );

  const handleFavourites = async (mealId: string) => {
    if (mealId in favouriteItems) {
      delete favouriteItems?.[mealId];
      setFavouriteItems({...favouriteItems});
    } else {
      setFavouriteItems(p => ({...p, [mealId]: mealId}));
    }
    await AsyncStorage.setItem('favs', JSON.stringify(favouriteItems));
  };
  const getUser = async () => {
    const _user = await AsyncStorage.getItem('user');
    if (_user) {
      setUser(_user);
      const _favs = await AsyncStorage.getItem('favs');
      if (_favs) setFavouriteItems(JSON.parse(_favs));
    }
  };
  const handleUser = async (name: string) => {
    setUser(name);
    await AsyncStorage.setItem('user', name);
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <AppContext.Provider
      value={{user, handleUser, favouriteItems, handleFavourites}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
