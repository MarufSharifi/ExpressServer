import { Router, Request, Response, NextFunction } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send("not permitted");
}

const router = Router();

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

router.get("/protected", requireAuth, (req: Request, res: Response) => {
  res.send("Welcome to protected route Logged In user");
});

export { router };
