# A good function of array sortBy prop.

```
npm install arr-sort-by
```

```
import arrSortBy from 'arr-sort-by';

let arr = [
        { id: 11, name: "jerry", grade: 13 },
        { id: 6, name: "mengjie", grade: 4 },
        { id: 99, name: "jiejie", grade: 66 }
     ];
console.log(arrSortBy(arr,'grade','desc'));
console.log(arrSortBy(arr,'grade','asc'));
```
