const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
   var arr = new Array()
   arr = arrayItems
   var row = rowsPerPage
   var page 
   if (arr === null || arr === undefined ){
    return undefined
   }
   else if(row === null || row === undefined || row === 0){
    page = 1
    return page
   }
   else {
    page = Math.ceil(arr.length/row)
    return page
   }
}
module.exports = totalPages
