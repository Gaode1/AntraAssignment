let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
}
var sum = 0
for (e in salaries) {
  sum += salaries[e]
}
console.log(sum)

let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
}

function multipluNumeric(obj) {
  for (let v in obj) {
    if (typeof obj[v] === 'number') {
      obj[v] *= 2
    }
  }
}
multipluNumeric(menu)
console.log(menu)

function checkEmailId(str) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
  return emailRegex.test(str)
}
console.log(checkEmailId('123@c.c'))

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 3) + '...'
  }
  return str
}
console.log(truncate("What I'd like to tell on this topic is:", 20))
console.log(truncate('Hi everyone!', 20))

//5
var array = ['James', 'Brennie']
array.push('Robert')
console.log(array)
array[Math.floor(array.length / 2)] = 'Calvin'
console.log(array)
let fisrtItem = array.shift()
console.log(fisrtItem)
console.log(array)
array.unshift('Rose', 'Regal')
console.log(array)
