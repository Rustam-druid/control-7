import React from 'react';
import {IItems} from "../../types";

interface Props {
    items: IItems[];
    setPrice: (price:number) => void;
    setitems:React.SetStateAction<IItems[]>
}

const BtnClick:React.FC<Props> = ({items, setPrice, setitems}) => {

    const Btn = (id:number) => {
        const index = items.findIndex((item) => item.id === id);

        if (index !== -1) {
            const item =[...items];
            item[index].count += 1;

            let total = item.reduce((acc, item) => acc + (item.count * item.price), 0);

            setPrice(total);
            setitems(item)
        }

    };

return (
    <div className='Food-box'> {items.map(i => (
        <button key={i.id} onClick={() => Btn(i.id)} className='btnFood'>
            <img src={i.src} alt={i.name} style={{width: '40px'}}/>
            <div>
                <h3 className='inner-Food-text'>  {i.name}</h3>
                <h4 className='inner-Food-text'>Price {i.price} KGS</h4>
            </div>

        </button>
    ))}</div>
)
};

export default BtnClick;