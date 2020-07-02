/*
https://nodejs.org/api/process.html#process_process_stdin
https://nodejs.org/api/process.html#process_process_stdout

stdin y stdout nos permite la interacción del usuario con la consola
*/


var stdin = process.stdin,
	stdout = process.stdout,
	person = {
		name : null,
		age : 0
	}

function saveAge(age)
{
	person.age = age

	if( person.age >= 18 )
	{
		stdout.write( person.name + ' es mayor de edad, tiene ' + person.age + ' años\n' )
	}
	else
	{
		stdout.write( person.name + ' es menor de edad, tiene ' + person.age + ' años\n' )
	}

	process.exit() //método que permite acabar el proceso
}

function saveName(name)
{
	person.name = name

	// Vuelvo a preguntar
	var question = 'Hola ' + person.name + ' ¿Cuántos años tienes?'
	
	quiz(question, saveAge)
}

function quiz(question, callback)
{
	stdin.resume() //me permite leer lo que el usuario escribe en la terminal
	stdout.write( question + ': ' )
    
    //once lo ejecuta una sola vez a diferencia de 'on'
	stdin.once('data', function (res){
		callback( res.toString().trim() ) //método trim quita las comillas a las cadenas de texto
	})
}

stdin.setEncoding('utf8') //todo lo que entre en la terminal de comando se codifica en utf-8
quiz('¿Cómo te llamas?', saveName)