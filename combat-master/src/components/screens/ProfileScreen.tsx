import React, { useEffect, useState } from "react";
import { View, Button, TextInput, AsyncStorage, Text } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { Formik } from "formik";

interface ProfileScreenProps extends NavigationInjectedProps {}

interface characterValues {
  name: string;
  class: string;
  level: number;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = props => {
  const { navigate } = props.navigation;

  const storeCharacter = async (values: characterValues) => {
    console.log("Starting to set your character...");
    console.log(`Values: ${values}`);
    try {
      await AsyncStorage.setItem(
        "@combatMaster_character",
        JSON.stringify(values)
      );
      console.log(
        `Set that character for you, boss! Here are the values: ${JSON.stringify(
          values
        )}`
      );
    } catch (e) {
      alert(
        `oh shoot had some trouble saving that one...here's the error if you're curious ${e}`
      );
    }
    navigate("Home");
  };

  const getCharacter = async key => {
    let character;
    try {
      character = await AsyncStorage.getItem(key);
      console.log(`Got your character, boss. ${character}`);
      return character;
    } catch (e) {
      alert(`No luck on that one, here's the error: ${e}`);
    }
    return;
  };

  const [character, setCharacter] = useState();

  useEffect(() => {
    async function putCharacterInState() {
      const newCharacter = await getCharacter("@combatMaster_character");
      setCharacter(newCharacter);
    }
    putCharacterInState();
  });

  const initialValues: characterValues = {
    name: "Xavier",
    class: "bard",
    level: 6
  };

  return (
    <View>
      <Text>Current character values: {character}</Text>
      <Formik
        initialValues={initialValues}
        onSubmit={storeCharacter}
        enableReinitialize
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              placeholder={values.name || "Character name"}
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              values={values.name}
            />
            <TextInput
              placeholder={values.class || "Character class"}
              onChangeText={handleChange("class")}
              onBlur={handleBlur("class")}
              values={values.class}
            />
            <TextInput
              placeholder={values.level.toString() || "Character level"}
              onChangeText={handleChange("level")}
              onBlur={handleBlur("level")}
              values={values.level}
            />
            <Button
              title="Save and return home"
              onPress={() => handleSubmit(values)}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

ProfileScreen.navigationOptions = { title: "Profile" };
