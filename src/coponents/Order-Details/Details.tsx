import React from "react";
import {IItems} from "../../types";


interface Props {
    items: IItems[];
    btndelete:(id:number) => void;
}

const Details: React.FC<Props> = ({items,btndelete}) => {
return (
    <>
        {items
            .filter((item) => item.count > 0)
            .map((i) => (
                <div key={i.id} className="details-div">
                    {i.name}
                    <p> x{i.count} {i.price}
                        <button className='delete' onClick={() => btndelete(i.id)}></button>
                    </p>
                </div>
            ))}

    </>
)
};

export default Details;