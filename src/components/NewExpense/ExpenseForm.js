import React,{useState} from 'react';
import './ExpenseForm.css'
const ExpesneForm =()=>{
   const[enteredTitle,setEnteredTitle] =useState();
   useState();
const titleChangeHandler =(event)=>{
    setEnteredTitle(event.target.value);
};
return <form>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label htmlFor="">Title</label>
            <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
            <label htmlFor="">Amound</label>
            <input type="number"min="0.01" step="0.01"/>
        </div>
        <div className="new-expense__control"> 
            <label htmlFor="">Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31"/>
        </div>
        <div className="new-expense__actions">
            <button>Add expense</button>
        </div>
    </div>
</form>
}
export default ExpesneForm;