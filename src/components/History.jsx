import React, { useContext } from 'react';
import { AddContext } from './Add';
import { FiTrash2 } from 'react-icons/fi';

export default function History() {
    const {transactions,setTransactions} = useContext(AddContext);
    const plus ="+";
    const delete_list=(index)=>{
        setTransactions(transactions.filter((_, i)=>i!=index));
    }
    return (
        <div className="history-cont">
            <h3>History</h3>
            <ul>
                {transactions.map((item, index) => (
                    <div className='list' key={index}>
                    <FiTrash2 className='del-btn' color='red' onClick={() => delete_list(index)} />
                    <ul>
                        <li style={{ backgroundColor: item.amount < 0 ? 'rgba(255, 0, 0, 0.1)' : 'rgba(0, 255, 0, 0.1)' }}>
                            <div className='left-items'>
                                <p>{item.text}</p>
                            </div> 
                            <div className="right-item">
                                <p>{item.amount > 0 ? plus + item.amount : item.amount}</p>
                                 
                            </div>
                        </li>
                    </ul>
                </div>
                ))}
            </ul>
        </div>
    );
}
