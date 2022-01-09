const useCalculator = (items=[], type) => {
    const filteredItems=items.length >  0 && items
        .filter(({transactionType}) => transactionType === type)
    const result =filteredItems.length >  0? filteredItems
        .map(({amount}) => amount)
        .reduce((a,b) => a+b) : 0
    return result
}

export default useCalculator
