import { List } from "antd"
import { Link, useLoaderData } from "react-router-dom"
import { User } from "@/entities/user/model/types"

const ListOfUsers = () =>{
  const users = useLoaderData() as User[]

  return ( 
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page)
        },
        pageSize: 3,
      }}
      dataSource={users}      
      renderItem={(item) => (
        <List.Item
          key={item.id}          
          extra={
            <img
              width={220}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          }
        >
          <List.Item.Meta
            style={{width: 1000}}            
            title={<Link to={`/list/${item.id}`}>{item.name}</Link>}
            description={
              <>
                <div>{"Location: " + item.address.city + " - " + item.address.street}</div>
                <div>{"Website: " + item.website}</div>
                <div>{"Description: " + item.company.name + " - " + item.company.catchPhrase}</div>
              </>            
            }
          />
          {item.address.city}
        </List.Item>
      )}
    />
  )
}

export const listLoader = async (): Promise<User[]> => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    if(!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`)
    }
    const data: User[] = await response.json()
    return data
  } catch (error) {
    console.error("Fetch error:", error)
    throw error
  }
}

export default ListOfUsers
