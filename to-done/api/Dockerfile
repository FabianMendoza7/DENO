FROM denoland/deno:1.36.1

RUN deno install -qAf --unstable https://deno.land/x/denon/denon.ts

WORKDIR /usr/app

COPY deps.ts .
RUN deno cache deps.ts

ADD . .

ENTRYPOINT ["root/deno/bin/denon"]