# Dockerizing MongoDB: Dockerfile for building MongoDB images
# Based on alpine:edge, installs MongoDB following the instructions from:


FROM       alpine:edge

MAINTAINER David Fonollosa <dafobe@gmail.com>

# Installation:
# Import MongoDB public GPG key AND create a MongoDB list file
RUN \
apk add --no-cache mongodb && \
rm /usr/bin/mongoperf

VOLUME /data/db
EXPOSE 27017 28017

COPY run.sh /root
ENTRYPOINT [ "/root/run.sh" ]
CMD [ "mongod" ]