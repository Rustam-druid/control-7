import React, {useState} from 'react';
import './App.css'
import food from './assets/food.png'
import drink from './assets/drink.png'
import {IItems} from "./types";
import Details from "./coponents/Order-Details/Details.tsx";
import BtnClick from "./coponents/Btn-Add/Btn-Add.tsx";
import Total from "./coponents/Total/Total.tsx";


const App = () => {

const [price, setPrice] = useState(0);
    const [items,setitems] = useState<IItems[]>([
        {name:'Hamburger',price: 80,src: food , count:0, id:1},
        {name:'Tea',price: 50,src: drink  , count:0, id:5,},
        {name:'Fries',price: 45,src: food, count:0, id:3  },
        {name:'Coffee',price: 70,src: drink, count:0, id:4  },
        {name:'Cheeseburger',price: 90,src: food , count:0, id:2 },
        {name:'Cola',price: 40,src: drink , count:0, id:6 },
    ])



    const btndelete = (id:number) => {
        const index = items.findIndex((item) => item.id === id);

        if (index !== -1) {
            const item =[...items];
            item[index].count -= 1;

            let total = item.reduce((acc, item) => acc + (item.count * item.price), 0);

            setPrice(total);
            setitems(item)
        }

    };

    return (
        <>
            <div className="container">
                <div className="header"></div>
                <div className="main">
                  <div className='details' >
                    <Details items={items} btndelete={btndelete}></Details>
                      <Total price={price} />
                     </div>

                    <BtnClick items={items} setitems={setitems} setPrice={setPrice}></BtnClick>
                </div>
                <div className="footer"></div>
            </div>
        </>
    );
};

export default App;