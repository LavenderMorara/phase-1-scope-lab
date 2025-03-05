var customerName='bob';

function upperCaseCustomerName(){
    customerName=customerName.toUpperCase()
}

var bestCustomer;
function setBestCustomer(){
     bestCustomer= 'not bob' ;
}

function overwriteBestCustomer(){
    bestCustomer='maybe bob';
}
//console.log(overwriteBestCustomer())
//console.log(setBestCustomer())
const leastFavouriteCustomer='Ash';
function changeLeastFavoriteCustomer(){
    leastFavouriteCustomer='Ezra'
}