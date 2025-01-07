'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

import { useUserStore } from '@store';

import styled from './feedbackTypeButton.module.scss';
import { getMyProfile } from '@apis';

export function FeedbackTypeButton({ token }: { token: string }) {
  const router = useRouter();
  const [userType, setUserType] = useState<string | null>(null);

  useEffect(() => {
    const getUserType = async () => {
      const type = (await getMyProfile()).data.data.userType;
      setUserType(type);
    };
    getUserType();
  }, [token]);

  const handleIndividualClick = (feedbackType: string) => {
    router.push(`feedback/create/${feedbackType}`);
  };

  return (
    <>
      {
        // mounted &&
        userType === 'instructor' && (
          <div className={styled.button_box}>
            {/* personal */}
            <button onClick={() => handleIndividualClick('person')}>
              <p className={styled.button_title}>
                <span>개별</span>
                <br />
                피드백 남기기
              </p>
              <p className={styled.button_desc}>개인 작성에 유용합니다.</p>
            </button>
            {/* grouop */}
            <button onClick={() => handleIndividualClick('class')}>
              <p className={styled.button_title}>
                <span>반별</span>
                <br />
                피드백 남기기
              </p>
              <p className={styled.button_desc}>단체 작성에 유용합니다.</p>
            </button>
          </div>
        )
      }
    </>
  );
}
