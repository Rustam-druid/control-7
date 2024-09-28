import React from 'react';
import {IItems} from "../../types";

interface Props {
    items: IItems[];
    details:IItems[];
    setdetails: React.SetStateAction<IItems[]>;
    setPrice: () => void;
    setitems: React.SetStateAction<IItems[]>;

}

const BtnAdd:React.FC<Props> = ({items,details,setdetails,setPrice,setitems}) => {

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

    return (
        <div className='Food-box'> {items.map(i => (

            <button key={i.name} onClick={() => BtnAdd(i.id)} type='button' className='btnFood'>
                <img src={i.src} alt="" style={{width: '40px'}}/>
                <div className='inner-text'><h3>{i.name}</h3> <h4>Price: {i.price} KGS</h4></div>
            </button>


        ))}</div>

    );
};

export default BtnAdd;