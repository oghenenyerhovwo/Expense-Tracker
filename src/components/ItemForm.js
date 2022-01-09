import React from 'react'
import {Form,Button} from "react-bootstrap"

const ItemForm = props => {
    const {itemName, transactionType, amount, handleChange, handleSubmit, showButton} = props.formData
    const buttonComponent= showButton === true? (
        <Button 
            onClick={handleSubmit}
            block
            variant="dark"
        >
            Add new Transaction
        </Button>
    ): null
    return (
        <div>
            <Form>
                <Form.Group controlId= "exampleForm.ControlInput1" >
                    <Form.Label> Name of Item </Form.Label>
                    <Form.Control
                        type= "input"
                        placeholder= "Enter text"
                        name= "itemName"
                        value={itemName}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Check
                        inline
                        label= "Income"
                        type = "radio"
                        id= "inline-radio-3"
                        name= "transactionType"
                        value="income"
                        onChange={handleChange} 
                        checked= {transactionType === "income"}
                    />
                    <Form.Check
                        inline
                        label= "Expenses"
                        type= "radio"
                        id= "inline-radio-3"
                        name= "transactionType"
                        value="expenses"
                        onChange={handleChange}
                        checked = {transactionType === "expenses"}
                    />
                </Form.Group>
                <Form.Group controlId= "exampleForm.ControlInput2" >
                    <Form.Label> Amount </Form.Label>
                    <Form.Control
                        type= "number"
                        placeholder= "Enter Amount"
                        name= "amount"
                        value={amount}
                        onChange={handleChange}
                    />
                </Form.Group>
                {buttonComponent}
            </Form>
        </div>
    )
}

export default ItemForm
