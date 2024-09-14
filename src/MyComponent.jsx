import React, { useState } from 'react';


function MyComponent() {

const [name, setName] = useState("");
const [quantity, setQuantity] = useState(0);
const [comments, setComments] = useState("");
const [payment, setPayment] = useState("");
const [shipping, setShipping] = useState("");

function handleChange(e) {
  setName(e.target.value);
}

function handleQuantityChange(e) {
  setQuantity(e.target.value);
}

function handleCommentsChange(e) {
  setComments(e.target.value);
}

function handlePaymentChange(e) {
    setPayment(e.target.value);
    }

    function handleShippingChange(e) {
        setShipping(e.target.value);
        }

return (
    <div className="input-container">

        <h1>My Components</h1>
        <hr />
<input className="input-in" clatype="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />

<p>Name : {name}</p>

<input className="input-in" type="number" placeholder="Enter Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
<p>Quantity : {quantity}</p>

<textarea placeholder="Enter Delivery Instructions" value={comments} onChange={(e) => setComments(e.target.value)} />
<p>Comments : {comments}</p>

<select value={payment} onChange={(e) => setPayment(e.target.value)} > 
<option value="Credit Card">Credit Card</option>
<option value="Debit Card">Debit Card</option>
<option value="Paypal">Paypal</option>
<option value="Cash">Cash</option>
</select>
<p>Payment : {payment}</p>

<label className="Radio">
    <input type="radio" value="Standard" checked={shipping === "Standard"} onChange={handleShippingChange} />
    Shipping Method</label>

<label className="Radio">
    <input type="radio" value="Express" checked={shipping === "Delivery"} onChange={handleShippingChange} />
   Delivery</label>

<p>Shipping : {shipping}</p>

<hr />
    </div>)

}

export default MyComponent