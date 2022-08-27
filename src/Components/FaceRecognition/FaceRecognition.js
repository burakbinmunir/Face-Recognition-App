import React from "react";
import './FaceRecognition.css'
const FaceRecognition = ({box, imgUrl}) => {
    return (
        <div>
            <div className="absolute mt3 center">
                <img id="inputImage" alt="a picture" src={imgUrl} width={"500px"} height="auto"/>
                <div className="boundry" style={{top: box.topRow ,left: box.leftCol, bottom: box.bottomRow, right: box.rightCol}}></div>
            </div>
        </div>
    );
}

export default FaceRecognition;