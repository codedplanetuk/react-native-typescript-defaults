import React, {useEffect, useReducer} from "react";
import {View, StatusBar} from "react-native";
import {appReducer, networkAction} from "./Store/reducer";
import Home from "./Containers/Home";

const App = () => {
  const [state, dispatch] = useReducer(appReducer, {
    randomNumber: 0,
    randomText: "loading...",
  });

  useEffect(() => {
    // First load or when random number changes
    networkAction(dispatch);
  }, [state.randomNumber]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{flex: 1}}>
        <Home
          randomNumber={`${state.randomNumber}`}
          randomText={state.randomText}
          action={() => dispatch({type: "GET_RANDOM_NUMBER"})}
        />
      </View>
    </>
  );
};

export default App;
