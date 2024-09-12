import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registroForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }
  
  onSubmit() {
    if (this.registroForm.valid) {
      const { password, confirmPassword } = this.registroForm.value;
      if (password === confirmPassword) {
        // Lógica para registrar el usuario
      } else {
        // Mostrar error de contraseñas no coinciden
      }
    }
  }

  clearPlaceholder(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      inputElement.placeholder = '';
    }
  }
}
