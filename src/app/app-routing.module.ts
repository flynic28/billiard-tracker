import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'leaderboard', pathMatch: 'full' },
  { path: 'users', loadChildren: './users/users.module#UsersPageModule' },
  { path: 'leaderboard', loadChildren: './basic-leaderboard/basic-leaderboard.module#BasicLeaderboardPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'user-form', loadChildren: './user-form/user-form.module#UserFormPageModule' },
  { path: 'game-tracker', loadChildren: './game-tracker/game-tracker.module#GameTrackerPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
