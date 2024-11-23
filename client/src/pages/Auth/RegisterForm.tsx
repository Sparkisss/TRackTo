import React from "react";
import { Form, Input, Button } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import type { FormProps } from 'antd';
import { RegisterData } from "../../features/auth/model/types";

const RegisterForm: React.FC<{ onFinish: FormProps<RegisterData>['onFinish'] }> = ({ onFinish }) => (
    <Form
        name="register"
        initialValues={{ remember: true }}
        style={{ width: "50%" }}
        onFinish={onFinish}
    >
        <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your Email!' }]}
        >
            <Input prefix={<UserOutlined />} placeholder="Email" />
        </Form.Item>
        <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
        >
            <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item
            name="confirmPassword"
            rules={[{
                required: true,
                message: 'Please confirm your Password!'
            }, ({ getFieldValue }) => ({
                validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords do not match!'));
                },
            })]}
        >
            <Input prefix={<LockOutlined />} type="password" placeholder="Confirm Password" />
        </Form.Item>
        <Form.Item>
            <Button block type="primary" htmlType="submit">
                Register
            </Button>
        </Form.Item>
    </Form>
);

export default RegisterForm;
