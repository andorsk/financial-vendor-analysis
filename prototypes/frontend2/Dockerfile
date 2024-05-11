# Stage 1: Build the React app
FROM node:lts as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV REACT_APP_API_URL=https://ybr-api.andor.us/
RUN npm run build
# Stage 2: Create the production image
FROM nginx:latest
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
ENV REACT_APP_API_URL=https://ybr-api.andor.us/
CMD ["nginx", "-g", "daemon off;"]
