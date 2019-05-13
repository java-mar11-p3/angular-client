import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Candidate } from 'src/app/models/candidate';
import { GatewayService } from 'src/app/services/gateway.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-candidate',
  templateUrl: './create-candidate.component.html',
  styleUrls: ['./create-candidate.component.css']
})
export class CreateCandidateComponent implements OnInit {

  public candidate: Candidate = new Candidate()

  constructor(private title: Title, private service: GatewayService, private router: Router) { }

  ngOnInit() {
    this.title.setTitle('Screen Force - New Candidate');
  }

  public submit(){
    this.service.createCandidate(this.candidate).subscribe(
      data => {
        if(data == null )
        {
          alert("User successfully created!");
          this.router.navigateByUrl('home')
        }
        else {
          alert("Sorry. candidate was not created!")
        }
      }
    )
  }
    
      

}
