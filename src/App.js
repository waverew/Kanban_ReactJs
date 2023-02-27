import React, { useState } from "react";
import initData from "./initial-data";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";
import './App.css';

function App (){
  const [state, setState] = useState(initData);
  // const state = initData;
  const b = state.columnOrder.map(columnID => {
    const column = state.columns[columnID];
    const tasks = column.taskID.map(taskIDs => state.tasks[taskIDs]);
    return <Column key={column.id} column={column} tasks={tasks}/>;
  });
const onDragEnd = (result) => {
  const {destination, source, draggableId} = result;
  if (!destination){
    return;
  }
  if (destination.droppableId === source.droppableId && destination.index === source.index){
    return;
  }
  const start = state.columns[source.droppableId];
  const finish = state.columns[destination.droppableId];
  if (start === finish){
    const newTaskIds = Array.from(start.taskID);
  newTaskIds.splice(source.index, 1);
  newTaskIds.splice(destination.source, 0, draggableId);
  const newColumn = {
    ...start, 
    taskID: newTaskIds,
  };
  const newState = {
    ...state, 
    columns: {
      ...state.columns, 
      [newColumn.id]: newColumn,
    }
  }
  setState(newState);
  return;
  };
  const startTaskIds = Array.from(start.taskID);
  startTaskIds.splice(source.index, 1);
  const newStart = {
    ...start,
    taskID: startTaskIds,
  };
  const finishTaskIds = Array.from(finish.taskID);
  finishTaskIds.splice(destination.index, 0, draggableId);
  const newFinish = {
    ...finish, 
    taskID: finishTaskIds,
  };
const newState = {
  ...state, 
  columns: {
    ...state.columns,
    [newStart.id]: newStart,
    [newFinish.id]: newFinish,
  },
};
  setState(newState);
};
return (
  <DragDropContext onDragEnd={onDragEnd}>
      <div className="main-cont">
        {b}        
      </div>
  </DragDropContext>
  
);

}
  export default App;