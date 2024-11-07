import { Button } from "antd"
import { Link, useLoaderData } from "react-router-dom"

interface Post { id: number; title: string; body: string; userId: number; }

export const List = () => {
    const data = useLoaderData() as Post[]
    return (
        <div>
            {data.map((date) => (
                <Link key={date.id} to={`${date.id}`}>{date.id}</Link>
            ))}
            <Button>back</Button>
        </div>
    )
}

export const listLoader = async (): Promise<Post> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      return res.json()
}