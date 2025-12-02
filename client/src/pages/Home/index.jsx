import {useState} from 'react'

import CreateExpense from '../../components/CreateExpense'
import ShowExpenses from '../../components/ShowExpenses'
import Card from '../../components/Card' 

function Home(){

    const [expenses , setExpenses] = useState([])
console.log(expenses)
return(
    <div className='d-flex flex-column align-items-center justify-content-around'>
      
        <Card cardType='Expense' amount={200} />
        <Card cardType='Income' amount={300} />

        <CreateExpense setExpenses={setExpenses}/>
        <ShowExpenses expenses={expenses}/>

    </div>
)
}

export default Home 