import React from "react";

export default function DiscoverCard(props) {
    return (
        <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-8" style={{ marginBottom: '40px' }}>
            <div className="card blog__item text-center" style={{ display: "flex", flexDirection: "row", borderRadius: "10px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
                <img className="card-img" height={120} style={{ objectFit: 'cover' }} src={props.imgSrc} alt={props.imgAlt} />
                <div className="card-body">
                    <div>
                        <h5 className="blog__title">
                            <a href={props.link}>
                                {props.title}
                            </a>
                        </h5>
                        <p className="text-desc">{props.description}</p>
                    </div>
                    <a href={props.link} className="blog__btn">
                        Read More <span><i className="fa-solid fa-arrow-right"></i></span>
                    </a>
                </div>
            </div>
        </div>
    );
};
