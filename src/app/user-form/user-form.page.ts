import { Component, OnInit } from '@angular/core';
import { User } from '../users/users.page';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.page.html',
  styleUrls: ['./user-form.page.scss'],
})
export class UserFormPage implements OnInit {
  user: User;
  users: User[];
  userForm: FormGroup;
  method: string;
  userIndex: number;

  constructor(
    private modalCtrl: ModalController,
    private storage: Storage,
    private navParams: NavParams
  ) {
    this.user = this.navParams.get('user');
    this.users = this.navParams.get('users');
    this.method = this.navParams.get('method');
    this.userIndex = this.navParams.get('index');

    this.userForm = new FormGroup({
      firstName: new FormControl((this.method === 'UPDATE' ? this.user.firstName : ''), [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl((this.method === 'UPDATE' ? this.user.lastName : ''), [Validators.required, Validators.minLength(2)])
    });
  }

  ngOnInit() {
  }

  closeModal() {
    this.storage.set('users', this.users).then((_val: User[]) => {
      this.modalCtrl.dismiss(this.users);
    });
  }

  onSubmit(form: FormGroup) {
    if (form.status === 'VALID') {
      if (this.method === 'UPDATE') {
        this.users[this.userIndex].firstName = form.value.firstName;
        this.users[this.userIndex].lastName = form.value.lastName;
      } else {
        this.users.push({
          'id': Math.floor(1000 + Math.random() * 9000),
          'firstName': form.value.firstName,
          'lastName': form.value.lastName,
          'eightBallRecord': {
            'wins': 0,
            'played': 0
          },
          'nineBallRecord': {
            'wins': 0,
            'played': 0
          }
        });
      }
      this.closeModal();
    }
  }

}
