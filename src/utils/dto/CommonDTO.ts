import {RouteProp} from '@react-navigation/native';

//Add Stack Screen Here
export type AppStackParamList = {
  HomeScreen: undefined;
  PuzzleScreen: {topic: CategoryOptions};
  ThankyouScreen: {points: number; total: number};
  LeaderShipScreen: undefined;
};

export type CategoryOptions = 'animals' | 'countries' | 'fruits';

export type ManageParamProps<RouteName extends keyof AppStackParamList> =
  RouteProp<AppStackParamList, RouteName>;

export interface IAppContext {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}
