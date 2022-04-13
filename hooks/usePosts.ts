import {useQuery} from "react-query";
import {getPosts} from "../api";

export default function usePosts() {
    return useQuery("posts", getPosts);
}