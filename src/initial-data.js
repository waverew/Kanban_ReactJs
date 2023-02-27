const initData = {
    tasks:{
        'task-1':{id: 'task-1', content: 'Take out the garbage'},
        'task-2':{id: 'task-2', content: 'Watch a show'},
        'task-3':{id: 'task-3', content: 'Charge my laptop'},
        'task-4':{id: 'task-4', content: 'Cook a dinner'},
        'task-5':{id: 'task-5', content: 'Pet the cat'},
        'task-6':{id: 'task-6', content: 'Water plants'},
        'task-7':{id: 'task-7', content: 'Take a shower'},
        'task-8':{id: 'task-8', content: 'Fix the table'}
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'TODO',
            taskID: ['task-1', 'task-2', 'task-3', 'task-4']
        },
        'column-2':{
            id: 'column-2',
            title: 'In process',
            taskID: ['task-5', 'task-6', 'task-7', 'task-8']
        },
        'column-3':{
            id:'column-3',
            title: 'FINISHED',
            taskID:[]
        }
    },
    columnOrder: ['column-1', 'column-2', 'column-3']
};
export default initData;