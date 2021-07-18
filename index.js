const Copier = require('./copier')
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

const cli = async () => {

	console.log("This is a basic demonstration of the Copier class as specified in the coding challenge \n")
	
	await util.delay(2000)
	
	// undefined 
	console.log("When initialized with no argument the copier defaults to undefined as demonstrated here: \n", copierUndefined, "\n")
	
	await util.delay(3000)
	// get
	console.log("The get method returns a promise which waits for a second then returns the original argument \n")
	console.log("As you can see it returns a promise: \n", copierString.get())
	await util.delay(2000)
	const getString = await copierString.get()
	console.log("The result is: ", getString, "\n")
	
	await util.delay(4000)
	// copy
	console.log("The copy method will copy what you pass in and will deep copy objects, a couple of examples are below \n")
	await util.delay(4000)
	const copyArray = copierArr.copy()
	console.log("An array: src:", arr, " copied: ", copyArray, "\n")
	await util.delay(4000)
	const copyObject = copierObj.copy()
	console.log("An object: src: ", obj, " copied: ", copyObject, "\n")
	await util.delay(5000)
	console.log("src === copied ", obj === copyObject, "\n")
	
	await util.delay(3000)
	//delete
	console.log("The last method returns a promise, waits for two seconds then throws an error:")
	await util.delay(2000)
	console.log("Thanks for the opportunity!")
	copierNum.delete()
	}
	cli()