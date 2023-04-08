import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckAuthService {

  constructor(private httpclient:HttpClient) { }
  _url:string="http://localhost:5122/api/Account"
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
//, {
//   headers: this.requestHeader,
// }
  public register(registerData:any) {
    return this.httpclient.post(this._url+'/Register', registerData).pipe(catchError((err)=>{
      return throwError(()=>err.message ||"server error");
    }));
  }
  public login(loginData:any){
    return this.httpclient.post(this._url+'/Login',loginData).pipe(catchError((err)=>{
      return throwError(()=>err.message ||"server error");
    }));
  }

}
