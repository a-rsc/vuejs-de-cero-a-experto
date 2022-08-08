const filename = '-------------file: 13-ternarios-cullcheck.js'
console.log(filename)

let firstName, lastName

console.log(`${firstName} ${lastName}`)

console.log(`${firstName || 'No firstname'} ${lastName || 'No lastname'}`)

lastName = 'Rodríguez'

console.log(`${firstName || 'No firstname'} ${lastName || 'No lastname'}`)

// ------------------------------------------------------------------------------

const isActive = true

let message = ''

if (isActive) {
    message = 'Activo'
} else {
    message = 'Inactivo'
}

console.log(message)

// ------------------------------------------------------------------------------

const msg = (isActive)
                    ? 'Activo'
                    : 'Inactivo'

console.log(msg)