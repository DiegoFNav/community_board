import React from "react";

const Card = (props) => {
    return (
        <div className="card">
            <img src={"/img/" + props.img} alt={"Picture of " + props.title} />
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            {props.link ? (
                <a href={props.link}>
                    <button>
                        Click Here!
                    </button>
                </a>
            ) : null}
        </div>
    )
}

export default Card;