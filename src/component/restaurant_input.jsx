import React from 'react'

const New_restaurant = () => {
  return (
    <div>
        <h2>Add Restaurant</h2>
        <form action="">
          <input type="text" placeholder='Name of Restaurant' />
          <br />
          <input type="number" placeholder='Votes' />
          <br />
          <input type="number" placeholder='Reviews'/>
          <br />
          <input type="number" placeholder='Min cost' />
          <br />
          <input type="number" placeholder='Cost_for_two' />
          <br />
          <input type="number" placeholder='Ratings' />
          <br />
          <input type="text" placeholder='Categories' />
          <p>
            <span>Payment Method</span>
            <br />
            <label htmlFor="card">Card</label>
            <input type="checkbox" name="" id="card" />
            <br />
            <label htmlFor="card">Cash</label>
            <input type="checkbox" name="" id="cash" />
            <br />
            <label htmlFor="card">UPI</label>
            <input type="checkbox" name="" id="upi" />
          </p>
          <input type="submit" value={"Submit Data"} />
        </form>
    </div>
  )
}

export default New_restaurant