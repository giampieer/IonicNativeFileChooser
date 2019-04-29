import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RestapiProvider} from "../../providers/restapi/restapi";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loginData: any;
  file: File;
  @ViewChild('filechooser') fileChooser: ElementRef;

  constructor(public navCtrl: NavController, private restApi: RestapiProvider) {
  }
  items: File[] = [];
  ionViewDidLoad() {
    const wireUpFileChooser = () => {
      const elementRef = this.fileChooser.nativeElement as HTMLInputElement;
      elementRef.addEventListener('change', (evt: any) => {
        const files = evt.target.files as File[];
        this.file = evt.target.files[0];
        for (let i = 0; i < files.length; i++) {
          this.items.push(files[i]);
        }
      }, false);
    }
    wireUpFileChooser();
  }
  async uploadPpt() {
    let formData = new FormData();
    formData.append('op', '1');
    formData.append('name','asada');
    formData.append('userId', '1');
    formData.append('type', 'PPT');
    console.log("kkkkkkk"+this.file);
    formData.append('file', this.file);
    await this.restApi.insertArchive(formData).then((data) => {
      console.log(data);
      this.loginData = data;
      if(this.loginData.status === true) {
        console.log("Se registro correctamente");
      } else {
        console.log("No se registro");
      }
    });
  }
  message(message: string) {
  }

}
