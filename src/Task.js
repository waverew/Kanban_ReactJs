import './Task.css';
import { Draggable } from 'react-beautiful-dnd';
function Task(props){
    return(
        <Draggable draggableId={props.task.id} index={props.index}>
            {provided => (
            <div className="task-cont" 
            {...provided.draggableProps} 
            {...provided.dragHandleProps} 
            ref={provided.innerRef}>
                {props.task.content}
            </div>
            )}
        </Draggable>
    );
}
export default Task;