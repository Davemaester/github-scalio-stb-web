import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../service/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  id = 0;
  dataFG: FormGroup;
  body = new FormControl({ value: '', disabled: true });
  title = new FormControl();
  constructor(
    private readonly actv: ActivatedRoute,
    private readonly api: ApiService,
    private readonly router: Router,
    fb: FormBuilder
  ) {
    this.actv.params.subscribe((prm) => {
      this.id = prm.id;
    });

    this.dataFG = fb.group({
      body: this.body,
      title: this.title,
    });
  }

  ngOnInit(): void {
    this.api.get(`posts/${this.id}`).then(
      (res: any) => {
        this.dataFG.patchValue(res);
      },
      (res) => {
        this.back();
      }
    );
  }

  back() {
    this.router.navigate(['home']);
  }
}
