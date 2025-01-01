'use client';

import { useEffect, useState } from 'react';
import styled from './styles.module.scss';
import { useUserStore } from '@store';
import { FeedbackProps } from '@types';
import { FeedbackCard } from '../feedbackCard';

import { CutomerFeedbackCard } from '@components';

// TODO 추후 수정 요망
// 한 페이지에 몇 개의 아이템을 보여줄지 여부
const itemsToShow = 5;
// 몇 개의 페이지 선택 버튼을 보여줄지 여부
const pagesToShow = 5;

// 피드백 리스트
// 현재는 문제가 없지만 추후 피드백 개수가 많아지면 초기 응답 속도가 느려지는 문제가 있음
// 추후 리팩토링 때 페이지네이션을 프론트에서 처리하는 것이 아니라 백엔드에서 처리할 필요가 있음
// express 내부에서 캐싱을 통해 처리하면 문제는 없어보임
export function List({
  feedback = [],
  token,
}: {
  feedback: FeedbackProps[] | [];
  token: string;
}) {
  const { getUserType } = useUserStore();
  const type = getUserType(token);
  const [page, setPage] = useState<number>(0);
  const [pagination, setPagination] = useState<number>(0);

  console.log('feedback', feedback);

  const maxPage = Math.floor(feedback.length / itemsToShow);
  const maxPagination = Math.floor(maxPage / pagesToShow);

  const onClickPage = (page: number) => {
    setPage(page);
  };

  const onClickPrev = () => {
    setPagination((prev) => prev - 1);
  };

  const onClickNext = () => {
    setPagination((prev) => prev + 1);
  };

  useEffect(() => {
    setPage(pagination * itemsToShow);
  }, [pagination]);

  const paginationButtons = Array.from({ length: pagesToShow }, (_, idx) => {
    const nowPage = pagination * pagesToShow + idx;

    if (nowPage > maxPage) return null;

    return (
      <div key={idx}>
        <button
          className={`${styled.page_button} ${page === nowPage && styled.selected}`}
          onClick={() => onClickPage(nowPage)}>
          {nowPage + 1}
        </button>
      </div>
    );
  });

  return (
    <div className={styled.wrap}>
      {type === 'instructor' && (
        <div className={styled.text}>
          <div className={styled.title}>이전 기록</div>
          <div>시간 순으로 수강생에게 남긴 기록을 확인할 수 있습니다.</div>
        </div>
      )}
      <div className={styled.container}>
        <div className={styled.list}>
          {feedback
            .slice(page * itemsToShow, (page + 1) * itemsToShow)
            .map((item, idx) => (
              <div key={idx}>
                <FeedbackCard feedback={item} />
              </div>
            ))}
        </div>
        <div className={styled.page}>
          {pagination > 0 && (
            <button className={styled.move_button} onClick={onClickPrev}>
              {'<'}
            </button>
          )}
          {paginationButtons}
          {pagination < maxPagination && (
            <button className={styled.move_button} onClick={onClickNext}>
              {'>'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
