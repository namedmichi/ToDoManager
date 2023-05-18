import { Subtask } from "./subtask";
export interface Subtasks {

        subtask: Subtask[];
        Status: string;
    
    
}
export function countSubtasks(subtasks: Subtask[]): number {

        if (typeof subtasks[1] === 'string' || subtasks[1] instanceof String){

                return 1 ;
        }
 
        return subtasks.length;
}