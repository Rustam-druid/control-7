import React from "react";
import { IItems } from "../../types";

interface Props {
    id: number;
    details: IItems[];
    setdetails: React.SetStateAction<IItems[]>;
    setPrice: (price: number) => void;
}

const BtnDelete: React.FC<Props> = ({ id, details, setdetails, setPrice }) => {
    const handleClick = () => {
        const updatedDetails = details.filter((detail) => detail.id !== id);
        setdetails(updatedDetails);
        setPrice(updatedDetails.reduce((acc, item) => acc + (item.count * item.price), 0));
    };

    return (
        <button type="button" onClick={handleClick} className="delete"></button>
    );
};

export default BtnDelete;