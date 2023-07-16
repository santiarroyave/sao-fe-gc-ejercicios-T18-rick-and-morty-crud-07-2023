# T18 Rick And Morty CRUD
## Apuntes
### JSON Server
1. Instalamos [JSON Server](https://www.npmjs.com/package/json-server) de manera global `npm install -g json-server`
2. Lo instalaremos en el proyecto `npm i json-server`
3. Creamos DB **db.json** en el directorio raiz
4. Iniciamos servidor DB `json-server --watch db.json`

### Models
- `ng g class models/misPersonajes --type=model`

En el archivo del servicio **mis-personajes.service.ts**
- `import { MisPersonajes } from '../models/mis-personajes.model';`
- Ej. de uso:
```ts
getPersonajes():Observable<MisPersonajes[]>{
    return this.http.get<MisPersonajes[]>(baseUrl);
};

findByName(name:any):Observable<MisPersonajes[]>{
return this.http.get<MisPersonajes[]>(`${baseUrl}?name=${name}`);
};
```

### CRUD
En el archivo del servicio **mis-personajes.service.ts** devolver:

C - Create **POST**
```ts
create(data:any):Observable<any>{
    return this.http.post(baseUrl,data);
};
```

R - Read - **GET** (all/id)
```ts
getPersonajes():Observable<MisPersonajes[]>{
    return this.http.get<MisPersonajes[]>(baseUrl);
};
```

```ts
getPersonajeId(id:number){
    return this.http.get(baseUrl+id);
};
```

U - Update - **PUT**
```ts
update(id:any, data:any):Observable<any>{
    return this.http.put(`${baseUrl}/${id}`,data);
};
```

D - Delete - **DELETE** (all/id)
```ts
    deleteAll():Observable<any>{
        return this.http.delete(baseUrl);
    };
```

```ts
delete(id:any):Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
};
```



## Readme de Angular
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
