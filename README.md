# adws
Angelisium docker web service.

## Quick Start
 - edit `/traefik/.env` with your own cloudflare info
 - edit `/traefik/compose.yaml` [L14](./traefik/compose.yaml#L14) with your own domain
 - edit `/traefik/traefik.yaml` [L30](./traefik/traefik.yaml#L30), [L32](./traefik/traefik.yaml#L32) and [L57](./traefik/traefik.yaml#L57) with your own domain
 - edit `/traefik/traefik.yaml` [L42](./traefik/traefik.yaml#L42) with your own mail
 - start traefik with the `docker-compose up -d` command in `traefik` folder.

## Soon
 - add tcp or ssh proxy to `providers.docker.endpoint`
 - setup authelia to privatize the dashboard
 - Mieux rédiger le readme ;-;.