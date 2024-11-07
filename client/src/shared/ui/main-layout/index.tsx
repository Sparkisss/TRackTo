import { Layout } from "antd";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
    return (
        <Layout>
            <Layout.Content>
                <Outlet/>
            </Layout.Content>
        </Layout>
    );
};

