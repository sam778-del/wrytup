import React, { useState, useEffect } from 'react';
import { Image, Shimmer } from 'react-shimmer';
import { Link, Head } from '@inertiajs/inertia-react';
import HeaderWeb from './Front/Component/header';
import FooterWeb from './Front/Component/footer';
import BodyWeb from './Front/Component/body';
import TrendingTopics from './Front/Component/TrendingTopics';
import TodayTopics from './Front/Component/TodayTopics';
import Creator from './Front/Component/Creators';

export default function Welcome(props) {
    const [shimmerActive, setShimmerActive] = useState(true);

    const handleImageLoad = () => {
        setTimeout(() => {
            setShimmerActive(false);
        }, 5000);
    };

    useEffect(() => {
        const shimmerTimer = setTimeout(() => {
            setShimmerActive(false);
        }, 5000); // set the duration of the shimmer effect here (in milliseconds)

        return () => clearTimeout(shimmerTimer);
    }, []);

    return (
        <>
            <Head title="Welcome" />
            <HeaderWeb />
            <BodyWeb>
                {/* <!-- Hero area start --> */}
                <section className="hero__area-6">
                    <div className="container g-0 line_4">
                        <div className="line-col-4">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>

                        <div className="row">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                <div className="hero__content-6 hero__six_anim">
                                    {shimmerActive ? (
                                        <Shimmer width={100} height={50} />
                                    ) : (
                                        <img src='/imgs/hero/4/arrow-icon.png' alt="Arrow Icon" onLoad={handleImageLoad} />
                                    )}
                                    <h2 className="hero__title-5 p-3">Wrytup is a social writing platform for creators and
                                        readers to share contents,
                                        make money and build communities.</h2>
                                    <div className='justify-content-center align-items-center' style={{ textAlign: 'center' }}>
                                        {shimmerActive ? (
                                            <div className="btn-view shimmer" style={{ height: '46px', width: '180px' }}></div>
                                        ) : (
                                            <>
                                                <Link className="btn-view" href="about.html">Start Writing<i className="fa-solid fa-arrow-right"></i></Link>
                                            </>
                                        )}
                                        <p className='p-2'>if you're just here to read articles, <Link className='' style={{ color: 'red' }}>click here</Link></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                <div className="hero__right-6">
                                    {shimmerActive ? (
                                        <Shimmer width={655} height={773} />
                                    ) : (
                                        <img src='/imgs/hero/4/hero-4.jpg' style={{ height: '773px' }} alt="Hero Image" onLoad={handleImageLoad} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="hero__shape" src="/imgs/hero/4/hero-shape.png" alt="Shape Image" />
                    <img className="hero__shape-2" src="/imgs/hero/4/hero-shape-2.png" alt="Layout" />
                    <img className="hero__shape-3" src="/imgs/hero/4/hero-shape-3.png" alt="Star Icon" />
                    <img className="shape-4" src="/imgs/shape/20.png" alt="Star Icon" />
                </section>
                {/* <!-- Hero area end --> */}

                {/* Start of trending topics */}
                <TrendingTopics />
                {/* End of trending topics */}

                {/* today topics */}
                <TodayTopics />
                {/* end of today topics */}

                {/* creators */}
                <Creator />
                {/* end creators */}
            </BodyWeb>
            <FooterWeb />
        </>
    );
}
