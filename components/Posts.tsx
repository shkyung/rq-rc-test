import {useQueryClient} from "react-query";
import React from "react";
import usePosts from "../hooks/usePosts";
import {Post} from "../types";

interface Props {
    setPostId: React.Dispatch<React.SetStateAction<number>>
}

function Posts({ setPostId }: Props) {
    const queryClient = useQueryClient();
    const { status, data, error, isFetching } = usePosts();

    return (
        <div>
            <h1>Posts</h1>
            <div>
                {status === "loading" ? (
                    "Loading..."
                ) : status === "error" ? (
                    <span>Error: {error.message}</span>
                ) : (
                    <>
                        <div>
                            {data.map((post: Post) => (
                                <p key={post.id}>
                                    <a
                                        onClick={() => setPostId(post.id)}
                                        href="#"
                                        style={
                                            // We can access the query data here to show bold links for
                                            // ones that are cached
                                            queryClient.getQueryData(["post", post.id])
                                                ? {
                                                    fontWeight: "bold",
                                                    color: "green",
                                                }
                                                : {}
                                        }
                                    >
                                        {post.title}
                                    </a>
                                </p>
                            ))}
                        </div>
                        <div>{isFetching ? "Background Updating..." : " "}</div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Posts