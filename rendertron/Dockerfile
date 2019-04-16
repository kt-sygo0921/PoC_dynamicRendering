FROM node:10.7.0

# 新規ユーザーを作成

# 環境変数を通す
ENV HOME=/home/app

# package.jsonをマウント/ユーザーappにルート読み書き権限がないため付与
WORKDIR $HOME/project/
COPY . $HOME/project/

RUN npm install
RUN npm run build
EXPOSE 8080

CMD ["npm","run", "server"]