import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-nav',
  imports: [FormsModule,BsDropdownModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  accountService = inject(AccountService);  
  model: any = {};

  login() {
    // Implement login logic here
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);        
      },
      error: error => {
        console.error(error);
      }

    })
    console.log('Login clicked', this.model);
  }
  logout() {
    this.accountService.logout();
    console.log('Logout clicked');
  }
}
