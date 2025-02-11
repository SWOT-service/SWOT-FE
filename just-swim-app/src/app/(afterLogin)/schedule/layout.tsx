import { BottomNav, UserIconHeader } from '@components';
import {
  ScheduleAddButton,
  ScheduleCommonLayout,
} from './(schedule)/_components';
import { Suspense } from 'react';
import { getTokenInCookies } from '@utils';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = await getTokenInCookies();

  return (
    <>
      <UserIconHeader title="" />
      <ScheduleCommonLayout />
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      <BottomNav />
      <ScheduleAddButton token={token} />
    </>
  );
}
