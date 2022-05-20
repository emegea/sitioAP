import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
//  private root = "http://localhost:8080/"
  private urlApi = "api/persona/"
//  private rootEducacion = "http://localhost:8080/api/persona/"
//  private rootExperiencia = "http://localhost:8080/api/persona/"
//  private rootProyecto = "http://localhost:8080/api/persona/"
//  private rootHabilidad = "http://localhost:8080/api/persona/"


  constructor(private http: HttpClient) {}

  getListaPersonas(): Observable<any> {
    return this.http.get(this.urlApi + 'listar');
  }
  getPersona(id: number): Observable<any> {
    return this.http.get(this.urlApi + id);
  }

  borrarPersona(id: number): Observable<any> {
    return this.http.delete(this.urlApi + "borrar/" + id);
  }

  guardarPersona(persona: any): Observable<any> {
    return this.http.post(this.urlApi, persona);
  }

  editarPersona(id: number, persona: any):Observable <any> {
    return this.http.put(this.urlApi + id, persona);
  }
}