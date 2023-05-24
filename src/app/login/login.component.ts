import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Usuarios } from 'src/models/usuarios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  myGroup: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router){
                this.myGroup = this.fb.group({
                  firstname : ['', Validators.required],
                  password : ['', Validators.required]
                })
  }

  public submitFormulario(){
    const USUARIOS: Usuarios = {
      firstname: this.myGroup.get('firstname')?.value,
      password: this.myGroup.get('password')?.value
    }

    console.log(USUARIOS)
    this.router.navigate(['/inicio'])
  }
}
