import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8 mt-16 bg-gradient-to-r from-purple-600 to-indigo-600">
            <Container>
                {/* Post Image Container */}
                <div className="relative w-full max-w-4xl mx-auto mt-8 mb-6 rounded-xl overflow-hidden shadow-xl transform transition duration-300 hover:scale-105">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="w-full h-lvh object-cover rounded-xl transform transition duration-300 hover:scale-105"
                    />

                    {/* Author Controls (Edit & Delete) */}
                    {isAuthor && (
                        <div className="absolute top-4 right-4 flex space-x-3">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="text-white px-4 py-2 rounded-lg transform transition duration-300 hover:scale-105 hover:bg-green-600">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost} className="text-white px-4 py-2 rounded-lg transform transition duration-300 hover:scale-105 hover:bg-red-600">
                                Delete
                            </Button>
                        </div>
                    )}
                </div>

                {/* Post Title */}
                <div className="w-full mb-4">
                    <h1 className="text-4xl font-bold text-white text-center transform transition duration-300 hover:scale-105">
                        {post.title}
                    </h1>
                </div>

                {/* Post Content */}
                <div className="text-lg text-gray-100 leading-relaxed space-y-4 animate__animated animate__fadeIn">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : (
        <div className="py-8">
            <Container>
                <p className="text-center text-xl text-gray-500">Loading post...</p>
            </Container>
        </div>
    );
}
