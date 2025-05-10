
 // Напиши клас Client який створює об'єкт з властивостями login email.
 // Оголоси приватні властивості #login #email, доступ до яких зроби 
 // через геттер та сеттер login email

class Client {
    #login
    #email
    constructor(email, login) {
        this.#email = email;
        this.#login = login;
    }
    get login() {
        return this.#login;
    }
    set login(newLogin) {
        this.#login = newLogin;
    }
    
    get email() {
        return this.#email;
    }
    set email(newEmail) {
        this.#email = newEmail;
    }
}
 

const client = new Client("user123", "user@example.com");

console.log(client.login); 
console.log(client.email); 

client.login = "newUser"; 
client.email = "new@example.com"; 

console.log(client.login);
console.log(client.email); 