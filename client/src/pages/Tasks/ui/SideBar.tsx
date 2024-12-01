import React from 'react';
import {
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import type { MenuInfo } from 'rc-menu/lib/interface'
import { Menu } from 'antd';
import module from './SideBar.module.scss'
import { useNavigate, useLocation } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { key: '1', icon: <PieChartOutlined />, label: 'Dashboard' },
  { key: '2', icon: <DesktopOutlined />, label: 'Tasks' },
  { key: '3', icon: <ContainerOutlined />, label: 'Setting' },
];

const App: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = (e: MenuInfo) => {
    console.log('Clicked item key:', e.domEvent.currentTarget.innerText.toLocaleLowerCase());
    const basePath = location.pathname.split('/').slice(0, -1).join('/')
    const newPath = `${basePath}/${e.domEvent.currentTarget.innerText.toLocaleLowerCase()}`;
    navigate(newPath)
  };

  return (
    <div className={module.side}>
      <Menu
        defaultSelectedKeys={['2']}
        mode="inline"
        items={items}
        onClick={handleClick} 
      />
    </div>
  );
};

export default App;
