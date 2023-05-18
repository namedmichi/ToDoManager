import { Subtask } from "./subtask";
import { values } from "./app.component";
import { Subtasks } from "./subtasks";
export interface Task   {
    id: number;
    Title: string;
    Beschreibung: string;
    Subtasks: Subtask[];
    SubtasksDone: number;
    Status: string;


}
export function createTask(title: string, beschreibung: string, SubtaskInput: string,  status: string): Task {

    var newSubtasks: Subtask[] = []
    
    console.log(SubtaskInput)
    if(SubtaskInput == null){
        SubtaskInput = '';
        
    }
    if(SubtaskInput.includes(',')){
        var subtaskArray = SubtaskInput.split(',');
        for(var i = 0; i < subtaskArray.length; i++){
            var newSubtask: Subtask = {
                subtask: subtaskArray[i],
                Status: "Offen"
            }
            newSubtasks.push(newSubtask);
        }
    }else{
        var newSubtask: Subtask = {
            subtask: SubtaskInput,
            Status: "Offen"
        }
        newSubtasks.push(newSubtask);
    }
    console.log(SubtaskInput)
    var task: Task = {
        id: values.selectedBoard.tasks.length + 1,
        Title: title,
        Beschreibung: beschreibung,
        Subtasks: newSubtasks,
        SubtasksDone: 0,
        Status: status
    }
    
    return task; 

}
