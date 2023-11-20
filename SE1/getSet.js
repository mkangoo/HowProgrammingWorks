const user = {
  name: 'Alex',
  surname: 'Smith',
  get fullname() {
    return this.name + ' ' + this.surname;
  },
  set fullname(value) {
    const [name, surname] = value.split(' ');
    this.name = name;
    this.surname = surname;
  }
};
user.fullname = 'Ivan Ivanov';
console.log(user.fullname);
