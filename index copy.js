// const User1 = {
//   login: null,
//   password: null,
//   role: null,
//   age: null,
// };

// function Animal() {
//   this.test = "Hellow World";
// }

// function User({ login, password, role, age }) {
//   //   Animal.call(this);
//   Animal.apply(this);

//   this.login = login;
//   this.password = password;
//   this.role = role;
//   this.age = age;

//   Object.defineProperty(this, {
//     name: {
//       get() {},
//       set() {},
//     },
//   });
// }

// console.log(new User({}).test);
class Person {
  constructor(name) {
    this.name = name;
  }
  test = () => {
    console.log("hello world", this.name);
  };
}
class User extends Person {
  constructor(login, password) {
    super(login);

    this.login = login;
    this.password = password;
  }
  login = null;
  password = null;

  #role = null;

  age = null;

  id = null;
  #id = 1000;

  isAdmin = () => {
    console.log(this.#id);
    this.createAdminUser();
    return this.role === "Admin";
    // return this.role !== "Admin";
  };
  //   verify(user1, user2) {
  //     return user1.login === user2.login;
  //   }
  createAdminUser = (login) => {
    const password = this.generateRandomPassword();
    return new User();
  };

  static generateRandomPassword = () => {
    return true;
  };

  get admin() {
    return this.#role === "Admin";
  }

  set admin(value) {
    this.#role = "Admin";
  }
}
const user = new User("Ivan", "hbtgrfedws");
// console.log(typeof user);
// console.log(user.__proto__);
// console.log(user.prototype);
// console.log(User.prototype === user.__proto__);
// console.log(User.prototype.isPrototypeOf(user));

// console.log(user.isAdmin());

function verifyAdmin(fn) {
  const result = fn();

  if (!result) {
    throw new Error("Нe адмін");
  }

  return true;
}
// verifyAdmin(user.isAdmin);

// console.log(user.admin);
// user.admin = true;
// console.log(user.admin);

console.log(user);
console.log(user.test());
console.log(user instanceof User);
