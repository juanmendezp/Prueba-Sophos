import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  form: FormGroup;
  numeroDocumento: string = '';
  numeroDocumentoSend: string = '';
  tipoDocumento: string = "";
  constructor(private fb: FormBuilder,private _router: Router) { 
    this.form = this.fb.group({
    tipoDocumento: ['', Validators.required],
    numeroDocumento: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(14)]],
  })}

  ngOnInit(): void {
  }

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;

    // Elimina cualquier carácter que no sea un número
    this.numeroDocumento = inputValue.replace(/[^0-9]/g, '');
    this.numeroDocumentoSend = this.numeroDocumento.replace('/\./g','');
    this.numeroDocumento = Number(this.numeroDocumento).toLocaleString();
  }

  onSubmit(){
    console.log(this.numeroDocumento.replace('/\./g',''))
    this._router.navigate(["/resumen"],{
      queryParams: {tipoDocumento: this.tipoDocumento , numeroDocumento: this.numeroDocumentoSend},
    })
  }
  
}
