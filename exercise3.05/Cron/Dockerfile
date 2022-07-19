FROM alpine:3.10
WORKDIR /app
RUN apk add --no-cache bash
COPY . .
CMD ["/bin/bash", "./cron.sh"]