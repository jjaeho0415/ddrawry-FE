import BigButton from '@components/buttons/BigButton';
import DefaultHeader from '@components/header/DefaultHeader';
import EmptyImage from '@components/modals/EmptyImage';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate('/');
  }
  return (
    <div className="flex flex-col h-screen">
      <DefaultHeader title="띠로리" />
      <div className="flex flex-grow gap-[130px] flex-col  items-center justify-center">
        <div>
          <EmptyImage message="Error - 어떤 에러가 발생했어요." />
        </div>
        <BigButton text="홈으로 이동하기" color="blue" onClick={handleGoHome} />
      </div>
    </div>
  );
};

export default ErrorPage;
