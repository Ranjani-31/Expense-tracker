
import './index.css'

function ShowExpenses({expenses}){

    return(
        <div className="table-wrapper">
            <table className="expenses-table" role="table" aria-label="expenses">
                <thead>
                    <tr>
                        <th scope="col">Expense</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Category</th>
                    </tr>
                </thead>
                <tbody>
                {
                    expenses.map((item,id)=>(
                        <tr className="expenses-row" key={id}>
                            <td data-label="Expense">{item.expenseName}</td>
                            <td data-label="Amount" className="amount-cell">{item.amount}</td>
                            <td data-label="Category" className="category-cell">{item.category}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>

            {/* fallback list for small screens or alternate layout */}
            <ul className="expense-list" aria-hidden="true">
                {
                    expenses.map((item,id)=>(
                        <li key={'alt-'+id}>{item.expenseName}
                            <p>{item.amount}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ShowExpenses