
import {useState} from 'react' 


function CreateExpense({setExpenses}){
const [expense, setExpense] = useState({
    expenseName: '',
    amount: '', 
    category: ''
})
const addExpense=(e)=>{
    e.preventDefault()
    setExpenses((c)=>[...c,expense])
    


}
    return(
        <form onSubmit={addExpense} className='d-flex justify-contnet-between'>
           
            <input onChange={(e)=>setExpense(c=>({...c, expenseName:e.target.value}))} type="text" className="form-control" placeholder="Expense Name" />
            <input onChange={(e)=>setExpense(c=>({...c, amount:e.target.value}))} type="text" className="form-control" placeholder="Amount" />
            <input onChange={(e)=>setExpense(c=>({...c, category:e.target.value}))} type="text" className="form-control" placeholder="Category" />
            <input  type="submit" className="form-control btn btn-primary" placeholder="Category" />
            


        </form>   
    )
}

export default CreateExpense