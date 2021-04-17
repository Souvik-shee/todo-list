import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ListService } from '../list.service';


@Component({
  selector: 'app-filelist',
  templateUrl: './filelist.component.html',
  styleUrls: ['./filelist.component.css'],
})
export class FilelistComponent implements OnInit {

  currentDate = new Date();
  str = this.currentDate.toISOString();

  constructor() { }

  ngOnInit(): void {

  }

  todoList= new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    date: new FormControl(''),
    status: new FormControl('yet to start')
  })

//   get title() {
//     return this.todoList.get('title');
//   }
//   get description() {
//     return this.todoList.get('description');
//   }
//   get date() {
//     return this.todoList.get('date');
//   }

//  taskList:task[]= [];

  onSubmit() {
    console.log(this.todoList.value);
    this.lists.push(this.todoList.value);
    console.log(this.str);
    this.todoList.reset()

    // console.log(this.tasklist[0]);
  }
  // addList(newlistlabel){
  //  var newlist = {
  //    title: newlistlabel,
  //    description:
  //  }

  // }

  title= 'Angular TO DO List';
  lists = [{
    title:'new 1',
    description:'Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.',
    date:'2021-04-18',
    status:'yet to start'
  },
  {
    title:'new 2',
    description:'Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.',
    date:'2021-04-10',
    status:'yet to start'
  }
  ];

// getlistsstatus(){
//   let myDate = Date.now();
//   let currDate = myDate.toString();
//   return this.lists.map((list) => {
//     if(currDate > currDate)
//     {

//     }
//   });
// }
// private checkDateInRange (dateToCheck: any, minInput : Date) : boolean {

//   if(dateToCheck < minInput)
//   {
//     return true;
//   }
//   else{
//     return false;
//   }

// }
 updateItem(list) {
   let index = this.lists.indexOf(list);
   if(list.status == "yet to start"){
   list.status = "in progress";
   this.lists[index] = list;
   return;
   }
   if(list.status == "in progress"){
    list.status = "Completed";
    this.lists[index] = list;
    }
 }
//  updateStatus(list) {
//   let index = this.lists.indexOf(list);
//   list.status = "Completed";
//   this.lists[index] = list;
// }
changeStatus(list){
  let index = this.lists.indexOf(list);
  if(this.str > list.date)
    {
      list.status = "Expired";
   this.lists[index] = list;
    }
}
// actionMethod(event: any) {
//   event.target = true;
// }
//  show:boolean = false;
//  toggle(event: any){
//   this.show = !this.show;
//  }
//  newDate = this.lists.map(function(value){
//   console.log("value : ",value);
//    })


  // addTodo(newListLabel) {
  //   var newList = {
  //     title: newListLabel,
  //     description:'',
  //     date:''
  //   };

  // }
}
// export class task{
//   title: string;
//   description: string;
//   date: string;
// }

