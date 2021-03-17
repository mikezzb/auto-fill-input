export default class TrieNode {
  constructor(val) {
    this.val = val;
    this.children = new Map();
    this.ended = false;
  };
};
