import React, { useState } from "react";
import { Space, Button } from 'antd';
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useLogin } from "../../features/auth/hooks/useLogin";
import { useRegister } from "../../features/auth/hooks/useRegister";

const Auth: React.FC = () => {
    const [loginMode, setLoginMode] = useState(true);
    const { login } = useLogin();
    const { register } = useRegister();

    const onFinishLog = (values: { email: string; password: string; }) => {
        login(values.email, values.password);
    };

    const onFinishReg = (values: { email: string; password: string; confirmPassword: string }) => {
        register(values.email, values.password);
    };

    const toggleMode = () => {
        setLoginMode(!loginMode);
    };

    return (
        <>
            <h1>Auth Page</h1>
            {loginMode ? 
                <LoginForm onFinish={onFinishLog} /> : 
                <RegisterForm onFinish={onFinishReg} />}
            <Space style={{ paddingTop: '1rem' }}>
                or <Button type="text" onClick={toggleMode}>{loginMode ? 'Register!' : 'Login!'}</Button>
            </Space>
        </>
    );
};

export default Auth;
