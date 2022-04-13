import React, {useState} from "react";
import {ReactQueryDevtools} from "react-query/devtools";
import Posts from './Posts'
import Post from './Post'

const Example2 = () => {
    const [postId, setPostId] = useState(-1);
    return (
        <>
            <p>
                As you visit the posts below, you will notice them in a loading state
                the first time you load them. However, after you return to this list and
                click on any posts you have already visited again, you will see them
                load instantly and background refresh right before your eyes!{" "}
                <strong>
                    (You may need to throttle your network speed to simulate longer
                    loading sequences)
                </strong>
            </p>
            {postId > -1 ? (
                <Post postId={postId} setPostId={setPostId} />
            ) : (
                <Posts setPostId={setPostId} />
            )}
            <ReactQueryDevtools initialIsOpen />
        </>
    )
}

export default Example2