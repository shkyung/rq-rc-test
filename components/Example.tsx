import {useQuery} from "react-query";
import axios from "axios";
import {ReactQueryDevtools} from "react-query/devtools";
import React from "react";

function Example(): JSX.Element {
    const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
        axios.get(
            "https://api.github.com/repos/tannerlinsley/react-query"
        ).then((res) => res.data)
    );

    if (isLoading) return <div>loading..</div>;

    if (error) {
        // @ts-ignore
        return <div>`An error has occurred: ${error.message}`</div>
    }

    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <strong>👀 {data.subscribers_count}</strong>{" "}
            <strong>✨ {data.stargazers_count}</strong>{" "}
            <strong>🍴 {data.forks_count}</strong>
            <div>{isFetching ? "Updating..." : ""}</div>
            <ReactQueryDevtools initialIsOpen />
        </div>
    );
}

export default Example