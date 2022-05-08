/**
 * ## InitialState
 *
 * The fields we're concerned with
 */
 const initialState = {
    
    products: [],
    quantites: [],
    favorites: []
  };
  
  /**
   * ## Reducer function
   * @param {Object} state - initialState
   * @param {Object} action - type and payload
   */
  export default function globalReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_PRODUCT':
        return {...state,products: [...state.products,action.payload]};
      case 'MAX_PRODUCT':
        return {...state,quantites: [...state.quantites,action.payload]};
      case 'MIN_PRODUCT':
        return {...state,quantites: [...state.quantites,action.payload]};
      case 'ACTIVE_FAVORITE':
        return {...state,favorites: [...state.favorites,action.payload]};
      case 'INACTIVE_FAVORITE':
        return {...state,favorites: state.favorites.filter((item, index)=> index !== action.payload)};  
        
          
      default:
        return state;
    }
  }