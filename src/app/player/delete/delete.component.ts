import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {ActivatedRoute, Router} from '@angular/router';
import {PlayerService} from '../../service/player.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  playerForm: FormGroup = new FormGroup({
    name: new FormControl(),
    champ: new FormControl(),
    kda: new FormControl(),
    des: new FormControl()
  });
  id: number;
  constructor(private playerService: PlayerService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      // @ts-ignore
      this.id = +paramMap.get(`id`);
      this.getPlayer(this.id);
    });
  }

  ngOnInit(): void {
  }
  getPlayer(id: number) {
    this.playerService.findById(id).subscribe(data => {
      this.playerForm = new FormGroup({
        name: new FormControl(data.name),
        champ: new FormControl(data.champ),
        kda: new FormControl(data.kda),
        des: new FormControl(data.des)
      });
    });
  }
  delete(id: number) {
    this.playerService.delete(id).subscribe(data => {
      this.router.navigate(['list']);
      alert('done');
    });
  }
}
