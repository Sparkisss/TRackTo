import { Button } from "antd"
import { Link, useLoaderData } from "react-router-dom"
import { useLogout } from "../../features/auth/hooks/useLogOut";

interface Post { id: number; title: string; body: string; userId: number; }

export const List = () => {
    const data = useLoaderData() as Post[]
    const handleLogout = useLogout();

    return (
        <div>
            {data.map((date) => (
                <Link key={date.id} to={`${date.id}`}>{date.id}</Link> ))}

            <Button onClick={handleLogout}>Log out fromss !!!</Button>
        </div>
    )
}

export const listLoader = async (): Promise<Post> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      return res.json()
}