import React, { useState } from "react";
import './Create.css';
import {coffeeInfo} from '../Coffee/Coffee'
import axios from "axios";

function Create() {
    const [drink,SetDrink] = useState('')
    const [size,SetSize] = useState('')
    const [milk,SetMilk] = useState('Whole Milk')
    const [temp,SetTemp] = useState('Iced')
    const [ice,SetIce] = useState('Regular ice')
    const [type,SetType] = useState('Coffee')
    const [syrup, SetSyrup] = useState('None')
    const [num1, SetNum1] = useState('0')
    const [syrup2, SetSyrup2] = useState('None')
    const [num2, SetNum2] = useState('0')
    const [syrup3, SetSyrup3] = useState('None')
    const [num3, SetNum3] = useState('0')
    const [add,SetAdd] = useState('Whipped Cream')
    const [img,SetImg] = useState('https://globalassets.starbucks.com/assets/e4d9e996eb64453eb3ac7adb570c9b7b.jpg')
 
    const handleSubmit = (e) => {
        const ing = [size,milk,temp,ice,type,[syrup,num1],[syrup2,num2],[syrup3,num3],add]
        e.preventDefault();
        const new_drink = {
            id: 'andy@gmail.com',
            img: `${img}`,
            name: `${drink}`,
            ingredients: ing
        }
        console.log(new_drink)
        // const res = await axios.post('https://brewers-backend.herokuapp.com/drinks', new_drink)
        coffeeInfo.push(new_drink)
        document.getElementById('submitted').textContent="Your drink has been created, go to the homepage to check it out"
    }
    const handleChange = e => {
        if (e.target.files.length) {
          SetImg(
            URL.createObjectURL(e.target.files[0])
          );
        }
      };
    return (
        <div className='create'>
            <h1 id="submitted"></h1>
            <h2>Create your own drink!</h2>
            <form onSubmit={handleSubmit} action="" method="GET" encType="multipart/form-data">
                <label>What is the name of your drink?</label>
                <input type ="text" required value={drink} onChange={(e) => SetDrink(e.target.value)}></input>
                <label required>What size?</label>
                    <select value={size} onChange={(e)=> SetSize(e.target.value)}>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>
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
                <label>If you chose iced, choose your ice level. If you chose hot, leave as "No Ice".</label>
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
                <label>Add your sweetner, if none choose "None"</label>
                    <select value={syrup} onChange={(e)=> SetSyrup(e.target.value)}>
                        <option value="Caramel" >Caramel</option>
                        <option value="Mocha" >Mocha</option>
                        <option value="Vanilla" >Vanilla</option>
                        <option value="Pumpkin" >Pumpkin</option>
                        <option value="Smoked Vanilla" >Smoked Vanilla</option>
                        <option value="Apple-Crisp" >Apple-Crisp</option>
                        <option value="Liquid-Cane sugar" >Liquid-Cane sugar</option>
                        <option value="None" >None</option>
                    </select>
                    <input type="number" min="0" value={num1} max="15" onChange={(e) => SetNum1(e.target.value)}></input>
                    <select value={syrup2} onChange={(e)=> SetSyrup2(e.target.value)}>
                        <option value="Caramel" >Caramel</option>
                        <option value="Mocha" >Mocha</option>
                        <option value="Vanilla" >Vanilla</option>
                        <option value="Pumpkin" >Pumpkin</option>
                        <option value="Smoked Vanilla" >Smoked Vanilla</option>
                        <option value="Apple-Crisp" >Apple-Crisp</option>
                        <option value="Liquid-Cane sugar" >Liquid-Cane sugar</option>
                        <option value="None" >None</option>
                    </select>
                    <input type="number" min="0" value={num2} max="15" onChange={(e) => SetNum2(e.target.value)}></input>
                    <select value={syrup3} onChange={(e)=> SetSyrup3(e.target.value)}>
                        <option value="Caramel" >Caramel</option>
                        <option value="Mocha" >Mocha</option>
                        <option value="Vanilla" >Vanilla</option>
                        <option value="Pumpkin" >Pumpkin</option>
                        <option value="Smoked Vanilla" >Smoked Vanilla</option>
                        <option value="Apple-Crisp" >Apple-Crisp</option>
                        <option value="Liquid-Cane sugar" >Liquid-Cane sugar</option>
                        <option value="None" >None</option>
                    </select>
                    <input type="number" min="0" value={num3} max="15" onChange={(e) => SetNum3(e.target.value)}></input>
                <label>Add your add-ons</label>
                    <select value={add} onChange={(e)=> SetAdd(e.target.value)}>
                        <option value="Extra shot of expresso" >Extra shot of expresso</option>
                        <option value="Strawberries" >Strawberries</option>
                        <option value="Peach-passion fruit" >Peach-passion fruit</option>
                        <option value="Matcha" >Matcha</option>
                        <option value="Black-tea" >Black-tea</option>
                        <option value="Green-tea" >Green-tea</option>
                        <option value="Bannans" >Bananas</option>
                        <option value="Whipped Cream" >Whipped Cream</option>
                        <option value="None" >None</option>
                    </select>
                <label>Add an image showing off your drink!</label>
                    <input id="file" type="file" name="file" accept="image/png, image/jpeg" onChange={handleChange}></input>
                    <button>Finalize your drink!</button>
                <p>Your drink is called "{drink}". It is a {temp} {type} made with {milk} and has {syrup} with {num1} pumps, and {add}</p>
            </form>
        </div>
    )
}

export default Create;
