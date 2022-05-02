import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import styles from "./HomePage.module.css";
import {GPUTable} from "../components/GPUTable";
import {getManufacturer} from "../client";

export const Manufacturer = () => {

    const [gpus, setGpus] = useState([]);
    const [keyword, setKeyword] = useState("");
    const { manufacturer } = useParams();

    const filteredInput = gpus.filter((gpu) =>
        gpu.name.toLowerCase().includes(keyword)
    );

    const onInputChange = (inp) => {
        inp.preventDefault();
        setKeyword(inp.target.value.toLowerCase());
    }

    useEffect(() => {

        const fetchData = () => {
            getManufacturer(manufacturer)
                .then(res => res.json())
                .then(data => setGpus(data))
        };
        fetchData();

    }, [manufacturer]);

    return(
        <div className={styles.container}>
            <div className={styles.count}>
                {filteredInput.length} Total GPUs
            </div>
            <div>
                <input className = {styles.input} type="text" placeholder="Enter GPU Name" onChange={onInputChange}/>
            </div>
            <div>
                <GPUTable gpu = {filteredInput} />
            </div>
        </div>

    )
};