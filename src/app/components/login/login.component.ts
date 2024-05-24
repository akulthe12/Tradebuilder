import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private fb:FormBuilder) { }
  signInForm!:FormGroup;
  ngOnInit(): void {
    this.signInForm=this.fb.group({
      'userName':['',[Validators.required]],
      'password':['',[Validators.required]]
      

    })
    

  }
  signIn()
  {
    console.log(this.signInForm.value)
    alert("login Sucessfully")
  }
  redirectToSignUp()
  {

  }
}
