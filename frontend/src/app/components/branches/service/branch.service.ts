import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Branch, CreateBranchPayload } from '../models';
 
@Injectable({
    providedIn: 'root'
})
export class BranchService {

    private apiUrl = 'http://localhost:8080/'; // Replace with your API URL

    constructor(private http: HttpClient) { }

    getBranches(): Observable<Branch[]> {
        return this.http.get<Branch[]>(this.apiUrl);
    }

    getBranchById(id: number): Observable<Branch> {
        return this.http.get<Branch>(`${this.apiUrl}/${id}`);
    }

    createBranch(branch: CreateBranchPayload): Observable<Branch> {
        return this.http.post<Branch>(this.apiUrl, branch);
    }

    updateBranch(id: number, branch: Branch): Observable<Branch> {
        return this.http.put<Branch>(`${this.apiUrl}/${id}`, branch);
    }

    deleteBranch(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}