import React, {useEffect, useState} from 'react' 
import {useSelector} from "react-redux"
import {ListGroup, Row, Col} from "react-bootstrap"

import useCalculator from "../hooks/useCalculator"

const TransactionBoard = () => {
    const storeList= useSelector(state => state.items)
    const {items} = storeList

    const [income, setIncome] = useState(0)
    const [expenses, setExpenses] = useState(0)
    
    const calculatedIncome = useCalculator(items, "income")
    const calculatedExpenses = useCalculator(items, "expenses")
    
    useEffect(() => {
        setIncome(calculatedIncome)
        setExpenses(calculatedExpenses) 
    }, [items])
    return (
        <div className="transaction-board">
            <ListGroup>
                <Row>
                    <Col>  
                        <div className="income-line">
                            <h6>INCOME</h6>
                            <h6 className="income-amount">$ {income}</h6>
                        </div>
                    </Col>
                    <Col>  
                        <h6>EXPENSE</h6>
                        <h6 className="expense-amount">$ {expenses}</h6>
                    </Col>
                </Row>
            </ListGroup>
        </div>
    )
}

export default TransactionBoard
