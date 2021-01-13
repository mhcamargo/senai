import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController, IonicPage } from 'ionic-angular';
import { Usuario } from '../../models/usuario.dto';
import { UsuarioService } from '../../services/usuario.service';

@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  login: string;
  senha: string;

  constructor(public navCtrl: NavController,
    public alertController: AlertController,
    public usuarioService: UsuarioService) {

  }

  logar() {
    if (this.login != undefined && this.senha != undefined && this.login.length != 0 && this.senha.length != 0) {
      let usuario: Usuario = { idPessoa: "", login: this.login, senha: this.senha, tipo: "" };
      this.usuarioService.post(usuario).subscribe(
        (resposta: Usuario) => {
          if (resposta.tipo == 'adm') {
            this.presenAlert("Olá: " + resposta.login + "seja bem vindo(a), seu perfil é de administrador! ");
            this.navCtrl.setRoot("AdminPage");
          } else {
            this.presenAlert("Olá!" + resposta.login + " seu perfil é de comum ");
            this.navCtrl.setRoot("ComumPage");
          }
          console.log(resposta);
        },
        (error) => {
          this.presenAlert("Error: " + error.error.erro);
          console.log(error);
        }
      );
      //console.log(this.login);
      //console.log(this.senha);
      // this.presenAlert("Você deseja ver seus dados no console! ");
    } else {
      this.presenAlert("Por favor preencha todos os campos! ");
    }
  }

  presenAlert(messagem: string) {
    let alert = this.alertController.create({
      title: "Aviso ",
      subTitle: messagem,
      buttons: ["ok"]
    });
    alert.present();
  }
}
