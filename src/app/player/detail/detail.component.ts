import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {PlayerService} from '../../service/player.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  playerForm: FormGroup = new FormGroup({
    name: new FormControl(),
    champ: new FormControl(),
    kda: new FormControl(),
    des: new FormControl()
  });
  id: number;
  constructor(private playerService: PlayerService, private activateRouter: ActivatedRoute, private router: Router) {
    this.activateRouter.paramMap.subscribe((paramMap) => {
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
  back() {
    this.router.navigate(['list']);
  }
}
