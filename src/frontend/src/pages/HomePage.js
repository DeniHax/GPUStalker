import {useState, useEffect} from "react";
import styles from "./HomePage.module.css";
import {GPUTable} from "../components/GPUTable";
import {getAllData, sendEmails} from "../client";

export const HomePage = () => {

  const [gpus, setGpus] = useState([]);
  const [keyword, setKeyword] = useState("");

  const filteredInput = gpus.filter((gpu) =>
    gpu.name.toLowerCase().includes(keyword)
  );

  const onInputChange = (inp) => {
      inp.preventDefault();
      setKeyword(inp.target.value.toLowerCase());
    }

    const fetchData = () => {
        getAllData()
            .then(res => res.json())
            .then(data => setGpus(data))
            .catch(err => {console.log(err)})
    };

  useEffect(() => {

      fetchData()
      sendEmails();

  }, []);


    return(
        <div className={styles.container}>
            <div className={styles.count}>
                {filteredInput.length} Total GPU's
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
