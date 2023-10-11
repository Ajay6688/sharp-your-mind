import "../styles/Popup.css";

const Popup = (props) => {
    return props.trigger ? (<div className="popup">
        <div className="popup-content"> {props.children}</div>
    </div>
    ) : null;
}

export default Popup;