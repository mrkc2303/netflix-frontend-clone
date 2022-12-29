import React, { useState } from 'react'
import { Icon } from '@iconify/react';

function FaqCard({question, desc, closed}) {

  const [classToggle, setClassToggle] = useState('closed');
  const [isClosed, setIsClosed] = useState(closed);

  function open() {
    if(isClosed === false) {
      setClassToggle('closed');
      setIsClosed(true);
    } else {
      setClassToggle('open');
      setIsClosed(false);
    }
  } 

  return (
    <>
      <div className="faqCard" onClick={() => open()}>
        <span>{question}</span>
        {isClosed ? (
        <Icon icon="fluent-mdl2:calculator-addition" />
        ): (
          <Icon icon="radix-icons:cross-1" />
        )}
      </div>
      <div className={`faqAnswer ${classToggle}`}>
        <span>{desc}</span>
      </div>
    </>
  )
}

export default FaqCard;