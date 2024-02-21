console.log('Promise start')
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Preparing data...')
    const backendData = {
      server: 'aws',
      port: 2000,
      status: 'working',
    }
    resolve(backendData)
  }, 2000)
})

p.then(data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.modified = true
      resolve(data)
    }, 3000)
  })
})
  .then(clientData => {
    console.log('Data received', clientData)
    clientData.fromPromise = true
    return clientData
  })
  .then(data => {
    console.log('modified', data)
  })
