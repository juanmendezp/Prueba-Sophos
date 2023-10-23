import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  cliente: Cliente = new Cliente()
  numeroDocumento: string = "";
  tipoDocumento: string = "";
  error: string = ""
  constructor(private _route: ActivatedRoute,private clienteService: ClienteService) { }

  ngOnInit(): void {
    this._route.queryParamMap.subscribe(params => {
      this.numeroDocumento = params.get("numeroDocumento")!
      this.tipoDocumento = params.get("tipoDocumento")!
    })

    this.clienteService.getClienteByTipoAndCedula(this.tipoDocumento,this.numeroDocumento).subscribe(res =>{
      this.cliente = res
    },error => {
      if(error.status == 404 ){
        this.error = "usuario no encontrado"; 
      }
      if(error.status == 400){
        this.error = "error en la peticion"; 
      }
      if(error.status == 500){
        this.error = "error del servidor"; 
      }
    })
  }
  volver(){
    window.history.back();
  }
}
