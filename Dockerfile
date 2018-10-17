FROM node:10-alpine
EXPOSE 3000
ARG CIRCLE_SHA1=none
ARG CIRCLE_TAG=none
ENV CIRCLE_SHA1=$CIRCLE_SHA1
ENV CIRCLE_TAG=$CIRCLE_TAG
WORKDIR /www
COPY . /www/
RUN echo -e "commit: $CIRCLE_SHA1\ntag: $CIRCLE_TAG" > ./version.txt
RUN yarn install --production \
    && yarn run build
CMD ["yarn", "start", "--", "-p", "3000"]

