import * as dao from "./dao.js";
export default function UserRoutes(app) {
    const createUser = async (req, res) => { };
    const findAllUsers = async (req, res) => { 
        const users = await dao.findAllUsers();
        res.json(users);
    };
    const findUserById = async (req, res) => {
        const userId = req.params.userId;
        const user = await dao.findUserById(userId);
        res.json(user);
     };
    const findUserByUsername = async (req, res) => { };
    const findUserByCredentials = async (req, res) => { };
    const updateUser = async (req, res) => { };
    const deleteUser = async (req, res) => { };
    const signin = async (req, res) => { };
    const signout = async (req, res) => { };
    const signup = async (req, res) => { };
    const profile = async (req, res) => { };

    app.post("/api/users", createUser);
    app.get("/api/users", findAllUsers);
    app.get("/api/users/:userId", findUserById);
    app.delete("/api/users/:userId", deleteUser);
    app.put("/api/users/:userId", updateUser);
    app.post("/api/users/signin", signin);
    app.post("/api/users/signout", signout);
    app.post("/api/users/signup", signup);
    app.post("/api/users/profile", profile);
}
