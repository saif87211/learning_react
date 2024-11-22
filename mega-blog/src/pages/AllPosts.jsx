import { useEffect, useState } from "react";
import appWriteService from "../appwrite/dbStorageConfig";
import { PostCard, Container } from "../components";

export default function AllPosts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        appWriteService
            .getPosts([])
            .then(posts => {
                if (posts) {
                    setPosts(posts.documents);
                }
            });
    }, []);
    return (
        <div className="w-full py-8">
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