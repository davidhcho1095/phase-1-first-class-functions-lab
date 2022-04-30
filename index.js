const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const firstTwoDrivers = ['Antonia', 'Nuru']
const lastTwoDrivers = ['Amari', 'Mo']
const returnFirstTwoDrivers = function(){
    return firstTwoDrivers;
}
const returnLastTwoDrivers = function(){
    return lastTwoDrivers;
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(fare){
    return function(){
        return fare*5
    }
}
function fareDoubler(fare){
    return fare*2
    }
function fareTripler(fare){
    return fare*3
}
function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers){
     return returnFirstTwoDrivers(arrayOfDrivers);
 }