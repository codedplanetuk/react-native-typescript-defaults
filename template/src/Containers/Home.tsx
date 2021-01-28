import React from "react";
import Hero from "../Components/Hero";
import {View, StyleSheet} from "react-native";

interface IProps {
  randomNumber: string;
  randomText: string;
  action: () => void;
}

const Home = (props: IProps) => {
  const {randomNumber, randomText, action} = props;
  return (
    <View style={styles.container}>
      <Hero
        randomNumber={randomNumber}
        randomText={randomText}
        action={action}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
