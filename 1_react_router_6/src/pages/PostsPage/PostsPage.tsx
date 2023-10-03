import {FC} from "react";
import {Link, useOutletContext} from "react-router-dom";

import {IPost} from "@common/types";

const PostsPage: FC = () => {
    const {posts} = useOutletContext<{posts: IPost[]}>();

    return (
        <section>
            {posts
                ?
                <ul>
                    {posts.map(({id, title, body}) => (
                        <li key={id}>
                            <Link to={id.toString()}>
                                {title}
                            </Link>

                            <p>{body}</p>
                        </li>
                    ))}
                </ul>
                :
                <p>Loading...</p>
            }
        </section>
    );
};

export default PostsPage;