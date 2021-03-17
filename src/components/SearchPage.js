import React, { useState, useRef } from 'react';
import './SearchPage.css';
import useAutoFill from '../helpers/useAutoFill';
import List from './List';

const TAB_KEY_CODE = 9;

const SearchPage = () => {
  const [input, setInput] = useState('');
  const [dictionary, setDictionary] = useState(new Set());

  const inputRef = useRef({});

  const autoFillWord = useAutoFill({
    input,
    dictionary: [...dictionary],
  });

  const onSubmit = e => {
    e.preventDefault();
    setDictionary(new Set(dictionary).add(input.trim())); // remove possible trailing space at end
    setInput('');
  };

  const handleKeydDown = e => {
    if (e.keyCode === TAB_KEY_CODE && autoFillWord) {
      e.preventDefault();
      setInput(x => x + autoFillWord);
    }
  };

  const measureTextWidth = () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = getComputedStyle(document.body).font;
    return context.measureText(input).width;
  };

  return (
    <div className="search-page">
      <h1 className="title">AUTO FILL INPUT</h1>
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
            Boolean(autoFillWord) &&
            <span
              className="auto-fill-hint"
              style={{
                marginLeft: `${
                  measureTextWidth() +
                  (autoFillWord[0] === ' ' ? 5 : 0)
                  /* 5 is for the length of space as needed in next word prediction */
                }px`,
              }}
            >
              {autoFillWord}
            </span>
          }
        </div>
        <input className="submit-button" type="submit" value="提交" />
      </form>
      <List items={[...dictionary].reverse()} />
    </div>
  );
};

export default SearchPage;
