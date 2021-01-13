import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Pessoa } from "../models/pessoa.dto";
import { URLBASE } from "../config/api.config";

@Injectable()
export class PessoaService {

    constructor(public httpClient: HttpClient) {}

    get(id: String){
        let url = URLBASE.urlBase+"/webservice.php?id="+id;
        return this.httpClient.get<Pessoa[]>(url);
    }
    
}