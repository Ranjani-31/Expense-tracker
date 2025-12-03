import {useState} from 'react'

import CreateExpense from '../../components/CreateExpense'
import ShowExpenses from '../../components/ShowExpenses'
import Card from '../../components/Card' 

function Home(){

    const [expenses , setExpenses] = useState([])
    const [amount, setAmount] = useState({
        expense: 0,
        income: 0
    })
console.log(expenses)
return(
    <div className='d-flex flex-column  align-items-center justify-content-around'>
      <div className='d-flex flex-column flex-md-row align-items-center justify-content-evenly w-100 m-5'>
        <Card cardType='Expense' amount={amount.expense} setAmount={setAmount}/>
        <Card cardType='Income' amount={amount.income} setAmount={setAmount}/>
</div>
        <CreateExpense setExpenses={setExpenses}/>
        <ShowExpenses expenses={expenses}/>

    </div>
)
}

export default Home 