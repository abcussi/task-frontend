import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../interfaces/TaskInterface';
import { DEFAULT_TASKS } from '../constants/taskCommons';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:3000/tasks';
  private http = inject(HttpClient);
  tasks: Task[] = [];

  constructor() {
    this.fetchTodos();
  }

  fetchTodos() {
    this.http
      .get<Task[]>(this.apiUrl)
      .pipe(
        catchError((error) => {
          //default values
          this.tasks = DEFAULT_TASKS;
          console.error('Error fetching todos:', error);
          return throwError(
            () => new Error('Failed to fetch tasks. Please try again later.')
          );
        })
      )
      .subscribe((todos) => {
        this.tasks = todos;
      });
  }
}
