import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  dataId: number = 0;
  showError: boolean = false;
  constructor(private router: Router, private readonly api: ApiService) {}

  ngOnInit(): void {}

  navigate() {
    this.api.get(`posts/${this.dataId}`).then(
      (res: any) => {
        if (res) this.router.navigate([`home/${this.dataId}`]);
        else if (!res.body || !res.title) {
          this.showError = true;
        }
      },
      () => {
        this.showError = true;
      }
    );
  }
}
