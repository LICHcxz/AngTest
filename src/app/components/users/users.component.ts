import { Component, OnInit } from '@angular/core';
import { ReqresService } from '../../services/reqres.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  resources: any[] = [];

  constructor(private reqresService: ReqresService) {}

  ngOnInit(): void {
    this.reqresService.getUsers().subscribe((data) => {
      this.users = data.data;
    });

    this.reqresService.getResources().subscribe((data) => {
      this.resources = data.data;
    });
  }

  deleteUser(id: number): void {
    this.reqresService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter((user) => user.id !== id);
    });
  }
}
