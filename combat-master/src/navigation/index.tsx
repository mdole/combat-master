import {
  HomeScreen,
  ProfileScreen,
  MainCombatActionScreen,
  ActionScreen,
  BonusActionScreen,
  MoveScreen,
} from "../screens";

export const Screens = {
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
  MainCombatAction: { screen: MainCombatActionScreen },
  Action: { screen: ActionScreen },
  Move: { screen: MoveScreen },
  BonusAction: { screen: BonusActionScreen },
};

export const initialRouteName = "Home";
