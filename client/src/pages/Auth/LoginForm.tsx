import React from "react"
import { Form, Input, Button } from "antd"
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import type { FormProps } from "antd"
import { LoginData } from "@/features/auth/model/types"

const LoginForm: React.FC<{ onFinish: FormProps<LoginData>["onFinish"] }> = ({ onFinish }) => (
  <Form
    name="login"
    initialValues={{ remember: true }}
    style={{ width: "50%" }}
    onFinish={onFinish}
  >
    <Form.Item
      name="email"
      rules={[{ required: true, message: "Please input your Email!" }]}
    >
      <Input prefix={<UserOutlined />} placeholder="Email" />
    </Form.Item>
    <Form.Item
      name="password"
      rules={[{ required: true, message: "Please input your Password!" }]}
    >
      <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
    </Form.Item>
    <Form.Item>
      <Button block type="primary" htmlType="submit">
                Log in
      </Button>
    </Form.Item>
  </Form>
)

export default LoginForm
