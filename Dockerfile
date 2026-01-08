## Dockerfile
# syntax=docker/dockerfile:1

################################
## BUILD ENVIRONMENT ###########
################################

FROM node:22-alpine3.20 AS build


WORKDIR /app
COPY package*.json package-lock.json ./
RUN npm ci

RUN --mount=type=secret,id=vite_api_base_url \
    export VITE_API_BASE_URL="$(cat /run/secrets/vite_api_base_url)" && \

COPY ./ ./
RUN npm run build


################################
#### PRODUCTION ENVIRONMENT ####
################################
FROM nginx:stable AS production
COPY --from=build /app/nginx /etc/nginx/conf.d
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
