import React from "react";

const Card = () => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src="https://robohash.org/jimmy" alt='robos' />
            <div>
                <h2>Jane Doe</h2>
                <p>Jane.Doe@gmail.com</p>
            </div>
        </div>
    );
}
export default Card;