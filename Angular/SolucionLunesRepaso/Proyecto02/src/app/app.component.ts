import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto02';

  contactForm = new FormGroup({
    nombre1: new FormControl(),
    nombre2: new FormControl(),
    resultado: new FormControl(),
  })


  onSubmit() {
    let nombre1 = this.contactForm.get('nombre1')?.value;;
    let arrayNombre1 = nombre1.split('');

    let nombre2 = this.contactForm.get('nombre2')?.value;;
    let arrayNombre2 = nombre2.split('');

    let arrayIguales:[] = [];

    for (let caracter of arrayNombre1) {
      if (arrayNombre2.indexOf(caracter)) {
        console.log(caracter);
        //arrayIguales.push(caracter);
      }

    }
  }
}
