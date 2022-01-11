import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from '../model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[];

  constructor() {
    this.todos = [];
   }

    getTodos() {
      return of(this.todos);
    }

    addTodo(todo: Todo) {
      this.todos.push(todo);
    }

    changeStatus(todo: Todo) {
      this.todos.forEach(t => {
        if (t.id === todo.id) {
          t.isCompleted = !t.isCompleted;
        }
      });
    }
    
    deleteTodo(todo: Todo) {
      this.todos.map((t, i) => {
        if (t.id === todo.id) {
          this.todos.splice(i, 1);
        }
      })
    }
}
