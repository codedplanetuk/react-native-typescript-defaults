import React from "react";
import {Text, View, StyleSheet} from "react-native";

interface IProps {
  randomNumber: string;
  randomText: string;
  action: () => void;
}

const Hero = (props: IProps) => {
  return (
    <>
      <Text style={styles.text}>{props.randomNumber}</Text>
      <Text style={styles.text}>{props.randomText}</Text>
      <Text style={styles.text} onPress={props.action}>
        CLICK TO REFRESH
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  text: {color: "#000", fontSize: 18, fontWeight: "bold"},
});

export default Hero;
