import { useState, useEffect } from "react";
import appWriteService from "../appwrite/dbStorageConfig";
import { PostCard, Container } from "../components";

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appWriteService.getPosts().then((posts) => {
            console.log(posts)
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
    console.log(posts);
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    } else {
        return (
            <div className="py-8">
                <Container>
                    <div className="flex flex-wrap">
                        {posts.map(post => (
                            <div key={post.$id} className="p-2 w-1/4">
                                <PostCard $id={post.$id} title={post.title} featureImage={post.featureImage} post />
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        );
    }
}