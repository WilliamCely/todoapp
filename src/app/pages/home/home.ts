import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Task} from './../../models/task.model'

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
    tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: 'Crear proyecto',
      completed: false
    },
     {
      id: Date.now(),
      title: 'Crear Componentes',
      completed: false
    },
  ]);

  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    this.addTask(newTask);
    
  }

  addTask(title: string){
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    }
    this.tasks.update((tasks) => [...tasks, newTask]);
  }

  deleteTask(index: number){
    this.tasks.update((tasks) => tasks.filter((task, position) => position !== index));
  }

  updateTask(index: number){
      this.tasks.update((tasks) =>{
        return tasks.map((task, position) => {
          if (position === index){
            return {
              ...task,
              completed: !task.completed
            }
          }
          return task;
        })
      })
  }

}
