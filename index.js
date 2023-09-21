function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`)
}
 const mondayWork = function (routine = "go to the office") {
    return(`This Monday, I will ${routine}.`)
}
function wrapAdjective(special = "*") {
    return function(innerparamiter = "special") {
                return(`You are ${special}${innerparamiter}${special}!`)
    }
}