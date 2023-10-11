import "../../styles/IQTest.css";
import PatternGame from "../pattern_game";
import TextMCQ from "../textMCQ_game";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { iqCalculator } from "../../utils";

const quesArr = [
    {
        type: "PATTERN",
        q: "https://f867b987572fb5d41ec60f5cee22021a.cdn.bubble.io/f1619620533832x433131910406034500/Q1.svg",
        A: "https://f867b987572fb5d41ec60f5cee22021a.cdn.bubble.io/f1619620616027x749775513973640600/Q%201%20A%20%281%29.svg",
        B: "https://f867b987572fb5d41ec60f5cee22021a.cdn.bubble.io/f1619620604000x436440903663458400/Q%201%20A%20%282%29.svg",
        C: "https://f867b987572fb5d41ec60f5cee22021a.cdn.bubble.io/f1619620628324x813131711903281900/Q%201%20A%20%283%29.svg",
        D: "https://f867b987572fb5d41ec60f5cee22021a.cdn.bubble.io/f1619620647449x949628165349358000/Q%201%20A%20%284%29.svg",
        ans: "A"
    },
    {
        type: "PATTERN",
        q: "https://f867b987572fb5d41ec60f5cee22021a.cdn.bubble.io/f1619611958813x303368106426746600/Q-01.svg",
        A: "https://f867b987572fb5d41ec60f5cee22021a.cdn.bubble.io/f1619612017708x318234080959034500/Q-02.svg",
        B: "https://f867b987572fb5d41ec60f5cee22021a.cdn.bubble.io/f1619612038426x989591692011166200/Q-03.svg",
        C: "https://f867b987572fb5d41ec60f5cee22021a.cdn.bubble.io/f1619621354436x983135457868009200/Q-03.svg",
        D: "https://f867b987572fb5d41ec60f5cee22021a.cdn.bubble.io/f1619621335445x643859524396502800/Q-04.svg",
        ans: "B"
    },
    {
        type: "PATTERN",
        q: "https://f867b987572fb5d41ec60f5cee22021a.cdn.bubble.io/f1619622838404x770376798705511300/Q3.svg",
        A: "https://f867b987572fb5d41ec60f5cee22021a.cdn.bubble.io/f1619622871266x487571820856178600/Q%203%20A%20%281%29.svg",
        B: "https://f867b987572fb5d41ec60f5cee22021a.cdn.bubble.io/f1619622884080x109847414543593490/Q%203%20A%20%282%29.svg",
        C: "https://f867b987572fb5d41ec60f5cee22021a.cdn.bubble.io/f1619622894966x491590834046897700/Q%203%20A%20%283%29.svg",
        D: "https://f867b987572fb5d41ec60f5cee22021a.cdn.bubble.io/f1619622905548x566558871071154400/Q%203%20A%20%284%29.svg",
        ans: "C"
    },
    {
        type: "PATTERN",
        q: "https://f867b987572fb5d41ec60f5cee22021a.cdn.bubble.io/f1619612164401x306501931139286920/Q-06.svg",
        A: "https://f867b987572fb5d41ec60f5cee22021a.cdn.bubble.io/f1619612188661x664850454619189400/Q-07.svg",
        B: "https://f867b987572fb5d41ec60f5cee22021a.cdn.bubble.io/f1619612206726x152477936947297500/Q-08.svg",
        C: "https://f867b987572fb5d41ec60f5cee22021a.cdn.bubble.io/f1619612220629x748943399782868100/Q-09.svg",
        D: "https://f867b987572fb5d41ec60f5cee22021a.cdn.bubble.io/f1619612230359x380918791418798340/Q-10.svg",
        ans: "C"
    },
    {
        type: "TEXT",
        q: "What is my name",
        A: "Ajay",
        B: "Abhishek",
        C: "Hritik",
        D: "Siva Sai",
        ans: "A"
    }
]

const IqTestGame = () => {

    const [quesIndex, setQuesIndex] = useState(0);
    const [quesNumber, setQuesNumber] = useState(1);
    const [userAns, setUserAns] = useState("");
    const [score, setScore] = useState(0);

    const navigate = useNavigate();

    const handleAnswerClick = (userAns) => {

        console.log(userAns);
        if (userAns === quesArr[quesIndex].ans) {
            console.log("correct");
            setScore((prev) => prev + 1);
            setUserAns(userAns);
        } else {
            console.log("wrong");
            // props.setScore((prev)=>prev-1);
        }

        setQuesIndex((prev) => prev + 1);
        setQuesNumber((prev) => prev + 1);
    }

    return <>
        <div>
            <h1
                style={{ display: "flex", justifyContent: "center", fontFamily: "'Bai Jamjuree', sans-serif", color: "#0490c7", marginTop: "28px", marginBottom: "28px" }}
            >IQ test game
            </h1>
            {quesIndex !== quesArr.length && <>
                <div style={{ fontFamily: "'Bai Jamjuree', sans-serif", color: "#0490c7", height: "0px", marginLeft: "12%" }}><h2>Q {quesNumber}/{quesArr.length}</h2></div>
                {quesArr[quesIndex].type === "PATTERN" ?
                    <PatternGame
                        ques={quesArr[quesIndex]}
                        setUserAns={setUserAns}
                        setQuesIndex={setQuesIndex}
                        setQuesNumber={setQuesNumber}
                        setScore={setScore}
                        handleAnswerClick={handleAnswerClick}
                    />
                    :
                    <TextMCQ
                        handleAnswerClick={handleAnswerClick}
                    />}
            </>
            }

            {quesIndex === quesArr.length && <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "3%" }}>
                <h2 style={{ fontFamily: "'Bai Jamjuree', sans-serif", color: "#0490c7" }}>Game is Completed!</h2>
                <h3 style={{ fontFamily: "'Bai Jamjuree', sans-serif", color: "#0490c7" }}>Your Score is : {score} / {quesArr.length}</h3>
                <div style={{ fontFamily: "'Bai Jamjuree', sans-serif", color: "#10749c", display: "flex", alignItems: "center" }}> <h1>Your iq is  {iqCalculator(score, quesArr.length)}</h1></div>
                <button className="btn" onClick={() => navigate("/games")}>Home</button>
            </div>}

            <span style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                {quesIndex !== 0 && quesIndex !== quesArr.length && <button className="btn" onClick={() => {
                    setQuesIndex((prev) => prev - 1);
                    setQuesNumber((prev) => prev - 1);
                    if (userAns === quesArr[quesIndex - 1].ans) {
                        setScore((prev) => prev - 1);
                    }

                }}>Previous</button>}
                {quesIndex !== quesArr.length &&
                    <button className="btn" onClick={() => {
                        if (quesIndex === quesArr.length - 1) {
                            // setQuesIndex(0);
                            // setQuesNumber(1);
                            return
                        }
                        setQuesIndex((prev) => prev + 1);
                        setQuesNumber((prev) => prev + 1);
                    }}>Skip</button>
                }
            </span>
        </div>
    </>
}

export default IqTestGame;