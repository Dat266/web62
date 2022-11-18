    1. Scope:
        - global scope
        - function scope
        - block scope:

    2. Sự khác biệt giữa let, const và var
        * scope :
            var -> global
            const, let: function, block

        * assignment :
            const: không thể re-assign
            let và var là có thể

        * hoisting :
            var có thể sử dụng trước khi khai báo
            let, const thì không hỗ trợ
    3. es6
        - map "tra về giá trị là 1 mảng mới"
        - filter "lọc tất cả các phần tử theo điều kiện"
        - find  "tìm phần tử thỏa mãn điều kiện"
        - reduce((prev, curr, currIndex, arr) =>{},initalValue)
        - for each "lọc qua tất cả phần tử trong mảng"
                ex: const ages = [131, 183, 182, 130];

                ages.forEach((item) => console.log(item));
        - some  "chỉ cần có 1 đk thỏa mản => true"
                ex: const ages = [3, 10, 18, 20];

                ages.some(checkAdult);
                function checkAdult(age) {
                  return age > 18;
                }
        - every "tất cả phải thỏa mãn điều kiện"

        const ages = [11, 10, 11, 10];

            const a = ages.every(checkAdult);
            function checkAdult(age) {
                return age < 18;
            }

            console.log(a);

        - findIndex "tìm index của 1 phần tử theo điều kiện"
                ex: const ages = [11, 183, 182, 10];

                const a = ages.findIndex(checkAdult);
                function checkAdult(age) {
                    return age > 18;
                }

                console.log(a);
        - for with index (for(let i = 0; i < nums.lentgh ; i++)) "lọc qua các phần tử mảng"
        - for in "lọc qua key của mảng or obj"
        - for of "lọc qua value của mảng or obj"

    4. Spread operator (...)

        ex: const a = [1,2,3]//[1,2,3]
            const b= [ 4,5,6]//[4,5,6]
            const c = [...a,...b]//[1,2,3,4,5,6]

    5. String template (literals string)

        ex: const person = "human"
            const age = 15

            console.log(`anh này tên là ${person} và anh ấy ${age}`)

    6. Arrow function
        - Có 3 loại function:
            + Declaration function
                ex: function sum(a,b) {
                    return a - b
                }
                    sum(5,2)
            + Arrow function
                ex: const sum = (a,b) => {
                    return a + b;
                }
                sum(3,4)
            + Expression function(anonymous function)
                ex:
                var showDomain = function()
                {
                    alert('Học Javascript tại Freetuts.net');
                };
                showDomain();
        - Sự khác biệt giữa các loại function:

                - khác nhau:
                    + Declaration thì hoisting
                    còn expresstion và arrow không hỗ trợ

                    + Arrow function không có context ("this")


        - Tại sao ES6 arrow function  const getSum = (nums) => {} (bind, call, this)

    7. Destructuring
        - Object destructuring
            ex: const person = {
                name: "tuan dat",
                age: 26,
            };

                const { name, age } = person;
                console.log("name: ", person.name);
                console.log("age: ", age);

        - Array destructuring

            ex: const lists = [1, 2, 3, 4, 5];
                const [...list] = lists;
                console.log(list);

    8. Promise: cách tự tạo 1 cái promise, mỗi cái promise có state, cách handle promise => async/await, event-loop
    let myPromise = new Promise(function(myResolve, myReject) {
        // "Producing Code" (May take some time)

          myResolve(); // when successful
          myReject();  // when error
        });

        // "Consuming Code" (Must wait for a fulfilled Promise)
        myPromise.then(
          function(value) { /* code if successful */ },
          function(error) { /* code if some error */ }


    - có 3 trạng thái:
            + pending
            + fulfilled
            + rejectd


    - async làm cho hàm trả về một Lời hứa

    await làm cho một chức năng chờ một Promise



    9. Class

    - không hỗ trợ hoisting
    - có 2 phương thức : "getter và setter"
    - supper() và contructer
    - tính kế thừa(extend)

    class Person {
        constructor(name, age) {
            this.name= name;
            this.age= age;
        }
        show() {
            return `Tối tên là: ${this.name}, ${this.age} tuổi`;
        }
    }
