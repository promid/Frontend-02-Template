function match(selector, element) {
    for (let c of selector) {
        if (c.match(/[a-z]|[A-Z]/) === null) {
            if (type === '#') {
                if (element.getAttribute('id') != token) {
                    return false
                }
            } else if (type === ".") {
                if (!element.getAttribute('class').includes(token)) {
                    return false;
                }
            } else {
                if (element.tagName.tolowerCaseQ != token) {
                    return false;
                }
            }
            token = type = c;
        } else {
            token += c;
        }
    }
    return true;
}

function match_class(selectors, element) {
    selectors = selectors.split(' ').reverse()
    let combinator = '';
    for (let i = 0; i < selectors.length;) {
        if (selectors[i] === '>' || selectors[i] === '+') {
            combinator = selectors[i];
            i++;
        } else {
            combinator = ''
            if (match(selectors[i], element)) {
                i++;
                if (combinator === ">") {
                    element = element.parentNode;
                } else if (combinator === 'V') {
                    element = element.previousElementSibling;
                } else {
                    element = element.parentNode;
                }
            } else {
                if (combinator != ' ') {
                    return false
                }
            }
        }
    }
    return true
}
function match(selector, element) {
    for (let c of selector) {
        if (c.match(/[a-z]|[A-Z]/) === null) {
            if (type === '#') {
                if (element.getAttribute('id') != token) {
                    return false
                }
            } else if (type === ".") {
                if (!element.getAttribute('class').includes(token)) {
                    return false;
                }
            } else {
                if (element.tagName.tolowerCaseQ != token) {
                    return false;
                }
            }
            token = type = c;
        } else {
            token += c;
        }
    }
    return true;
}

function match_class(selectors, element) {
    selectors = selectors.split(' ').reverse()
    let combinator = '';
    for (let i = 0; i < selectors.length;) {
        if (selectors[i] === '>' || selectors[i] === '+') {
            combinator = selectors[i];
            i++;
        } else {
            combinator = ''
            if (match(selectors[i], element)) {
                i++;
                if (combinator === ">") {
                    element = element.parentNode;
                } else if (combinator === 'V') {
                    element = element.previousElementSibling;
                } else {
                    element = element.parentNode;
                }
            } else {
                if (combinator != ' ') {
                    return false
                }
            }
        }
    }
    return true
}
