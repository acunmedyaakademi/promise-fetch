const box = document.querySelector('.box');


//CALL BACK HELL
// setTimeout(() => {
//     box.classList.add('bigger')
//     setTimeout(() => {
//         box.classList.add('circle')
//         setTimeout(() => {
//             box.classList.add('move')
//             setTimeout(() => {
//                 box.classList.add('colored')
//                 setTimeout(() => {
//                     box.classList.remove('colored')
//                     setTimeout(() => {
//                         box.classList.remove('move')
//                         setTimeout(() => {
//                             box.classList.remove('circle')
//                         },500)
//                     },500)
//                 },500)
//             },500)
//         },500)
//     },500)
// },500)


// PROMİSE 
// new Promise ((resolve,reject) => {
//     //işlem bitmiş ve başarılı ise 
//     resolve()
     
//     //işlem hatalı ise 
//     reject()


//     //resolve içine yazılanı bir sonraki aşamada alabiliriz ve reject içine yazılanı da bir sonraki aşamada alabiliriz
// })

// .then(data => {
//     data.web='https://.com'
//     return data
// })
// .then (data => {
//     console.log(data);
// })
// .catch(data => {
//     console.log(data);
// })

// .finally(() => console.log('Bitti'))


//uzun işlem
//Bu kod parçası, wait adlı bir fonksiyon tanımlar. Bu fonksiyon, belirtilen süre kadar bekledikten sonra bir Promise döndürür. Promise, belirtilen süre sona erdiğinde çözümlenir (resolve edilir). Bu tür bir yapı, özellikle asenkron işlemleri yönetmek ve sıralamak için yaygın olarak kullanılır.
// function wait (ms){
//     return new Promise (function (resolve){
//         return setTimeout(resolve,ms)
//     })
// }

//Bu kod parçası, tek bir satırda bir asenkron işlemi yönetmek için bir Promise döndüren bir fonksiyon tanımlar. Yani, wait fonksiyonunu çağırdığınızda, belirtilen süre kadar bekleyecek ve sonra Promise'inizi çözecektir.
// const wait = ms => new Promise(resolve => setTimeout(resolve,ms))

// wait(500)
// .then(() => {
//     box.classList.add('bigger')
//     return wait (500)
// })

// .then(() => {
//     box.classList.add('circle')
//     return wait (500)
// })

// .then(() => {
//     box.classList.add('move')
//     return wait(500)
// })

// .then(() => {
//     box.classList.add('colored')
//     return wait (500)
// })

// .then(() => {
//     box.classList.remove('colored')
//     return wait(500)
// })

// .then(() => {
//     box.classList.remove('move')
//     return wait(500)
// })

// .then(() => {
//     box.classList.remove('circle')
//     return wait(500)
// })

// .then(() => {
//     box.classList.remove('bigger')
//     return wait(500)
// })

// .finally(() => console.log('bitti!'))


///PROMİSE KISACA

// new Promise((resolve, reject) => {
//     resolve()
//     reject()
// }) .then() .catch() .finally()


///Hocanın verdiği promise örneği

// const probis = new Promise((resolve ,reject) => {
//     let question = prompt ('yes mi no mu?');
//     if(question === 'yes') {
//         resolve('evet dedi')
//     } else {
//         reject('hayır dedi')
//     }
// });

