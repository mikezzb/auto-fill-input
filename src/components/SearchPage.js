import React, { useState, useEffect, useRef } from 'react';

import './SearchPage.css';
import useAutoFill from '../helpers/useAutoFill';
import List from './List';

const TAB_KEY_CODE = 9;

const SearchPage = () => {
  const [input, setInput] = useState('');
  const [currentWord, setCurrentWord] = useState('');
  const [sentences, setSentences] = useState(new Set());
  const [autoFillText, setAutoFillText] = useState('');

  const inputRef = useRef({});

  const autoFillWord = useAutoFill(
    currentWord,
    [...sentences],
    false,
  );

  const autoFillSentence = useAutoFill(
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

  const handleKeydDown = e => {
    if (e.keyCode === TAB_KEY_CODE && autoFillText){
      e.preventDefault();
      setInput(x => x + autoFillText);
    }
  }

  const measureTextWidth = () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = getComputedStyle(document.body).font;
    return context.measureText(input).width;
  }

  useEffect(() => {
    const words = input.split(' ');
    setCurrentWord(words[words.length - 1]);
  }, [input])
  
  useEffect(() => {
    if(autoFillWord){
      setAutoFillText(autoFillWord);
    }
    else if(autoFillSentence){
      setAutoFillText(autoFillSentence)
    }
    else {
      setAutoFillText('');
    }
  }, [autoFillWord, autoFillSentence])

  useEffect(() => {
    console.log(`Current sentences: ${[...sentences]}\nCount: ${sentences.length}`);
  }, [sentences])

  return (
    <div className="search-page">
      <form onSubmit={onSubmit}>
        <div className="input-container">
          <input
            ref={inputRef}
            className="input"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeydDown}
            type="text"
            placeholder="输入文本..."
            required
          />
          {
            Boolean(autoFillText) &&
            <span
              className="auto-fill-hint"
              style={{
                marginLeft: `${measureTextWidth() + 13}px`,
              }}
            >
              {autoFillText}
            </span>
          }
        </div>
        <input className="submit-button" type="submit" value="提交" />
      </form>
      <List items={[...sentences]} />
    </div>
  )
}

export default SearchPage;
