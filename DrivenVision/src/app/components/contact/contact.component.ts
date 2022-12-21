import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      'nombre': ['', [Validators.required]],
      'email': ['', Validators.required],
      'celular': ['', [Validators.required, Validators.min(10000000), Validators.max(9999999999)]],
      'empresa': ['', [Validators.required]],
      'mensaje': ['', [Validators.required]],
    });
  }

  ngOnInit(): void { }


  public aceptar(): void {
    // console.log(this.forma);
    // console.log(this.forma.getRawValue()); //te devuelve un JSON
    // console.log(this.forma.get('nombre').value); //te da un campo puntual
    // console.log(this.forma.controls['nombre'].value); //te da un campo puntual otra forma

    var nombre = this.form.controls['nombre'].value;
    var email = this.form.controls['email'].value;
    var celular = this.form.controls['celular'].value;
    var empresa = this.form.controls['empresa'].value;
    var mensaje = this.form.controls['mensaje'].value;

    console.log("nombre => ", nombre);
    console.log("email => ", email);
    console.log("celular => ", celular);
    console.log("empresa => ", empresa);
    console.log("mensaje => ", mensaje);
  }


}
