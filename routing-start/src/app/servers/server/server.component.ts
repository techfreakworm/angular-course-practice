import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverItem: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.serverItem = this.serversService.getServer(id);
    console.log("Got the server: ")
    console.log(this.serverItem)
    this.route.params.subscribe(
      (params: Params) => {
        this.serverItem = this.serversService.getServer(+params['id']);
      }
    );
    
  }

}
