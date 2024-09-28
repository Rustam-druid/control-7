import React, {useState} from 'react';
import './App.css'

interface IItems {
    name: string;
    price: number;
    src:string;
    count: number;
    id:number;
}

const App = () => {


    const [items,setitems] = useState<IItems[]>([
        {name:'Hamburger',price: 80,src: '' , count:0, id:1},
        {name:'Cheeseburger',price: 90,src: '' , count:0, id:2 },
        {name:'Fries',price: 45,src: '', count:0, id:3  },
        {name:'Coffee',price: 70,src: '', count:0, id:4  },
        {name:'Tea',price: 50,src: ''  , count:0, id:5,},
        {name:'Cola',price: 40,src: '' , count:0, id:6 },
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
                setPrice(updatedDetails.reduce((acc, item) => acc + (item.count * item.price), 0));

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

    function deleteOneItem(id: number) {
        const updatedDetails = details.filter((detail) => detail.id !== id);
        setdetails(updatedDetails);
        setPrice(updatedDetails.reduce((acc, item) => acc + (item.count * item.price), 0));
    }

    return (
        <>
            <div className='container'>
                <div className='header'></div>
                <div className='main'>
                    <div className='details'>
                        {details.length > 0 ? (
                            details.map((i) => (
                                    <div key={i.id} className="details-div">
                                        <div>{i.name} </div>
                                        <div>x{i.count} {i.price} KGS {i.count > 0 ? (
                                            <button
                                                type="button"
                                                onClick={() => deleteOneItem(i.id)}
                                                className="delete"
                                            ></button>
                                        ) : null}</div>
                                    </div>
                            ))
                        ) : (
                            <div>Order is empty <p>Please add some items</p></div>
                        )}
                        {details.length > 0 ? (<p>Total Price: {price}</p>) : null}

                    </div>
                    <div className='Food-box'> {items.map(i => (

                        <button key={i.name} onClick={() => BtnAdd(i.id)} type='button' className='btnFood'>
                            <h3>{i.name}</h3> <h4>Price: {i.price} KGS</h4></button>


                    ))}</div>

                </div>
                <div className='footer'></div>
            </div>

        </>
    );
};

export default App;