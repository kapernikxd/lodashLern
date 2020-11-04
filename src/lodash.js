// import _ from 'lodash'




//************************* EACH **************************** *//

// let arr = [1, 2, 3, 4, 5, 6]

// arr.forEach(element => console.log(element))



// let obj = {
//     1: {
//         name: 'name1',
//         data: 'name1.1'
//     },
//     2: {
//         name: 'name2'
//     },
//     3: {
//         name: 'name3'
//     }
// }

// _.each(obj, function(value) {
//     console.log(value);
//   });


//   _.each(obj, function(value,key) {
//     console.log(value, key);
//   });

// let arrName = []
// _.each(obj, function(value,key) {
//     arrName.push(value.name)

//   });

//   console.log("Names", arrName)



//************************* MAP **************************** *//


// let newArr = [1, 2, 3, 4, 5, 6].map(function(item){
//     return item
// })

// console.log('newArr', newArr)

// let newLodashArr = _.map([1, 2, 3, 4, 5, 6], function(item){
//     return item
// })

// console.log('newLodashArr', newLodashArr)


// let users = [
//     {   
//         id: 1,
//         name: 'name1',
//         data: '02.10'
//     },
//     {
//         id: 2,
//         name: 'name2',
//         data: '02.10'
//     },
//     {
//         id: 3,
//         name: 'name3',
//         data: '03.10'
//     }
// ]



// let newLodashArr = _.map(users, function(item){
//     return item.name
// })

// let newLodashArr = _.map(users, "name")

// console.log('newLodashArr', newLodashArr)



// let usersObj = {
//     1: {   
//         id: 1,
//         name: 'name1',
//         data: '02.10'
//     },
//     2: {
//         id: 2,
//         name: 'name2',
//         data: '02.10'
//     },
//     3: {
//         id: 3,
//         name: 'name3',
//         data: '03.10'
//     }
// }


// let newLodashArr = _.map(usersObj, function(user, id){
//     return user
// })

// console.log('newLodashArr', newLodashArr)



// let users = [
//     {   
//         id: 1,
//         first_name: 'name1',
//         data: '02.10',
//         status: 'active'
//     },
//     {
//         id: 2,
//         first_name: 'name2',
//         data: '02.10',
//         status: 'inactive'
//     },
//     {
//         id: 3,
//         first_name: 'name3',
//         data: '03.10',
//         status: 'active'
//     }
// ]

// let normalizeUsers = function(users) {
//     return _.map(users, function(user, id){
//         return  {
//             id: user.id,
//             firstName: user.first_name,
//             data: user.data,
//             isActive: user.status === 'active' ? true : false
//         }
//     })

// }

// var result = normalizeUsers(users)
// console.log(result)




//************************* FILTER **************************** *//


// let result = _.filter([1, 2, 3, 4, 5], function(item){
//     return item < 3
// })

// console.log('result,', result);


// let users = [
//     {   
//         id: 1,
//         first_name: 'name1',
//         data: '02.10',
//         status: 'active'
//     },
//     {
//         id: 2,
//         first_name: 'name2',
//         data: '02.10',
//         status: 'inactive'
//     },
//     {
//         id: 3,
//         first_name: 'name3',
//         data: '03.10',
//         status: 'active'
//     }
// ]

// let result = _.filter(users, function(user){
//         return user.first_name == 'name3'
//     })  
// console.log('result,', result);


// let products = {
//     1: {
//         name: 'Milk',
//         price: 100
//     },
//     2: {
//         name: 'Meat',
//         price: 300
//     },
//     3: {
//         name: 'Bread',
//         price: 600
//     }
// }

// let result = _.filter(products, function(product){
//         return product.price > 150
//     })

// console.log('result,', result);



// let products = [
//     {   
//         id: 1,
//         name: 'Milk',
//         price: 100
//     },
//     {   
//         id: 2,
//         name: 'Meat',
//         price: 300
//     },
//     {
//         id: 3,
//         name: 'Bread',
//         price: 600
//     }
// ]


// let searchProducts = function(products, searchValue) {
//     return _.filter(products, function(product){
//         // return product.name.toLowerCase().includes(searchValue.toLowerCase())
//         return _.includes(product.name.toLowerCase(), searchValue.toLowerCase()) 
//     })
// }

// var result = searchProducts(products, 'mil')
// console.log('result,', result);



//************************* FIND **************************** *//

//  => ВЫВОДИТ ЭЛЕМЕНТ !
//  => ВЫВОДИТ ПЕРВЫЙ ПОПАВШИЙСЯ !



// let users = [
//     {   
//         id: 1,
//         first_name: 'name1',
//         data: '02.10',
//         status: 'active'
//     },
//     {
//         id: 2,
//         first_name: 'name2',
//         data: '02.10',
//         status: 'inactive'
//     },
//     {
//         id: 3,
//         first_name: 'name3',
//         data: '03.10',
//         status: 'active'
//     }
// ]

// let result = _.find(users, function(user){
//         return user.first_name == 'name2'
//     })

// console.log('result,', result);



//************************* УДАЛЕНИЕ ЭЛЕМЕНТОВ **************************** *//


// let arr = [1, 2, 3, 4, 5]

// var result = _.without(arr, 1);  // <!-- метод иммутабельный

// console.log("arr", arr)
// console.log("result ", result )


// let users = [
//     {   
//         id: 1,
//         first_name: 'name1',
//         data: '02.10',
//         status: 'active'
//     },
//     {
//         id: 2,
//         first_name: 'name2',
//         data: '02.10',
//         status: 'inactive'
//     },
//     {
//         id: 3,
//         first_name: 'name3',
//         data: '03.10',
//         status: 'active'
//     }
// ]

// let result = _.reject(users, function(user){
//         return user.id == 2
//     })

// let result = _.reject(users, ['id', 1])  // <!-- короткая запись
// console.log('result,', result);



// let users = [
//     {   
//         id: 1,
//         name: 'name1',
//         likes: 110,
//         isActive: true
//     },
//     {
//         id: 2,
//         name: 'name2',
//         likes: 300,
//         isActive: false
//     },
//     {
//         id: 3,
//         name: 'name3',
//         likes: 500,
//         isActive: true
//     }
// ]


// let getPopularUsers = function (users) {
//    return _.filter(users, function(users){
//        return users.likes > 100 && users.isActive
//    })
// }

// let result = getPopularUsers(users)
// console.log(result)




//************************* EVERY SOME **************************** *//


// var users = [
//     { 'user': 'barney', 'active': true },
//     { 'user': 'fred',   'active': false }
//   ];
   
//   // The `_.matches` iteratee shorthand.
//   let result = _.some(users, [ 'user', 'barney']);
//   console.log(result)
  
//   let result2 =  _.every(users, { 'user': 'barney', 'active': false });
//   console.log(result) //true



//************************* СОРТИРОВКА **************************** *//

// let users = [
//     {   
//         id: 1,
//         name: 'name1',
//         likes: 110,
//         isActive: true
//     },
//     {
//         id: 2,
//         name: 'name2',
//         likes: 500,
//         isActive: false
//     },
//     {
//         id: 3,
//         name: 'name3',
//         likes: 500,
//         isActive: true
//     }
// ]

// // let result = users.sort(function(user1, user2){
// //     return user1.likes > user2.likes ? -1 : 1
// // })



// // let result = _.orderBy(users, ['likes']) //по возрастанию
// let result = _.orderBy(users, ['likes', 'isActive'], ['desc', 'desc']) //по убыванию
//   console.log(result) 


//************************* ГРУППИРОВКА **************************** *//


// let users = [
//     {   
//         id: 1,
//         name: 'name1',
//         likes: 110,
//         isActive: true
//     },
//     {
//         id: 2,
//         name: 'name2',
//         likes: 500,
//         isActive: false
//     },
//     {
//         id: 3,
//         name: 'name3',
//         likes: 500,
//         isActive: true
//     }
// ]

// let groupBy = function(list, prop) {
//     return list.reduce(function (aggregator, element){
//         // console.log('fff', aggregator, element, element[prop],  aggregator[element[prop]])

//         (aggregator[element[prop]] = aggregator[element[prop]] || []).push(element)
//         return aggregator
//     }, {})

// }
// // let result = groupBy(users, "isActive")



// // let result = _.groupBy(users, 'isActive')  // <!- lodash
// let result = _.groupBy(users, function(user){
//     return user.isActive
// })  // <!- lodash
// console.log(result) 


//************************* chain **************************** *//

// let users = [
//     {   
//         id: 1,
//         name: 'name1',
//         age: 40,
//         isActive: true
//     },
//     {
//         id: 2,
//         name: 'name2',
//         age: 30,
//         isActive: false
//     },
//     {
//         id: 3,
//         name: 'name3',
//         age: 18,
//         isActive: true
//     }
// ]


// let getYongestUserMessage = function(users) {
//     return _.chain(users)
//     .filter('isActive')
//     .orderBy(['age'])
//     // .map(user => user.name + ' is ' + user.age)
//     .head() //<!-- метод первый юзер
//     .value();

//     // let activeUsers = _.filter(users, 'isActive')
//     // let sortedActiveUsers = _.orderBy(activeUsers, ['age'])
//     // var firsUser = sortedActiveUsers[0];
//     // return firsUser.name + ' is ' + firsUser.age
// }


// let result = getYongestUserMessage(users)
// console.log(result) 



//************************* Получаем части массива **************************** *//



let arr = [1, 2, 3, 4, 5];


console.log(_.chain(arr).head().value());
console.log(_.head(arr)); // первый элменет 1


console.log(_.tail(arr)); // весь массив кроме первого => [2, 3, 4, 5]



let string = 'hello';

// let result = _.chain(string).tail().join("").value() // => ello
// let result = _.chain(string).join("").last().value()   // => o
let result = _.chain(string).initial().join("").value()   // => hell
console.log(result); // => ello
