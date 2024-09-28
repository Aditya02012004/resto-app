const RestaurantSignUp = () => {
    return (
        <>
            <h3>Signup Component</h3>
            <div>
                <div className="input-wrapper">
                    <input type="text" placeholder="Enter Your Email" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="Enter Your Password" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="Confirm Your Password" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="Enter Restaurant Name" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="Enter Resturant City" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="Enter Resturant Address" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="Enter Resturant Contact No" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <button className="button">Sign Up</button>
                </div>
            </div>
        </>
    )
}

export default RestaurantSignUp;