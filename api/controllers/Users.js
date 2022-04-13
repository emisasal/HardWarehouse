const UserServices = require("../services/User");
const { genPassword } = require("../lib/passwordUtils");

class UserController {
  static async register(req, res) {
    const { error, response } = await UserServices.register(req.body);

    if (error) return res.status(400).send(response);
    res.status(201).send(response);
  }

  static login(req, res) {
    return res.send(req.user);
  }

  static logout(req, res) {
    req.logout();
    return res.sendStatus(200);
  }

  static async updateUser(req, res) {
    const { id } = req.params;
    req.body.admin = false
    const { error, response } = await UserServices.updateUser(id, req.body);

    if (error) return res.status(400).send(response);
    return res.status(201).send(response);
  }

  static me(req, res) {
    if (req.user) return res.send(req.user);
    return res.sendStatus(404);
  }
  static async updateAdmin(req, res) {
    const { id } = req.params;

    if(req.body.admin === false && req.user.id === id) return res.sendStatus(401) // El mismo usuario no puede rebocarse permisos

    const { error, response } = await UserServices.updateAdmin(id, req.body);

    if (error) return res.status(400).send(response);
    return res.status(201).send(response);
  }
  static async deleteUser(req, res) {
    const { id } = req.params;
    const { error, response } = await UserServices.deleteUser(id);

    if (error) return res.status(404).send(response);
    return res.status(202).send(response);
  }
  static async getUsers(req, res) {
    const { error, response } = await UserServices.getUsers();

    if (error) return res.status(404).send(response);
    return res.status(200).send(response);
  }
}

module.exports = UserController;
