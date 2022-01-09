import {useState} from 'react'
import {useDispatch} from "react-redux"

const useCreateForm = (initialState, actionFunction=null, _id) => {
    const dispatch = useDispatch()
    const [form, setForm] = useState(initialState)
    const {itemName, amount, transactionType} = form

    const handleChange = e => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value,
        }) 
    }

    const clearForm=() => {
        setForm(initialState)
    }

    const handleSubmit = () => {
        const updateForm= {...form, amount: Number(form.amount)}
        console.log(updateForm)
        dispatch(actionFunction(updateForm, _id))
    }

    return {itemName, amount, transactionType, handleChange, handleSubmit, clearForm}
}

export default useCreateForm
