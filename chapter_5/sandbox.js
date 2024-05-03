
let user = {
    name: 'Jade',
    age: 19,
    email: 'jadenguyen@academic.rrc.ca',
    loaction: 'berlin',
    blogs: [
        { title: 'how not to look crazy in public', likes: 34},
        { title: 'how to not get hit by a car', likes: 50}
    ],
    login: function() {
        console.log('the user logged in');
    },
    logout: function() {
        console.log('the user logged out');
    },
    logBlogs: function() {
        console.log('the user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        })
    }
};
/*
console.log(user);
console.log(user.name);

user.age = 24;
console.log(user.age);

const key = 'email';

console.log(user[key]);
user['name'] = 'Jade Nguyen';
console.log(user['name']);

console.log(typeof user);

user.login();
user.logout();
user.logBlogs();

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

const random = Math.random();

console.log(random);
console.log(Math.round(random * 100));

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

const userOne = {name: 'Ryu', score: 0};
userTwo = userOne;

console.log(userOne, userTwo);

userOne.score = 50;
console.log(userOne, userTwo);
*/
