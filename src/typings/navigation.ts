import {NativeStackScreenProps} from '@react-navigation/native-stack';

type MainStackScreenParams = {
  Welcome: undefined;
  Home: undefined;
  RecipeDetail: {item: Recipes};
  Search: {searchString: string};
};

type ScreenProps<T extends keyof MainStackScreenParams> = React.FC<
  NativeStackScreenProps<MainStackScreenParams, T>
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainStackScreenParams {}
  }
}

export type {MainStackScreenParams, ScreenProps};
