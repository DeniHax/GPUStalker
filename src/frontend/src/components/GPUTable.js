import React, {useState} from "react";
import { Link } from "react-router-dom";
import styles from "./StockTable.module.css";
import downarrow from "../images/downarrow.png";
import uparrow from "../images/up-arrow-4.png";

const orderBy = (gpu, value, direction) => {
    if (direction === "asc") {
        return [...gpu].sort((a, b) => (a[value] > b[value] ? 1 : -1));
    }
    if (direction === "desc") {
        return [...gpu].sort((a, b) => (a[value] > b[value] ? -1 : 1));
    }
    return gpu;
};

const SortArrow = ({ direction }) => {
    if (!direction) {
        return <></>;
    }

    if (direction === "desc") {
        return (
            <div>
                <img className={styles.downArrow} src = {downarrow}  alt="downArrow"/>
            </div>
        );
    } else {
        return (
            <div>
                <img className={styles.upArrow} src = {uparrow}  alt="downArrow"/>
            </div>
        );
    }
};

export const GPUTable = ( {gpu} ) => {

    const [direction, setDirection] = useState();
    const [value, setValue] = useState();

    const orderedStock = orderBy(gpu, value, direction);

    const switchDirection = () => {
        if (!direction) {
            setDirection("desc");
        } else if (direction === "desc") {
            setDirection("asc");
        } else {
            setDirection(null);
        }
    };

    const setValueAndDirection = (value) => {
        switchDirection();
        setValue(value);
    };

    if (!gpu) return null;

    return (
        <div>
            <div className={styles.header}>
                <button className={styles.buttons}
                onClick={() => setValueAndDirection("name")}>
                    <div>Name</div>
                    {value === "name" && <SortArrow direction={direction}/>}</button>

                <button className={styles.buttons}
                onClick={() => setValueAndDirection("regularPrice")}>
                    <div>Price</div>
                {value === "regularPrice" && <SortArrow direction={direction}/>}</button>

                <button className={styles.buttons}
                onClick={() => setValueAndDirection("inStoreAvailability")}>
                    <div>In Store Availability</div>
                {value === "inStoreAvailability" && <SortArrow direction={direction}/>}</button>

                <button className={styles.buttons}
                onClick={() => setValueAndDirection("onlineAvailability")}>
                    <div>Online Availability</div>
                {value === "onlineAvailability" && <SortArrow direction={direction}/>}</button>
            </div>
            <div>
                {orderedStock.map((gpu) => (
                    <Link className = {styles.links} to={`/sku/${gpu.sku}`} key={gpu.sku}>
                        <div className={styles.nameContainer}>
                            <div>
                                <img className = {styles.thumbnail} src ={gpu.thumbnailImage} alt="GPU"/>
                            </div>
                            <div className={styles.name}>
                                {gpu.name}
                            </div>
                            <div className={styles.price}>
                                ${gpu.regularPrice}
                            </div>
                            <div className={styles.availability}>
                                {gpu.inStoreAvailability ? (
                                    <p className={styles.inStock}>In Store Available</p>
                                ) : (
                                    <p className={styles.outOfStock}>In Store Unavailable</p>
                                )}
                            </div>
                            <div className={styles.availability}>
                                {gpu.onlineAvailability ? (
                                    <p className={styles.inStock}>Online Available</p>
                                ) : (
                                    <p className={styles.outOfStock}>Online Unavailable</p>
                                )}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

