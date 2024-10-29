import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(private navCtrl: NavController) {}
  /**HAY QUE DESCOMENTAR LA WEA **/
  ngOnInit() {
    setTimeout(() => {
      this.navCtrl.navigateForward(['/login'])
    },5000) 
  }

}
