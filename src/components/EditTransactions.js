import React from 'react'
import {Modal, Button} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons"
import ItemForm from "./ItemForm"
import {useDispatch} from "react-redux"

import {updateItem,deleteItem, handleToggleModal} from "../actions/listActions"
import useCreateForm from "../hooks/useCreateForm"


const EditTransactions = props => {
    const dispatch = useDispatch()

    const initialState = props.currentItemData
    const toggleModal= props.toggleModal
    
    const {
        itemName, 
        amount, 
        transactionType, 
        handleChange, 
        handleSubmit,
    } = useCreateForm(initialState, updateItem, initialState._id)

    const handleUpdate=() => {
        handleSubmit()
    }

    const handleToggle= ()=> {
        dispatch(handleToggleModal())
    }

    const handleDelete= () => {
        dispatch(deleteItem(initialState._id))
    }

    return (
        <div>
            <span className="icons-span" >
                <span className="deleteBtnStyle"><FontAwesomeIcon onClick={handleDelete} icon={faTrash}/></span>
                <span className="editBtnStyle"><FontAwesomeIcon onClick={handleToggle}  icon={faEdit}/></span>
            </span>

            <Modal show={toggleModal} onHide={handleToggle}>
                <Modal.Header closeButton>
                    <Modal.Title>Update item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ItemForm formData= {{itemName, amount, transactionType, handleChange, showButton:false}} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleToggle}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EditTransactions
