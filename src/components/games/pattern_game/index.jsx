import "../../styles/IQTest.css";
import { useState } from "react";

const PatternGame = (props) => {

    const [loadingError, setLoadingError] = useState(false);

    return <>
        <div className="outer-iq-game">
            <div className="outer-iq-test-box">
                {!loadingError ? <img src={props.ques.q} alt="" style={{ width: "100%", height: "100%" }} onError={() => {
                    console.error("Image failed to load");
                    setLoadingError(true);
                }} /> : <span>loading...</span>}
            </div>
            <div className="outer-iq-options-box">
                <div className="options-row">
                    <div className="iq-options-box" onClick={props.handleAnswerClick.bind(null, "A")}>
                        <div style={{ marginLeft: "7px" }}>A</div>
                        {!loadingError ? <img src={props.ques.A} alt="" style={{ height: "80%", width: "100%" }} onError={() => setLoadingError(true)} /> : <span>loading...</span>}
                    </div>
                    <div className="iq-options-box" onClick={props.handleAnswerClick.bind(null, "B")}>
                        <div style={{ marginLeft: "7px" }}>B</div>
                        {!loadingError ? <img src={props.ques.B} alt="" style={{ height: "80%", width: "100%" }} onError={() => setLoadingError(true)} /> : <span>loading...</span>}
                    </div>
                </div>
                <div className="options-row">
                    <div className="iq-options-box" onClick={props.handleAnswerClick.bind(null, "C")}>
                        <div style={{ marginLeft: "7px" }}>C</div>
                        {!loadingError ? <img src={props.ques.C} alt="" style={{ height: "80%", width: "100%" }} onError={() => setLoadingError(true)} /> : <span>loading...</span>}
                    </div>
                    <div className="iq-options-box" onClick={props.handleAnswerClick.bind(null, "D")}>
                        <div style={{ marginLeft: "7px" }}>D</div>
                        {!loadingError ? <img src={props.ques.D} alt="" style={{ height: "80%", width: "100%" }} onError={() => setLoadingError(true)} /> : <span>loading...</span>}
                    </div>
                </div>
            </div>
        </div>
    </>
}


export default PatternGame;