import React from "react"
import ReactDOM from "react-dom"
import { Modal, Input, Space, Form } from "antd"
import { postTask } from "@/shared/api/tasks"
import { useAppDispatch } from "@/features/auth"
import { fetchTasks } from "../../model/slice/taskSlice"
interface PropsTaskModal {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

const AddTaskModal: React.FC<PropsTaskModal> = ({ isModalOpen, handleOk, handleCancel }) => {
  const [form] = Form.useForm()
  const dispatch = useAppDispatch()

  const handleSubmit = () => {    
    form.validateFields()
      .then(values => {
        postTask({
          belong: "TODO",
          title: values.title,
          description: values.description,
          status: false,
        }).then(() => {
          dispatch(fetchTasks("http://localhost:7000/tasks"))
        })  
        handleOk()
        form.resetFields()
      })
      .catch(errorInfo => {
        console.log("Validation Failed:", errorInfo)
      })
  }

  return isModalOpen ? ReactDOM.createPortal(
    <>
      <Modal title="Add new task" open={isModalOpen} onOk={handleSubmit} onCancel={handleCancel}>
        <Form form={form} layout="vertical">
          <Space direction="vertical" size="large" style={{ width: "100%" }}>
            <Form.Item
              name="title"
              label="Title"
              rules={[{ required: true, message: "Please enter the title" }]}
            >
              <Input placeholder="Title" />
            </Form.Item>
            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true, message: "Please enter the description" }]}
            >
              <Input placeholder="Description" />
            </Form.Item>
          </Space>
        </Form>
      </Modal>
    </>,
    document.body,
  ) : null
}

export default AddTaskModal