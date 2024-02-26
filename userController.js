const registerUser = (req, res) => {
    const { name, email, password } = req.body;


    res.json({
        success: true,
        message: "User registered successfully",
    
    });
};

module.exports = { registerUser };
