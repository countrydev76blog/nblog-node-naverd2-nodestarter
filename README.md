## 프로젝트 만들기

> 링크 : https://d2.naver.com/helloworld/2564557

### Git 생성하기
```bash
## 원격 저장소 생성
$ echo "# nblog-node-naverd2-nodestarter" >> README.md
$ git init
$ git add .
$ git commit -m "first commit"

## 원격 저장소 추가
$ git remote add origin https://github.com/countrydev76blog/nblog-node-naverd2-nodestarter.git
$ git push -u origin master
$ git remote -v
```

### Node.js와 Yarn 설치
```bash
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
$ nvm install 10.15.3
$ node -v && npm -v
$ npm install yarn -g
$ yarn init
```

### 프로젝트 생성
```bash
$ yarn init
```

### package.json 파일과 패키지 관리
```bash
$ yarn add node-fetch axios

```

### 프로젝트 공유
```bash
$ echo "node_modules/" > .gitignore
$ git add .
$ git checkout -b issue/1
$ git commit -m 'Create project with Yarn'
$ git push -u origin issue/1
```

### Jest로 테스트 환경 설정하기
```bash
## jest 설치
$ yarn add jest --dev

## test 파일 생성
$ mkdir __tests__ lib
$ touch __tests__/github.test.js

## teset script 추가
$ vim package.json
# "scripts": {
#   "test": "jest",
# }

## test 실행
$ yarn test
```

### Travis CI를 활용해 리뷰 환경 개선하기
...

### Travis CI를 활용한 테스트 자동화
...

### 애플리케이션의 설정 정보 관리
```bash
$ yarn add dotenv joi
$ vim .env
  ACCESS_TOKEN=7e3255f86269b6961a6f011ac7b546869b4e2315  
```

### Node.js 버전 유지
```bash
$ vim package.json
#  "engines": {
#    "node": ">=10.15.3",
#  }
$ echo "10.15.3" > .nvmrc
$ git add .
$ nvm use
$ git commit -m 'Add .nvmrc to maintain the same Node.js LTS version'
```

## 참고 사이트

- 메인
  - [none]()
- 블로그
  - [간단하게 구축해 보는 JavaScript 개발 환경](https://d2.naver.com/helloworld/2564557)
  - [github api 사용방법](https://taetaetae.github.io/2017/03/02/github-api/)