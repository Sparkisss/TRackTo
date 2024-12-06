import React, { useState } from 'react'
import { Button, Modal, Input } from 'antd'

const AddTaskModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Input placeholder="Basic usage" />
        <Input placeholder="Basic usage2" />
        <Input placeholder="Basic usage3" />
      </Modal>
    </>
  )
}

export default AddTaskModal