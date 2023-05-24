export class Usuarios{
    _id?: number;
    firstname: string;
    password: string;

    constructor(firstname: string, password: string){
        this.firstname = firstname;
        this.password = password
    }
}