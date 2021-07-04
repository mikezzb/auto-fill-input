import { ITrieNode } from '../interfaces';

export default class TrieNode implements ITrieNode {
  val: string;

  children: Map<string, TrieNode>;

  ended: boolean;

  constructor(val: string) {
    this.val = val;
    this.children = new Map();
    this.ended = false;
  }
}
