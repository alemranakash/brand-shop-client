import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";


const BrandCards = () => {

const brandCards = useLoaderData()

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto items-center justify-center">
            {
                brandCards.map((brandCard, idx)=> <BrandCard key={idx} brandCard={brandCard}></BrandCard>)
            }
        </div>
    );
};

export default BrandCards;