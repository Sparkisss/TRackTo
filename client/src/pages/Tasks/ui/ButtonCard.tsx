import { Flex, Tooltip, Button } from "antd"
import { CheckOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons"
import { useAppDispatch } from "@/features/auth"
import { deleteTask, fetchTasks, updateTask } from "@/entities/tasks/model/taskSlice"
import EditTaskModal from "@/entities/tasks/ui/EditTaskModal/EditTaskModal"
import { useModal } from "../model/hooks/useModal"

type ButtonCardProps = {
    disabled: boolean;
    id?: string;
};

export function ButtonCard({ disabled, id }: ButtonCardProps) {
  const dispatch = useAppDispatch()
  const { isModalOpen, showModal, handleOk, handleCancel } = useModal()

  const handleDelete = () => {
    if(id) {
      dispatch(deleteTask(id))
        .then(() => {
          dispatch(fetchTasks("http://localhost:7000/tasks"))
        })  
    }    
  }

  const handleStatus = () => {
    if(id) {
      dispatch(updateTask({id: id, task: { belong: "DONE" }}))
        .then(() => {
          dispatch(fetchTasks("http://localhost:7000/tasks"))
        })  
    }    
  }
    
  return (
    <>
      <Flex wrap gap="small">
        <Tooltip title="complet">          
          <Button
            size="small"         
            type="primary"
            shape="circle" 
            onClick={handleStatus}
            icon={<CheckOutlined />} 
            disabled={disabled} 
          />        
        </Tooltip>
        <Tooltip title="edit">
          <Button 
            size="small"            
            type="primary" 
            shape="circle" 
            onClick={showModal}
            icon={<EditOutlined />} 
          />
        </Tooltip>
        <Tooltip title="delete">
          <Button 
            size="small"
            onClick={handleDelete}
            type="primary" 
            shape="circle" 
            icon={<DeleteOutlined />} 
          />
        </Tooltip>
      </Flex>
      <EditTaskModal id={id} isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}/>
    </>
  )
}
       
      