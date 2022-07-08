import React, { useRef } from 'react';
import { Input } from 'antd';

export interface TextAreaProps {
  setValue: Function;
}

function TextArea({ setValue }: TextAreaProps) {
  console.debug('- TextArea')

  const timeoutId = useRef(0);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = event;

    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = window.setTimeout(() => {
      setValue(value);
    }, 300);
  };

  return (
    <Input.TextArea
      placeholder='분석할 내용을 입력하세요.'
      size='large'
      maxLength={1000}
      autoSize={{ minRows: 5, maxRows: 10 }}
      onChange={handleChange}
      allowClear
      showCount
    />
  );
}

export default React.memo(TextArea);
