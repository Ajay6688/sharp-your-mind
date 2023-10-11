import React, { useState, useEffect } from 'react'
import "../../styles/LungsTest.css";

const Progressbar = (props) => {
    const [filled, setFilled] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [buttonText, setButtonText] = useState(true);

    useEffect(() => {
        if (isRunning) {
            if (filled < 100) {
                const timeoutId = setTimeout(() => {
                    setFilled(prev => prev + 1);
                }, 800);

                return () => clearTimeout(timeoutId);
            } else {
                setIsRunning(false);
                setFilled(0);
            }
            if(filled===100){
                setButtonText(true);
            }
        }
    }, [filled, isRunning]);

    useEffect(() => {
        if (props.timerValue === 0) {
            // Start the progress bar when the countdown reaches 0
            setIsRunning(true);
        }
    }, [props.timerValue]);

    const toggleProgressBar = () => {
        if (props.timerValue === 0) {
            setIsRunning((prev) => !prev);
            setButtonText((prev) => !prev);
        } else {
            props.setStartTimer(true);
            setButtonText((prev) => !prev);
        }
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
            <div className="progressbar">
                <div style={{
                    height: "100%",
                    width: `${filled}%`,
                    background: 'linear-gradient(to right, #87CEEB, #00008B)',
                    transition: "width 3s"
                }}></div>
                <span className="progressPercent">{filled}%</span>
            </div>
            <span style={{ display: "flex", width: "87%", justifyContent: "space-between", marginTop: "10px", fontFamily: "'Bai Jamjuree', sans-serif", color: "#c9cfd1" }}>
                <h4>0</h4><h4>1</h4><h4 style={{ color: "black" }}>2</h4><h4>3</h4><h4>4</h4><h4 style={{ color: "black" }}>5</h4><h4>6</h4><h4>7</h4><h4>8</h4><h4>9</h4><h4 style={{ color: "black" }}>10</h4>
            </span>
            <span style={{ display: "flex", width: "957px", justifyContent: "end", marginTop: "10px", fontFamily: "'Bai Jamjuree', sans-serif", color: "#05b3f7" }}>
                <h4 style={{ marginRight: "82px" }}>Normal Lungs</h4> <span style={{ display: "flex", justifyContent: "space-between", width: "58%" }}><h4>Strong Lungs</h4> <h4>Super Lungs</h4></span>
            </span>
            <span style={{display:"flex"}}>
                <button
                    className="btn"
                    onClick={toggleProgressBar}
                >
                    {buttonText ? "Run" : "Pause"}
                </button>
                <button
                    className="btn"
                    onClick={()=>window.location.reload()}
                >
                    Restart
                </button>
            </span>
        </div>
    )
}

export default Progressbar;
