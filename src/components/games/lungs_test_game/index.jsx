import React, { useEffect, useRef, useState } from "react";
import Progressbar from "../progressbar";
import Popup from "../../popup";

const lungImg = "https://img.freepik.com/free-vector/lung-banner-respiratory-system-smart-healthcare_53876-119556.jpg?t=st=1694161154~exp=1694161754~hmac=5e77b9b453f7f82a54585b375d28200282c30ee3152b4e8cc4c25011ba578c73";

const LungsTestGame = () => {
    const [timerValue, setTimerValue] = useState("Hold Your Breath");
    const [startTimer , setStartTimer]= useState(false);

    const containerRef = useRef(null);
    const dotRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const dot = dotRef.current;

        const radius = container.clientWidth / 2;
        let angle = 0;

        const updateDotPosition = () => {
            const x = radius * Math.cos(angle) + radius;
            const y = radius * Math.sin(angle) + radius;
            dot.style.transform = `translate(${x}px, ${y}px)`;
            angle += 0.02; // Adjust the speed of rotation here
            requestAnimationFrame(updateDotPosition);
        };

        updateDotPosition();
    }, []);

    useEffect(() => {
        if (startTimer) {
            let countdown = 3;
            const countdownInterval = setInterval(() => {
                setTimerValue(countdown);
                countdown--;

                if (countdown < 0) {
                    clearInterval(countdownInterval);
                }
            }, 1000);
        }
    }, [startTimer]);

    return (<>
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative", // Add this to make positioning easier
            }}
        >

            <h1 style={{ fontFamily: "'Bai Jamjuree', sans-serif", color: "#0490c7", marginBottom: "15px", marginTop: "14px" }}>
                <b>Test  Your  Lungs</b>
            </h1>
            <p style={{ fontFamily: "'Bai Jamjuree', sans-serif", textAlign: "center" }}><b>Hold Breath</b> whilst the ball is going<br /> round on the circumference of a circle</p>
            <div
                ref={containerRef}
                style={{
                    position: "relative",
                    width: "276px",
                    height: "276px", // Set the same dimensions as the circular image
                }}
            >
                <img
                    className="rounded-circle"
                    alt="avatar1"
                    src={lungImg}
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "50%",
                        marginTop: "9px",
                        marginLeft: "8px"
                    }}
                />
                <div
                    ref={dotRef}
                    style={{
                        position: "absolute",
                        width: "20px",
                        height: "20px",
                        backgroundColor: "white",
                        border: "3px solid #05b3f7",
                        borderRadius: "50%",
                    }}
                ></div>
            </div>
            <Progressbar timerValue={timerValue}  setStartTimer={setStartTimer}/>
            {startTimer && timerValue !==0 && <Popup trigger={true}>
                <h1 style={{ fontFamily: "'Bai Jamjuree', sans-serif", fontSize: "208px", color: "#45FFCA" }}>
                    {timerValue}
                </h1>
            </Popup>}
        </div>
    </>
    );
};

export default LungsTestGame;
