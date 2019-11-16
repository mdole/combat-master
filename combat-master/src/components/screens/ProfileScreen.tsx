import React from "react";
import { View, Button, TextInput, AsyncStorage } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { Formik } from "formik";

interface ProfileScreenProps extends NavigationInjectedProps {}

interface characterValues {
  name: string;
  class: string;
  level: number;
}

const getCharacter = async () => {
  let character;
  try {
    character = await AsyncStorage.getItem("@combatMaster_character");
  } catch (e) {
    alert(`No luck on that one, here's the error: ${e}`);
  }
  console.log(`Got your character, boss. ${character}`);
  return character;
};

const retreivedCharacter = getCharacter();
const initialValues = JSON.parse(retreivedCharacter);
export class ProfileScreen extends React.Component<ProfileScreenProps> {
  static navigationOptions = {
    title: "Profile"
  };
  render() {
    const { navigate } = this.props.navigation;
    const storeCharacter = async values => {
      try {
        await AsyncStorage.setItem(
          "@combatMaster_character",
          JSON.stringify(values)
        );
      } catch (e) {
        alert(
          `oh shoot had some trouble saving that one...here's the error if you're curious ${e}`
        );
      }
      navigate("Home");
    };
    return (
      <Formik initialValues={initialValues} onSubmit={storeCharacter}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              placeholder="Character name"
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              values={values.name}
            />
            <TextInput
              placeholder="Character class"
              onChangeText={handleChange("class")}
              onBlur={handleBlur("class")}
              values={values.class}
            />
            <TextInput
              placeholder="Character level"
              onChangeTest={handleChange("level")}
              onBlur={handleBlur("level")}
              values={values.level}
            />
            <Button title="Submit" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    );
  }
}
