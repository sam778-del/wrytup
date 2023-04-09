import React from "react";

export default function LoaderWeb() {
    return (
        <>
            {/* <!-- Cursor Animation --> */}
            <div className="cursor1"></div>
            <div className="cursor2"></div>

            {/* <!-- Preloader --> */}
            <div className="preloader">
                <div className="loading">
                    <div className="bar bar1"></div>
                    <div className="bar bar2"></div>
                    <div className="bar bar3"></div>
                    <div className="bar bar4"></div>
                    <div className="bar bar5"></div>
                    <div className="bar bar6"></div>
                    <div className="bar bar7"></div>
                    <div className="bar bar8"></div>
                </div>
            </div>
        </>
    );
}