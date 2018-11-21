import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BasicLeaderboardPage } from './basic-leaderboard.page';

const routes: Routes = [
  {
    path: '',
    component: BasicLeaderboardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BasicLeaderboardPage]
})
export class BasicLeaderboardPageModule {}
