import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: { id: number, name: string };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadUser(this.route.snapshot.params['id'], this.route.snapshot.params['name']);
    this.route.params.subscribe(params => this.loadUser(params.id, params.name));
  }

  private loadUser(id, name) {
    this.user = {
      id: id,
      name: name
    };
  }

}
