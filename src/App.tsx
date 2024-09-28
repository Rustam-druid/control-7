import React, {useState} from 'react';
import './App.css'
import food from './assets/food.png'
import drink from './assets/drink.png'
import {IItems} from "./types";
import Details from "./coponents/Order-Details/Details.tsx";
import BtnAdd from "./coponents/Btn-Add/Btn-Add.tsx";


const App = () => {


    const [items,setitems] = useState<IItems[]>([
        {name:'Hamburger',price: 80,src: food , count:0, id:1},
        {name:'Tea',price: 50,src: drink  , count:0, id:5,},
        {name:'Fries',price: 45,src: food, count:0, id:3  },
        {name:'Coffee',price: 70,src: drink, count:0, id:4  },
        {name:'Cheeseburger',price: 90,src: food , count:0, id:2 },
        {name:'Cola',price: 40,src: drink , count:0, id:6 },
    ])

    const [details,setdetails] = useState<IItems[]>([])
    const [price, setPrice] = useState(0);





    return (
        <>
            <div className="container">
                <div className="header"></div>
                <div className="main">
                    <Details
                        details={details}
                        setdetails={setdetails}
                        price={price}
                        setPrice={setPrice}
                    />
                    <BtnAdd
                        items={items}
                        details={details}
                        setdetails={setdetails}
                        setPrice={setPrice}
                        setitems={setitems}/>
                </div>
                <div className="footer"></div>
            </div>
        </>
    );
};

export default App;