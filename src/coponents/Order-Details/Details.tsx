import React from 'react';
import {IItems} from "../../types";

interface Props {
    details:IItems[];
    deleteOneItem:(id: number)=>void
    price: number;
}

const Details:React.FC<Props> = ({details,deleteOneItem,price}) => {
    return (
        <div className='details'>
            {details.length > 0 ? (
                details.map((i) => (
                    <div key={i.id} className="details-div">
                        <div>{i.name} </div>
                        <div className='div-delete'>x{i.count} {i.price} KGS {i.count > 0 ? (
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
    );
};

export default Details;