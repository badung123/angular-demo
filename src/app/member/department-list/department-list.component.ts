import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {

  constructor() { }

  departments: any[] = [
    {
      'id': 1,
      'name':'.NET',
      'manager':'Trần Đình Giáp',
      'age':35
      
    },
    {
      'id': 2,
      'name':'PHP',
      'manager':'Việt',
      'age':30
    },
    {
      'id': 3,
      'name':'Python',
      'manager':'Unknown',
      'age':0
    }
  ];


  ngOnInit() {
  }

}