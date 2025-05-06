const mongoose = require('mongoose');

async function connectMongo() {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log('Conectado com sucesso ao banco de dados.');
	} catch (e) {
		console.log(
			`Um erro ocorreu ao se conectar ao banco de dados: ${e.message}`,
		);
		process.exit(1);
	}
}

module.exports = connectMongo;
