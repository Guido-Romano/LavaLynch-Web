import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      from_name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      to_name: ['Admin', Validators.required],
      from_mail: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(255)]],
    });
  }

  async send() {
    emailjs.init('1N345HBz7rZCbp8mT');
    try {
      let response = await emailjs.send("service_5ibfe1a", "template_zxb64nb", {
        from_name: this.form.value.from_name,
        to_name: this.form.value.to_name,
        from_mail: this.form.value.from_mail,
        message: this.form.value.message,
      });
      alert('Mensaje enviado');
      this.form.reset();
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      alert('Hubo un error al enviar el mensaje');
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.send();
    } else {
      console.log('Formulario inválido');
      this.form.markAllAsTouched();
      console.log(this.form);
    }
  }
}


