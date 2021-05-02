FROM node:16-alpine3.11
COPY server.js /workspace/server.js
CMD ["node","/workspace/server.js"]