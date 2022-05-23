import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {

  listaInsignias:any; // Esta lista es la que conecta al JSON
  listaPersonas: any [] = [];
  accion = 'Agregar';
  form: FormGroup;
  id: number | undefined;

  constructor(
    private datosPortfolio:PersonaService, //Acá llamo al service que carga el Json
    private fb: FormBuilder,
    private toastr: ToastrService,
    private _personaService: PersonaService) { 
    this.form = this.fb.group({
      acerca_de: ['', Validators.required],
      apellido: ['', Validators.required],
      ciudad: ['', Validators.required],
      email: ['', Validators.required],
      fecha_nac: ['', Validators.required],
      nombre: ['', Validators.required],
      nombre_usuario: ['', Validators.required],
      password: ['', Validators.required],
      provincia: ['', Validators.required],
      telefono: ['', Validators.required],
      url_img: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.listarPersonas();
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.listaInsignias=data.Insignias;
    });
}
  listarPersonas(){
    this._personaService.getListaPersonas().subscribe(data=> {
      console.log(data);
      this.listaPersonas = data;
//    }, error => {
//      console.log(error);
   })
  }

  guardarPersona(){
    const persona: any = {
      acerca_de: this.form.get('acerca_de')?.value,
      apellido: this.form.get('apellido')?.value,
      ciudad: this.form.get('ciudad')?.value,
      email: this.form.get('email')?.value,
      fecha_nac: this.form.get('fecha_nac')?.value,
      nombre: this.form.get('nombre')?.value,
      nombre_usuario: this.form.get('nombre_usuario')?.value,
      password: this.form.get('password')?.value,
      provincia: this.form.get('provincia')?.value,
      telefono: this.form.get('telefono')?.value,
      url_img: this.form.get('url_img')?.value,
    }
    if(this.id == undefined){
      // Agregar Persona
      this._personaService.guardarPersona(persona).subscribe(data =>{
        this.toastr.success('Persona registrada con éxito!', 'Persona Registrada!');
        this.listarPersonas();
        this.form.reset();  
 //     }, error =>{
 //       this.toastr.error('Ocurrió un error', 'Error')
 //       console.log(error);
      })  
    }else{
      persona.id = this.id;
      // Editar Persona
      this._personaService.editarPersona(this.id, persona).subscribe(data => {
        this.form.reset();
        this.accion = 'Agregar';
        this.id = undefined;
        this.toastr.info('Persona registrada con éxito!', 'Persona Registrada!');
        this.listarPersonas();
//      }, error =>{
//        this.toastr.error('Ocurrió un error', 'Error')
//        console.log(error);
      })  
    }
  }

  borrarPersona(id: number){
    this._personaService.borrarPersona(id).subscribe(data=> {
      this.toastr.error('Persona eliminada correctamente!','Persona Eliminada');
      this.listarPersonas();
//    }, error => {
//      console.log(error);
    })
  }  
  editarPersona(persona: any){
    this.accion = 'Editar';
    this.id = persona.id;
    this.form.patchValue({
      acerca_de: persona.acerca_de,
      apellido: persona.apellido,
      ciudad: persona.ciudad,
      email: persona.email,
      fecha_nac: persona.fecha_nac,
      nombre: persona.nombre,
      nombre_usuario: persona.nombre_usuario,
      password: persona.password,
      provincia: persona.provincia,
      telefono: persona.telefono,
      url_img: persona.url_img
    })
  }

}