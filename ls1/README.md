<!--
1- Scope:
        - global
        - function
        - block scope:

    1. Sự khác biệt nhé giữa let, const và var
        * scope (Phạm vị)
            var -> global
            const, let: function, block

        * assignment
            const: không thể re-assign
            let và var là có thể

        * hoisting
            var có thể sử dụng trước khi khai báo
            let, const

2- ES6:

- map((element, index, array) => { /* … */ }) creates a new array

- filter((element, index, array) => { /* … */ })
  + ex: const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

        const result = words.filter(word => word.length > 6);

- reduce((accumulator, currentValue, currentIndex, array) => { /* … */ }, initialValue)
  + ex: const array1 = [1, 2, 3, 4];
        const initialValue = 0;
        const sumWithInitial = array1.reduce((previousValue, currentValue) => previousValue + currentValue,initialValue);

- some(function(value, index, arr), this)
    + ex: const ages = [3, 10, 18, 20];

            ages.some(checkAdult);
            function checkAdult(age) {
            return age > 18;
            }


 -->
