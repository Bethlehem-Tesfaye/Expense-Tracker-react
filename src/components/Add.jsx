import React, { createContext, useContext, useState } from 'react';
import Income from './Income';

export const AddContext = createContext();

export default function Add({ children }) {
    const [text, setText] = useState('');   
    const [amount, setAmount] = useState(''); 
    const [transactions, setTransactions] = useState([]);

    const click = () => {
        console.log(text, amount);
        const newAmount = parseFloat(amount);
        if(isNaN(newAmount)){
            alert("amount should be number")
            
        setAmount('');

        } 
        else{
            setTransactions(prev => [...prev, { text: text, amount: amount }]);

        // console.log(transactions)
        setText("");
        setAmount('');
        }
        
    };

    return (
        <>
            <AddContext.Provider value={{ transactions, setTransactions}}>
                {children}
            </AddContext.Provider>

            <div className="add-cont">
                <h2>Add new transaction</h2><hr />
                <p>Text</p>
                <input
                    type="text"
                    placeholder='Enter text...'
                    value={text}
                    onChange={(e) => setText(e.target.value)}  
                />
                <p>Amount<br /> (negative- expense, positive- income)</p>
                <input
                    type="text"
                    placeholder='Enter amount...'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}  
                /><br />
                <button className='add' onClick={click}>Add transaction</button>
            </div>
        </>
    );
}
