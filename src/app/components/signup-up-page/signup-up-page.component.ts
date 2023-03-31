import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup-up-page',
  templateUrl: './signup-up-page.component.html',
  styleUrls: ['./signup-up-page.component.scss']
})
export class SignupUpPageComponent implements OnInit {

  public signUpForm !: FormGroup
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: [""],
      password: [""]
    })
  }

  signUp(){
    this.http.post<any>("http://localhost:3000/signupUsersList",this.signUpForm.value)
    .subscribe({
      next: (res) =>{
        alert('SIGNIN SUCCESFUL');
        this.signUpForm.reset()
        this.router.navigate(["login"])
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
  })
  }
  

}
