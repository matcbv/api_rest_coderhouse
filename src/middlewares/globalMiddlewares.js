const errorMiddleware = (err, req, res, next) => {
	res.status(err.status).json({ error: err.message });
};

module.exports = { errorMiddleware };
