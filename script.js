'use strict';
//Назви класів з ВЕЛИКОЇ ЛІТЕРИ ПИСАТИ ТРЕБА !

// початковий варіант із js функції конструкторів (старий синтаксис)

// function User(fname, lname, age) {
//     this.fname = fname;
//     this.lname = lname;
//     this.age = age;
// }

// function UserProto() {
//     this.getFullName = function() {
//         return `${this.fname} ${this.lname}`;
//     }
// }

// User.prototype = new UserProto();

// const user1 = new User('Tom', 'Rot', 59);

//новий синтаксис 
//'use strict' - можна і не писати в class за замовчуванням його викоритовує

class User {
    // це приватні властивості які не можуть змінювати тільки в межах блоку (ним дуже рідко користуються)
    #fname;
    #lname;
    #age;
    /**
     * 
     * @param {string} fname 
     * @param {string} lname 
     * @param {number} age 
     */
    constructor(fname, lname, age) {
        this.fname = fname; 
        this.#lname = lname; // приватна властивість
        this.age = age; 
    }

    static isUser(obj){
        return obj instanceof User
    }

    getFullName() {
        return `${this.#fname} ${this.#lname}`; 
    }
    //accessors - getter & setter
    get fname() {
        return this.#fname;
    }
    set fname(value) {
        if (typeof value !== 'string') {
            throw new TypeError('first name must be string');
        }
        if (value.trim().length < 3) {
            throw new RangeError('must be >= 3');
        }
        this.#fname = value;
    }

    get age() {
        return this.#age;
    }
    set age(value) {
        if (typeof value !== 'number') {
            throw new TypeError('age name must be number');
        }
        if (value <= 0 || value> 150) {
            throw new RangeError('must be in diapazon 1-150');
        }
        this.#age = value
    }
}
try {
    const userClasses = new User('Brad', 'Pitt', 60);
    userClasses.age = 35;
    console.log(userClasses.age);
} catch (error) {
     console.log(error);
}

function UserProto() {
    this.getFullName = function () {
        return `${this.fname} ${this.lname}`;
    };
};
User.isUser = function (obj) {
    return obj instanceof User; // перевіряє чи було створено за допомогою первного в данному випадку наш USER 
};
User.amount = 0;
// const userClasses = new User('Brad', 'Pitt', 60);
// userClasses.age = 35;
// console.log(userClasses);


//task
const GENRES = ['comedy', 'drama', 'horor'];
class Book {
    // #title;
    // #author;
    // #genre;
    // #yearCreate;
    /**
     * 
     * @param {string} title 
     * @param {string} author 
     * @param {string} genre 
     * @param {number} yearCreate 
     */
    constructor(title, author, genre, yearCreate) {
        this.title = title;
        this.author = author;
        this.genre = genre; // рядок один з переліку ['comedy', 'drama', 'horor']
        this.yearCreate = yearCreate;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        if (typeof value !== 'string') {
            throw new TypeError('title name must be sting');
        }
        if (value.trim().length <= 2 || value.trim().length  >= 20) {
            throw new RangeError('the name must be at least 2 and no more than 20 characters');
        }
        this._title = value;
    }
    get author() {
        return this._author;
    }
    set author(value) {
        if (typeof value !== 'string') {
            throw new TypeError('author name must be sting');
        }
        if (value.trim().length <= 2 || value.trim().length  >= 20) {
            throw new RangeError('the name must be at least 2 and no more than 20 characters');
        }
        this._author = value;
    }
    get genre() {
        return this._genre;
    }
    set genre(value) {
        if (typeof value !== 'string') {
            throw new TypeError('genre name must be sting');
        }
        if (value.trim().length <= 2 || value.trim().length  >= 20) {
            throw new RangeError('the name must be at least 2 and no more than 20 characters');
        }
        this._genre = value;
    }
    get yearCreate() {
        return this._yearCreate;
    }
    set yearCreate(value) {
        if (typeof value !== 'number') {
            throw new TypeError('yearCreate name must be number');
        }
        if (value <= 0 || Number.isInteger(value) === false) {
            throw new RangeError('the year is entered incorrectly');
        }
        this._yearCreate = value;
    }
    getInfo() {
        return `назва книги: ${this._title}, автор: ${author}, жанр: ${genre}, рік видання: ${yearCreate} `;
    }

}

const myBook = new Book('Grokaem algorithms', 'Aditya Bhargava', 'cognitive', 2020);
console.log(myBook);

