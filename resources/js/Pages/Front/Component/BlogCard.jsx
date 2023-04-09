import React from "react";

export default function BlogCard (props) {
    return (
        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4" style={{ marginBottom: "40px",  }}>
            <div className="card blog__item text-center" style={{ border: "1px solid #000", borderRadius: "10px", boxShadow: "none" }}>
                <a href={props.link}>
                    <img className="rounded-circle" height={90} width={90} src={props.imgSrc} alt={props.imgAlt} />
                </a>
                <div className="card-body">
                    <div>
                        <h5>
                            <a href={props.link} className="blog__title">
                                {props.title}
                            </a>
                        </h5>
                        <p className="text-desc">{props.description}</p>
                        <a href={props.link} className="blog__btn">
                            Follow <span><i className="fa-solid fa-arrow-right"></i></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
