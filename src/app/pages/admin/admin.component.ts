import { Component, OnInit } from '@angular/core';
import { Idea } from 'src/app/_Class/idea';
import { IdeaService } from 'src/app/_Service/idea.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{

  ideas!: Idea[];

  constructor(private ideaService: IdeaService){}
  

  ngOnInit(): void {
    this.getIdeas();
  }

  private getIdeas(){
    this.ideaService.getIdeaList().subscribe(data =>{
      this.ideas! = data;
    });
  }

  

}
