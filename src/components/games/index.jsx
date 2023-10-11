import { useNavigate } from "react-router-dom";


const Games = () => {

    const navigate = useNavigate();

    return <>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "70px", alignItems: "center" }}>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm" onClick={()=>navigate("/games/iq-test")}>
                            <div className="card text-white bg-primary mb-3" style={{ maxWidth: "18rem" }}>
                                <div className="card-header">Challenge Your Mind</div>
                                <div className="card-body">
                                    <h5 className="card-title">Play the IQ Test Game</h5>
                                    <p className="card-text">
                                    Engage in an exciting intellectual journey with our IQ Test game. Discover where your intelligence stands as you tackle a series of stimulating questions, puzzles, and challenges.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm" onClick={()=>navigate("/games/lung-test")}>
                            <div
                                className="card text-white bg-secondary mb-3"
                                style={{ maxWidth: "18rem" }}
                            >
                                <div className="card-header">Assess Your Lung Health</div>
                                <div className="card-body">
                                    <h5 className="card-title">Take the Lung Function Test</h5>
                                    <p className="card-text">
                                        Experience a comprehensive assessment of your lung health with our Lung Function Test. Discover your lung capacity and breathing efficiency while gaining insights into your respiratory well-being.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm" onClick={()=>navigate("/games/psychology-test")}>
                            <div className="card text-white bg-success mb-3" style={{ maxWidth: "18rem" }}>
                                <div className="card-header">Explore Psychology</div>
                                <div className="card-body">
                                    <h5 className="card-title">Take a Psychology Test</h5>
                                    <p className="card-text">
                                        Delve into the fascinating world of psychology with our thought-provoking test. Gain insights into your psyche, personality, and cognitive patterns. Unlock a deeper understanding of yourself.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="row">
                        <div className="col-sm" onClick={()=>navigate("/games/boost-iq")}>
                            <div className="card text-white bg-danger mb-3" style={{ maxWidth: "18rem" }}>
                                <div className="card-header">Boost Your IQ</div>
                                <div className="card-body">
                                    <h5 className="card-title">Unlock Your Intellectual Potential</h5>
                                    <p className="card-text">
                                    Dive into challenging puzzles, brain teasers, and thought-provoking exercises meticulously crafted to sharpen your intellect and elevate your IQ. Are you up for the ultimate challenge?
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm" onClick={()=>navigate("/games/boost-lung-capacity")}>
                            <div className="card text-white bg-info mb-3" style={{ maxWidth: "18rem" }}>
                                <div className="card-header">Enhance Lung Capacity</div>
                                <div className="card-body">
                                    <h5 className="card-title">Breathe Better, Live Healthier</h5>
                                    <p className="card-text">
                                        Explore exercises and techniques designed to boost your lung capacity and improve your respiratory health. Take a breath, embrace the journey, and optimize your well-being.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm" onClick={()=>navigate("/games/boost-psychological-power")}>
                            <div className="card text-white bg-dark mb-3" style={{ maxWidth: "18rem" }}>
                                <div className="card-header">Unleash Your Inner Strength</div>
                                <div className="card-body">
                                    <h5 className="card-title">Boost Your Psychological Power</h5>
                                    <p className="card-text">
                                        Explore techniques and exercises that empower your mind and enhance your psychological strength. Unleash your inner potential and harness the power of your mind.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

}

export default Games;