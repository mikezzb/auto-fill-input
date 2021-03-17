import TrieNode from './TrieNode';

export class Trie {
  constructor(dictionary, isSentence) {
    this.isSentence = isSentence;
    this.root = new TrieNode('');
    if(dictionary.length) {
      dictionary.forEach(str => {
        const words = str.split(' ');
        if(isSentence){
          this.insert(words); // a node is a word, a path consists words nodes
        }
        else{
          words.forEach(word => this.insert(word)); // a node is a char, a path consits char nodes.
        }
      })
    }
  }

  insert(path) {
    let currNode = this.root;
    for(const nodeValue of path){
      const node = currNode.children.get(nodeValue) || new TrieNode(nodeValue);
      currNode.children.set(nodeValue, node);
      currNode = node;
    }
    currNode.ended = true;
  }

  search(word) {
    let currNode = this.root;
    for(const str of word){
      currNode = currNode.children.get(str);
      if (!currNode) {
        return false;
      }
    }
    return this.getDownwardPath(currNode, '');
  }

  getDownwardPath(root, currStr) {
    if(root.ended){
      return currStr;
    }
    for (const val of root.children.keys()) {
      if (root.children.has(val)) {
        const next = root.children.get(val);
        return this.getDownwardPath(
          next,
          this.isSentence ? `${currStr} ${val}` : currStr + val
        );
      }
    }
  }

}

export default Trie;
