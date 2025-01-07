'use client';

import styled from './feedbackDetail.module.scss';

import Send from '@assets/send.svg';
import Calendar from '@assets/calendar.svg';
import UserTypeIndividual from '@assets/user_type_individual.svg';

import { HistoryBackHeader } from '@components';
import { useEffect, useState } from 'react';
import { getFeedbackDetail } from '@apis';
import { FeedbackInfo, Members } from '@/_types/typeFeedback';
import { useParams } from 'next/navigation';

export default function FeedbackDetail() {
  const { id } = useParams();

  const [feedbackInfo, setFeedbackInfo] = useState<FeedbackInfo>();
  const [feedbackTarget, setFeedbackTarget] = useState<Members[]>([]);
  const [feedbackCreatedAt, setFeedbackCreatedAt] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: any = await getFeedbackDetail(id as string);
        setFeedbackInfo(data?.feedback[0]);
        setFeedbackTarget(data?.feedbackTargetList);

        const formattedDate = new Date(data?.feedback[0]?.feedbackCreatedAt)
          .toISOString()
          .slice(0, 10)
          .replace(/-/g, '.');
        setFeedbackCreatedAt(formattedDate);
      } catch {}
    };
    fetchData();
  }, [id]);

  return (
    <>
      <HistoryBackHeader
        title="피드백 기록 보기"
        additionalLink="/"
        additionalContent="수정하기"
      />
      <div className={styled.detail_container}>
        <div className={styled.feedback_date}>
          <span className={styled.icon}>
            <Send />
          </span>
          <p>{feedbackCreatedAt} 전송된 피드백</p>
        </div>
        <div className={styled.detail_title}>
          <p>피드백 기준일</p>
        </div>
        <div className={styled.detail_content}>
          <span className={styled.detail_icon}>
            <Calendar />
          </span>
          <p>{feedbackInfo?.feedbackDate}</p>
        </div>
        <div className={styled.detail_title}>
          <p>피드백 대상</p>
        </div>
        <div className={styled.detail_content}>
          <span className={styled.detail_icon}>
            <UserTypeIndividual />
          </span>
          {/* TODO: 대상이 여러명일 때 클릭하면 리스트 보이도록 하기 */}
          <p>
            {feedbackTarget.length > 1
              ? `${feedbackTarget[0]?.memberNickname} 외 ${feedbackTarget.length} 명`
              : `${feedbackTarget[0]?.memberNickname}`}
          </p>
        </div>
        <div>
          {feedbackInfo?.images && feedbackInfo.images.length > 0 && (
            <div className={styled.detail_title}>
              <p>첨부 파일</p>
              <div className={styled.detail_photo}>
                {/* TODO: 이미지 클릭 시 확대 처리 */}
                {(feedbackInfo?.images || []).map((image, index) => {
                  return (
                    <div
                      key={index}
                      className={styled.preview_item}
                      style={{
                        backgroundImage: `url(${image.imagePath})`,
                        width: '100px',
                        height: '100px',
                        backgroundSize: 'cover',
                      }}></div>
                  );
                })}
                <div className={styled.photo}></div>
                <div className={styled.photo}></div>
              </div>
            </div>
          )}
        </div>
        {feedbackInfo?.feedbackLink && (
          <div>
            <div className={styled.detail_title}>
              <p>첨부 링크</p>
            </div>
            <div className={styled.detail_content}>
              {/* TODO: 이미지 넣기 */}
              <p>{feedbackInfo?.feedbackLink}</p>
            </div>
          </div>
        )}
        <div className={styled.detail_title}>
          <p>피드백</p>
        </div>
        <div className={styled.detail_content}>
          <p>{feedbackInfo?.feedbackContent}</p>
        </div>
      </div>
    </>
  );
}
