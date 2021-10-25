import { Router, Request, Response } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

router.get("/login", (req: Request, res: Response) => {
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
});

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;
  if (email && password && email == "hi@hi.com" && password === "pass") {
    // make the person loge in
    req.session = { loggedIn: true };
    // redirect to home
    res.redirect("/");
  }
});

router.get("/", (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
        <div>you are Logged I</div>
        <a href="/logout">Logout</a>
      `);
  } else {
    res.send(`
    <div>you are not Logged In</div>
    <a href="/login">Log In</a>
  `);
  }
});

router.get("/logout", (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect("/");
});

export { router };
