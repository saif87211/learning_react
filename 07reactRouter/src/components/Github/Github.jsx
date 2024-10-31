// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

export default function Github() {
    // const [data, setData] = useState({});
    // useEffect(() => {
    //     fetch("https://api.github.com/users/saif87211")
    //         .then((res) => res.json())
    //         .then((data) => setData(data))
    //         .catch(e => console.log(e))
    // }, [])
    const data = useLoaderData();
    return <div className="mx-5 p-8">
        <h1 className="text-3xl font-bold">Github Page</h1>
        <div className="my-4 flex items-center justify-around">
            <div className="p-2 border border-cyan-500 rounded-full">
                <img className="w-48 h-48 rounded-full" src={data.avatar_url} alt="github-avtar"></img>
            </div>
            <div className="p-2">
                <h2 className="text-2xl p-3">
                    <span>Username : </span>
                    <span>@{data.login}</span>
                </h2>
                <h2 className="text-2xl p-3">
                    <span>Name : </span>
                    <span>{data.name}</span>
                </h2>
            </div>
            <h3 className="text-2xl">
                <span>Total public Repos: </span>
                <span>{data.public_repos}</span>
            </h3>
        </div>
    </div>
}