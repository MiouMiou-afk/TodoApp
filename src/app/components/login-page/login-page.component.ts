import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public loginForm!: FormGroup

  constructor(private formbuilder: FormBuilder,private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['', Validators.required],
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/signupUsersList")
    .subscribe({
      next: (res) =>{
        const user = res.find((a:any)=>{
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password 
        });
        if(user){
          alert('Login Succesful');
          this.loginForm.reset()
        this.router.navigate(["home"])
        }else{
          alert("user not found")
        }
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    })
  }

}
