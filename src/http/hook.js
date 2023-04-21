function dateinit(i) {
  const data= new Date(i)
  // let startTime = data.getFullYear() + '-' + (data.getMonth() + 1) + '-' + data.getDate()
  let startTime = `${data.getFullYear()}-${(data.getMonth() + 1)}-${data.getDate()}`

  return startTime;
}





module.exports = {
  dateinit,
}