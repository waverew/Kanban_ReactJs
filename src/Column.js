import Task from "./Task";
import './Column.css';
import { Droppable } from "react-beautiful-dnd";
function Column (props){
    return(
        <div className="main-list">
            <div className="title">
                {props.column.title}
            </div>
            <Droppable droppableId={props.column.id}>
                {provided => (
                        <div className="task-list" {...provided.droppableProps} ref={provided.innerRef}>
                             {props.tasks.map((task, index) => <Task key={task.id} task={task} index={index}/>)}
                             {provided.placeholder}
                        </div>
                    )
                }
            
            </Droppable>
        </div>
    );
}
export default Column;