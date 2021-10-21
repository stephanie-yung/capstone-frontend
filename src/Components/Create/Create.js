import React, { useState } from "react";
import { Multiselect } from 'multiselect-react-dropdown';
import './Create.css';


function Create() {
    const milkData = [
            {Milk: 'Whole Milk', id: 1},
            {Milk: 'Skim Milk', id: 2},
            {Milk: 'Oat Milk', id: 1},
            {Milk: 'Almond Milk', id: 1},
            {Milk: 'Coconut Milk', id: 1}
    ]
    const sizeData = [
        {Size: 'small', id: 1},
        {Size: 'medium', id: 2},
        {Size: 'large', id: 1}
    ]
    const iceData = [
        {Ice: 'no ice', id: 1},
        {Ice: 'regular ice', id: 2},
        {Ice: 'extra Ice', id: 1}
    ]
    const sweetData = [
        {Sweet: 'Caramel', id: 1},
        {Sweet: 'French Vanilla', id: 2},
        {Sweet: 'Liquid Cane Sugar', id: 1},
        {Sweet: 'Pumpkin', id: 2},
        {Sweet: 'Hazlenut', id: 2},
        {Sweet: 'powdered sugar', id: 2}
    ]
    const [optionsMilk] = useState(milkData)
    const [optionsSize] = useState(sizeData)
    const [optionsIce] = useState(iceData)
    const [optionsSweet] = useState(sweetData)
    return (
        <div style={{width:"90%", justifyContent:"center", display:"flex"}}>
            <div>
                <h3>Create your own Drink</h3>
                <Multiselect options={optionsMilk} displayValue={"Milk"} />
                <Multiselect options={optionsSize} displayValue={"Size"} />
                <Multiselect options={optionsIce} displayValue={"Ice"} />
                <Multiselect options={optionsSweet} displayValue={"Sweet"} />
            </div>
        </div>
    )
}

export default Create
