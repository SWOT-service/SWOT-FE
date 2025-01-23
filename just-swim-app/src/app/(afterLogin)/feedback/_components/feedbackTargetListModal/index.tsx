'use client';

import { FeedbackTargetListModalProps } from '@types';
import styled from './feedbackTargetListModal.module.scss';

export function FeedbackTargetListModal({
  feedbackTargetList,
  hideModal,
}: FeedbackTargetListModalProps) {
  return (
    <div className={styled.modal_overlay} onClick={hideModal}>
      <div className={styled.modal_content} onClick={(e) => e.stopPropagation()}>
        <h3 className={styled.modal_title}>피드백 대상 목록</h3>
        <ul className={styled.target_list}>
          {feedbackTargetList.map((target, index) => (
            <li key={index} className={styled.target_item}>
              <p>이름: {target.memberName}</p>
              <p>프로필이미지: {target.memberProfileImage}</p>
              {/* 추가 정보가 있으면 여기에 표시 */}
            </li>
          ))}
        </ul>
        <button className={styled.close_button} onClick={hideModal}>
          닫기
        </button>
      </div>
    </div>
  );
}
