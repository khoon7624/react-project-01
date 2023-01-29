import './Expenses.css'

function ExpenseNewItem(props){
    return(
        <div className="Expenses">
            <div>{props.product.title}</div>
        </div>
    )
}

export default ExpenseNewItem;