import { List } from "antd"
import { Link, useLoaderData } from "react-router-dom"
import { User } from "@/entities/user/model/types"
import classes from "./ListOfUsers.module.scss"

export function ListOfUsers() {
  const users = useLoaderData() as User[]

  return ( 
    <List
      className={classes.wrap}
      itemLayout="vertical"
      size="large"
      pagination={{   
        pageSize: 3,
      }}
      dataSource={users}      
      renderItem={(item) => (
        <List.Item
          key={item.id}          
          extra={
            <img
              className={classes.image}             
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          }
        >
          <List.Item.Meta      
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