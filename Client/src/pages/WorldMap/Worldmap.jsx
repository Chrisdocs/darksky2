import * as React from "react"
import { Routes, Route, Link} from "react-router-dom";
import "./styles.css";
import ValoriaWorldMap from "../../assets/images/Valoria.png";



export default function WorldMap() {


    return (
        <div id="worldmap-div">
                <img className="worldmap-img" src={ValoriaWorldMap} />
        </div>
    );
}

