import * as dao from "./dao.js";
export default function UserRoutes(app) {
    const createUser = async (req, res) => {
        const user = await dao.createUser(req.body);
        res.json(user);
      };    
    const findAllUsers = async (req, res) => { 
    const { role, name } = req.query;
    if (role) {
      const users = await dao.findUsersByRole(role);
      res.json(users);
      return;
    }
    if (name) {
        const users = await 
          dao.findUsersByPartialName(name);
        res.json(users);
        return;
      }  

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
    const updateUser = async (req, res) => {
            const { userId } = req.params;
            const status = await dao.updateUser(userId, req.body);
            res.json(status); 
     };
    const deleteUser = async (req, res) => {
        const status = await dao.deleteUser(req.params.userId);
        res.json(status);
     };
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
