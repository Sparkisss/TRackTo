import { useTheme } from "@/shared/context/theme/ThemeContext"
import { SideBar } from "@/widgets/Sidebar/ui/SideBar"
import { Switch, Space } from "antd"

export function Setting() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Space size="middle">
      <div>Change thema: {theme}</div>
      <Switch defaultChecked onChange={toggleTheme} />
      <SideBar/>
    </Space>
  )
}
