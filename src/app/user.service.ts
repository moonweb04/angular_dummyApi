import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// export class User {
//   id: string;
//   employee_name: string;
//   employee_salary: number;
//   employee_age: number;
// }

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "http://dummy.restapiexample.com/api/v1/";

  constructor(private _http:HttpClient) { }

  createUser(user){
    console.log("print");
    
    return this._http.post("http://dummy.restapiexample.com/api/v1/create/", JSON.stringify(user));
  }

  getAllUser(){
    return this._http.get("http://dummy.restapiexample.com/api/v1/employees");
  }
  
  updateUser(user){
    return this._http.put("http://dummy.restapiexample.com/api/v1/update/" +user.id, JSON.stringify(user));
  }

  deleteUser(user){
    return this._http.delete("http://dummy.restapiexample.com/api/v1/delete/" +user.id);
  }



  // getUsers(id): Observable<User> {
  //   return this._http.get<User>(this.url + '/users')
  // }

  // getSingleUser(id): Observable<User> {
  //   return this._http.get<User>(this.url + '/users/' + id)
  // }  

  // addUser(data): Observable<User> {
  //   return this._http.post<User>(this.url + '/users', JSON.stringify(data))
  // }  

  // updateUser(id, data): Observable<User> {
  //   return this._http.put<User>(this.url + '/users/' + id, JSON.stringify(data))
  // }

  // deleteUser(id){
  // return this._http.delete<User>(this.url + '/users/' + id)
  // }

}