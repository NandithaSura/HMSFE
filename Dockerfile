FROM node:16-slim

# Set working directory
WORKDIR /app

# Copy only package files first for caching
COPY package*.json ./

# Install dependencies
RUN npm install

# 🔧 Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy remaining source code
COPY . .

# Build the Angular app
RUN npm run build

# Expose the port (optional)
EXPOSE 3000

# Start the app (optional)
CMD ["npm", "start"]
