# adws
Angelisium docker web service.

## Quick Start
### Windows :
 - `cd server && docker-compose exec traefik sh` then `chmod 600 /acme.json`.
 - `cd ../`
 - `copy /server/sample.env /server/.env`
 - edit the `/server/.env` file with your own proxy, cloudflare and authelia info.
 - `copy /server/users.sample.yaml /server/users.yaml`
 - edit the `/server/users.yaml` with your own info. Look at the [documentation](https://www.authelia.com/reference/guides/passwords/#passwords) to generate your own password.
 - (Optionally) delete useless files `del /server/sample.env /server/users.sample.yaml`
 - start the server services with `cd server && docker-compose up -d`
### Unix :
 - `touch /server/acme.json` and `chmod 600 /server/acme.json`
 - `cp /server/sample.env /server/.env`
 - edit the `/server/.env` file with your own proxy, cloudflare and authelia info.
 - `cp /server/users.sample.yaml /server/users.yaml`
 - edit the `/server/users.yaml` with your own info. Look at the [documentation](https://www.authelia.com/reference/guides/passwords/#passwords) to generate your own password.
 - (Optionally) delete useless files `rm /server/sample.env /server/users.sample.yaml`
 - start the server services with `cd server && docker-compose up -d`

## Soon
 - Mieux rédiger le readme ;-;.