import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {
  mensaje = '';
  elemento: any;

  constructor(public chatService: ChatService) {
    chatService.cargarMensajes()
    .subscribe(() => {
      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 20);
    });
  }

  ngOnInit() {
    this.elemento = document.getElementById('app-mensaje');

  }

  enviarMensaje() {
    if (this.mensaje.length > 0) {
      this.chatService.agregarMensaje(this.mensaje)
      .then(() => {
        this.mensaje = '';
      })
      .catch(() => {
        console.log('Fallo el envio del mensaje');
      });
    } else {
      return;
    }
  }

}
