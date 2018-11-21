import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { User } from '../users/users.page';

@Component({
  selector: 'app-basic-leaderboard',
  templateUrl: './basic-leaderboard.page.html',
  styleUrls: ['./basic-leaderboard.page.scss'],
})
export class BasicLeaderboardPage implements OnInit {
  eightBallRecords = [];
  nineBallRecords = [];
  records: User[];
  constructor(
    private storage: Storage
  ) {
    this.getAllRecords();
  }

  ngOnInit() {
  }

  getAllRecords() {
    this.storage.get('users').then((val: User[]) => {
      this.records = val;
      this.records.forEach((user) => {
        this.eightBallRecords.push({
          firstName: user.firstName,
          lastName: user.lastName,
          percent: !isNaN(user.eightBallRecord.wins / user.eightBallRecord.played) ? user.eightBallRecord.wins / user.eightBallRecord.played : 0
        });
        this.nineBallRecords.push({
          firstName: user.firstName,
          lastName: user.lastName,
          percent: !isNaN(user.nineBallRecord.wins / user.nineBallRecord.played) ? user.nineBallRecord.wins / user.nineBallRecord.played : 0
        });
      });
      this.sortRecords();
    });
  }

  sortRecords() {
    this.eightBallRecords.sort((a, b) => (b.percent) - (a.percent));
    this.nineBallRecords.sort((_a, _b) => (_b.percent) - (_a.percent));
  }

}
