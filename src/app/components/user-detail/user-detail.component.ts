// src/app/components/user-detail/user-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReqresService } from '../../services/reqres.service';
import { Location } from '@angular/common';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  user: User = { id: 0, first_name: '', last_name: '', email: '' };

  constructor(
    private route: ActivatedRoute,
    private reqresService: ReqresService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam === null) {
      console.error('ID параметр не найден');
      return;
    }
    const id = +idParam;
    this.reqresService.getUser(id).subscribe((data) => {
      this.user = data.data;
    });
  }

  save(): void {
    this.reqresService
      .updateUser(this.user.id, this.user)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
