import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class UsuariosService {
// usuarios: any[] = [];
 base_url: string = 'http://127.0.0.1:8000/api/';
 usuarios_endpoint = 'usuarios';
 constructor(private _http: HttpClient) {}

  devolverUsuarios() {
    return this._http.get<any>(this.base_url+this.usuarios_endpoint);
  }
/*
  actualizarUsuario(update){
    return this._http.put(this.base_url + this.usuarios_endpoint, update);
  }

  /*
  //Gets all tasks
   getTasks() {
   return this._http.get<any>(this.base_url + this.usuarios_endpoint);
   } //getTasks
  //Creates a task
   createTask(task) {
   return this._http.post(this.base_url + this.usuarios_endpoint, task);
   } //createTask
  //Updates a Task
   updateTask(update) {
   console.log (update);
   return this._http.put(this.base_url + this.usuarios_endpoint, update);
   } //updateTask
  //Deletes a Task
   deleteTask(taskId) {
   return this._http.delete(`${this.base_url + this.usuarios_endpoint}/${taskId}`);
 } //deleteTask*/
  }
