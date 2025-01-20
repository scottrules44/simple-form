import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  imports: [ReactiveFormsModule],
  styleUrls: ['./subscribe.component.css'], // Corrected from 'styleUrl' to 'styleUrls'
  standalone: true
})
export class SubscribeComponent {

  constructor(private http: HttpClient) {}

  submitted = false;
  subscribeForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl('')
  });
  
  onSubmit(): void {
    if (!this.subscribeForm.valid) {
      alert('Please fill out all fields');
      return;
    }
    this.submitted = true;
    console.log('Form submitted:', this.subscribeForm.value);
    this.http.post<any>(`${environment.apiUrl}/database/addCustomer`, 
      { 
        name: this.subscribeForm.value.name, 
        email: this.subscribeForm.value.email, 
        phoneNumber: this.subscribeForm.value.phoneNumber 
      }, 
      { headers: { 'Content-Type': 'application/json' } }
    ).subscribe({
      next: data => {
        alert('Customer added');
        this.subscribeForm.reset();
        this.submitted = false;
      },
      error: error => {
        console.error('Error adding customer:', error);
        alert('Error adding customer');
        this.submitted = false;
      }
    });
  }
}