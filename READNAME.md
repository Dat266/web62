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
        - map
        - filter
        - reduce
        - some
        - every
        - find
        - findIndex
        - for with index (for(let i = 0; i < nums.lentgh ; i++))
        - for in
        - for of
        - for each

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
            + Expression function
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

                    + Từ khóa this không hỗ trợ trong arrow


        - Tại sao ES6 arrow function  const getSum = (nums) => {} (bind, call, this)

    7. Destructuring
        - Object destructuring
        - Array destructuring

    8. Promise: cách tự tạo 1 cái promise, mỗi cái promise có state, cách handle promise => async/await, event-loop
    9. Class
