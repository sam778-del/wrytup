import React from "react";
import { Link } from '@inertiajs/inertia-react';

export default function HeaderWeb() {
    return (
        <>
            {/* <!-- Header area start --> */}
            <header className="header__area-3">
                <div className="header__inner-3">
                    <div className="header__logo-2">
                        <Link href="/" className="logo-dark"><img src="/imgs/logo/wrytup logo-green.png" style={{ height: "55px" }} alt="Site Logo" /></Link>
                        <Link href="/" className="logo-light"><img src="/imgs/logo/wrytup logo-green.png" style={{ height: "55px" }} alt="Site Logo" /></Link>
                    </div>
                    <div className="header__nav-2">
                        <ul className="main-menu-3 menu-anim">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/">Explore</Link></li>
                            <li><Link href="/">Creator Portal</Link></li>
                            <li><Link href="/">Wrytup<span style={{ color: 'red' }}>Plus</span></Link></li>
                        </ul>
                    </div>
                    <div className="header__nav-icon-3">
                        <button id="open_offcanvas"><img src={"/imgs/icon/menu-black.png"} alt="Menubar Icon" /></button>
                    </div>
                </div>
            </header>
            {/* <!-- Header area end --> */}
        </>
    )
}