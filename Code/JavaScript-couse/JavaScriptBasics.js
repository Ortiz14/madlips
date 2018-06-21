/*---------Regular Function Declaration-------*/
function fullName(fName, lName){
    console.log(`${fName} ${lName}`);
}
fullName('Alberto', 'Ortiz');
/*-------------------------------------------*/

/*---------Function Expression--------------*/
fullName = function(fName, lName){
    console.log(`${fName} ${lName}`);
}
fullName('Alberto', 'Ortiz');
/*------------------------------------------*/

/*------------Arrow Function--------------*/
helloWorld = () => {console.log("Hi There");}
helloWorld();
/*----------------------------------------*/

/*-------------Single Arguement----------------------*/
firstName = fName => {console.log(fName.toUpperCase());}
firstName('Alberto');
/*---------------------------------------------------*/

/*----------Multiple Arguments ---------*/
fullName = (fName, lName) => {
    console.log(`${fName} ${lName}`);
}
fullName('Alberto', 'Ortiz');
/*---------------------------------------*/

let playerOne = 'Alberto';
let playerTwo = 'Alex';

[playerOne, playerTwo] = [playerTwo, playerOne];
console.log(`
Player One: ${playerOne}
Player Two: ${playerTwo}
`);

/*-----------------------------------------------*/


/*-------JS Objects as Funnction Leveraging Deconstruction---------------*/
const user ={
    name: 'Alberto',
    email: 'Ortizalberto259@gmail.com'
}

const renderUser =({ name, email }) =>{
    console.log(`${name}: ${email}`)
}

renderUser(user);
/*----------------------------------------------------------------------*/

/*----------Spread Operator------------*/
//Combining Arrays
let shoppingCart = [345, 375, 756, 562, 123];
let newItems = [98, 124];

shoppingCart.push(...newItems);
console.log(shoppingCart);

//Copying Arrays
const oldShoppingCart = [345, 375, 765, 123];
const updatedCart = [...oldShoppingCart];
updatedCart.push(5);
console.log(updatedCart);
console.log(oldShoppingCart);
/*---------------------------------------*/

/*--------Math Operations-----------*/
const orderTotal = [1,3,1,10,2,3];//... Spreads out the number makeing
console.log(Math.max(...orderTotal)); // them their own integers

const {starter, closer, ...relievers} = {
    starter: 'Verlander',
    closer: 'Giles',
    relief_1: 'Morton',
    relied_2: 'Gregerson'
}
console.log(starter);
console.log(closer);
console.log(relievers);
/*---------------------------------------------------*/


/*-----------------Adding Default Objects-----------------------*/
const blog ={
    title: "My great post",
    summary: "Summary of the past"
}

const openGraphMetadata = ({title, summary = "A DailySmarty Post"}) => {
    console.log(`
    Title: ${title}
    Summary: ${summary}
    `)
}
openGraphMetadata(blog);
/*--------------------------------------------------------------*/

/*--------Object Oriented Programming---------*/
class Instructor{
    constructor({name, role = 'assistant'}){
        this.name = name;
        this.role = role;
    }
    renderDetails(){
        console.log(`${this.name}: ${this.role}`);
    }
    static helloWorld(){
        console.log('Hi There');
    }
    static canTeach(instructor){
        return (instructor.role === 'classroom');
    }
}
Instructor.helloWorld();
const jon = new Instructor({name: 'Jon Snow'});
console.log(
    `${jon.name} can teach: ${Instructor.canTeach(jon)}`
);
const brayden = new Instructor({name: 'brayden', role: 'classroom'});
console.log(
    `${brayden.name} can teach: ${Instructor.canTeach(brayden)}`
);
jon.renderDetails();
brayden .renderDetails();
/*---------------------------------------------------------*/


/*----------------JavaScript Promises-----------------*/
let sleepyGreeting = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('---------------------');
    }, 2000);

    setTimeout(() => {
        reject(Error('To sleepy...'))
    }, 2000);
})

sleepyGreeting
    .then(data => {   //then do everything in the code block
    console.log(data); //data is just the 'hello' string
})
    .catch(err =>{
        console.error(err);
    });
/*-----------------------------------------------------*/


/*----------Communicate with APIs--------*/
/*console.log('Starting fetch call');
const postsPromise = fetch('https://api.dailysmarty.com/posts');
console.log('After fetch is call');
console.log(postsPromise);
console.log('After promgram has run')

postsPromise
    .then(data => data.json())
    .then(data => {
        data.posts.forEach((item) => {
            console.log(item.title);
        });
    })
    .catch((err) => {
        console.log(err);
    })*/
/*--------------------------------------------------------------------*/


/*-------------Group Promises Together--------------------------*/
const greeting = new Promise((resolve, reject) => {
    resolve('Hi there');
    reject('Oops, bad greeting');
});

const updateAccount = new Promise((resolve, reject) =>{
    resolve("Updating login...");
    reject('Error updating account with login');
});

const loginActivites = Promise.all([greeting, updateAccount]);
console.log(loginActivites);
loginActivites.then(res => {
    res.forEach(activity =>{
        console.log(activity);
    });
});
/*---------------------------------------------------------------*/

/*-------Async and Await JS---------*/ //Adding Closures
const newLogin = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve('User logged in....');
        }, 2000);
    });
}

const newupdateAccount = (() =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve('updating last login...')
        },2000);
    });
});
//comment is witout closure
async function newLoginActivites(newLogin, newupdateAccount){ //async fnction newLoginActivities()
    const returnLogin = await newLogin;//const returnLogin = await newLogin();
    console.log(returnLogin);

    const returnUpdatedAccount = await newupdateAccount;//const returnUpdatedAccount();
    console.log(returnUpdatedAccount);
}
newLoginActivites(newLogin(), newupdateAccount());//newLoginActivites();
/*-----------------------------------------------------*/


