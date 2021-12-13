import React, { useState } from "react";
import './Create.css';
import {coffeeInfo} from '../Coffee/Coffee'
import axios from "axios";
//using react hooks, this is how all the input data is saved and stored and placed into a object called "ing"
function Create(props) {
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
    const [add,SetAdd] = useState('None')
    const [img,SetImg] = useState("https://globalassets.starbucks.com/assets/d51e67249b7c4d5383fc68b3be1d62eb.jpg?impolicy=1by1_wide_topcrop_630")
    const [des,SetDes] = useState('')

    const handleSubmit = async (e) => {
        const ing = [["Size", size],["Milk", milk],["Hot/Iced", temp],["Ice", ice],["Type", type],["Syrup", syrup],["Pumps", num1],["Syrup", syrup2],["Pumps", num2],["Topping", add]]
        e.preventDefault();
        const new_drink = {
            user_email: props.user.email,
            img: img,
            name: `${drink}`,
            ingredients: ing,
            des: des
        }
        const headers = {
            Authorization: `Bearer ${props.token}`
        }

        await axios.post('https://brewers-backend.herokuapp.com/drinks', new_drink, {headers : headers})
        coffeeInfo.push(new_drink)
        document.getElementById('submitted').textContent="Your drink has been created, go to My Account page to check it out!"
    }
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
                        <option value="Trenta">Trenta</option>
                    </select>
                <label required>What type of milk?</label>
                    <select value={milk} onChange={(e)=> SetMilk(e.target.value)}>
                        <option value="Whole milk">Whole Milk</option>
                        <option value="Almond milk">Almond Milk</option>
                        <option value="Skim milk">Skim Milk</option>
                        <option value="Oat milk">Oat Milk</option>
                        <option value="Soy milk">Soy Milk</option>
                        <option value="No milk">No Milk</option>
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
                <label>Add your add-ons</label>
                    <select value={add} onChange={(e)=> SetAdd(e.target.value)}>
                        <option value="Extra shot of expresso" >Extra shot of expresso</option>
                        <option value="Vanilla Sweet Cream Cold Foam" >Vanilla Sweet Cream Cold Foam</option>
                        <option value="Strawberries" >Strawberries</option>
                        <option value="Peach-passion fruit" >Peach-passion fruit</option>
                        <option value="Pink Drink" >Pink Drink</option>
                        <option value="Star Drink" >Star Drink</option>
                        <option value="Dragonfruit Drink" >Dragonfruit Drink</option>
                        <option value="Cinnamon Powder" >Cinnamon Powder</option>
                        <option value="Matcha" >Matcha</option>
                        <option value="Black-tea" >Black-tea</option>
                        <option value="Green-tea" >Green-tea</option>
                        <option value="Bananas" >Bananas</option>
                        <option value="Whipped Cream" >Whipped Cream</option>
                        <option value="None" >None</option>
                    </select>
                <label>Why should people try your Drink? (Keep it short and sweet!)</label>
                <input type ="text" maxLength="75" required value={des} onChange={(e) => SetDes(e.target.value)}></input>
                <label>Add an image showing off your drink! Use any of the preselected images to display your drink</label>
                    <select value={img} onChange={(e)=> SetImg(e.target.value)}>
                        <option value="https://globalassets.starbucks.com/assets/d51e67249b7c4d5383fc68b3be1d62eb.jpg?impolicy=1by1_wide_topcrop_630">Hot White Chocolate</option>
                        <option value="https://globalassets.starbucks.com/assets/d39650cf28d44aa283a0f311581e3491.jpg?impolicy=1by1_wide_topcrop_630" >Hot Chocolate</option>
                        <option value="https://globalassets.starbucks.com/assets/d4e07c5c1f744157b7d460e25b00a384.jpg?impolicy=1by1_wide_topcrop_630" >Cold Brew</option>
                        <option value="https://globalassets.starbucks.com/assets/83617bbfa2264197b745a1c2db04fa92.jpg?impolicy=1by1_wide_topcrop_630" >Black Cold Brew</option>
                        <option value="https://globalassets.starbucks.com/assets/2c626225a4804e5abd8e93e7fd59a0a2.jpg?impolicy=1by1_wide_topcrop_630" >Black Ice Coffee</option>
                        <option value="https://globalassets.starbucks.com/assets/cc9b573f8c1b43cd89cdab08ae5b9ec7.jpg?impolicy=1by1_wide_topcrop_630" >Dark Ice Coffee</option>
                        <option value="https://globalassets.starbucks.com/assets/363835b1db024636adeb4089ebb96291.jpg?impolicy=1by1_wide_topcrop_630" >Iced Latte</option>
                        <option value="https://globalassets.starbucks.com/assets/b635f407bbcd49e7b8dd9119ce33f76e.jpg?impolicy=1by1_wide_topcrop_630" >Hot Latte</option>
                        <option value="https://globalassets.starbucks.com/assets/49bf4333e9d048498a59a5a2b958165f.jpg?impolicy=1by1_wide_topcrop_630" >Hot Tea</option>
                        <option value="https://globalassets.starbucks.com/assets/8b1b6d808cca4787afd2b30cf8dd5676.jpg?impolicy=1by1_wide_topcrop_630" >Hot Matcha</option>
                        <option value="https://globalassets.starbucks.com/assets/7b51b01b4a394a829ff9df4ef9f3be3c.jpg?impolicy=1by1_wide_topcrop_630" >Iced Chai</option>
                        <option value="https://globalassets.starbucks.com/assets/edd9729b27284845abb99aaa1646b4c4.jpg?impolicy=1by1_wide_topcrop_630" >Iced Matcha</option>
                        <option value="https://globalassets.starbucks.com/assets/666d227f9924451da54721b757f9d7bd.jpg?impolicy=1by1_wide_topcrop_630" >Iced Tea</option>
                        <option value="https://globalassets.starbucks.com/assets/363835b1db024636adeb4089ebb96291.jpg?impolicy=1by1_wide_topcrop_630" >Iced Macchiato</option>
                        <option value="https://globalassets.starbucks.com/assets/3fee4c21a1cb4ad294e32c727aec0cdd.jpg?impolicy=1by1_wide_topcrop_630" >Pink Drink</option>
                        <option value="https://globalassets.starbucks.com/assets/7fe2123728f844849ae4f9ea01473468.jpg?impolicy=1by1_wide_topcrop_630" >Dragon Drink</option>
                        <option value="https://globalassets.starbucks.com/assets/77334c4087314c518f842c2f77cfaec1.jpg?impolicy=1by1_wide_topcrop_630" >Star Drink</option>
                    </select>
                    <button>Finalize your drink!</button>
            </form>
        </div>
    )
}
export default Create;
