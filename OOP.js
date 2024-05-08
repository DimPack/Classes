'use strict';
//Принципи ООП

//Успадкування (наслідування),
//Інкапсуляція,
//Поліморфізм,
//Aбстракція

class User {
    // це приватні властивості які не можуть змінювати тільки в межах блоку (ним дуже рідко користуються)
    // #fname;
    // #lname;
    // #age;
    /**
     * 
     * @param {string} fname 
     * @param {string} lname 
     * @param {number} age 
     */
    constructor(fname, lname, age) {
        this._fname = fname; 
        this._lname = lname;
        this._age = age; 
    }

    static isUser(obj){
        return obj instanceof User
    }

    getFullName() {
        return `${this._fname} ${this._lname}`; 
    }
    getInfo() {
        return `${this._fname} ${this._lname} ${this._age}`; 
    }
    //accessors - getter & setter
    get fname() {
        return this._fname;
    }
    set fname(value) {
        if (typeof value !== 'string') {
            throw new TypeError('first name must be string');
        }
        if (value.trim().length < 3) {
            throw new RangeError('must be >= 3');
        }
        this._fname = value;
    }

    get age() {
        return this._age;
    }
    set age(value) {
        if (typeof value !== 'number') {
            throw new TypeError('age name must be number');
        }
        if (value <= 0 || value> 150) {
            throw new RangeError('must be in diapazon 1-150');
        }
        this._age = value;
    }
}
//Успадкування (наслідування),
class UserWithAccount extends User{ //extends наслідуємо клас User 
    constructor(fname, lname, age, email, phone) {
        super(fname, lname, age); // адрес звертання до User
        this.email = email;
        this.phone = phone;
    }
    createWishList() {
        return [];
    }
    getInfo() {
        return super.getInfo() + ` ${this.email} ${this.phone}`; 
    }
}

const userWithAcc = new UserWithAccount('Olga', ' Brade', 23, 'fdss@gmail.com', '123-23-26');
console.log(userWithAcc);
console.log(userWithAcc.getInfo());


//task
/*class Squirrel
-name - string min 3 symbol
-color - one from ['red', 'gray', 'rainbow']
-jump() //return '${this.name} jumping'

class FlySquirrel
-name - string min 3 symbol
-color - one from ['red', 'gray', 'rainbow']
-maxFlyLength - positive number >50
-jump() //return '${this.name} jumping'
-fly()  //return '${this.name} flying at max length ${this.maxFlyLength}'

class MagicSquirrel
-name - string min 3 symbol
-color - one from ['red', 'gray', 'rainbow']
-maxFlyLength positive number >50 
-words - array  //example - ['I','am','a','magic','sqirrel']
-jump() //return '${this.name} jumping'
-fly() //return '${this.name} flying at max length ${this.maxFlyLength}'
-say() // return 'I am a magic squirrel' */
const COLORS = ['red', 'gray', 'rainbow'];
class Squirrel {
    /**
     * 
     * @param {string} name 
     * @param {string} color 
     */
    constructor(name, color) {
        this.name = name; 
        this.color = color;
    }
    jump(){
        return `${this._name} jumping`;
    }

    get name() {
        return this._name;
    }
    set name(value) {
        if (typeof value !== 'string') {
            throw new TypeError('name must be string');
        }
        if (value.trim().length < 3) {
            throw new RangeError('must be >= 3');
        }
        this._name = value;
    }

    get color() {
        return this._color;
    }
    set color(value) {
        if (typeof value !== 'string') {
            throw new TypeError('name must be string');
        }
        if (COLORS.includes(value) === false) {
            throw new RangeError('color not exists');  
        }
        this._color = value;
    }

}
try {
    const Squirrel1 = new Squirrel('Gred', 'red');
    console.log(Squirrel1);
} catch (error) {
     console.error(error);
}

class FlySquirrel extends Squirrel {
    /**
     * 
     * @param {string} name 
     * @param {string} color 
     * @param {number} maxFlyLength 
     */
    constructor(name, color, maxFlyLength) {
        super(name, color);
        this.maxFlyLength = maxFlyLength;
    }

    get maxFlyLength() {
        return this._maxFlyLength;
    }
    set maxFlyLength(value) {
        if (typeof value !== 'number') {
            throw new TypeError('name must be number');
        }
        if (value < 50) {
            throw new RangeError('the minimum flight length must be at least 50');
        }
        this._maxFlyLength = value;
    }

    fly() {
        return `${this.name} flying at max length ${this.maxFlyLength}`;
    }
    
}
try {
    const Squirrel2 = new FlySquirrel('Gred', 'red', 55);
    console.log(Squirrel2);
} catch (error) {
     console.error(error);
}

class MagicSquirrel extends FlySquirrel {
    constructor(name, color, maxFlyLength, worlds) {
        super(name, color, maxFlyLength);
        this.worlds = worlds;
    }
    get worlds() {
        return this._worlds;
    }
    set worlds(value) {
        if (Array.isArray(value) === false) {
            throw new TypeError('name must be number');
        }
        this._worlds = value;
    }
    say() {
        return this._worlds.join(' ');
    }
}
try {
    const Squirrel3 = new MagicSquirrel('Gred', 'red', 55, ['I', 'am', 'magic', 'squirrel']);
    console.log(Squirrel3);
} catch (error) {
     console.error(error);
}