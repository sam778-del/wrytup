import React from 'react';
import BlogCard from './BlogCard';

export default function Creator({ children }) {
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
        },
        {
            id: 4,
            imgSrc: "/imgs/hero/4/hero-4.jpg",
            imgAlt: "Avatar",
            title: "The Benefits of Meditation",
            description:
                "Meditation has numerous benefits for the mind, body, and spirit. Find out why you should start meditating today!",
            link: "blog-details.html",
        },
        {
            id: 5,
            imgSrc: "/imgs/hero/4/hero-4.jpg",
            imgAlt: "Avatar",
            title: "The Benefits of Meditation",
            description:
                "Meditation has numerous benefits for the mind, body, and spirit. Find out why you should start meditating today!",
            link: "blog-details.html",
        },
        {
            id: 6,
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
            <section class="feature__area-6 service-v5 pt-140 pb-140">
                <div class="container">
                    <div class="row animation_workflow_6">
                        <div class="row animation_workflow_6">
                            <div class="col-xxl-12">
                                <div class="title-wrapper-6 text-anim">
                                    <h2 class="sec-subtile-6">Trending Topics</h2>
                                    <p>Meet the writers in your communities creating extraordinary contents.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='portfolio__service-list'>
                        <div class="row reset-grid">
                            {blogs.map((blog) => (
                                <BlogCard
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
                </div>
            </section>
        </>
    );
}