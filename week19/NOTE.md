学习笔记

持续集成

githook: .git/hooks
    pre-commit: lint
    pre-push: check

eslint
    npm install --save-dev eslint
    npx eslint --init  
    npm eslint <js-file>

无头浏览器 headless
    chrome --headless --dump-dom about:blank
    puppeteer