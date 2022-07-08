import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Result } from 'antd';
import { ResultStatusType } from 'antd/lib/result';

interface ErrorMessageProps {
  [index: string]: string;
}

const errorMessages: ErrorMessageProps = {
  '403': 'Sorry, you are not authorized to access this page.',
  '404': 'Sorry, the page you visited does not exist.',
  '500': 'Sorry, something went wrong.',
};

export interface ErrorTemplateProps {
  status: ResultStatusType;
}

function ErrorTemplate({ status }: ErrorTemplateProps) {
  console.debug('- ErrorTemplate')

  const navigate = useNavigate();

  return (
    <Result
      status={status}
      title={status}
      subTitle={errorMessages[status]}
      extra={
        <Button
          type='primary'
          onClick={() => {
            navigate(-1);
          }}
        >
          Go back
        </Button>
      }
    />
  );
}

export default ErrorTemplate;
