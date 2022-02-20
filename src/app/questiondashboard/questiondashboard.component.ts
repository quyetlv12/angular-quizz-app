import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CategoryService } from "../category.service";
import { QuestionService } from "../question.service";

@Component({
  selector: "app-questiondashboard",
  templateUrl: "./questiondashboard.component.html",
  styleUrls: ["./questiondashboard.component.css"],
})
export class QuestiondashboardComponent implements OnInit {
  constructor(private CategoryService: CategoryService , private route: ActivatedRoute , private questionService : QuestionService) {}
  category: any = [];
  typeQuestion : string
  allQuestions : any = []
  getAllCategory() {
    this.CategoryService.getCategory().subscribe(
      (data) => (this.category = data)
    );
  }
  getType(){
    this.route.params.subscribe(params =>{
      this.typeQuestion = params.id
    })
  }
  getAllQuestion(){
    this.route.params.subscribe(params =>{
      this.questionService.getQuestion(params.id).subscribe(data => this.allQuestions = data
        )
    })
  }
  deleteQuestion(id){
    this.questionService.deleteQuestion(this.typeQuestion,id).subscribe(data =>{
      this.allQuestions = this.allQuestions.filter(item => item.id != data.id)
    })
  }
  ngOnInit() {
    this.getType()
    this.getAllCategory();
    this.getAllQuestion()
  }
}
