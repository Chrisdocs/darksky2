import React from "react"
import "./styles.css";
import ValoriaWorldMap from "../../assets/images/Valoria.png";


function WorldMap() {
    return (
        <div id="worldmap-div">
            <img id="worldmap-img" src={ValoriaWorldMap}></img>
        </div>
    );
}

export default WorldMap;