import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  

  Task_Array: any=[
    // {
    //   Tittle:"First Task",
    //   Date: ":17/03/2023",
    //   Assigned:"Samuel Munyagah",
    //   status:"Incomplete"
    // },
    // {
    //   Tittle:"First Task1",
    //   Date: ":17/03/2023",
    //   Assigned:"Samuel Munyagah",
    //   status:"Incomplete"
    // },
    // {
    //   Tittle:"First Task3",
    //   Date: ":17/03/2023",
    //   Assigned:"Samuel Munyagah",
    //   status:"Complete"
    // }, 
    // {
    //   Tittle:"First Task4",
    //   Date: ":17/03/2023",
    //   Assigned:"Samuel Munyagah",
    //   status:"Complete"
    // }
  ]
  constructor() {}
  getTask(){
    return this.Task_Array
  }

}
