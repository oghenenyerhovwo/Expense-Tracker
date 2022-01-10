import {
    GET_ITEMS,
    GET_ITEMS_RESPONSE,
    ADD_ITEM,
    ADD_ITEM_RESPONSE,
    GET_ITEM_RESPONSE,
    UPDATE_ITEM,
    UPDATE_ITEM_RESPONSE,
    DELETE_ITEM,
    DELETE_ITEM_RESPONSE,
    CLEAR_RESPONSE,
    SET_TOGGLE,
} from "../actions/type.js"

const initialState={
    items: [],
    item: {},
    isLoading: true,
    alertMessage: "",
    alertVariant: "",
    showAlert: false,
    toggleModal: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case  GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        isLoading: false,
      };

    case  ADD_ITEM:
      return {
        ...state,
        items: [ action.payload, ...state.items],
        isLoading: false,
      };
    
    case UPDATE_ITEM:
      return{
        ...state,
        items: state.items.map((original) => {
          if (original._id === action.payload._id){
            return action.payload
          }
          return original
        }),
        isLoading: false,
      }

    case  DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(({_id}) => _id !== action.payload),
        isLoading: false,
      };
    case GET_ITEMS_RESPONSE:
    case ADD_ITEM_RESPONSE:
    case GET_ITEM_RESPONSE:
    case UPDATE_ITEM_RESPONSE:
    case DELETE_ITEM_RESPONSE:
      return {
        ...state,
        alertMessage: action.payload.responseMessage,
        alertVariant: action.payload.responseColor,
        showAlert: true,
      };
    case CLEAR_RESPONSE:
      return {  
        ...state,
        alertMessage: "",
        alertVariant: "",
        showAlert: false,
      }
    
    case SET_TOGGLE:
      return {
        ...state,
        toggleModal: !state.toggleModal
      }
     
    default:
      return state;
  }
}