export type IState = {
  temperature: number;
};

export type IAction = { type: string; payload?: {} };

const temperatureReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "INCREASE_TEMPERATURE":
      return { ...state, temperature: state.temperature + 1 };
    case "FETCH_SUCCESS":
      return { ...state };
    default:
      return { ...state };
  }
};

export default temperatureReducer;
