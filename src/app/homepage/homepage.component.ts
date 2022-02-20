import { CategoryService } from './../category.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { QuestionClass } from '../question-class';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  constructor(private CategoryService : CategoryService){

  }
  category : any = []
  getAllCategory(){
    this.CategoryService.getCategory().subscribe(data => this.category = data
    )
  }
	ngOnInit() {
    this.getAllCategory()
	}
}
