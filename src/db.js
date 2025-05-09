const mongoose = require('mongoose');

async function connectMongo() {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log('Conectado com sucesso ao banco de dados.');
	} catch (e) {
		// Logando o erro levantado antes do encerramento da aplicação:
		console.log(
			`Um erro ocorreu ao se conectar ao banco de dados: ${e.message}`,
		);
		/*
			Forçando o encerramento da aplicação com determinado código (0 - sucesso, 1 - erro genérico):
			
			Obs.: O método exit, através do código informado, apenas informa ao sistema operacional ou ao preocesso chamado como a execução terminou. Logo, sempre é recomendado logarmos a mensagem de erro antes de encerrarmos a aplicação.
		*/
		process.exit(1);
	}
}

module.exports = connectMongo;
