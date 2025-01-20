import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-customers',
  templateUrl: './search-customers.component.html',
  styleUrls: ['./search-customers.component.css'],
  imports: [
    CommonModule, 
    FormsModule
  ]
})
export class SearchCustomersComponent implements OnInit {
  customers: any[] = [];
  query: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCustomers();
  }

  // Fetch customers with optional query parameter
  fetchCustomers(query: string = ''): void {
    const url = `${environment.apiUrl}/database/searchCustomer?query=${query}`;

    this.http.get<any[]>(url).subscribe({
      next: data => {
        this.customers = data;
      },
      error: error => {
        console.error('Error getting customers:', error);
      }
    });
  }

  // Method to handle search input and fetch customers based on query
  onSearch(query: string): void {
    console.log('Search query:', query);
    this.fetchCustomers(query);
  }
}
