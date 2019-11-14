import { Component, OnInit } from '@angular/core';

// Class decorator - Component decorator
@Component({
  // JS object to configure component class
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverID: number = 10;
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
  constructor() { }

  ngOnInit() {
  }

}
