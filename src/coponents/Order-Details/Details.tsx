import React from "react";
import { IItems } from "../../types";
import BtnDelete from "../Btn-Delete/Btn-Delete.tsx";


interface Props {
    id: number;
    details: IItems[];
    setdetails: React.SetStateAction<IItems[]>;
    setPrice: () => void;
    price:number;

}

const Details: React.FC<Props> = ({details, setdetails, price, setPrice,}) => {
    return (
        <div className="details">
            {details.length > 0 ? (
                details.map((i) => (
                    <div key={i.id} className="details-div">
                        <div>{i.name} </div>
                        <div className="div-delete">
                            x{i.count} {i.price} KGS{" "}
                            {i.count > 0 ? (
                                <BtnDelete
                                    id={i.id}
                                    details={details}
                                    setdetails={setdetails}
                                    setPrice={setPrice}
                                />
                            ) : null}
                        </div>
                    </div>
                ))
            ) : (
                <div>
                    Order is empty <p>Please add some items</p>
                </div>
            )}
            {details.length > 0 ? <p>Total Price: {price}</p> : null}
        </div>
    );
};

export default Details;