import { Component, OnInit } from '@angular/core';
import { jsonArray } from './data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  currentPage = 1;
  itemsPerPage = 8;
  maxSize = 5;
  jsonArray = jsonArray;

  constructor() { }

  ngOnInit(): void {
  }

}
