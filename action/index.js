// export const addProduct = (payload)=>{
// 'ADD_PRODUCT',
// payload
// }


export const addProduct = (payload) => dispatch => {
    dispatch({
      type:"ADD_PRODUCT",
      payload: payload
    })
  }

  export const addQuantity = (payload) => dispatch => {
    dispatch({
      type:"ADD_QUANTITY",
      payload: payload
    })
  }

  export const minProduct = (payload) => dispatch => {
    dispatch({
      type:"MIN_PRODUCT",
      payload: payload
    })
  }
  export const plusProduct = (payload) => dispatch => {
    dispatch({
      type:"PLUS_PRODUCT",
      payload: payload
    })
  }

  export const activeFavorite = (payload) => dispatch => {
    dispatch({
      type:"ACTIVE_FAVORITE",
      payload: payload
    })
  }

  export const inactiveFavorite = (payload) => dispatch => {
    dispatch({
      type:"INACTIVE_FAVORITE",
      payload: payload
    })
  }

  export const setFavorisTrue = () => dispatch => {
    dispatch({
      type:"SET_FAVORIS_TRUE",
      
    })
  }
  export const setFavorisFalse = () => dispatch => {
    dispatch({
      type:"SET_FAVORIS_FALSE",
      
    })
  }
  export const initializeProducts = () => dispatch => {
    
    dispatch({
      type:"INITIALIZE_PRODUCTS",
      
    })
  }
  export const initializeQuantites = () => dispatch => {
    console.log("initialize");
    dispatch({
      type:"INITIALIZE_PRODUCTS",
      
    })
  }
  export const deleteProduct = (payload) => dispatch => {
    dispatch({
      type:"DELETE_PRODUCT",
      payload: payload
    })
  }
  export const deleteQuantity = (payload) => dispatch => {
    dispatch({
      type:"DELETE_QUANTITY",
      payload: payload
    })
  }


  export const addCommand = (payload) => dispatch => {
    dispatch({
      type:"ADD_COMMAND",
      payload: payload
    })
  }