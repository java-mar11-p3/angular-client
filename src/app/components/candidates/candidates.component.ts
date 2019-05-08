import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {

  @Input() search: string;

  constructor() { }

  ngOnInit() {
  }

}
