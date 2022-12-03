# adws
Angelisium docker web service.

## What is it?
As a web  developer, I work  with some  different  technologies  and it would be
tedious to  configure a  server able  to host  all the  personal projects  of my
portfolio.

This is why I  opted for docker to  containerize my  projects to  simplify their
production  release. I also  use this  configuration in  local with  a dedicated
domain to limit the number of tools needed to develop my project.

## How to get started

The   first  step   to  get started  is  to   create   the  `/server/acme.json`,
`/server/.env`  and `/server/users.yaml` files. The  `/server/acme.json` file is
an empty file intended to receive information for certification with cloudflare.
Make   sure   you   create   it  with   read   and   write   permissions,   with
`touch /server/acme.json && chmod 600 /server/acme.json` on  UNIX  for  example.
For the `/server/users.yaml`, please refer to the [documentation](
https://www.authelia.com/reference/guides/passwords/#yaml-format).   
Example :
```yaml
users:
  Angelisium:
    displayname: "Angelisium"
    # this example password is Admin
    password: "$argon2id$v=19$m=65536,t=3,p=2$c2laYXY3WlYwRGlkSWI1cA$jFNUEaXu8A2ZaO+W6m+Ct6B5db0girQZxnYlBWj/zHU"
    email: angelisium@daum.net
    groups: []
```
Finally, the `/server/.env` file must contain the following information:
```py
################################################################################
# Proxy configuration                                                          #
################################################################################

# Your domain name, e.g. mywebsite.local
# PS : As  the  TLS  certificates  allocation  is under  the  responsibility  of
# cloudflare,  the  domain  must  be  registered/associate  on  your  cloudflarе
# account. (no TLS support for domains .tk, .ml, .ga, .cf and .gq)
DOMAIN=

################################################################################
# Cloudflarе configuration                                                     #
################################################################################

# To retrieve or generate certificates via cloudflare. CF_API_KEY is your global
# API key and CF_API_EMAIL is your mail used for cloudlfare.
# See : https://dash.cloudflare.com/profile/api-tokens
CF_API_KEY=
CF_API_EMAIL=

################################################################################
# Authelia configuration                                                       #
################################################################################

# For  those secrets,  it's strongly  recommended  to use a random  alphanumeric
# string of 64 characters or more.
# See : https://www.authelia.com/configuration/miscellaneous/introduction/#jwt_secret
# See : https://www.authelia.com/configuration/session/introduction/#secret
# See : https://www.authelia.com/configuration/storage/introduction/#encryption_key
AUTHELIA_JWT_SECRET=
AUTHELIA_SESSION_SECRET=
AUTHELIA_STORAGE_ENCRYPTION_KEY=

################################################################################
# MongoDB configuration                                                        #
################################################################################

# For  the  password,  it's strongly  recommended  to use a random  alphanumeric
# string of 64 characters or more.
MONGODB_USERNAME=
MONGODB_PASSWORD=

################################################################################
# MariaDB configuration                                                        #
################################################################################

# For  the  password,  it's strongly  recommended  to use a random  alphanumeric
# string of 64 characters or more.
MARIADB_PASSWORD=
```
> **Note**   
> Of course, omitting all or part of this configuration will result in unexpected behavior.

Once the configuration is done, just start the containers with `docker-compose up -d` and enjoy ❤

### Soon :
 - add "how to expose a web project" explanations.
 - explain how start sample (eg samplephp => `docker-compose up --build -d`)
 - ???
