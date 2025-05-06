require('dotenv').config();
const path = require('path');

const express = require('express');
const productRoutes = require('./routes/productRoutes');
const { errorMiddleware } = require('./middlewares/globalMiddlewares');
const connectMongo = require('./db');

connectMongo();

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.set('views', path.resolve(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

app.use('/api', productRoutes);
app.use(errorMiddleware);

app.listen(process.env.SERVER_PORT, () => {
	console.log(
		`Servidor inicializado com sucesso na porta ${process.env.SERVER_PORT}.`,
	);
});
