import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {Sku} from "../components/Sku";
import {getSku} from "../client";

export const SkuPage = () => {

    const [skus, setSkus] = useState([])
    const { sku } = useParams();

    const fetchData =  (sku) => {

        getSku(sku)
            .then(res => res.json())
            .then(data => setSkus(data))

    };

    useEffect(() => {

        fetchData(sku);

    });

    return (
        <div>
            <Sku sku={skus} />
        </div>
    )


};