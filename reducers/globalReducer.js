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
    console.log("action: "+JSON.stringify(action.payload));
    switch (action.type) {
      case 'ADD_PRODUCT':
        return {...state,products: [...state.products,action.payload]};
      case 'ADD_QUANTITY':
        return {...state,quantites: [...state.quantites,action.payload]};
      case 'MIN_PRODUCT':
        let temp_quantites = [...state.quantites]
        
        let temp_element_quantites = {...temp_quantites[action.payload]}

        if (temp_element_quantites.quantityToken > 1) {
          temp_element_quantites.quantityToken = temp_element_quantites.quantityToken - 1
        temp_element_quantites.quantityOrigin = temp_element_quantites.quantityOrigin + 1
        console.log(temp_element_quantites);
        temp_quantites[action.payload] = temp_element_quantites
        return {...state,quantites: temp_quantites};
        }else{
          return state;
        }


      case 'DELETE_PRODUCT':
        let temp_products3 = [...state.products]
        
        let temp_element_products3 = {...temp_products3[action.payload]}

        let ls = temp_products3.filter((el)=>el.id !== temp_element_products3.id)

        return {...state,products: ls};



      case 'DELETE_QUANTITY':
        let temp_quantites3 = [...state.quantites]
        
        let temp_element_quantites3 = {...temp_quantites3[action.payload]}

        let ls2 = temp_quantites3.filter((el)=>el.productID !== temp_element_quantites3.productID)

        return {...state,quantites: ls2};
        
        
      case 'PLUS_PRODUCT':
        let temp_quantites2 = [...state.quantites]
        let temp_element_quantites2 = {...temp_quantites2[action.payload]}

        if (temp_element_quantites2.quantityOrigin > 0) {

        temp_element_quantites2.quantityToken = temp_element_quantites2.quantityToken + 1
        temp_element_quantites2.quantityOrigin = temp_element_quantites2.quantityOrigin - 1
        
        console.log(temp_element_quantites2);
        temp_quantites2[action.payload] = temp_element_quantites2
        return {...state,quantites: temp_quantites2};
        }else{
          return state;
        }
        
      case 'ACTIVE_FAVORITE':
        return {...state,favorites: [...state.favorites,action.payload]};
      case 'INACTIVE_FAVORITE':
        return {...state,favorites: state.favorites.filter((item, index)=> index !== action.payload)};  
        
          
      default:
        return state;
    }
  }