// TODO: Be aware of time complexity of operations in objects and arrays.

// set in javascript
// 1. set is a collection of unique values.
// 2. set is an unordered collection of values/insertion order is not maintained.
const mySet = new Set([{ name: "John", age: 30, city: "New York" }]);
mySet.add({ country: "USA" });
// mySet.delete({ country: "USA" });
// mySet.has(4); //returns false
// mySet.size(); //returns 3
// mySet.clear(); //clears the set

// map in javascript
// 1. map is a collection of key-value pairs.
// 2. map is an unordered collection of key-value pairs.
const myMap = new Map([
    [1, "John"],
    [2, "Jane"],
    [3, "Jack"],
]);
myMap.set(4, "Jane");
// myMap.delete(4);
// myMap.has(4); //returns false
// myMap.size(); //returns 4
// myMap.clear(); //clears the map
// get the value of a key
// myMap.get(1); //returns "John"
// get the key and value of a map using for of loop
for (let [key, value] of myMap) {
    console.log(key, value);
}
