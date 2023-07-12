import User from "../modals/User.js";

export const register = async (req, res) => {
    try {
        const { name, number, email, password } = req.body;

        if (!name) return res.send("name is required")
        if (!number) return res.send("number is required")
        if (!email) return res.send("email is required")
        if (!password) return res.send("password is required")

        const isemailexist = await User.find({ email: email })
        if (isemailexist.length) return res.send("email is already present");

        const isnumberexist = await User.find({ number: number })
        if (isnumberexist.length) return res.send("number is already register");

        const user = new User({  //"User" is a schema name parameter that we given in User.js 
            name, number, email, password
        })

        const mongodb = await user.save();
        console.log(mongodb, "mongodb")
        if (mongodb) {
            return res.send("user registration successfully");
        }

    } catch (error) {
        res.send(error)
    }

}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email) return res.send("email is required");
        if (!password) return res.send("password is required");

        const user = await User.find({ email, password })

        if (user.length) {
            res.send("login successfully")
        } else {
            res.send("register first")
        }
    } catch (error) {
        res.send(error)
    }
}