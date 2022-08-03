import React from 'react';
import { Result, Input } from 'antd';
import {
  MessageOutlined,
  LoadingOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { SumState } from '../reducers/sum';

export interface SumResultProps {
  state: SumState;
  query?: string;
}

function SumResult({ state: { result, status }, query }: SumResultProps) {
  let icon: JSX.Element = <></>;
  let text: string = '';

  if (status === 'idle') {
    icon = <MessageOutlined />;
    text = '입력한 문장을 바탕으로 적당히 요약해줍니다.';
  } else if (status === 'loading') {
    icon = <LoadingOutlined />;
    text = '잠시만 기다려주세요.';
  } else if (status === 'failed') {
    icon = <ExclamationCircleOutlined />;
    text = '서버가 아파요. ㅠㅠ';
  } else {
    return (
      <Input.TextArea
        value={result.join(' ')}
        autoSize={{ minRows: 8, maxRows: 50 }}
        readOnly
        showCount
        bordered={false}
      />
    );
  }

  return <Result icon={icon} title={text} />;
}

export default React.memo(SumResult);
