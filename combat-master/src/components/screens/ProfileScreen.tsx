import React from "react";
import { View, Button, TextInput } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { Formik } from "formik";

interface ProfileScreenProps extends NavigationInjectedProps {}

interface characterValues {
  name: string;
  class: string;
  level: number;
}

const initialValues: characterValues = {
  name: "Xavier Xiloscient",
  class: "Bard",
  level: 1
};
export class ProfileScreen extends React.Component<ProfileScreenProps> {
  static navigationOptions = {
    title: "Profile"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={values => alert(JSON.stringify(values))}
      >
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
