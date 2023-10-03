import React, {lazy, Suspense} from "react";
import {Navigate} from "react-router";
import {createBrowserRouter} from "react-router-dom";

import {PATHS} from "@router/paths";

import AppLayout from "@layouts/AppLayout";
import AppFallback from "@layouts/AppFallback";

import {RouterServices} from "@router/RouterServices";

const PostPage = lazy(() => import("@pages/PostPage"));
const PostsPage = lazy(() => import("@pages/PostsPage"));
const WelcomePage = lazy(() => import("@pages/WelcomePage"));
const PostsIndexPage = lazy(() => import("@pages/PostsIndexPage"));

const abs = RouterServices.toAbsolutePath;

export const router = createBrowserRouter([
    {
        element:
            (<Suspense
                fallback={<AppFallback/>}
            >
                <AppLayout/>
            </Suspense>),
        children: [
            {
                path: abs(PATHS.WELCOME),
                element: <WelcomePage/>
            },
            {
                path: abs(PATHS.POSTS_INDEX),
                element: <PostsIndexPage/>,
                loader: async () => {
                    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
                        .then(resp => resp.json());

                    return posts;
                },
                children: [
                    {
                        index: true,
                        element: <PostsPage/>
                    },
                    {
                        path: PATHS.POST,
                        element: <PostPage/>,
                        loader: async ({params}) => {
                            const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
                                .then(resp => resp.json());

                            return post;
                        }
                    }
                ]
            },
            {
                path: PATHS.ANY,
                element: <Navigate to={abs(PATHS.WELCOME)}/>
            },
        ]
    }
]);

