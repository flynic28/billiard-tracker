import { Component, OnInit } from '@angular/core';
import { User } from '../users/users.page';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-tracker',
  templateUrl: './game-tracker.page.html',
  styleUrls: ['./game-tracker.page.scss'],
})
export class GameTrackerPage implements OnInit {
  users: User[];
  gameForm: FormGroup;
  gameTypes = [
    { value: 1, display: '8 Ball' },
    { value: 2, display: '9 Ball' }
  ];
  selectedType: number;
  constructor(
    private storage: Storage,
    private router: Router
  ) {
    this.getUsers();
    this.gameForm = new FormGroup({
      gameType: new FormControl(1, Validators.required),
      playerOne: new FormControl('', Validators.required),
      playerTwo: new FormControl('', Validators.required),
      winner: new FormControl(1, Validators.required)
    });
  }

  ngOnInit() {
  }

  getUsers() {
    this.storage.get('users').then((val) => {
      this.users = val;
    });
  }

  resetForm() {
    this.gameForm.reset();
  }

  onSubmit(form: FormGroup) {
    if (form.status === 'VALID') {
      console.log(form);
      this.selectedType = form.value.gameType;
      const winnerId = form.value.winner == 1 ? form.value.playerOne : form.value.playerTwo;
      const loserId = form.value.winner != 1 ? form.value.playerOne : form.value.playerTwo;
      const winIndex = this.users.findIndex(user => user.id === winnerId);
      const loseIndex = this.users.findIndex(user => user.id === loserId);
      if (form.value.gameType == 1) {
        this.users[winIndex].eightBallRecord.played = this.users[winIndex].eightBallRecord.played + 1
        this.users[winIndex].eightBallRecord.wins = this.users[winIndex].eightBallRecord.wins + 1
        this.users[loseIndex].eightBallRecord.played = this.users[loseIndex].eightBallRecord.played + 1
      } else {
        this.users[winIndex].nineBallRecord.played = this.users[winIndex].nineBallRecord.played + 1
        this.users[winIndex].nineBallRecord.wins = this.users[winIndex].nineBallRecord.wins + 1
        this.users[loseIndex].nineBallRecord.played = this.users[loseIndex].nineBallRecord.played + 1
      }
      this.storage.set('users', this.users).then((data) => {
        this.users = data;
      });
      this.router.navigateByUrl('/leaderboard');  
    } 
  }

}
