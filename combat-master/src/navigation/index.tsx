import {
  ActionScreen,
  BonusActionScreen,
  HomeScreen,
  InputBonusActionsScreen,
  MainCombatActionScreen,
  MoveScreen,
  ProfileScreen,
} from "../screens";

export const Screens = {
  Action: { screen: ActionScreen },
  BonusAction: { screen: BonusActionScreen },
  Home: { screen: HomeScreen },
  InputBonusActionsScreen: { screen: InputBonusActionsScreen },
  MainCombatAction: { screen: MainCombatActionScreen },
  Move: { screen: MoveScreen },
  Profile: { screen: ProfileScreen },
};

export const initialRouteName = "Home";
