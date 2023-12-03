# Phishing is too easy on 𝕏 (unfortunately)

Demo: [https://twitter.com/webeyk/status/1731073202346926367](https://twitter.com/webeyk/status/1731073202346926367)

This example may not be used for actions that violate the law or X's Terms of Service.

## What happens

Twitterbot goes to the posted link and looks at the `Location` response header to get
it's "real" URL (in case of redirects). That's why the posted URL doesn't have to be
to be the same as the URL of the OG image.

## How this enables phishing

Unfortunately, this approach enables potential phishing on X.
As a malicious actor, you could simply use an approach like the example in `/api/index.js` (shown below) to
to pretend to redirect to a URL that you do not actually redirect to.

```js
// Shows the x.ai OG image & URL in the tweet, but actually redirects to ChatGPT
app.get("/", (req, res) => {
    if (req.headers["user-agent"].includes("Twitterbot")) {
        res.setHeader("Location", "https://x.ai");

        return;
    }

    res.redirect(301, "https://chat.openai.com");
});
```
