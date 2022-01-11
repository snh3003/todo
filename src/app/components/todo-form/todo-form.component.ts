import { Component, Inject, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/Todo';
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
import { TodoService } from 'src/app/service/todo.service';
// @ts-ignore
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todoTitle: string = '';

  constructor(private todoService: TodoService) { }

  handleAdd = () => {
    const todo: Todo = {
      id: uuidv4(),
      title: this.todoTitle,
      date: new Date(),
      isCompleted: false,
    };

    this.todoService.addTodo(todo);

    this.todoService.addTodo(todo);
    this.todoTitle = '';
  };

  ngOnInit(): void {}
}
