'use client';

import { FeedbackTargetListModalProps } from '@types';
import styled from './feedbackTargetListModal.module.scss';
import { ModalBody } from '@components';

export function FeedbackTargetListModal({
  feedbackTargetList,
  hideModal,
}: FeedbackTargetListModalProps) {
  return (
    <ModalBody hideModal={hideModal}>
      <div className={styled.modal}>
        <div className={styled.modal_title}>
          <div className={styled.member_list_title}>
            <p>피드백 대상</p>
          </div>
          <div className={styled.member_list_wrapper}>
            {feedbackTargetList.map((target, index) => (
              <li key={index} className={styled.member_list_item}>
                <div
                  className={styled.profileImg}
                  style={{
                    backgroundImage: `url(${target.memberProfileImage})`,
                  }}></div>
                <div>{target.memberName}</div>
                <div>{target.memberProfileImage}</div>
              </li>
            ))}
          </div>
        </div>
      </div>
    </ModalBody>
  );
}
