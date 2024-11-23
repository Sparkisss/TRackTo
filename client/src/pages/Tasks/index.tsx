import { useState } from "react"
import module from './Task.module.scss'

const Task = () => {
    const [boards, setBoards] = useState([
        {id:1, title: 'Do', items: [{id: 1, title: 'Go shoping'}, {id: 2, title: 'throw away rubbish'}, {id: 3, title:'go to the gym'}]},
        {id:2, title: 'Confirm', items: [{id: 1, title: 'Go out'}, {id: 2, title: 'learn English'}, {id: 3, title: 'walking'}]},
        {id:3, title: 'Did', items: [{id: 1, title: 'Render'}, {id: 2, title: 'React router'}, {id: 3, title:'CV'}]},
    ])
    return (
        <div className={module.wrapper}>
            {boards.map(board => 
                <div className={module.board} key={board.id}>{board.title}
                {board.items.map(item =>
                    <div className={module.card} key={item.id}>{item.title}</div>
                )}
                </div>
            )}
        </div>
    )
}

export default Task