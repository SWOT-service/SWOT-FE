'use client';

import React, { useRef, useState } from 'react';
import Link from '@assets/link.svg';
import styled from './feedbackConfirm.module.scss';
import { Header, ProfileCard } from '@components';
import { feedbackStore } from '@/_store/feedback';
import { searchClassStore } from '@store';
import { postFeedback } from '@apis';
import { useRouter } from 'next/navigation';

export default function ClassFeedbackConfirm() {
  // @ts-ignore
  const { selectedList, resetClassData } = searchClassStore();
  const { formDataState } = feedbackStore();
  const target = JSON.parse(formDataState.target || '[]');

  const totalMembersCount = target.reduce(
    (acc: any, cur: any) => acc + (cur.members?.length || 0),
    0,
  );
  //   const target = JSON.parse(formDataState.target);
  const [checked, setChecked] = useState(false);

  const router = useRouter();

  const handleSubmit = async () => {
    // @ts-ignore
    const userIds = (target[0]?.members || []).map((el) => Number(el.userId));
    const lectureId = Number(target[0].lectureId);
    const target_users = [
      {
        lectureId,
        userIds,
      },
    ];

    try {
      const data = await postFeedback(
        formDataState,
        formDataState.type,
        target_users,
      );

      resetClassData();
      router.replace('/feedback');
      window.location.href = '/feedback';
    } catch (error) {
      console.error(error);
    }
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <Header title="작성 내역 확인" />
      <div className={styled.confirm_msg}>
        전송된 피드백은 삭제가 불가능하니 <br />
        내용을 다시 한번 확인해 주세요.
      </div>
      <div className={styled.divide}></div>

      <div className={styled.feedback_confirm}>
        <div className={styled.feedback_content}>
          <div className={`${styled.wrap} ${styled.row}`}>
            <div className={styled.title}>
              선택 수강생: <span>{totalMembersCount}</span>
            </div>
            <div className={styled.tag}>
              {target?.length > 0 ? (
                <div>{target[0]?.lectureTitle} 전체</div>
              ) : (
                <div>{target[0]?.lectureTitle}</div>
              )}
              {/* 혜빈  데이터 형식 같아지면 수정할 것 */}
              <ProfileCard
                customers={target[0]?.members || []}
                width={20}
                height={20}
                count={false}
              />
              {/* {formDataState.type === 'personal' ? (
                <Profile
                  customers={target}
                  width={20}
                  height={20}
                  count={false}
                />
              ) : (
                <Profile
                  customers={target.members}
                  width={20}
                  height={20}
                  count={false}
                />
              )} */}
            </div>
          </div>
          <div className={styled.wrap}>
            <div className={styled.title}>
              피드백 기준 수업일: <span>{formDataState.date}</span>
            </div>
          </div>
          <div className={`${styled.wrap} ${styled.col}`}>
            <div className={styled.title}>
              첨부 파일:
              <span>
                {formDataState.file ? formDataState.fileURL.length : 0}개
              </span>
            </div>
            <div className={styled.preview_wrapper}>
              {/* @ts-ignore */}
              {(formDataState.fileURL || []).map((preview, index) => {
                // console.log(Object.keys(preview));
                return (
                  <div
                    key={index}
                    className={styled.preview_item}
                    style={{
                      backgroundImage: `url(${preview})`,
                      width: '100px',
                      height: '100px',
                      backgroundSize: 'cover',
                    }}></div>
                );
              })}
            </div>
          </div>

          <div className={`${styled.wrap} ${styled.col}`}>
            <div className={styled.title}>
              첨부 링크: <span>{formDataState.link == '' ? '0' : 1} 개</span>
            </div>
            <div className={`${styled.link}`}>
              <Link className={styled.svg} />
              <input type="text" defaultValue={formDataState.link} />
              {/* <LinkInput name='confirm_link' link={ formDataState.link} /> */}
            </div>
          </div>

          <div className={`${styled.wrap} ${styled.col}`}>
            <div className={styled.title}>피드백 내용:</div>
            <textarea
              placeholder="피드백을 입력해주세요"
              className={styled.feedback_area}
              defaultValue={formDataState.content}></textarea>
          </div>
        </div>
        <div className={styled.confirm_check}>
          <input
            id="confirm"
            type="checkbox"
            checked={checked}
            onChange={(e) => (checked ? setChecked(false) : setChecked(true))}
          />
          <label htmlFor="confirm">작성 내용을 확인했습니다.</label>
        </div>
      </div>

      <div className={styled.btn_wrap}>
        <button onClick={handleBack} className={styled.back_btn}>
          돌아가기
        </button>
        <button
          className={styled.submit_btn}
          disabled={!checked}
          onClick={handleSubmit}>
          전송
        </button>
      </div>
    </>
  );
}
