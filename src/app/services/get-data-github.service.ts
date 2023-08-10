import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IDataOfRepos } from '../interfacesApp';

@Injectable({
    providedIn: 'root'
})

export class GetDataGithubService {
    url: string = 'https://api.github.com/search/repositories?q=';

    constructor(private http: HttpClient) { }

    getDataFromGithub(query: string) {
        return this.http.get<IDataOfRepos>(`${this.url}${query}`)
    }
}
