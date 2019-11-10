import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  template: `
  <div class="alert alert-success" role="alert"><span>Success!</span> You can see the success alert!</div>
  `,
  styles: [`
  span {
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
  }
  `]
})
export class SuccessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}