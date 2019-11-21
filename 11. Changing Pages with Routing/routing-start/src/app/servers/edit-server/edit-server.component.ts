import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CanDeactivateComponent } from './canDeactivate.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanDeactivateComponent {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  changedSaved = false;

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    // this.route.snapshot.params['id'],
    console.log('snapshot', this.route.snapshot.params['id']);
    this.loadServer(this.route.snapshot.params['id']);

    this.route.params.subscribe(params => {
      console.log(params['id']);
      this.loadServer(params['id']);
    });



  }

  private loadServer(_id: any) {
    const id: number = parseInt(_id, 10);
    this.server = this.serversService.getServer(id);
    if (this.server) {
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    } else {
      console.error('No server found');
    }
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
    this.changedSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  canDeactivate(): Observable<boolean> | boolean {
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status)
      && !this.changedSaved) {
      return confirm('Do you want to discard the change?');
    } else {
      return true;
    }
  }

}
