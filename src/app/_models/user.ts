export class User {
    name: string;
    password: string;
    // tslint:disable-next-line: variable-name
    membership_type: string;
    age: number;
    // tslint:disable-next-line: variable-name
    selected_insurances: string[];
    authdata?: string;
}
