import { Request, Response } from "express";
import { get, controller } from "./decorators";

@controller("/auth")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response) {
    res.send(`
          <form method="POST">
              <div>
                  <label>Email</label>
                  <input name="email"/>
              </div>
              <div>
                  <label>Password</label>
                  <input name="password" type="password"/>
              </div>
              <button type="submit">Submit</button>
          </form>
        `);
  }
}
