import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('filechooser') fileChooser: ElementRef;

  constructor(public navCtrl: NavController) {

  }

  items: File[] = [];

  ionViewDidLoad() {

    const wireUpFileChooser = () => {
      const elementRef = this.fileChooser.nativeElement as HTMLInputElement;

      elementRef.addEventListener('change', (evt: any) => {
        const files = evt.target.files as File[];

        for (let i = 0; i < files.length; i++) {
          this.items.push(files[i]);
        }

      }, false);

    }

    wireUpFileChooser();

  }

}
