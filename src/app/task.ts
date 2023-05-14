import { Subtask } from "./subtask";
import { values } from "./app.component";
export interface Task   {
    id: number;
    Title: string;
    Beschreibung: string;
    Subtasks: Subtask[];
    Status: string;


}
export function createTask(title: string, beschreibung: string, Subtask: Subtask[],  status: string): Task {

    var task: Task = {
        id: values.selectedBoard.tasks.length + 1,
        Title: title,
        Beschreibung: beschreibung,
        Subtasks: Subtask,
        Status: status
    }
    
    return task; 

}
