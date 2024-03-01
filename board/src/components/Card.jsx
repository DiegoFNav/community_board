import React from "react";

const Card = (props) => {
    return (
        // <td className={'Event ' + props.color}>
        //     <h5>{props.event}</h5>
        //     <h6>{props.location}</h6>
        // </td>
        <div className="card">
            <img src={props.img} alt={"Picture of " + props.title} />
            <h2>{props.title}</h2>
            <h6>{props.desc}</h6>
            {props.link ? (
                <a href={props.link}>
                    <button>
                        Link Here!
                    </button>
                </a>
            ) : null}
        </div>
    )
}

export default Card;