import React from 'react';
import DiscoverCard from './DiscoverCard';

export default function TodayTopics({ children }) {
    const blogs = [
        {
            id: 1,
            imgSrc: "/imgs/hero/4/hero-4.jpg",
            imgAlt: "Avatar",
            title: "The Benefits of Meditation",
            description:
                "Meditation has numerous benefits for the mind, body, and spirit. Find out why you should start meditating today!",
            link: "blog-details.html",
        },
        {
            id: 2,
            imgSrc: "/imgs/hero/4/hero-4.jpg",
            imgAlt: "Avatar",
            title: "The Benefits of Meditation",
            description:
                "Meditation has numerous benefits for the mind, body, and spirit. Find out why you should start meditating today!",
            link: "blog-details.html",
        },
        {
            id: 3,
            imgSrc: "/imgs/hero/4/hero-4.jpg",
            imgAlt: "Avatar",
            title: "The Benefits of Meditation",
            description:
                "Meditation has numerous benefits for the mind, body, and spirit. Find out why you should start meditating today!",
            link: "blog-details.html",
        }
    ];

    return (
        <>
            <section class="workflow__area-4">
                <div class="container line_4 pt-100 pb-130">
                    <div class="line-col-4">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    <div class="row animation_workflow_6">
                        <div class="row animation_workflow_6">
                            <div class="col-xxl-12">
                                <div class="title-wrapper-6 text-anim" style={{ marginBottom: '45px' }}>
                                    <h2 class="sec-subtile-6">Today's Top Posts</h2>
                                    <p>Find new, handpicked stories you'll love, updated daily.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row reset-grid">
                        {blogs.map((blog) => (
                            <DiscoverCard
                                key={blog.id}
                                imgSrc={blog.imgSrc}
                                imgAlt={blog.imgAlt}
                                title={blog.title}
                                description={blog.description}
                                link={blog.link}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}