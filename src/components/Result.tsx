import React from 'react';
import { Result } from 'antd';
import {
  SmileOutlined,
  FrownOutlined,
  MessageOutlined,
  LoadingOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { classify } from '../lib/utils';
import { HomeState } from '../reducers/home';

export interface ResultProps {
  state: HomeState;
  query?: string;
}

function Result_({ state: { result, status }, query }: ResultProps) {
  let icon: JSX.Element = <></>;
  let text: string = '';

  if (status === 'idle') {
    icon = <MessageOutlined />;
    text = '입력한 문장을 바탕으로 감정을 분석해줍니다.';
  } else if (status === 'loading') {
    icon = <LoadingOutlined />;
    text = '잠시만 기다려주세요.';
  } else if (status === 'failed') {
    icon = <ExclamationCircleOutlined />;
    text = '서버가 아파요. ㅠㅠ';
  } else {
    const { type, perc } = classify(result);
    const percFormat = (perc * 100).toFixed(2);
    const typeFormat = ['부정', '긍정'][type];
    icon = type ? <SmileOutlined /> : <FrownOutlined />;
    text = `${percFormat}% 확률로 ${typeFormat}입니다.`;
  }

  return <Result icon={icon} title={text} />;
}

export default React.memo(Result_);
