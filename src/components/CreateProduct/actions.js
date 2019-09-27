import { STORE_PRODUCT } from "./types";

export const storeProduct = params => async dispatch => {
  const { REACT_APP_BACKEND_URL: backendUrl } = process.env;

  const response = await fetch(`${backendUrl}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(params)
  });

  try {
    if (response.ok) {
      const result = await response.json();

      return dispatch({
        type: STORE_PRODUCT,
        status: result.status,
        error: result.message
      });
    }
    throw response;
  } catch (error) {
    return dispatch({ type: STORE_PRODUCT, status: "ERROR", error });
  }
};
