import React from "react";
import { Link } from "react-router-dom";

const HotTakeCard = ({ take }) => {
    return (
        <Link
            className={"card text-white bg-danger my-3 hoverable"}
            style={{ height: "150px" }} to={`/takes/view/${take._id}`}
        >
            <div className="card-header d-flex justify-content-between">
                <span>{take.user.displayName}</span>
                <span className="ml-auto">
                    {take.likes} <i className="fab fa-hotjar mr-2"></i>
                    {take.dislikes} <i className="fas fa-snowflake"></i>
                </span>
            </div>
            <div className="card-body">
                <div className="card-text text-left">
                    <h6>{take.title}</h6>
                    <p>{take.body}</p>
                </div>
            </div>
        </Link>
    );
};

export default HotTakeCard;
