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

  export const addCommandCopy = (payload) => dispatch => {
    dispatch({
      type:"ADD_COMMAND_COPY",
      payload: payload
    })
  }

  export const addCopyToCommand = (payload) => dispatch => {
    dispatch({
      type:"ADD_COPY_TO_COMMAND",
      payload: payload,
      
    })
  }

  // return {...state,commands: [state.commands,state.commands[action.payload1],action.payload2]};

  export const minProduct = (payload) => dispatch => {
    dispatch({
      type:"MIN_PRODUCT",
      payload: payload
    })
  }
  export const minProductCommand = (payload) => dispatch => {
    dispatch({
      type:"MIN_PRODUCT_COMMAND",
      payload: payload
    })
  }
  export const plusProduct = (payload) => dispatch => {
    dispatch({
      type:"PLUS_PRODUCT",
      payload: payload
    })
  }

  export const plusProductCommand = (payload) => dispatch => {
    dispatch({
      type:"PLUS_PRODUCT_COMMAND",
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
  export const deleteProductfromCommand = (payload) => dispatch => {
    dispatch({
      type:"DELETE_PRODUCT_FROM_COMMAND",
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

  export const setLang = (payload) => dispatch => {
    dispatch({
      type:"SET_LANG",
      payload: payload
    })
  }