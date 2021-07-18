const Copier = require('./Copier')
const util = require('./util')

// vals
const obj = {key: "val",
				key2: ["val1", "val2", {key3: "val3"}],
				key4: {key5: "val5",
					   key6: {key7: "val7"}}}
const str = "a string"
const num = 1
const arr = [2, "array", {key: "val"}]

// copiers
const copierUndefined = new Copier()
const copierString = new Copier(str)					   
const copierNum = new Copier(num)
const copierArr = new Copier(arr)
const copierObj = new Copier(obj)

// This file demonstrates the copier methods feel free to comment out and test as needed :)

// undefined 
console.log(copierUndefined)
console.log(copierUndefined.copy())

// get 
util.asyncCall(copierString.get())
util.asyncCall(copierObj.get())


// copy
console.log(copierArr.copy())
console.log(copierUndefined.copy())
console.log(copierObj.copy())

// equality check
console.log(obj === copierObj.copy())

// delete
util.asyncCall(copierArr.delete())
util.asyncCall(copierUndefined.delete())

