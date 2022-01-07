import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from '../model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[];

  constructor() {
    this.todos = [
      {
        id: 1,
        title: 'Learn Angular',
        isCompleted: true,
        date: new Date(),
      },
      {
        id: 2,
        title: 'Exercise',
        isCompleted: true,
        date: new Date(),
      },
      {
        id: 3,
        title: 'Complete Dinner',
        isCompleted: false,
        date: new Date(),
      },
    ];
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
