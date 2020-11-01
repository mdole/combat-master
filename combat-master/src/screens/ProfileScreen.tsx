import React, { useEffect, useState } from "react";
import { AsyncStorage, StyleSheet, View } from "react-native";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { updateCharacter } from "../store/actions/characterActions";
import { LatoLight, CinzelRegular } from "../components/styledComponents/FontComponents";
import styled from "styled-components/native";
import { FinishedButton } from "../components/FinishedButton";
import RNPickerSelect from "react-native-picker-select";
import { StyledInput } from "../components/styledComponents/StyledInput";
import { BonusAction } from ".";
import { AddBonusActionButton } from "../components/AddBonusActionButton";
import { parchment } from "../styles/colors";

export interface ProfileScreenProps {
  currentCharacterValues: CharacterValues;
}

type InternalProfileScreenProps = ProfileScreenProps;

export interface CharacterValues {
  name: string;
  class: string;
  level: number;
  race: string;
  bonusActions: BonusAction[];
}

const DefaultCharacterKey = "@combatMaster_character";

export const storeCharacter = async (values: CharacterValues, characterKey = DefaultCharacterKey) => {
  try {
    await AsyncStorage.setItem(characterKey, JSON.stringify(values));
  } catch (e) {
    alert(`oh shoot had some trouble saving that one...here's the error if you're curious ${e}`);
  }
};

const getStoredCharacter = async (characterKey = DefaultCharacterKey) => {
  try {
    const character = await AsyncStorage.getItem(characterKey);
    return JSON.parse(character) as CharacterValues;
  } catch (e) {
    alert(`No luck on that one, here's the error: ${e}`);
  }
  return;
};

export const getCharacterOrPlaceholder = async (
  characterInState: CharacterValues,
  characterKey = DefaultCharacterKey
) => {
  const storedCharacter = await getStoredCharacter(characterKey);
  return storedCharacter || characterInState;
};

const FormContainer = styled.View`
  width: 100%;
  flex: 1;
  justify-content: flex-start;
`;

const Label = styled(LatoLight)`
  margin-bottom: 10px;
`;

const ProfileContainer = styled.ScrollView`
  flex: 1;
  background-color: ${parchment};
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
    <ProfileContainer contentContainerStyle={{ flexGrow: 1, margin: 10 }}>
      <Formik initialValues={currentCharacter} onSubmit={submit} enableReinitialize>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={{ flex: 1, justifyContent: "space-between", alignItems: "center" }}>
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
            <View style={{ alignItems: "center", width: "100%", flex: 5 }}>
              <AddBonusActionButton
                onPress={() => {
                  navigate("InputBonusActionsScreen");
                }}
                style={{ width: "100%" }}
              >
                <CinzelRegular size="20">Input bonus actions</CinzelRegular>
              </AddBonusActionButton>
            </View>
            <FinishedButton
              text="Save & return"
              onPress={() => {
                handleSubmit(values);
              }}
            />
          </View>
        )}
      </Formik>
    </ProfileContainer>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    color: "#000",
    backgroundColor: "#fff",
    textAlign: "center",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 2,
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
    borderRadius: 2,
    padding: 20,
    marginBottom: 20,
    fontSize: 20,
    fontFamily: "Cinzel_400Regular",
  },
});
