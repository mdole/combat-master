import React from "react";
import { View, AsyncStorage, Picker } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { updateCharacter } from "../store/actions/characterActions";
import { LatoLight } from "../components/styledComponents/FontComponents";
import { parchment } from "../styles/colors";
import styled from "styled-components/native";
import { FinishedButton } from "../components/FinishedButton";

export interface ProfileScreenProps {
  currentCharacterValues: CharacterValues;
}

type InternalProfileScreenProps = NavigationInjectedProps<ProfileScreenProps>;

export interface CharacterValues {
  name: string;
  class: string;
  level: number;
}

export const DefaultCharacterKey = "@combatMaster_character";

const storeCharacter = async (values: CharacterValues) => {
  try {
    await AsyncStorage.setItem(DefaultCharacterKey, JSON.stringify(values));
  } catch (e) {
    alert(`oh shoot had some trouble saving that one...here's the error if you're curious ${e}`);
  }
};

const getStoredCharacter = async (key: string) => {
  try {
    const character = await AsyncStorage.getItem(key);
    return JSON.parse(character) as CharacterValues;
  } catch (e) {
    alert(`No luck on that one, here's the error: ${e}`);
  }
  return;
};

export const getCharacterOrPlaceholder = async (key: string, characterInState: CharacterValues) => {
  const storedCharacter = await getStoredCharacter(key);
  return storedCharacter || characterInState;
};

const StyledView = styled.View`
  background-color: ${parchment};
  width: 90%;
  height: 90%;
  margin: 5%;
  align-items: center;
  justify-content: space-between;
`;

const FormContainer = styled.View`
  width: 90%;
  margin-top: 20px;
`;

const Label = styled(LatoLight)`
  margin-bottom: 5%;
`;

const StyledInput = styled.TextInput`
  color: #000;
  background-color: #fff;
  text-align: center;
  border: black 1px solid;
  padding: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  font-family: Cinzel_400Regular;
`;

export const ProfileScreen: React.FC<InternalProfileScreenProps> = (props) => {
  const { navigate } = props.navigation;
  const state = useSelector((state) => state.characterReducer);
  const currentCharacter = state;
  const dispatch = useDispatch();

  const classes: string[] = [
    "Barbarian",
    "Bard",
    "Cleric",
    "Druid",
    "Fighter",
    "Monk",
    "Paladin",
    "Ranger",
    "Rogue",
    "Sorcerer",
    "Warlock",
    "Wizard",
  ];

  const submit = (values: CharacterValues) => {
    storeCharacter(values);
    dispatch(updateCharacter(values));
    navigate("Home");
  };

  return (
    <View>
      <Formik initialValues={currentCharacter} onSubmit={submit} enableReinitialize>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <StyledView>
            <FormContainer>
              <Label size={"20"}>Character Name:</Label>
              <StyledInput
                placeholder={values.name || "Name"}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
              />
              <Label size={"20"}>Character Level:</Label>
              <StyledInput
                placeholder={values.level.toString() || "Level"}
                onChangeText={handleChange("level")}
                onBlur={handleBlur("level")}
                value={values.level.toString()}
                keyboardType={"numeric"}
              />
              <Label size={"20"}>Character Class:</Label>
              <Picker selectedValue={values.class} onValueChange={handleChange("class")}>
                {classes.map((className) => {
                  return <Picker.Item label={className} value={className} key={className} />;
                })}
              </Picker>
            </FormContainer>
            <FinishedButton
              onPress={() => {
                handleSubmit(values);
              }}
            />
          </StyledView>
        )}
      </Formik>
    </View>
  );
};

ProfileScreen.navigationOptions = { title: "Profile" };
