import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {

  constructor(private http: HttpClient) {}

  obtenerDatos():Observable<any>{
    return this.http.get('/assets/data/data.json');
  }

  private urlApi = "http://localhost:8080/api/"
//  private root = "http://localhost:8080/"
//  private urlApi = "api/persona/"
//  private rootEducacion = "http://localhost:8080/api/persona/"
//  private rootExperiencia = "http://localhost:8080/api/persona/"
//  private rootProyecto = "http://localhost:8080/api/persona/"
//  private rootHabilidad = "http://localhost:8080/api/persona/"
  
  // CRUD PERSONA
  getListaPersonas(): Observable<any> {
    return this.http.get(this.urlApi + 'persona/listar');
  }
  getPersona(id: number): Observable<any> {
    return this.http.get(this.urlApi + 'persona/' + id);
  }
  borrarPersona(id: number): Observable<any> {
    return this.http.delete(this.urlApi + 'persona/borrar/' + id);
  }
  guardarPersona(persona: any): Observable<any> {
    return this.http.post(this.urlApi + 'persona/nueva', persona);
  }
  editarPersona(id: number, persona: any):Observable <any> {
    return this.http.put(this.urlApi + 'persona/' + id, persona);
  }
}