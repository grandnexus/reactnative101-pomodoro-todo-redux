import Store from "../store/tasks";

export const initialState = Store;

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case "TASKS_ADD": {
      // fill in the blanks
    }
    case "TASKS_SINGLE_UPDATE": {
      // fill in the blanks
    }
    case "TASKS_SINGLE_DELETE": {
      // fill in the blanks
    }
    case "TASKS_RESET": {
      return initialState;
    }
    default:
      return state;
  }
}
