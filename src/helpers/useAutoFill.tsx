import { useEffect, useRef } from 'react';
import Trie from './Trie';

type IUseAutoFillProps = {
  input: string,
  dictionary: string[],
};

const useAutoFill = ({
  input,
  dictionary,
}: IUseAutoFillProps) => {
  const { current } = useRef({
    wordTrie: new Trie([], true),
    charTrie: new Trie([], false),
  });

  useEffect(() => {
    if (dictionary && dictionary.length) {
      current.wordTrie = new Trie(dictionary, true);
      current.charTrie = new Trie(dictionary, false);
    }
  }, [JSON.stringify(dictionary)]);
  // As dictionary is an array object, the === operator in useEffect checking will always return false as references are different

  if (dictionary && dictionary.length && input && input.length) {
    const lastCharIsSpace = input[input.length - 1] === ' ';
    const words = input.trim().split(' ');
    const lastWord = words[words.length - 1];
    const wordSearchResult = words.length && words[0] && current.wordTrie.search(words);
    return wordSearchResult ?
      `${input[input.length - 1] === ' ' ? '' : ' '}${wordSearchResult}` : // add space if predict before space
      (!lastCharIsSpace && lastWord && current.charTrie.search(lastWord)); // charTrie only need to search for last (current) one
  }

  return '';
};

export default useAutoFill;
