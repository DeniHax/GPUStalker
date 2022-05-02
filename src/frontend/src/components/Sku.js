import React, {useState} from "react";
import styles from "./Sku.module.css"
import {Form, Input, Button} from "antd";
import 'antd/dist/antd.css';
import fetch from "unfetch";
import validator from "validator/es";

const addNewEmail = email =>
    fetch("api/v1/emails", {
        headers: {
            'Content-Type' : 'application/json'
            },
        method : 'POST',
        body : JSON.stringify(email)
        }
    );


export const Sku = ({ sku }) => {

    const [submitting, setSubmitting] = useState(false);
    const [emailError, setEmailError] = useState('');


    const validateEmail = (e) => {
        let email = e.target.value
        if(validator.isEmail(email)) {
            setEmailError(null)
        } else {
            setEmailError('Enter valid Email please')
        }
    }


    const onFinish = values => {
        setSubmitting(true);
        addNewEmail(values)
            .then(() => {
                console.log("email added")
            }).catch(err => {
            console.log(err)
        }).finally(() => {
            setSubmitting(false);
        })
    }

    return (
        <div className={styles.page}>
            {sku.map((sku) => {
                return <div className={styles.container} key={sku.sku}>
                            <div className={styles.left_container}>
                                <div className={styles.infoContainer}>
                                    <img className={styles.image} src={sku.image} alt="stockImage"/>
                                    <div className={styles.name}> {sku.name} </div>
                                    <div className={styles.addBorder}>
                                        {(sku.inStoreAvailability || sku.onlineAvailability) ?
                                            <Button className = {styles.infoButtons} type = "default" href={sku.addToCartUrl}>  Add to cart </Button> : null
                                         }
                                    </div>
                                    <Form
                                        onFinish={onFinish}
                                    >
                                        <h6 className={styles.inputItem}>
                                            Subscribe for stock updates!
                                        </h6>
                                        <Form.Item
                                            name = "emailAddress"
                                            className={styles.inputItem}
                                            onChange={(e) => validateEmail(e)}
                                        >
                                            <Input placeholder={"Enter email address"}/>
                                        </Form.Item>
                                        <span>{emailError}</span>
                                        <Form.Item>
                                            {(emailError) ? null :
                                                ( <Button className = {styles.infoButtons} type="primary" htmlType="submit">
                                                Subscribe
                                            </Button> ) }
                                        </Form.Item>
                                        {submitting}
                                    </Form>
                                </div>
                            </div>
                            <div className={styles.detailContainer}>
                                <div className={styles.detailPanel}>
                                    <h4 className={styles.detailHeader}>Details</h4>

                                    <div className={styles.detailRow}>
                                        <div className={styles.detailLabel}>Price</div>
                                        <div className={styles.detailRowVal}>
                                            ${sku.regularPrice}
                                        </div>
                                    </div>

                                    <div className={styles.detailRow}>
                                        <div className={styles.detailLabel}>Release Date</div>
                                        <div className={styles.detailRowPrice}>{sku.startDate}</div>
                                    </div>

                                    <div className={styles.detailRow}>
                                        <div className={styles.detailLabel}>Manufacturer</div>
                                        <div>{sku.manufacturer}</div>
                                    </div>

                                    <div className={styles.detailRow}>
                                        <div className={styles.detailLabel}>In Store</div>
                                        <div>{sku.inStoreAvailability ? (
                                            <p className={styles.inStock}>In Store Available</p>
                                        ) : (
                                            <p className={styles.outOfStock}>In Store Unavailable</p>
                                        ) }</div>
                                    </div>

                                    <div className={styles.detailRow}>
                                        <div className={styles.detailLabel}>Online</div>
                                        <div>{sku.onlineAvailability ? (
                                            <p className={styles.inStock}>Online Available</p>
                                        ) : (
                                            <p className={styles.outOfStock}>Online Unavailable</p>
                                        ) }</div>
                                    </div>

                                    <div className={styles.detailRow}>
                                        <div>{sku.longDescription}</div>
                                    </div>

                                </div>

                            </div>
                       </div>

            })}
        </div>
    );


}