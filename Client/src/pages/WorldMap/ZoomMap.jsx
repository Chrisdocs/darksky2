import React from "react"
import { PhotoSwipe } from "react-photoswipe";
import "./styles.css";
import "react-photoswipe/lib/photoswipe.css"
import ValoriaWorldMap from "../../assets/images/Valoria.png";
import ValoriaWorldMapZ from "../../assets/images/ValoriaGrid.png";


function ZoomMap() {

    let isOpen = true;

    let items = [
        {
            src: ValoriaWorldMap,
            w: 2400,
            h: 1800,
            title: 'Valoria Map'
        },
        {
            src: ValoriaWorldMapZ,
            w: 2400,
            h: 1800,
            title: 'Valoria Map'
        }
    ];

    let options = {
        //http://photoswipe.com/documentation/options.html
    }

    const handleClose = () => {
        isOpen = false
    }

    return (
        <div id="worldmap-div">
            <PhotoSwipe isOpen={isOpen} items={items} options={options} onClose={handleClose}/>
        </div>
    );
}

export default ZoomMap;