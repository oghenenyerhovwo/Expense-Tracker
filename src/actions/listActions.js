import axios from "axios";
import {
    GET_ITEMS,
    GET_ITEMS_RESPONSE,
    ADD_ITEM,
    ADD_ITEM_RESPONSE,
    UPDATE_ITEM,
    UPDATE_ITEM_RESPONSE,
    DELETE_ITEM,
    DELETE_ITEM_RESPONSE,
    CLEAR_RESPONSE,
    SET_TOGGLE,
} from "./type"

const handleResponse = (dispatch, actionType, responseMessage, responseColor) => {
  dispatch({
    type: actionType,
    payload: {responseMessage, responseColor}
  })
  setTimeout(() => {
    dispatch({
      type:CLEAR_RESPONSE
    })
  }, 3000);
}

export const getItems = () => dispatch => {
    axios
      .get("https://expense-tracker-jr5w.onrender.com/items/")
      .then(res => {
        dispatch({
            type: GET_ITEMS,
            payload: res.data 
        })
      })
      .catch(err => {
        handleResponse(dispatch, GET_ITEMS_RESPONSE, err.message, "danger")
      });
};

export const addItem = (form) => dispatch => (
    axios
      .post("https://expense-tracker-jr5w.onrender.com/items/", form)
      .then(res => {
        dispatch({
            type: ADD_ITEM,
            payload: res.data,
        })
        handleResponse(dispatch, ADD_ITEM_RESPONSE, "Data was added successfully", "success")
      })
      .catch(err => {
        handleResponse(dispatch, ADD_ITEM_RESPONSE, err.response.data.message.details[0].message, "danger")
      })
)

export const updateItem = (form, _id) => dispatch => {
    axios
      .put("https://expense-tracker-jr5w.onrender.com/items/" + _id, form)
      .then(res => {
        dispatch({
            type: UPDATE_ITEM,
            payload: res.data,
        })
        dispatch({
          type: SET_TOGGLE,
        })
        handleResponse(dispatch, UPDATE_ITEM_RESPONSE, "Data was updated successfully", "success")
      })
      .catch(err => {
        handleResponse(dispatch, UPDATE_ITEM_RESPONSE, err.response.data.message.details[0].message, "danger")
      }) 
};

export const deleteItem = (_id) => dispatch => { 
    axios
        .delete("https://expense-tracker-jr5w.onrender.com/items/" + _id)
        .then(res => {
            dispatch({
                type: DELETE_ITEM,
                payload: res.data,
            })
        handleResponse(dispatch, DELETE_ITEM_RESPONSE, "Data was deleted successfully", "success")
      })
      .catch(err => {
        handleResponse(dispatch, ADD_ITEM_RESPONSE, err.response.data.message.details[0].message, "danger")
      }) 
};

export const handleToggleModal = () => dispatch => { 
  dispatch({
    type: SET_TOGGLE,
  })
};
