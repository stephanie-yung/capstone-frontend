import React, { useState } from "react";
import './Create.css';


function Create() {
    const [drink,SetDrink] = useState('')
    const [milk,SetMilk] = useState('Whole Milk')
    const [temp,SetTemp] = useState('Iced')
    const [ice,SetIce] = useState('Regular ice')
    const [type,SetType] = useState('Coffee')
    const [add,SetAdd] = useState('Whipped Cream')
    return (
        <div className='create'>
            <h2>Create your own drink!</h2>
            <form action="" method="GET" encType="multipart/form-data">
                <label>What is the name of your drink?</label>
                <input type ="text" required value={drink} onChange={(e) => SetDrink(e.target.value)}></input>
                <label required>What type of milk?</label>
                    <select value={milk} onChange={(e)=> SetMilk(e.target.value)}>
                        <option value="Whole milk">Whole Milk</option>
                        <option value="Almond milk">Almond Milk</option>
                        <option value="Skim milk">Skim Milk</option>
                        <option value="Oat milk">Oat Milk</option>
                        <option value="Soy milk">Soy Milk</option>
                    </select>
                <label required>Is this drink hot or iced?</label>
                    <select value={temp} onChange={(e)=> SetTemp(e.target.value)}>
                        <option value="Hot" id="hot">Hot</option>
                        <option value="Iced" id="iced">Iced</option>
                    </select>
                <label>If you chose iced, choose your ice level:</label>
                    <select value={ice} onChange={(e)=> SetIce(e.target.value)}>
                        <option value="No ice" >No ice</option>
                        <option value="Less ice" >Less ice</option>
                        <option value="Regular ice" >Regular ice</option>
                        <option value="Extra ice" >Extra ice</option>
                    </select>
                <label >What type of drink is it?</label>
                    <select value={type} onChange={(e)=> SetType(e.target.value)}>
                        <option value="Latte" >Latte</option>
                        <option value="Coffee" >Coffee</option>
                        <option value="Refresher" >Refresher</option>
                        <option value="tea" >Tea</option>
                    </select>
                <label>Add your sweetners/add-ons</label>
                    <select value={add} onChange={(e)=> SetAdd(e.target.value)}>
                        <option value="Extra shot of expresso" >Extra shot of expresso</option>
                        <option value="Caramel" >Caramel</option>
                        <option value="Mocha" >Mocha</option>
                        <option value="Vanilla" >Vanilla</option>
                        <option value="Strawberries" >Strawberries</option>
                        <option value="Peach-passion fruit" >Peach-passion fruit</option>
                        <option value="Matcha" >Matcha</option>
                        <option value="Black-tea" >Black-tea</option>
                        <option value="Green-tea" >Green-tea</option>
                        <option value="Bannans" >Bannans</option>
                        <option value="Whipped Cream" >Whipped Cream</option>
                    </select>
                <label>Add an image showing off your drink!</label>
                    <input id="file" type="file" name="file"></input>
                    <button>Finalize your drink!</button>
                <p>Your drink is called "{drink}" It is a {temp} {type} made with {milk} and has {add}</p>
            </form>
        </div>
    )
}

export default Create;
