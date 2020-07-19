import React, { useEffect, useState } from "react";
import { View, AsyncStorage, StyleSheet } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { updateCharacter } from "../store/actions/characterActions";
import { LatoLight } from "../components/styledComponents/FontComponents";
import { parchment } from "../styles/colors";
import styled from "styled-components/native";
import { FinishedButton } from "../components/FinishedButton";
import RNPickerSelect from "react-native-picker-select";

export interface ProfileScreenProps {
  currentCharacterValues: CharacterValues;
}

type InternalProfileScreenProps = NavigationInjectedProps<ProfileScreenProps>;

export interface CharacterValues {
  name: string;
  class: string;
  level: number;
  race: string;
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
  const [classes, setClasses] = useState([]);
  const [races, setRaces] = useState([]);

  // Fetch race and class data from external API
  useEffect(() => {
    try {
      //~~CLASSES~~
      const getClasses = async () => {
        let response = await fetch("https://www.dnd5eapi.co/api/classes");
        let json = await response.json();
        return json;
      };

      getClasses().then((data) =>
        setClasses(
          data.results.map((item) => {
            return item.name;
          })
        )
      );

      //~~RACES~~
      const getRaces = async () => {
        let response = await fetch("https://www.dnd5eapi.co/api/races");
        let json = await response.json();
        return json;
      };

      getRaces().then((data) =>
        setRaces(
          data.results.map((item) => {
            return item.name;
          })
        )
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

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
              <Label size={"20"}>Character Race:</Label>
              <RNPickerSelect
                style={pickerSelectStyles}
                useNativeAndroidPickerStyle={false}
                value={values.race}
                onValueChange={handleChange("race")}
                placeholder={{ label: "Select a race", value: "placeholder" }}
                items={races.map((raceName) => {
                  return { label: raceName, value: raceName };
                })}
              />

              <Label size={"20"}>Character Class:</Label>
              <RNPickerSelect
                style={pickerSelectStyles}
                useNativeAndroidPickerStyle={false}
                value={values.class}
                onValueChange={handleChange("class")}
                placeholder={{ label: "Select a class", value: "placeholder" }}
                items={classes.map((className) => {
                  return { label: className, value: className };
                })}
              />
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

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    color: "#000",
    backgroundColor: "#fff",
    textAlign: "center",
    borderColor: "black",
    borderWidth: 1,
    padding: 20,
    marginBottom: 20,
    fontSize: 20,
    fontFamily: "Cinzel_400Regular",
  },
  inputAndroid: {
    color: "#000",
    backgroundColor: "#fff",
    textAlign: "center",
    borderColor: "black",
    borderWidth: 1,
    padding: 20,
    marginBottom: 20,
    fontSize: 20,
    fontFamily: "Cinzel_400Regular",
  },
});

ProfileScreen.navigationOptions = { title: "Profile" };
