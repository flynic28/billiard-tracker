import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonUtilitiesService {

  constructor(
    private platform: Platform
  ) { }

  public isTablet() {
    if (this.platform.is('ipad') || this.platform.is('tablet') || this.platform.is('pwa')) {
        return true;
    }
  }
}
