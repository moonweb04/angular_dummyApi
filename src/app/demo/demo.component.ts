import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  allUser: Object;
  isEdit = false;
  userObj = {
    name:'',
    salary:'',
    age:'',
    id:''
  }
  
  constructor(private userService: UserService) { }

  ngOnInit(){
    this.getLatestUser();
  }

  addUser(formObj){
    console.log(formObj);
    localStorage.setItem('formObj', JSON.stringify(formObj));
    this.userService.createUser(formObj).subscribe((response) => {
      console.log("User has been added", response);
      
      this.getLatestUser();
    })
  }
  getLatestUser(){
    this.userService.getAllUser().subscribe((response)=> {
      this.allUser = response;
      
      var retrievedObject = localStorage.getItem('formObj');
      console.log('retrievedObject: ', JSON.parse(retrievedObject));
    })
  }
  editUser(user){
    this.isEdit = true;
    this.userObj = user;

  }
  deleteUser(user){
    this.userService.deleteUser(user).subscribe(() => {
      this.getLatestUser();
    })
  }
  updateUser(){
    this.isEdit = !this.isEdit;
    this.userService.updateUser(this.userObj).subscribe(() => {
      this.getLatestUser();
    })
  }

}
