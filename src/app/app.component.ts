import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-end';
  private apiKey = "912f22ada26bfe69d487b48e12879dfd";
  cityName: string ="";
  result: any ="";

  constructor(private http: HttpClient) { }
  getWeatherData() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=${this.apiKey}`;
    this.http.get<any>(url).subscribe(responce => {
      this.result = responce;
      console.log(this.result);
      this.cityName = "";
    },
      error => {
        console.error("Error fetching the data")
      }
    )
  };
}


