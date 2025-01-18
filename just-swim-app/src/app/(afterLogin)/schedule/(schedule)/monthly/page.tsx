import { MonthlyWrapper } from './_components';
import { getTokenInCookies } from '@utils';

export default async function Monthly() {
  const token = await getTokenInCookies();

  return (
    <>
      <MonthlyWrapper />
    </>
  );
}
