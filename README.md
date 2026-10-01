# piri.hot

The website of **Mouth on Fire: The Scoville Log**, as plain HTML files. No build step, no framework, no secrets.

| Path | What |
|---|---|
| `site/` | The pages. `index.html` is the landing page (eight languages, language switch on the page, store buttons as "coming soon" placeholders) with `badges-draw.js`, the drawing code for Piri and the Piri medallions it needs. `privacy.html` is the privacy policy and terms of use (English and Dutch). |
| `Caddyfile` | The web server settings: `/` serves `site/index.html`, `/privacy` serves `site/privacy.html`, `www.piri.hot` sends people to `piri.hot`. HTTPS is done by Traefik in front of it. |
| `docker-compose.yml` | Two containers: `web` (Caddy, behind the server's Traefik reverse proxy, which holds ports 80 and 443 and fetches the certificate) and `sync`, which pulls this repository from GitHub every five minutes so a push to `main` is live within minutes. |

The pages are generated from the approved mockups in the app repository (`MoF`, `scripts/build-site.ts`), then
pushed here. Edit the mockup there, rebuild, push; do not edit `site/` by hand.

## Running it on the server

One-time, on a server with Docker and Traefik (network `web`, entry point `websecure`, certificate resolver `mytlschallenge`, as on the owner's VPS):

1. Point the DNS of `piri.hot` and `www.piri.hot` (an `A` record each) at the server's IP address. Without that,
   Traefik cannot get the certificate.
2. Either paste `https://github.com/UUessel/piri.hot` into Hostinger's Docker Manager, or on the command line:

   ```
   git clone https://github.com/UUessel/piri.hot /opt/piri.hot
   cd /opt/piri.hot
   docker compose up -d
   ```

The `sync` container clones the repository into a shared volume on first start and pulls every five minutes after
that; `web` serves from that copy. The first start takes a minute: `web` may restart once or twice until the clone
is there, that is normal. Updating the site is a push to `main`; nothing to do on the server.

To check: `docker compose logs --tail 20 web` should show Caddy serving on port 80; `https://piri.hot/privacy`
should open with a padlock (the certificate comes from Traefik, a minute after the first request).
