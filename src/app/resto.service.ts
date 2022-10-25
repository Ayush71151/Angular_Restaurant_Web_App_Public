import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  url="http://localhost:3000/posts"
  url1="http://localhost:3000/users"

  constructor(private http : HttpClient ) { }
  getlist()
  {
    return this.http.get(this.url)
  }
  saveresto(data)
  {
    return this.http.post(this.url,data)
  }
  deleteResto(id)
  {
    return this.http.delete(`${this.url}/${id}`)
  }
 register(data)
  {
    return this.http.post(this.url1,data)
  }
  editResto(id)
  {
    return this.http.get(`${this.url}/${id}`)
  }
  updateResto(id,data)
  {
    return this.http.put(`${this.url}/${id}`,data)
  }
  logindata()
  {
    return this.http.get(this.url1)
  }
}