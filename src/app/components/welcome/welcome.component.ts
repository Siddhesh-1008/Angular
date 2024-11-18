import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{
  router: any;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
      this.auth.isAuthenticated$.subscribe(isAuthenticated=>{
        if(isAuthenticated){
            this.router.navigate('/dashboard')
        }
      })
  }

  login(){
    this.auth.loginWithRedirect();
  }
}
