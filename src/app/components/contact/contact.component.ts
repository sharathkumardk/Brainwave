import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule here

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule], // Import HttpClientModule here
})
export class ContactComponent implements OnInit {
  contact = {
    createdAt: '2024-02-05',
    first_name: '',
    last_name: '',
    emailId: '',
    age: 0,
    gender: 'Male',
    mobilenumber: '',
    pan_no: '',
    adhaar_no: '',
    status: true,
  };

  fetchedContact: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onSubmit() {
    this.http.post('https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile', this.contact)
      .subscribe(response => {
        console.log('Contact created:', response);
        this.fetchContact();
      });
  }

  onUpdate() {
    this.http.put('https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile/1', this.contact)
      .subscribe(response => {
        console.log('Contact updated:', response);
        this.fetchContact();
      });
  }

  onDelete() {
    this.http.delete('https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile/1')
      .subscribe(response => {
        console.log('Contact deleted:', response);
        this.fetchedContact = null;
      });
  }

  fetchContact() {
    this.http.get('https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile')
      .subscribe(response => {
        console.log('Fetched contact:', response);
        this.fetchedContact = response;
      });
  }
}
