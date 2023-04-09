import React from 'react';

export default function TrendingTopics({ children }) {
    const topics = [
        'Relationship',
        'Blockchain',
        'Marriage Advice',
        'Technology',
        'Entertainment',
        'Movie Reviews',
        'Fashion & style'
    ];

    return (
        <>
            <section class="portfolio__service service-v5 pt-140 pb-140">
                <div class="container">
                    <div class="row animation_workflow_6">
                        <div class="row animation_workflow_6">
                            <div class="col-xxl-12">
                                <div class="title-wrapper-6 text-anim">
                                    <h2 class="sec-subtile-6">Trending Topics</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='portfolio__service-list'>
                        <div className='row'>
                            {topics.map((topic) => (
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                    <div class="portfolio__service-item">
                                        <a href="service-details.html">
                                            <h3 class="ps-title">{topic}</h3>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}