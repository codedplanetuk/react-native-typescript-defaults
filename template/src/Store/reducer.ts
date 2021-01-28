import api from "../Services";

interface IAction {
  type: any;
  payload?: any;
}

interface IState {
  randomNumber: number;
  randomText: string;
}

// Store
function appReducer(state: IState, action: IAction) {
  switch (action.type) {
    case "GET_RANDOM_NUMBER":
      return {...state, randomNumber: Math.random()};
    case "GET_RANDOM_TEXT":
      return {...state, randomText: action.payload};
    default:
      return state;
  }
}

// Action - async example
const networkAction = async (dispatch: any) => {
  try {
    const response = await api.get("");
    dispatch({type: "GET_RANDOM_TEXT", payload: response.data.token});
  } catch (error) {
    dispatch({type: "GET_RANDOM_TEXT", payload: "API error"});
  }
};

export {appReducer, networkAction};
