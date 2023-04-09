import React from "react";
import { Link } from '@inertiajs/inertia-react';

export default function FooterWeb() {
    return (
        <>
            {/* <!-- Footer area start --> */}
            <footer className="footer__area-6">
                <div className="container g-0 line_4">
                    <div className="line-col-4">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="footer__top-6 pt-150 pb-140">
                                <div className="footer__item-6">

                                        </div>
                                </div>
                                <div className="footer__btm-6">
                                    <div className="row">
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5">
                                            <div className="footer__copyright-6">
                                                <p>© 2022 - 2025 | Alrights reserved by <br/> <Link href="https://wealcoder.com/"
                                                    target="_blank">Wrytup<span style={{ color: 'red' }}>Plus</span></Link>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-7">
                                            <div className="footer__nav">
                                                <ul className="footer-menu menu-anim">
                                                    <li><Link href="about.html">Home</Link></li>
                                                    <li><Link href="contact.html">Explore</Link></li>
                                                    <li><Link href="career.html">Creator Portal</Link></li>
                                                    <li><Link href="faq.html">Wrytup<span style={{ color: 'red' }}>Plus</span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </footer>
            {/* <!-- Footer area end --> */}
        </>
    );
}