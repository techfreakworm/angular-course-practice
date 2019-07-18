import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload(){
    // this.router.navigate(['/servers'])
    // this.router.navigate(['servers']) // No error here unlike routerLink, typescript doesn't know which component is currently active
    // this.router.navigate(['servers'], {relativeTo: this.route}) //will give error now, because now it works relative to current path
    this.router.navigate(['/servers'])
  }

}
