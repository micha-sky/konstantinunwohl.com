# Konstantin Unwohl

Website of the musician Konstantin Unwohl — [unwohl.com](https://unwohl.com)

Built with [Gatsby](https://www.gatsbyjs.com/) and Tailwind CSS.

## Development

Requires **Node 20** (see `.nvmrc` — the build crashes on Node 22+ due to a native dependency).

```sh
npm install
npm run develop   # dev server at http://localhost:8000
npm run build     # production build into public/
npm run format    # prettier
```

## Content

Content lives in `content/` as markdown; each folder is a collection with its own template and URL prefix:

- `content/blog/` → `/blog/<name>/` — news posts, also shown on the home page and in the RSS feed
- `content/lyrics/` → `/lyrics/<name>/` — one file per release, `## `-headings become the tracklist
- `content/konzerte/` → `/konzerte/<name>/` — concert announcements

[![wakatime](https://wakatime.com/badge/user/b27c7656-7380-455e-8c42-3dc22c1bd6ab/project/018e09e9-458b-4632-b395-92cf2af79475.svg)](https://wakatime.com/badge/user/b27c7656-7380-455e-8c42-3dc22c1bd6ab/project/018e09e9-458b-4632-b395-92cf2af79475)
