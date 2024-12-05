import React, { Suspense, useState } from "react"
import { Space, Button } from "antd"
import LoginForm from "./LoginForm"
import { useLogin, useRegister} from "@/features/auth"
const RegisterForm = React.lazy(() => import("./RegisterForm"))

const Auth: React.FC = () => {
  const [loginMode, setLoginMode] = useState(true)
  const { login } = useLogin()
  const { register } = useRegister()
    
  const onFinishLog = (values: { email: string; password: string; }) => {
    login(values.email, values.password)
  }

  const onFinishReg = (values: { email: string; password: string; confirmPassword: string }) => {
    register(values.email, values.password)
  }

  const toggleMode = () => {
    setLoginMode(!loginMode)        
  }
  
  return (
    <>
      <h1>Auth Page</h1>
      <Suspense fallback={<h2>Loading...</h2>}>
        {loginMode ? 
          <LoginForm onFinish={onFinishLog} /> : 
          <RegisterForm onFinish={onFinishReg} 
          />}        
      </Suspense>
      <Space style={{ paddingTop: "1rem" }}>
                or <Button type="text" onClick={toggleMode}>{loginMode ? "Register!" : "Login!"}</Button>
      </Space>
    </>
  )
}

export default Auth
