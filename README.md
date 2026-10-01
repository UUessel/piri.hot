# piri.hot

The website of **Mouth on Fire: The Scoville Log**, as plain HTML files. No build step, no framework, no secrets.

| Path | What |
|---|---|
| `site/` | The pages. `privacy.html` is the privacy policy and terms of use (English and Dutch, language switch on the page). The landing page follows when it is approved. |
| `Caddyfile` | The web server settings: `/privacy` serves `site/privacy.html`, `/` sends people to `/privacy` for now, `www.piri.hot` sends people to `piri.hot`, HTTPS is automatic. |
| `docker-compose.yml` | Two containers: `web` (Caddy, ports 80 and 443) and `sync`, which pulls this repository from GitHub every five minutes so a push to `main` is live within minutes. |

The pages are generated from the approved mockups in the app repository (`MoF`, `scripts/build-site.ts`), then
pushed here. Edit the mockup there, rebuild, push; do not edit `site/` by hand.

## Running it on the server

One-time, on a server with Docker:

1. Point the DNS of `piri.hot` and `www.piri.hot` (an `A` record each) at the server's IP address. Without that,
   Caddy cannot get the certificate and the site answers only over plain `http`.
2. Make sure nothing else on the server uses ports 80 and 443.
3. Either paste `https://github.com/UUessel/piri.hot` into Hostinger's Docker Manager, or on the command line:

   ```
   git clone https://github.com/UUessel/piri.hot /opt/piri.hot
   cd /opt/piri.hot
   docker compose up -d
   ```

The `sync` container clones the repository into a shared volume on first start and pulls every five minutes after
that; `web` serves from that copy. The first start takes a minute: `web` may restart once or twice until the clone
is there, that is normal. Updating the site is a push to `main`; nothing to do on the server.

To check: `docker compose logs --tail 20 web` should show Caddy serving `piri.hot`; `https://piri.hot/privacy`
should open with a padlock.
