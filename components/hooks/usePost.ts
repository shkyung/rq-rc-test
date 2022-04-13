import {useQuery} from "react-query";
import {getPostById} from "../../api";

export default function usePost(postId: number) {
    return useQuery(["post", postId], () => getPostById(postId), {
        enabled: !!postId,
    });
}