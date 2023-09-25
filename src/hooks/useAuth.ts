import {useContext} from 'react';
import {AppContext} from '../context/AppContext';

export default function useAuth() {
  return useContext(AppContext);
}
