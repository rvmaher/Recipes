import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Recipe} from './recipeAndMeal';

type MainStackScreenParams = {
  Login: undefined;
  Home: undefined;
  RecipeDetail: {item: Recipe};
  Search: {searchString: string};
};

// type ScreenProps<T extends keyof MainStackScreenParams> = React.FC<
//   NativeStackScreenProps<MainStackScreenParams, T>
// >;

// declare global {
//   namespace ReactNavigation {
//     interface RootParamList extends MainStackScreenParams {}
//   }
// }

// export type {MainStackScreenParams, ScreenProps};
