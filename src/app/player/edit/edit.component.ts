import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {PlayerService} from '../../service/player.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  playerForm: FormGroup = new FormGroup({
    name: new FormControl(),
    champ: new FormControl(),
    kda: new FormControl(),
    des: new FormControl()
  });
  id: number;

  constructor(private playerService: PlayerService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.id = +paramMap.get(`id`);
      this.getPlayer(this.id);
    });
  }

  ngOnInit(): void {
  }

  getPlayer(id: number) {
    this.playerService.findById(id).subscribe(data => {
      this.playerForm.patchValue(data);
    });
  }

  edit(id: number) {
    const player = this.playerForm.value;
    this.playerService.edit(id, player).subscribe(data => {
      console.log('Ok');
      this.router.navigate(['list']);
    });
  }
}
