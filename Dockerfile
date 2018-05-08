FROM alpine:3.7

RUN apk add --update nodejs

WORKDIR /usr/src/app

COPY entrypoint.sh /usr/bin/entrypoint.sh

RUN chmod +x /usr/bin/entrypoint.sh

EXPOSE 8000

CMD ["entrypoint.sh"]
