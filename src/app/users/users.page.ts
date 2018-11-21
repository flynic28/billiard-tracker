import { Component, OnInit } from '@angular/core';
import { CommonUtilitiesService} from '../../services/common-utilities/common-utilities.service';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { UserFormPage } from '../user-form/user-form.page';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  isTablet = false;
  users: User[];
  user: User;

  constructor(
    public modalController: ModalController,
    private commonUtilities: CommonUtilitiesService,
    private storage: Storage
  ) {
    this.isTablet = this.commonUtilities.isTablet();
    this.getAllUsers();
  }

  ngOnInit() {}

  getAllUsers() {
    this.storage.get('users').then((val: User[]) => {
      this.users = val;
    });
  }

  async presentAddUserModal(method: string, user?: User, index?: number) {
    const modal = await this.modalController.create({
      component: UserFormPage,
      componentProps: {
        method: method,
        user: user,
        users: this.users,
        index: index
      }
    });
    return await modal.present();
  }


  setActiveUser(user: User, index: number) {
    this.presentAddUserModal('UPDATE', user, index);
  }

  deleteUser(user: User, index) {
    this.users.splice(index, 1);
    this.storage.set('users', this.users).then((users) => {
      this.users = users;
    });
  }
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  eightBallRecord: {
    wins: number;
    played: number;
  };
  nineBallRecord: {
    wins: number;
    played: number;
  };

}
