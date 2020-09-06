let $ = Symbol("$");

class Trie {
    constructor() {
        this.root = Object.create(null);
    }

    insert(word) {
        let node = this.root;
        for (let c of word) {
            if (!node[c]) {
                node[c] = Object.create(null);
            }
            node = node[c];
        }

        if (!($ in node)) {
            node[$] = 0;
        }
        node[$]++;
    }

    most(max) {

        let wordList = [];

        let vist = (node, word) => {

            if (node[$] && node[$] >= max) {
                wordList.push({
                    word: word,
                    max: node[$]
                });
            }

            for (let p in node) {
                vist(node[p], word + p)
            }
        }

        vist(this.root, "");
        return wordList;
    }
}