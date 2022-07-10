/* 

# CHALLENGE

Write function typeValidation that will accept two parameters: variable and type and check if type of variable is matching type. 
Return true if types match or false if not.
 
# EXAMPLE

typeValidation(42, "number") // true
typeValidation("42", "number") // false

*/

// ANSWER

function typeValidation(variable, type) {
    return typeof (variable) === type ? true : false
}