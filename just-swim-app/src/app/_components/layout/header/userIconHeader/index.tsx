import Link from 'next/link';
import Image from 'next/image';

import { getCachedMyProfile } from '@apis';

import styled from './styles.module.scss';
import { useEffect, useState } from 'react';

/**
 * 상위 컴포넌트에서 HistoryBackHeader 대한 className을 직접 설정하지 않도록 주의! (동작하지 않음)
 * @param {string} title header의 title
 * @param {string} image user icon의 url
 */

export interface ProfileInfo {
  name: string;
  profileImage: string;
}

export function UserIconHeader({ title }: { title: string }) {
  const [profileInfo, setProfileInfo] = useState<ProfileInfo>();
  useEffect(() => {
    const fetchProfileInfo = async () => {
      const response = await getCachedMyProfile();
      setProfileInfo(response as ProfileInfo);
    };
    fetchProfileInfo();
  }, []);

  return (
    <header className={styled.header}>
      <div className={styled.title_wrapper}>
        <h1>{title}</h1>
      </div>
      <Link href={`/account`}>
        <div className={styled.profile_image}>
          <Image
            src={profileInfo?.profileImage || ''}
            alt={profileInfo?.name || ''}
            width={34}
            height={34}
          />
        </div>
      </Link>
    </header>
  );
}
