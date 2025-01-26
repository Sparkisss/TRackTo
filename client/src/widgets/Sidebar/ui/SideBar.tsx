import {
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined,
} from "@ant-design/icons"
import type { MenuProps } from "antd"
import type { MenuInfo } from "rc-menu/lib/interface"
import { Menu } from "antd"
import module from "./SideBar.module.scss"
import { useNavigate, useLocation } from "react-router-dom"
import { useState, useCallback } from "react"

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { key: "1", icon: <PieChartOutlined />, label: "Dashboard" },
  { key: "2", icon: <DesktopOutlined />, label: "Tasks" },
  { key: "3", icon: <ContainerOutlined />, label: "Setting" },
]

export function SideBar() {
  const [current, setCurrent] = useState("1")
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = useCallback((e: MenuInfo) => {
    const basePath = location.pathname.split("/").slice(0, -1).join("/")
    const newPath = `${basePath}/${e.domEvent.currentTarget.innerText.toLocaleLowerCase()}`
    navigate(newPath)
    setCurrent(e.key)
  }, [location.pathname, navigate])

  return (
    <div className={module.side}>
      <Menu
        selectedKeys={[current]}
        mode="inline"
        items={items}
        onClick={handleClick} 
      />
    </div>
  )
}
