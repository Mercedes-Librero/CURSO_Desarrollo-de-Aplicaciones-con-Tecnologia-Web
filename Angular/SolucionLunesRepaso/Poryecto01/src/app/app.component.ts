import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Poryecto01';

  contactForm = new FormGroup({
    nombre: new FormControl(),
  })


  onSubmit() {
    let nombre = this.contactForm.get('nombre')?.value;
    let longitud = nombre.length;

    this.contactForm.get('nombre')?.setValue(`${nombre} (${longitud})`);  
  }
}
