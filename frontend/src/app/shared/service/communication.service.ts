import { HttpHeaders, HttpClient } from '@angular/common/http'; // Importing the necessary modules from Angular for HTTP requests
import { Injectable } from '@angular/core'; // Importing the Injectable decorator from Angular core
import { Observable } from 'rxjs'; // Importing the Observable class from the RxJS library

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json' // Setting the Content-Type header to application/json
    })
  };
 
  constructor(
    private _http: HttpClient // Injecting the HttpClient service
  ) {
  }

  /**
   * Retrieves data of type `Type` from the specified API endpoint.
   *
   * @template Type - The type of data to retrieve.
   * @param {string} apiEndpoint - The API endpoint to retrieve data from.
   * @param {number | string} id - The ID of the data to retrieve.
   * @returns {Observable<Type>} - An observable that emits the retrieved data.
   */
  get<Type>(apiEndpoint: string, id: number | string): Observable<Type> {
    return this._http.get<Type>(`${apiEndpoint}/${id}`, this.httpOptions); 
   }
}
