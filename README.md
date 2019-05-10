# angular-client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Adding Components, Services, Modules, etc

When generating a new addition, be sure to add the class path to name of the new addition so it is added to the appropriate folder
<br/><br/>EX. When creating a new Component the cli command should look like:  
`ng g c components/[component-name]`

## Backend URLs

Eureka Server

http:/domain-name:8086

Gateway

http:/domain-name:7000/

User Service

POST: http://domain-name:7000/userservice/users/login

Candidate Service

- GET: http://domain-name:7000/candidateservice/candidates
- GET: http://domain-name:7000/candidateservice/candidates/{id}
- POST: http://domain-name:7000/candidateservice/candidates

Screening Service

- GET: http://domain-name:7000/screeningservice/screenings 
- GET: http://domain-name:7000/screeningservice/screenings/{id} 
- POST: http://domain-name:7000/screeningservice/screenings 
- PUT: http://domain-name:7000/screeningservice/screenings/{id} 

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. 
Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README]
(https://github.com/angular/angular-cli/blob/master/README.md).
