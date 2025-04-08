
// Updating of arrays
var arr = [1, 2, 3, 5];
    arr[0] = "Sajid";

 console.log(arr);

 var a = [3, 4, 5, 6, 8];
     a[5] = "Sajid_Khan";
     console.log(a);

// Destructuring of Array
var b = ["Sajid", 23, true];
var [name, age, status] = b
document.write(name);
document.write(age);
document.write(status);

// Destructuring of an array
var d = ["a", "b", "c", "d"]
var [sajid, wajid, zia, majid] = d
document.write(sajid);
document.write(wajid);
document.write(zia);
document.write(majid);

// Cloning of an array
var c = [1, 2, 3, 4, 5]
var d = [11, 12, 13, 15]
var e = [...c, ...d]
document.write(e);

// Object-Array
var f = {
    name : "sajid",
    age : 23,
}
document.write(f.name);
document.write(f.age);

     
