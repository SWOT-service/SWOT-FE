'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

import { useUserStore } from '@store';

import styled from './feedbackTypeButton.module.scss';

export function FeedbackTypeButton({ token }: { token: string }) {
  const router = useRouter();
  const { getUserType } = useUserStore();
  const [userType, setUserType] = useState<string | null>(null);

  useEffect(() => {
    const type = getUserType(token);
    setUserType(type);
  }, [token, getUserType]);

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
            <button
              onClick={() => handleIndividualClick('person')}
              className={styled.button_person}>
              <p className={styled.button_title}>
                <span>개별</span>
                <br />
                피드백 남기기
              </p>
              <p className={styled.button_desc}>개인 작성에 유용합니다.</p>
            </button>
            {/* grouop */}
            <button
              onClick={() => handleIndividualClick('class')}
              className={styled.button_class}>
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
