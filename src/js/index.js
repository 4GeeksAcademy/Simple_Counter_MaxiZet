//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondsCouter from "./component/secondsCounter.jsx";

let seconds = 0
let intervalo


//render your react application
let app = ReactDOM.createRoot(document.getElementById('app'))

app.render(<SecondsCouter counter={seconds} />);

const renderSecondsCounter = () => {
    seconds++;
    app.render(<>
        <SecondsCouter counter={seconds} />
        <div>
            <input id="cantidadDeSegundos" placeholder="Cantidad de sgundos" type="number" onChange={(event) => {
                seconds = event.target.value
            }} />
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-danger" onClick={()=>{
                    clearInterval(intervalo);
                }}>Stop</button>
                <button type="button" className="btn btn-warning" onClick={()=>{
                    intervalo = setInterval(renderSecondsCounter,1000);
                }}>Play</button>
                <button type="button" className="btn btn-primary" onClick={()=>{
                    seconds = 0;
                    document.querySelector("#cantidadDeSegundos").value = undefined;
                }}>Restart</button>
            </div>
        </div>
    </>);
};

intervalo = setInterval (renderSecondsCounter,1000);