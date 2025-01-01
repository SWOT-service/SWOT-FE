import { BottomNav, UserIconHeader } from '@components';

import { getSortedFeedback } from '@apis';
import { getTokenInCookies } from '@utils';

import { FeedbackTypeButton, List } from './_components';

import styled from './feedback.module.scss';

// import { getCachedSortedFeedback } from './server';

export default async function Feedback() {
  const feedbackList = (await getSortedFeedback()) || [];
  const token = await getTokenInCookies();

  return (
    <div className={styled.layout}>
      <UserIconHeader title="피드백" />
      <FeedbackTypeButton token={token} />
      <List feedback={feedbackList} token={token} />
      <BottomNav />
    </div>
  );
}
