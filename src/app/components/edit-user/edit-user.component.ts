// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { UserService } from 'src/app/user.service';

// @Component({
//   selector: 'app-edit-user',
//   templateUrl: './edit-user.component.html',
//   styleUrls: ['./edit-user.component.css']
// })
// export class EditUserComponent implements OnInit {

//   id = this.actRoute.snapshot.params['id'];
//   userObj: any = {};

//   constructor( public _http:UserService,
//     public actRoute: ActivatedRoute,
//     public router: Router) { }

//   ngOnInit(): void {
//     // this._http.getSingleUser(this.id).subscribe((res: {}) => {
//     //   this.userObj = res;
//     // })
//   }

//   // updateUser(id, data) {
//   //   if(window.confirm('Yes, please...')){
//   //     this._http.updateUser(this.id, data).subscribe(res => {
//   //       this.router.navigate(['/list'])
//   //     })
//   //   }
//   // }
// }
