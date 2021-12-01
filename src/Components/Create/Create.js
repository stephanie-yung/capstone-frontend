import React, { useState } from "react";
import './Create.css';
import {coffeeInfo} from '../Coffee/Coffee'
import axios from "axios";
//using react hooks, this is how all the input data is saved and stored and placed into a object called "ing"
function Create() {
    const [drink,SetDrink] = useState('')
    const [size,SetSize] = useState('Medium')
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
 
    const handleSubmit = async (e) => {
        const ing = [size,milk,temp,ice,type,[syrup,num1],[syrup2,num2],[syrup3,num3],add]
        e.preventDefault();
        const new_drink = {
            user_email: 'sony@gmail.com',
            img: img,
            name: `${drink}`,
            ingredients: ing
        }
        console.log(new_drink)
        await axios.post('https://brewers-backend.herokuapp.com/drinks', new_drink)
        coffeeInfo.push(new_drink)
        document.getElementById('submitted').textContent="Your drink has been created, go to the homepage to check it out"
    }
    // const handleChange = e => {
    //     if (e.target.files.length) {
    //       SetImg(
    //         URL.createObjectURL(e.target.files[0])
    //       );
    //     }
    //   };
    return (
        <div className='create'>
            <h1 id="submitted"></h1>
            <h2>Create your own drink!</h2>
            <form onSubmit={handleSubmit} action="" method="GET" encType="multipart/form-data">
                <label>What is the name of your drink?</label>
                <input type ="text" required value={drink} onChange={(e) => SetDrink(e.target.value)}></input>
                <label required>What size?</label>
                    <select value={size} onChange={(e)=> SetSize(e.target.value)}>
                        <option value="Tall">Tall</option>
                        <option value="Grande">Grande</option>
                        <option value="Venti">Venti</option>
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
                        <option value="Macchiato" >Macchiato</option>
                        <option value="Cold Brew" >Cold Brew</option>
                        <option value="Frappuccino® Blended Beverages">Frappuccino® Blended Beverages</option>
                        <option value="Chocolate">Chocolate</option>
                        <option value="Coffee">Coffee</option>
                        <option value="Refresher" >Refresher</option>
                        <option value="Tea" >Tea</option>
                    </select>
                <label>Add your sweetner, if none choose "None"</label>
                    <select value={syrup} onChange={(e)=> SetSyrup(e.target.value)}>
                        <option value="Caramel Syrup" >Caramel Syrup</option>
                        <option value="Chestnut Praline Syrup" >Chestnut Praline Syrup</option>
                        <option value="Cinnamon Dolce Syrup" >Cinnamon Dolce Syrup</option>
                        <option value="Hazelnut Syrup" >Hazelnut Syrup</option>
                        <option value="Irish Cream Syrup" >Irish Cream Syrup</option>
                        <option value="Peppermint Syrup" >Peppermint Syrup</option>
                        <option value="Raspberry Syrup" >Raspberry Syrup</option>
                        <option value="Sugar Cookie Syrup" >Sugar Cookie Syrup</option>
                        <option value="Toffee Nut Syrup" >Toffee Nut Syrup</option>
                        <option value="Vanilla Syrup" >Vanilla Syrup</option>
                        <option value="Sugar Free Vanilla Syrup" >Sugar Free Vanilla Syrup</option>
                        <option value="None" >None</option>
                    </select>
                    <input type="number" min="0" value={num1} max="15" onChange={(e) => SetNum1(e.target.value)}></input>
                    <select value={syrup2} onChange={(e)=> SetSyrup2(e.target.value)}>
                        <option value="Caramel Syrup" >Caramel Syrup</option>
                        <option value="Chestnut Praline Syrup" >Chestnut Praline Syrup</option>
                        <option value="Cinnamon Dolce Syrup" >Cinnamon Dolce Syrup</option>
                        <option value="Hazelnut Syrup" >Hazelnut Syrup</option>
                        <option value="Irish Cream Syrup" >Irish Cream Syrup</option>
                        <option value="Peppermint Syrup" >Peppermint Syrup</option>
                        <option value="Raspberry Syrup" >Raspberry Syrup</option>
                        <option value="Sugar Cookie Syrup" >Sugar Cookie Syrup</option>
                        <option value="Toffee Nut Syrup" >Toffee Nut Syrup</option>
                        <option value="Vanilla Syrup" >Vanilla Syrup</option>
                        <option value="Sugar Free Vanilla Syrup" >Sugar Free Vanilla Syrup</option>
                        <option value="None" >None</option>
                    </select>
                    <input type="number" min="0" value={num2} max="15" onChange={(e) => SetNum2(e.target.value)}></input>
                    <select value={syrup3} onChange={(e)=> SetSyrup3(e.target.value)}>
                        <option value="Caramel Syrup" >Caramel Syrup</option>
                        <option value="Chestnut Praline Syrup" >Chestnut Praline Syrup</option>
                        <option value="Cinnamon Dolce Syrup" >Cinnamon Dolce Syrup</option>
                        <option value="Hazelnut Syrup" >Hazelnut Syrup</option>
                        <option value="Irish Cream Syrup" >Irish Cream Syrup</option>
                        <option value="Peppermint Syrup" >Peppermint Syrup</option>
                        <option value="Raspberry Syrup" >Raspberry Syrup</option>
                        <option value="Sugar Cookie Syrup" >Sugar Cookie Syrup</option>
                        <option value="Toffee Nut Syrup" >Toffee Nut Syrup</option>
                        <option value="Vanilla Syrup" >Vanilla Syrup</option>
                        <option value="Sugar Free Vanilla Syrup" >Sugar Free Vanilla Syrup</option>
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
                <label>Add an image showing off your drink! Use any of the preselected images to display your drink</label>
                    <select value={add} onChange={(e)=> SetImg(e.target.value)}>
                        <option value="https://globalassets.starbucks.com/assets/d51e67249b7c4d5383fc68b3be1d62eb.jpg?impolicy=1by1_wide_topcrop_630">Hot White Chocolate</option>
                        <option value="https://globalassets.starbucks.com/assets/d39650cf…a0f311581e3491.jpg?impolicy=1by1_wide_topcrop_630" >Hot Chocolate</option>
                        <option value="https://globalassets.starbucks.com/assets/d39650cf…a0f311581e3491.jpg?impolicy=1by1_wide_topcrop_630" >Cold Brew Cold Foam</option>
                        <option value="https://globalassets.starbucks.com/assets/65fc074f…3db6981c600ce7.jpg?impolicy=1by1_wide_topcrop_630" >Black Cold Brew</option>
                        <option value="https://globalassets.starbucks.com/assets/65fc074f…3db6981c600ce7.jpg?impolicy=1by1_wide_topcrop_630" >Black Ice Coffee</option>
                        <option value="https://globalassets.starbucks.com/assets/b583bccc…37e2ad21d7be7b.jpg?impolicy=1by1_wide_topcrop_630" >Dark Ice Coffee</option>
                        <option value="https://globalassets.starbucks.com/assets/15c21fdd…dec5fb40201012.jpg?impolicy=1by1_wide_topcrop_630" >Macchiato</option>
                        <option value="https://globalassets.starbucks.com/assets/56ea95b0…86e52a23ea21c4.jpg?impolicy=1by1_wide_topcrop_630" >Hot Latte</option>
                        <option value="https://globalassets.starbucks.com/assets/49bf4333…59a5a2b958165f.jpg?impolicy=1by1_wide_topcrop_630" >Hot Tea</option>
                        <option value="https://globalassets.starbucks.com/assets/8b1b6d80…d2b30cf8dd5676.jpg?impolicy=1by1_wide_topcrop_630" >Hot Matcha</option>
                        <option value="https://globalassets.starbucks.com/assets/7b51b01b…f9df4ef9f3be3c.jpg?impolicy=1by1_wide_topcrop_630" >Iced Chai</option>
                        <option value="https://globalassets.starbucks.com/assets/edd9729b…b99aaa1646b4c4.jpg?impolicy=1by1_wide_topcrop_630" >Iced Matcha</option>
                        <option value="https://globalassets.starbucks.com/assets/666d227f…4721b757f9d7bd.jpg?impolicy=1by1_wide_topcrop_630" >Iced Tea</option>
                    </select>
                    <button>Finalize your drink!</button>
                <p>Your drink is called "{drink}". It is a {temp} {type} made with {milk} and has {syrup} with {num1} pumps, and {add} {img}</p>
            </form>
        </div>
    )
}

export default Create;
