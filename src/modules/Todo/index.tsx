import React from "react";

// Page layout?
// Todo page
interface Todo{
    completed: boolean; // a todo is either completed or undone
    description: string; // A todo must have a description
    // Relation.

}
interface TodoPageProps{
    todos: Todo[];
}
export function TodoPage(props: TodoPageProps){
    // It takes in data for a todo and provides API for updating that data

    //  It has a todo list
    //      The list has a title which should be editable
    //      There is a list of todos
    //      We should be able to drag and drop todos moving them up and down
    //      We should be able to tick todos off
    //      When todos are ticked off they go to completed
    // It should has a button to add a new todo
    // It has a back button to go back to the list of todos
}