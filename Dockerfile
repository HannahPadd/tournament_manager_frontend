## Dockerfile
# syntax=docker/dockerfile:1

################################
## BUILD ENVIRONMENT ###########
################################

FROM node:22-alpine3.20 AS build

ARG VITE_API_BASE_URL
ARG VITE_API_KEY

ENV VITE_API_BASE_URL=$VITE_API_BASE_URL
ENV VITE_API_KEY=$VITE_API_KEY

WORKDIR /app
COPY package*.json package-lock.json ./
RUN npm ci
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