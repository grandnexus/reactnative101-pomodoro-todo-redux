import Store from "../store/tasks";

export const initialState = Store;

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case "TASKS_ADD": {
      let tasks = state.tasks;

      if (action.data && typeof action.data === "object") {
        const task = action.data;
        tasks.push(task);
      }

      return {
        ...state,
        error: null,
        loading: false,
        tasks
      };
    }
    case "TASKS_SINGLE_UPDATE": {
      let tasks = state.tasks;

      if (action.data && typeof action.data === "object") {
        const task = action.data;
        const index = tasks.findIndex(item => item.id === task.id);
        tasks[index] = task;
      }

      return {
        ...state,
        error: null,
        loading: false,
        tasks
      };
    }
    case "TASKS_SINGLE_DELETE": {
      let tasks = state.tasks;

      if (action.data && typeof action.data === "object") {
        const task = action.data;
        const index = tasks.findIndex(item => item.id === task.id);
        tasks.splice(index, 1);
      }

      return {
        ...state,
        error: null,
        loading: false,
        tasks
      };
    }
    case "TASKS_RESET": {
      return initialState;
    }
    default:
      return state;
  }
}
