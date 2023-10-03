import {FC} from "react";
import {useLoaderData, useNavigate} from "react-router";

import {IPost} from "@common/types";

const PostPage: FC = () => {
    const navigate = useNavigate();
    const post = useLoaderData() as IPost;

    return (
        <section>
            <h1>{post.title}</h1>

            <p>{post.body}</p>

            <p>Post ID: {post.id}</p>

            <button onClick={() => navigate(-1)}>
                Back to posts
            </button>
        </section>
    );
};

export default PostPage;