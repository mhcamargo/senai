import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "../models/usuario.dto";
import { URLBASE } from "../config/api.config";

@Injectable()
export class UsuarioService {

    constructor(public httpClient: HttpClient) { }

    post(usuario: Usuario) {
        var url = URLBASE.urlBase+"/webservice.php";
        return this.httpClient.post<Usuario>(url,usuario);
    }

}