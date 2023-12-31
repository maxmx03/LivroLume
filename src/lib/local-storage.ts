export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');

    if (!serializedState) return;

    return JSON.parse(serializedState);
  } catch (error) {
    return;
  }
};

export const storeState = (state: object) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (error) {
    return;
  }
};
