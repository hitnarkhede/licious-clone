import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
// import * as categoriesData from '../../statics/categories.json';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  constructor(private commonService: CommonService) {}

  categories: any[] = [];
  ngOnInit(): void {
    this.categories = this.commonService.getCategories();
  }
}
