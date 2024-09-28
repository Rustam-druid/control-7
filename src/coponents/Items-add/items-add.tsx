import React from 'react';
import {IItems} from "../../types";
interface Props {
    items: IItems[];
    BtnAdd:(id:number)=>void;
}

const ItemsAdd:React.FC<Props> = ({items,BtnAdd}) => {
    return (
        <div className='Food-box'> {items.map(i => (

            <button key={i.name} onClick={() => BtnAdd(i.id)} type='button' className='btnFood'>
                <img src={i.src} alt="" style={{width: '40px'}}/>
                <div className='inner-text'><h3>{i.name}</h3> <h4>Price: {i.price} KGS</h4></div>
            </button>


        ))}</div>

    );
};

export default ItemsAdd;