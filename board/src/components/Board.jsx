import React from "react";
import Card from "./Card";

const Board = () => {
    return (
        <>
        <div className="board">
            <h2>Hi</h2>
            <div className="card_container">
                <Card title="Super Smash Bros Tournament" 
                desc="Our monthly tournament will be held next Friday in Room 602, please click the link below to sign up!" 
                img="Smash.PNG" 
                link=""/>
            </div>

        </div>
        </>
    )
}

export default Board;