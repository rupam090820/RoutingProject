import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataShare } from '../DataShare/DataShare';  // at first import datashare

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  public studentList: any = [];
  constructor(private route: Router) { }  // step 2 inject Router dependency

  ngOnInit(): void {
    this.studentList = DataShare.studentInfo.map((item) =>   // step 3 set course array of DataShare into StudentList
    {
      return item['course']   // step 4 here item['course'] because course was a array of object thats why we access course in ['course'] this format
    });
    console.log(this.studentList);
  }
  myclick(std_id: any) {  // step 5 when click course name in UI then call this function
    // console.log("course id"+std_id);  // step 6 here check std_is of course recived or not!

    this.route.navigate(['student', std_id]); //  step 7 this std_id send to student component
  }
}
