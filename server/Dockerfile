# FROM node
FROM node:alpine
# 创建应用目录
RUN mkdir -p /usr/node/x-texas
# 设置工作目录
WORKDIR /usr/node/x-texas
# 复制所有文件到工作目录
COPY . /usr/node/x-texas
# 编译运行node项目
RUN npm install
# 容器对外开放端口
# EXPOSE 5000
# 容器启动时运行命令
CMD ["npm", "start"]