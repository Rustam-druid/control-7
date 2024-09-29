import React from 'react';
interface IProps {
    price: number;
}

const Total:React.FC<IProps> = ({price}) => {
    return (
        <>
            {price > 0 ? (<p>Total Price: {price}</p>) : <p>Order is empty! <br/> Please add some items!</p>}
        </>
    );
};

export default Total;