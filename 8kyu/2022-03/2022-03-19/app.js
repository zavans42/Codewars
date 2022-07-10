/* CHALLENGE

Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. 
It should default to English if the language is not in the database, or in the event of an invalid input.

*/


/* EXAMPLE

greet('english') // 'Welcome
greet('dutch') // 'Welkom
greet('IP_ADDRESS_INVALID') // 'Welcome

*/

// ANSWER

const greet = lang => {
    return lang === 'english' ? 'Welcome' :
        lang === 'czech' ? 'Vitejte' :
        lang === 'danish' ? 'Velkomst' :
        lang === 'dutch' ? 'Welkom' :
        lang === 'estonian' ? 'Tere tulemast' :
        lang === 'finnish' ? 'Tervetuloa' :
        lang === 'flemish' ? 'Welgekomen' :
        lang === 'french' ? 'Bienvenue' :
        lang === 'german' ? 'Willkommen' :
        lang === 'irish' ? 'Failte' :
        lang === 'italian' ? 'Benvenuto' :
        lang === 'latvian' ? 'Gaidits' :
        lang === 'lithuanian' ? 'Laukiamas' :
        lang === 'polish' ? 'Witamy' :
        lang === 'spanish' ? 'Bienvenido' :
        lang === 'swedish' ? 'Valkommen' :
        lang === 'welsh' ? 'Croeso' :
        'Welcome'
}