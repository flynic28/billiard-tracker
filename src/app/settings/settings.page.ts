import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  staticData = [ 'users' ];

  constructor(
    public alertController: AlertController,
    private http: Http,
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  async presentDeleteConfirm() {
    const alert = await this.alertController.create({
      header: 'Delete Local Data',
      message: 'Are you sure you want to delete all local data?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'Delete',
          handler: () => {
            console.log('Delete Local Data');
            this.deleteLocalData();
          }
        }
      ]
    });

    await alert.present();
  }

  setLoadStatic() {
    this.staticData.forEach((key) => {
      this.http.get('assets/data/' + key + '.json').pipe(
          map(res => res.json())
        ).subscribe((res) => {
          this.setData(key, res);
        }
      );
    });
  }

  async deleteLocalData() {
    await this.storage.clear();
  }

  setData(key: string, value: any) {
    this.storage.set(key, value).then((val) => {
      console.log(key);
      console.log(val);
      return val;
    });
  }

}
