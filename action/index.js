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

  export const maxProduct = () => dispatch => {
    dispatch({
      type:"MAX_PRODUCT",
      
    })
  }

  export const minProduct = () => dispatch => {
    dispatch({
      type:"MIN_PRODUCT",
      
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