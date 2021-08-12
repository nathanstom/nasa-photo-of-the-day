import React from "react";


const MainPage = props => {

    const { title, description, imageURL, date } = props;


    return (
        <div>
                <h1>Astronomy Picture of the Day</h1>
                <p>{date}</p>
                <h2>{title}</h2>
                <p>{description}</p>
                <img src={imageURL} alt="N/A" />
        </div>
    );
}
export default MainPage;  