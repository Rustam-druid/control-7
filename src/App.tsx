import React, {useState} from 'react';
import './App.css'
import food from './assets/food.png'
import drink from './assets/drink.png'
import {IItems} from "./types";
import Details from "./coponents/Order-Details/Details.tsx";

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

    const BtnAdd = (id: number) => {
        const itemIndex = items.findIndex((item) => item.id === id);
        if (itemIndex !== id) {

            const item = [...items];

            const div = details.find((detail) => detail.name === item[itemIndex].name);

            if (div) {
                const updatedDetails = details.map((detail) =>
                    detail.name === div.name
                        ? { ...detail, count: detail.count + 1 }
                        : detail
                );

                setdetails(updatedDetails);


            } else {

                setdetails([
                    ...details,
                    {
                        name: item[itemIndex].name,
                        id: Date.now(),
                        price: item[itemIndex].price,
                        count: 1,
                    }
                ]);
            }
            setPrice(details.reduce((acc, item) => acc + (item.count * item.price), 0));
            setitems(item);
        }

    };

    const deleteOneItem = (id: number) => {
        const updatedDetails = details.filter((detail) => detail.id !== id);
        setdetails(updatedDetails);
        setPrice(updatedDetails.reduce((acc, item) => acc + (item.count * item.price), 0));
    };

    return (
        <>
            <div className='container'>
                <div className='header'></div>
                <div className='main'>
                    <Details details={details} deleteOneItem={deleteOneItem} price={price} />
                    <div className='Food-box'> {items.map(i => (

                        <button key={i.name} onClick={() => BtnAdd(i.id)} type='button' className='btnFood'>
                            <img src={i.src} alt="" style={{ width: '40px' }} />
                            <div className='inner-text'><h3>{i.name}</h3> <h4>Price: {i.price} KGS</h4></div>
                        </button>


                    ))}</div>

                </div>
                <div className='footer'></div>
            </div>

        </>
    );
};

export default App;