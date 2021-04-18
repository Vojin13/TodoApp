import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  text:string = "Hello World";
  todos:Todo[];

  inputTodo:string = ""

  constructor() { 
    this.todos = [];
  }

  ngOnInit(): void {
    this.todos=[
      
    ]
  }

  deleteTodo(index:number):void{
    this.todos = this.todos.filter((v,i) => i != index);
  }

  addTodo():void{
    this.todos.push({
      content:this.inputTodo,
      completed:false
    })
    this.inputTodo = "";
  }

  switchCompleted(index:number):void{
    this.todos[index].completed = !this.todos[index].completed;
  }

}
