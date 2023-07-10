import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Idea } from 'src/app/_Class/idea';
import { IdeaService } from 'src/app/_Service/idea.service';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent implements OnInit{
  
  idea: Idea = new Idea();

  constructor(private ideaService: IdeaService, private router: Router){}

  ngOnInit(): void {
  }

  saveIdeaList(){
    return this.ideaService.saveIdea(this.idea).subscribe( data =>{
      console.log(data);
    },
    error => console.log(error));
  }

  gotoAdmin(){
    this.router.navigate(['/main/admin']);
  }

  
  onSubmit(){
    console.log(this.idea);
    this.saveIdeaList();
    this.gotoAdmin();
  }


}
