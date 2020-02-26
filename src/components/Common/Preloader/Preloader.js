import React from "react";
import preloader from "../../../assets/imgages/Bean Eater-1s-200px.svg";
import style from "./Preloader.module.css"

const Preloader = (props) => {
    return (
        <div>
            <div className={style.preloader}>
                <img src={preloader} alt="preloader" />
            </div>

        </div>

        )
};

export default Preloader;