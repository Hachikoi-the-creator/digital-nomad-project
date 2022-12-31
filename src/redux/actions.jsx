// helpter to know when the state has been updated, more fuency, less rendering problems
export const UPDATE_LOADING = "UPDATE_LOADING";

// * UPDATE_LOADING
export function updateLoading() {
  return {
    type: UPDATE_LOADING,
  };
}
