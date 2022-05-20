import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})

export class TarjetaComponent implements OnInit {

  listaTarjetas: any [] = [
    { titulo: "Juan Perez", numeroTarjeta: "123456789", fechaExpiracion: "11/23", cvv: "132" },
    { titulo: "Jose Dominguez", numeroTarjeta: "987654321", fechaExpiracion: "14/24", cvv: "456" },
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService) { 
    this.form = this.fb.group({
      titular: ['', Validators.required],
      numeroTarjeta: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      fechaExpiracion: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
    })
  }

  ngOnInit(): void {
  }

  agregarTarjeta(){
    console.log(this.form);

    const tarjeta: any = {
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value,
    }
    this.listaTarjetas.push(tarjeta)
    this.toastr.success('Su tarjeta fué registrada con éxito!', 'Tarjeta Registrada!');
    this.form.reset()

  }

  eliminarTarjeta(index: number){
    this.listaTarjetas.splice(index, 1);
    this.toastr.error('Su tarjeta fué eliminada exitosamente!','Tarjeta Eliminada');
  }

}
