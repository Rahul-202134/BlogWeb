import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components'
import HeroSection from './HeroSection';

function Home() {
    const [posts, setPosts] = useState([]);
    const [visiblePosts, setVisiblePosts] = useState(4);

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    // Load more posts logic
    const handleLoadMore = () => {
        setVisiblePosts((prev) => prev + 4);
    };

    return (
        <>
            <HeroSection />
            <div className='w-full py-8'>
                <Container>
                    <h1 className='font-medium text-center text-xl'>{posts.length > 0 ? "Blogs" : " "}</h1>
                    <div className='flex flex-wrap'>
                        {posts.slice(0, visiblePosts).map((post) => (
                            <div key={post.$id} className='p-2 md:w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                    {visiblePosts < posts.length && (
                        <div className='btn-learnMore mt-8'>
                            <button
                                onClick={handleLoadMore}
                                className='border border-blue-600 p-3 rounded-sm text-white bg-blue-600 hover:bg-white hover:text-black'
                            >
                                Load More Blogs
                            </button>
                        </div>
                    )}
                </Container>
            </div>
        </>
    );
}

export default Home;
