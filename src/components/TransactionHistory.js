import React, {useState} from 'react' 
import {useSelector} from "react-redux"
import {ListGroup, Row, Col} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import {faAngleDoubleUp, faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons"
import {Button} from "react-bootstrap"

// importing components 
import EditTransactions from "./EditTransactions"

const incomeStyle={
    borderRight: "6px solid rgb(136, 238, 136)"
}

const expensesStyle={
    borderRight: "6px solid rgb(238, 30, 30)"
}

const TransactionHistory = () => {
    const [toggle, setToggle] = useState(false)
    const storeList= useSelector(state => state.items)
    const {items, toggleModal} = storeList
    const itemComponents=items && items.length > 0 && items
        .map(({_id, itemName, amount, transactionType}) => (
            <ListGroup.Item 
                key={_id}
                className="history-list" 
                style= {transactionType == "income" ? incomeStyle :expensesStyle }
            >
                <Row>
                    <Col className="left"> {itemName} </Col>
                    <Col className="right"> {amount} </Col>
                </Row>
                <Row>
                    <EditTransactions currentItemData={{itemName, amount, transactionType, _id,}} toggleModal={toggleModal} />
                </Row>
            </ListGroup.Item>
        ))
    const latestThreeComponents = itemComponents && itemComponents.slice(0,5)
    
    const handleClick= e => {
        setToggle(!toggle)
    }
    return (
        <div className="transaction-history">
            <h6>History</h6> 
            <ListGroup>
                {toggle ? itemComponents: latestThreeComponents}
            </ListGroup>
            <div className="show-button">
                <Button 
                    variant="outline-dark" 
                    size="sm"
                    onClick={handleClick}
                >
                    {
                        toggle ? (
                            <span>
                                Show few (<FontAwesomeIcon icon={faAngleDoubleUp}/>)
                            </span>)
                    : 
                            <span>
                                show all (<FontAwesomeIcon icon={faAngleDoubleDown}/>)
                            </span>
                    }
                    
                </Button>
            </div>
        </div>
    )
}

export default TransactionHistory