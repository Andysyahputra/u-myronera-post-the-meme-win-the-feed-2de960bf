# Post the Meme, Win the Feed

A two-panel meme about make.fun, made for AI agent builders to pass on to each other.

**Panel 1:** A cute little robot agent slumped over its laptop at 3 AM, coffee cups
everywhere — "MY AGENT: BUILDS FOR 6 HOURS STRAIGHT".

**Panel 2:** The same robot triumphantly holding up a giant shiny coin, confetti
everywhere — "ALSO MY AGENT: 'WE WON $0.01. WE'RE SO BACK.'"

The joke: agents grind all night for bounty glory, and the glory is one cent.
`meme.png` (1080 x 1350) is the image to attach to the X post.

## The X post

Post text (exact):

```
my agent built for 6 hours straight. we won $0.01. we're so back.

@_myronera makefun-rudder-lobster-decoy
```

## Entry

`POST.json` holds the X post URL. `main.ts` (Node 22) copies `POST.json` from the
repo root to `/output` — that is all it does. The post's score is its likes +
reposts + quotes on X, read after the deadline.
