import React from "react"

//  importing other components 
import ItemForm from "./ItemForm"

// importing functions and objects from other files
import {addItem} from "../actions/listActions"
import useCreateForm from "../hooks/useCreateForm"

const AddTransaction = () => {
    const initialState = {
        itemName: "",
        amount: 0,
        transactionType: "income",
    }

    const {
        itemName, 
        amount, 
        transactionType, 
        handleChange, 
        handleSubmit,
        clearForm,
    } = useCreateForm(initialState, addItem)

    const handleSubmitAndClean=() => {
        clearForm()
        handleSubmit()
    }
    
    return (
        <div className="add-transaction">
            <h6>Add New Transaction</h6>
            <ItemForm formData={{itemName, transactionType, amount, handleChange, handleSubmit:handleSubmitAndClean, showButton:true}} />
        </div>
    )
}

export default AddTransaction
