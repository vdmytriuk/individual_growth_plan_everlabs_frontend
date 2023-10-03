import {FC} from "react";
import {useLoaderData} from "react-router";
import {Outlet} from "react-router-dom";

import {IPost} from "@common/types";

const PostsIndexPage: FC = () => {
    const posts = useLoaderData() as IPost[];

    return <Outlet context={{posts}}/>;
};

export default PostsIndexPage;