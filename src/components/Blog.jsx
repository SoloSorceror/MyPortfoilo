import React from 'react';
import './Blog.css';

const Blog = () => {
    // Easy to add/edit blog posts - just modify this array!
    const blogPosts = [
        {
            id: 1,
            title: 'All CSE Essentials',
            excerpt: 'A comprehensive guide to all the essentials of Computer Science and Engineering.',
            date: '2024-11-15',
            image: '/public/cseFun.jpg',
            readTime: '5 min read',
            tags: ['CSE', 'C++', 'OOP', 'DS', 'Algo'],
            link: 'https://hazel-night-5c9.notion.site/Computer-fundamentals-1f609c5d57b4804680f1ed494423f6c1'
        },
        {
            id: 2,
            title: 'Future of Doctor Consultation And Appointment Using LYRA AI',
            excerpt: 'Creating scalable and maintainable design systems that enhance team productivity and user experience.',
            date: '2024-11-08',
            image: '/public/doc.jpg',
            readTime: '7 min read',
            tags: ['Design', 'UI/UX', 'Systems'],
            link: '#'
        },
        {
            id: 3,
            title: 'Master Data Structures with C++',
            excerpt: 'Practical techniques to improve your Data Structure skills.',
            date: '2024-10-28',
            image: '/public/dss.jpg',
            readTime: '6 min read',
            tags: ['DSA', 'C++', 'Algorithms'],
            link: '#https://hazel-night-5c9.notion.site/Computer-fundamentals-1f609c5d57b4804680f1ed494423f6c1'
        },
        {
            id: 4,
            title: 'JavaScript Guide',
            excerpt: 'Looking ahead at upcoming JavaScript features and how they will shape the future of web development.',
            date: '2024-10-20',
            image: '/public/javasC.jpg',
            readTime: '8 min read',
            tags: ['JavaScript', 'Future', 'ES2024'],
            link: 'https://hazel-night-5c9.notion.site/JAVA-SCRIPT-1fc09c5d57b48009a537e97ea07975d2?pvs=73'
        }
    ];

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <section id="blog" className="blog-section">
            <div className="container">
                <div className="blog-header">
                    <h2 className="section-title">From the blog</h2>
                    <a href="#" className="view-all-link">
                        View all blog posts
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </a>
                </div>

                <div className="blog-scroll-container">
                    <div className="blog-horizontal-scroll">
                        {blogPosts.map((post) => (
                            <article key={post.id} className="blog-card card">
                                <div className="blog-card-header">
                                    <div className="blog-dots">
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                    </div>
                                    <span className="blog-date">{formatDate(post.date)}</span>
                                </div>
                                <div className="blog-image">
                                    <img src={post.image} alt={post.title} />
                                    <div className="blog-overlay">
                                        <span className="read-time">{post.readTime}</span>
                                    </div>
                                </div>
                                <div className="blog-content">
                                    <h3 className="blog-title">{post.title}</h3>
                                    <p className="blog-excerpt">{post.excerpt}</p>
                                    <div className="blog-tags">
                                        {post.tags.map((tag, index) => (
                                            <span key={index} className="blog-tag">{tag}</span>
                                        ))}
                                    </div>
                                    <a
                                        href={post.link}
                                        className="btn blog-btn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Read more
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="scroll-hint">
                    ← Scroll horizontally to see more posts →
                </div>
            </div>
        </section>
    );
};

export default Blog;
