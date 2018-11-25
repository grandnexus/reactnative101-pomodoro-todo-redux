export function addTask(formData) {
  return dispatch =>
    new Promise((resolve) => {
      return resolve(
        dispatch({
          type: 'TASKS_ADD',
          data: formData,
        }));
    }).catch(async error => {
      throw error.message;
    });
}

export function updateTask(formData) {
  return dispatch =>
    new Promise((resolve) => {
      return resolve(
        dispatch({
          type: 'TASKS_SINGLE_UPDATE',
          data: formData,
        }));
    }).catch(async error => {
      throw error.message;
    });
}

export function deleteTask(formData) {
  return dispatch =>
    new Promise((resolve) => {
      return resolve(
        dispatch({
          type: 'TASKS_SINGLE_DELETE',
          data: formData,
        }));
    }).catch(async error => {
      throw error.message;
    });
}