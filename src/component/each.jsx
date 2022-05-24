import React from 'react'
import styles from "./each.module.css"


const Each = ({item}) => {

    
  return (
    <div className={styles.whole}>
        <div className={styles.largeBox}>
        <div className={styles.image}>
        <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387" alt=""  />
        </div>

        <div className={styles.content}>
        <h2>{item.name}</h2>
        <p className={styles.light}>{item.categories}</p>
        <p>{`Cost ${ "₹" }${item.Cost_for_two}/-  for two`}</p>
        <p>Min ₹{item.Min}  • <span>Up to 30 min delivery</span> </p>
        </div>
        
        
        
        <div className={styles.credits}>
            <p className={styles.ratings}>★ {item.ratings}</p>
            <p>{item.votes} votes</p>
            <p>{item.reviews} reviews</p>
            
        </div>

        
        </div>
        <div className={styles.buttonBox}>
            <p> <span className={styles.bold}>Payment:</span> 
                { item.Payment_method.cash ? " Pay in Cash"  : " No Cash"},
                {item.Payment_method.upi ? " Pay in upi" : " No upi allowed"},
                {item.Payment_method.card ? " Pay in Card" : " No cards accepted"}
            </p>
            <button>Order Online {">"} </button>
        </div>

    </div>
  )
}

export default Each