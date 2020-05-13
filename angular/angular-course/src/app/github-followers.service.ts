import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './services/data.service';

@Injectable()
export class GithubFollowersService extends DataService {

  constructor(httpClient: HttpClient) {
    super('https://api.github.com/users/mosh-hamedani/followers', httpClient);
   }
}
