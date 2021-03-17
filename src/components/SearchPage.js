import React, { useState, useEffect } from 'react';

import './SearchPage.css';
import useAutoFill from '../helpers/useAutoFill';

const SearchPage = () => {
  const [input, setInput] = useState('');
  const [currentWord, setCurrentWord] = useState('');
  const [sentences, setSentences] = useState(new Set());

  const autofillWord = useAutoFill(
    currentWord,
    [...sentences],
    false,
  );

  const autofillSentence = useAutoFill(
    input.split(' '),
    [...sentences],
    true,
  );

  const onSubmit = e => {
    e.preventDefault();
    setSentences(new Set(sentences).add(input.trim())) // remove possible trailing space at end
    setInput('');
    console.log(input);
  }

  useEffect(() => {
    const words = input.split(' ');
    setCurrentWord(words[words.length - 1]);
  }, [input])
  

  useEffect(() => {
    console.log(`Word autofill: ${autofillWord}`);
  }, [autofillWord])

  useEffect(() => {
    console.log(`Sentence autofill: ${autofillSentence}`);
  }, [autofillSentence])

  useEffect(() => {
    console.log(`Current sentences: ${[...sentences]}\nCount: ${sentences.length}`);
  }, [sentences])

  return (
    <div className="search-page">
      <form onSubmit={onSubmit}>
        <div className="input-container">
          <input
            className="input"
            value={input}
            onChange={e => setInput(e.target.value)}
            type="text"
            placeholder="输入文本..."
            required
          />
        </div>
        <input className="submit-button" type="submit" value="提交" />
      </form>
    </div>
  )
}

export default SearchPage;
