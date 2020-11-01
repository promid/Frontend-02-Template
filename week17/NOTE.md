学习笔记

测试框架
mocha, jest

mocha 默认用require语法, 不支持ES6的import和export,所以需要引入babel;
npm install -save-dev @babel/core @babel/register --registry=https://registry.npmjs.org/
./node_modules/.bin/mocha --require @babel/register

code coverage
istanbuljs/nyc