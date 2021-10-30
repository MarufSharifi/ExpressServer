import { Request, Response } from "express";
import { get, controller, post, bodyValidator } from "./decorators";

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

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;
    if (email && password && email == "hi@hi.com" && password === "pass") {
      // make the person loge in
      req.session = { loggedIn: true };
      // redirect to home
      res.redirect("/");
    }
  }
}
