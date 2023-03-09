const Button = ({ number }) => {

    const handleClick = (e) => {
        e.preventDefault()
        alert(`Clicked button ${number}`)
    }

    return (<div className="btn_container">
        <button className="btn" onClick={handleClick}>{`Button ${number}`}</button>
    </div>
    );
}

export default Button;
