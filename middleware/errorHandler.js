
// Global error handler
app.use((err, req, res, next) => {
    console.error(err.message);

    if (err instanceof SyntaxError) {
        return res.status(400).json({
            message: "Invalid JSON format"
        });
    }

    res.status(err.status || 500).json({
        message: err.message || "Internal Server Error"
    });
});

module.exports = errorHandler;