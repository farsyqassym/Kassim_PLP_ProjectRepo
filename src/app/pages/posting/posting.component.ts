import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Posting } from 'src/app/_Class/posting';
import { PostingService } from 'src/app/_Service/posting.service';

@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.css']
})
export class PostingComponent implements OnInit{

  posting: Posting = new Posting();

  constructor(private postingService: PostingService, private router: Router){}
  

  ngOnInit(): void {
  
  }

  onSubmit(){
    this.sendPostList();
    this.gotoAdmin();
    console.log(this.posting);
  }

  sendPostList(){
    this.postingService.sendPost(this.posting).subscribe(data =>{
      console.log(data);
    },
    error => console.log(error));
  }

  gotoAdmin(){
    this.router.navigate(['/main/admin']);
  }

}
