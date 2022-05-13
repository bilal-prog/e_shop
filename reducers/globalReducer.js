/**
 * ## InitialState
 *
 * The fields we're concerned with
 */
 const initialState = {
    
    products: [],
    quantites: [],
    favorites: [],
    commands: [],
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
      case 'ADD_COMMAND':
        return {...state,commands: [...state.commands,action.payload]};

      case 'INITIALIZE_PRODUCTS':
        console.log("initialize");
        const newProducts = []
        return {...state,products: [...newProducts]};

      
      


      case 'ADD_QUANTITY':
        return {...state,quantites: [...state.quantites,action.payload]};

        
      case 'MIN_PRODUCT':
        // let temp_quantites = [...state.quantites]
        
        // let temp_element_quantites = {...temp_quantites[action.payload]}

        // if (temp_element_quantites.quantityToken > 1) {
        //   temp_element_quantites.quantityToken = temp_element_quantites.quantityToken - 1
        // temp_element_quantites.quantityOrigin = temp_element_quantites.quantityOrigin + 1
        // console.log(temp_element_quantites);
        // temp_quantites[action.payload] = temp_element_quantites

        // return {...state,quantites: temp_quantites};
        // }else{
        //   return state
        // }


        ////////////////////

        const index = state.products.findIndex((el)=>el.id===action.payload);

        const newArray = [...state.products]
        newArray[index].quantityToken = newArray[index].quantityToken - 1;
        newArray[index].quantity = newArray[index].quantity + 1;

        return{...state, products: newArray};


        //////////////////////


        // return {...state,

        //   quantites: {...state.quantites,

        //     [action.payload]: {...state.quantites[action.payload],

        //       quantityToken: state.quantites[action.payload].quantityToken - 1,

        //       quantityOrigin: state.quantites[action.payload].quantityOrigin + 1}}}
        


      case 'DELETE_PRODUCT':
        let temp_products3 = [...state.products]
        
        let temp_element_products3 = {...temp_products3[action.payload]}

        let ls = temp_products3.filter((el)=>el.id !== temp_element_products3.id)

        return {...state,products: ls};



        // return{...state,
        // products: {...state.products.slice(0,action.payload),...state.products.slice(action.payload+1)}}



      case 'DELETE_QUANTITY':
        let temp_quantites3 = [...state.quantites]
        
        let temp_element_quantites3 = {...temp_quantites3[action.payload]}

        let ls2 = temp_quantites3.filter((el)=>el.productID !== temp_element_quantites3.productID)

        return {...state,quantites: ls2};




        // return{...state,
        //   quantites: {...state.quantites.slice(0,action.payload),...state.quantites.slice(action.payload+1)}}
        
        
      case 'PLUS_PRODUCT':
        // let temp_quantites2 = [...state.quantites]
        // let temp_element_quantites2 = {...temp_quantites2[action.payload]}

        // if (temp_element_quantites2.quantityOrigin > 0) {

        // temp_element_quantites2.quantityToken = temp_element_quantites2.quantityToken + 1
        // temp_element_quantites2.quantityOrigin = temp_element_quantites2.quantityOrigin - 1
        
        // console.log(temp_element_quantites2);
        // temp_quantites2[action.payload] = temp_element_quantites2
        // return {...state,quantites: temp_quantites2};
        // }else{
        //   return state;
        // }


        ///////////////////


        const index1 = state.products.findIndex((el)=>el.id===action.payload);

        const newArray1 = [...state.products]
        newArray1[index1].quantityToken = newArray1[index1].quantityToken + 1;
        newArray1[index1].quantity = newArray1[index1].quantity - 1;

        return{...state, products: newArray1};



        //////////////////


        // return {...state,

        //   products: {...state.products,

        //     [action.payload]: {...state.products[action.payload],

        //       quantityToken: state.products[action.payload].quantityToken + 1,

        //       quantity: state.products[action.payload].quantity - 1}}}


        
      case 'ACTIVE_FAVORITE':
        console.log("active: "+JSON.stringify(action.payload));
        return {...state,favorites: [...state.favorites,action.payload]};

      case 'INACTIVE_FAVORITE':
        console.log("inactive: "+action.payload);
        let temp_favorites = [...state.favorites]
        let temp_favorites_element = {...temp_favorites[action.payload]}
        const ls3 = temp_favorites.filter((el)=>el.id !== temp_favorites_element.id)
        return {...state,favorites: ls3};
        
        

        /////////////


        




        ///////////////


        // return{...state,
        //   favorites: {...state.favorites.slice(0,action.payload),...state.favorites.slice(action.payload+1)}}
        
          
      default:
        return state;
    }
  }