import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataShare } from '../DataShare/DataShare';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  public snapShortRecived: any = [];
  public storeId: any = [];
  public AllData:any=[];
  constructor(private act: ActivatedRoute) { }  // step 1 inject activated route because using this we recived data from course component

  ngOnInit(): void {
    this.snapShortRecived = this.act.snapshot.paramMap.get('id');  //here recived those url when we click course list
    // console.log('student component'+this.snapShortRecived); // check is it  recived right id or wrong?

    if (this.snapShortRecived != '' && this.snapShortRecived != null) {


      this.storeId = DataShare.studentInfo.find((item) => {  // here check that recived id is available in our dataShare , if available then  dump all thing into storeId
        return this.snapShortRecived == item.std_id
      });
      //  console.log(this.storeId);  // checking 
    }
    else{
      let data=DataShare.studentInfo;
      this.AllData=data;
     }
  }
 

}
