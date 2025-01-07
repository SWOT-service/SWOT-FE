import { HTTP_METHODS } from '@data';
import api from '../api';

const URL = `${process.env.NEXT_PUBLIC_API_URL}`;

async function getMemberList() {
  const response = await fetch(`${URL}/member`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  });
  const json = await response.json();
  return json.data;
}

async function getClassList(): Promise<any> {
  // TODO: API 어떻게 사용할지 고민
  //   const response = await fetch(`${URL}/lecture/myLectures`, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
  //     },
  //   });
  //   const json = await response.json();

  //   return json.data;
  return await api('/lecture/myLectures', HTTP_METHODS.GET);
}

export { getMemberList, getClassList };
