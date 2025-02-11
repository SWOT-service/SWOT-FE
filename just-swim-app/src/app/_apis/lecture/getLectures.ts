'use server';

import { unstable_cache } from 'next/cache';
import api from '../api';
import { HTTP_METHODS } from '@data';

export async function getLectures(): Promise<any> {
  return await api('/lecture/myLectures', HTTP_METHODS.GET);
}

export async function getCachedLectureDetail() {
  const cachedResult = unstable_cache(getLectures, ['lecture-detail'], {
    tags: [`lecture-detail`],
    revalidate: 60,
  });

  return cachedResult();
}
