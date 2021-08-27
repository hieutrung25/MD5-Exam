import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {dashCaseToCamelCase} from '@angular/compiler/src/util';
import {PlayerService} from '../../service/player.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  playerForm: FormGroup = new FormGroup({
    name: new FormControl(),
    champ: new FormControl(),
    kda: new FormControl(),
    des: new FormControl()
  });

  constructor(private playerServive: PlayerService, private router: Router) {
  }

  ngOnInit(): void {
  }
  create() {
    const  player = this.playerForm.value;
    console.log(player);
    this.playerServive.create(player).subscribe(data => {
      console.log('ok');
      this.router.navigate(['list']);
    });
  }
}
