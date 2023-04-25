import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChangeDetectionStrategy } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { CdkDrag,CdkDragEnd,CdkDragStart,CdkDragDrop,transferArrayItem} from '@angular/cdk/drag-drop';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { MatSnackBar } from '@angular/material/snack-bar';

// interface Task_Array {
//   title: string,
//   date: string,
//   assignee: string,
// }

// interface Todo_Array {
//   Title: string,
//   Date: string,
//   Assigned: string,
//   Status:string
// }

// interface Movies_Array{
//   Title:string,
//   Date:string,
//   Assigned:string,
//   Status:string
// }

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {

  constructor(private snackBar:MatSnackBar) {}

  todo = [''];
  done = [''];

 

  drop(event: CdkDragDrop<any[]>){
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.snackBar.open('Card dragged Successfully!', 'OK', {
        duration: 5000,
      });
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

hover = false;
hovering = false;
bgColor = '';

onMouseEnter(){
  this.bgColor = '#FFA500';
}

onMouseLeave(){
  this.bgColor = ''
}

Todo_Array = [{Title:'Second Task',Date:'17/03/2023',Assigned:'Samuel Munyagah',Status:'Complete'},
{Title:'Fifth Task',Date:'17/03/2023',Assigned:'Samuel Munyagah',Status:'Inprogress'},
{Title:'Eigth Task',Date:'17/03/2023',Assigned:'Samuel Munyagah',Status:'BackLog'}];

Task_Array = [{Title:'First Task',Date:'17/03/2023',Assignee:'Samuel Munyagah',Status:'BackLog'},
{Title:'Fourth Task',Date:'17/03/2023',Assignee:'Samuel Munyagah',Status:'Complete'},
{Title:'Seventh Task',Date:'17/03/2023',Assignee:'Samuel Munyagah',Status:'Incomplete'}];

movies_Array = [{Title:'Third Task',Date:'17/03/2023',Assignee:'Samuel Munyagah',Status:'Incomplete'},
{Title:'Sixth Task',Date:'17/03/2023',Assignee:'Samuel Munyagah',Status:'BackLog'},
{Title:'Nineth Task',Date:'17/03/2023',Assignee:'Samuel Munyagah',Status:'Complete'}];


value = ''

  dragStartHandler(event:CdkDragStart){
    console.log('drag end',event)
  }
  dragEndHandler(event:CdkDragStart){
    console.log('drag end', event)
  }

  onItemEnter(event:CdkDragStart){
    console.log('drag end',event)
  }

  onItemLeave(event:CdkDragStart){
    console.log('drag end',event)
  }

  onDragStart(event:CdkDragStart){
    console.log('drag start',event)
    console.log('Hellooo')
  }

  onDrag(event:CdkDragStart){
    console.log('drag move',event)
  }

  onDragEnd(event:CdkDragEnd){
    console.log('drag end',event)
  }

  selected = 'boardview';
  toppings = new FormControl('');
}