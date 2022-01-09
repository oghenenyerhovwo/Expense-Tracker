import React, {useEffect, useState} from 'react' 
import {useSelector} from "react-redux"
import {Alert} from "react-bootstrap"

const AlertComponent = () => {
    const storeList= useSelector(state => state.items)
    const initialState= {
        alertMessage: "",
        alertVariant: "",
        showAlert: false,
    }
    const [alert, setAlert] = useState(initialState)
    const {alertVariant, alertMessage, showAlert}= storeList
    useEffect(() => {
        setAlert({alertMessage, alertVariant})
        setTimeout(() => {
            setAlert(initialState)
        }, 3000);
    }, [showAlert === true])
    const alertComponent= alert.alertMessage !== ""?
        (
            <Alert
            variant={alert.alertVariant}
        >
           {alert.alertMessage} 
        </Alert>
        ): null

    return (
        <div className="alert-div">
            {alertComponent}
        </div>
    )
}

export default AlertComponent
