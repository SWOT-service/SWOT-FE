import Image from 'next/image';
import './tabContent.scss';

export default function TabContent() {
  let classList = [
    {
      name: '아침 5 반',
      target: '초보반으로, 배영 및 접영 위주로 수업합니다.',
      location: '강동구 실내 수영장',
      week: '매주 금,토 요일',
      time: '11:00 ~ 12:00',
      picker: '#F1554C',
    },
    {
      name: '아티스틱 스윔 반',
      target:
        '중급반으로, 수영에 대한 기초적인 지식이 있는 분들을 대상으로 수업하고 있습니다.',
      location: '강동구 실내 수영장',
      week: '매주 금,토 요일',
      time: '11:00 ~ 12:00',
      picker: '#8B41FF',
    },
    {
      name: '생존 수영 반',
      target:
        '왕초보반으로, 수영을 한번도 경험해보지 않은 분을 위주로 수업합니다.',
      location: '왕십리 스윔센터',
      week: '매주 금,토 요일',
      time: '11:00 ~ 12:00',
      picker: '#FFC700',
    },
  ];
  let completeList = [
    {
      name: '생존 수영 반',
      target:
        '왕초보반으로, 수영을 한번도 경험해보지 않은 분을 위주로 수업합니다.',
      location: '왕십리 스윔센터',
      week: '매주 금,토 요일',
      time: '11:00 ~ 12:00',
      picker: '#d7dbde',
    },
  ];
  return (
    <>
      <p className="title">진행 중인 수업</p>
      <div className="tabList">
        {classList.map((item) => (
          <div
            key={item.name}
            className="tabContent"
            style={{ boxShadow: `0px -3px 0 0 ${item.picker}` }}>
            <p className="name">
              {item.name}
              <span className="icon">
                <svg
                  width="7"
                  height="10"
                  viewBox="0 0 7 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.158203 8.825L3.97487 5L0.158203 1.175L1.3332 0L6.3332 5L1.3332 10L0.158203 8.825Z"
                    fill="#050606"
                  />
                </svg>
              </span>
            </p>
            <p>{item.target}</p>
            <div className="info">
              <p>
                <span className="icon">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_64_155)">
                      <path
                        d="M7.4 8.5C7.84 8.5 8.2168 8.3432 8.5304 8.0296C8.84347 7.71653 9 7.34 9 6.9C9 6.46 8.84347 6.0832 8.5304 5.7696C8.2168 5.45653 7.84 5.3 7.4 5.3C6.96 5.3 6.58347 5.45653 6.2704 5.7696C5.9568 6.0832 5.8 6.46 5.8 6.9C5.8 7.34 5.9568 7.71653 6.2704 8.0296C6.58347 8.3432 6.96 8.5 7.4 8.5ZM7.4 14.38C9.02667 12.8867 10.2333 11.5299 11.02 10.3096C11.8067 9.08987 12.2 8.00667 12.2 7.06C12.2 5.60667 11.7365 4.41653 10.8096 3.4896C9.8832 2.5632 8.74667 2.1 7.4 2.1C6.05333 2.1 4.91653 2.5632 3.9896 3.4896C3.0632 4.41653 2.6 5.60667 2.6 7.06C2.6 8.00667 2.99333 9.08987 3.78 10.3096C4.56667 11.5299 5.77333 12.8867 7.4 14.38ZM7.4 16.5C5.25333 14.6733 3.65013 12.9765 2.5904 11.4096C1.53013 9.8432 1 8.39333 1 7.06C1 5.06 1.64347 3.46667 2.9304 2.28C4.2168 1.09333 5.70667 0.5 7.4 0.5C9.09333 0.5 10.5832 1.09333 11.8696 2.28C13.1565 3.46667 13.8 5.06 13.8 7.06C13.8 8.39333 13.2701 9.8432 12.2104 11.4096C11.1501 12.9765 9.54667 14.6733 7.4 16.5Z"
                        fill="#5C5E62"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_64_155">
                        <rect
                          width="12.8"
                          height="16"
                          fill="white"
                          transform="translate(1 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                {item.location}
              </p>
              <p>
                <span className="icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_64_224)">
                      <path
                        d="M13.333 2.00033H12.6663V0.666992H11.333V2.00033H4.66634V0.666992H3.33301V2.00033H2.66634C1.93301 2.00033 1.33301 2.60033 1.33301 3.33366V14.0003C1.33301 14.7337 1.93301 15.3337 2.66634 15.3337H13.333C14.0663 15.3337 14.6663 14.7337 14.6663 14.0003V3.33366C14.6663 2.60033 14.0663 2.00033 13.333 2.00033ZM13.333 14.0003H2.66634V6.66699H13.333V14.0003ZM13.333 5.33366H2.66634V3.33366H13.333V5.33366Z"
                        fill="#5C5E62"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_64_224">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                {item.week}
              </p>
              <p>
                <span className="icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_64_229)">
                      <path
                        d="M7.33333 5.33333V8.66667L10.1667 10.3467L10.68 9.49333L8.33333 8.1V5.33333H7.33333ZM14 6.66667V2L12.24 3.76C11.16 2.67333 9.66 2 8 2C4.68667 2 2 4.68667 2 8C2 11.3133 4.68667 14 8 14C11.3133 14 14 11.3133 14 8H12.6667C12.6667 10.5733 10.5733 12.6667 8 12.6667C5.42667 12.6667 3.33333 10.5733 3.33333 8C3.33333 5.42667 5.42667 3.33333 8 3.33333C9.28667 3.33333 10.4533 3.86 11.3 4.7L9.33333 6.66667H14Z"
                        fill="#5C5E62"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_64_229">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                {item.time}
              </p>
            </div>
            <div className="profileBox">
              <div className="photoList">
                <Image
                  src={`/assets/no_profile.png`}
                  alt="프로필"
                  width={28}
                  height={28}
                />
                <Image
                  src={`/assets/no_profile.png`}
                  alt="프로필"
                  width={28}
                  height={28}
                />
                <Image
                  src={`/assets/no_profile.png`}
                  alt="프로필"
                  width={28}
                  height={28}
                />
              </div>
              <p>15명</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bar"></div>
      <p className="title">지난 수업</p>
      <div className="tabList">
        {completeList.map((item) => (
          <div
            key={item.name}
            className="tabContent"
            style={{ boxShadow: `0px -3px 0 0 ${item.picker}` }}>
            <p className="name">
              {item.name}
              <span className="icon">
                <svg
                  width="7"
                  height="10"
                  viewBox="0 0 7 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.158203 8.825L3.97487 5L0.158203 1.175L1.3332 0L6.3332 5L1.3332 10L0.158203 8.825Z"
                    fill="#050606"
                  />
                </svg>
              </span>
            </p>
            <p>{item.target}</p>
            <div className="info">
              <p>
                <span className="icon">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_64_155)">
                      <path
                        d="M7.4 8.5C7.84 8.5 8.2168 8.3432 8.5304 8.0296C8.84347 7.71653 9 7.34 9 6.9C9 6.46 8.84347 6.0832 8.5304 5.7696C8.2168 5.45653 7.84 5.3 7.4 5.3C6.96 5.3 6.58347 5.45653 6.2704 5.7696C5.9568 6.0832 5.8 6.46 5.8 6.9C5.8 7.34 5.9568 7.71653 6.2704 8.0296C6.58347 8.3432 6.96 8.5 7.4 8.5ZM7.4 14.38C9.02667 12.8867 10.2333 11.5299 11.02 10.3096C11.8067 9.08987 12.2 8.00667 12.2 7.06C12.2 5.60667 11.7365 4.41653 10.8096 3.4896C9.8832 2.5632 8.74667 2.1 7.4 2.1C6.05333 2.1 4.91653 2.5632 3.9896 3.4896C3.0632 4.41653 2.6 5.60667 2.6 7.06C2.6 8.00667 2.99333 9.08987 3.78 10.3096C4.56667 11.5299 5.77333 12.8867 7.4 14.38ZM7.4 16.5C5.25333 14.6733 3.65013 12.9765 2.5904 11.4096C1.53013 9.8432 1 8.39333 1 7.06C1 5.06 1.64347 3.46667 2.9304 2.28C4.2168 1.09333 5.70667 0.5 7.4 0.5C9.09333 0.5 10.5832 1.09333 11.8696 2.28C13.1565 3.46667 13.8 5.06 13.8 7.06C13.8 8.39333 13.2701 9.8432 12.2104 11.4096C11.1501 12.9765 9.54667 14.6733 7.4 16.5Z"
                        fill="#5C5E62"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_64_155">
                        <rect
                          width="12.8"
                          height="16"
                          fill="white"
                          transform="translate(1 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                {item.location}
              </p>
              <p>
                <span className="icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_64_224)">
                      <path
                        d="M13.333 2.00033H12.6663V0.666992H11.333V2.00033H4.66634V0.666992H3.33301V2.00033H2.66634C1.93301 2.00033 1.33301 2.60033 1.33301 3.33366V14.0003C1.33301 14.7337 1.93301 15.3337 2.66634 15.3337H13.333C14.0663 15.3337 14.6663 14.7337 14.6663 14.0003V3.33366C14.6663 2.60033 14.0663 2.00033 13.333 2.00033ZM13.333 14.0003H2.66634V6.66699H13.333V14.0003ZM13.333 5.33366H2.66634V3.33366H13.333V5.33366Z"
                        fill="#5C5E62"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_64_224">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                {item.week}
              </p>
              <p>
                <span className="icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_64_229)">
                      <path
                        d="M7.33333 5.33333V8.66667L10.1667 10.3467L10.68 9.49333L8.33333 8.1V5.33333H7.33333ZM14 6.66667V2L12.24 3.76C11.16 2.67333 9.66 2 8 2C4.68667 2 2 4.68667 2 8C2 11.3133 4.68667 14 8 14C11.3133 14 14 11.3133 14 8H12.6667C12.6667 10.5733 10.5733 12.6667 8 12.6667C5.42667 12.6667 3.33333 10.5733 3.33333 8C3.33333 5.42667 5.42667 3.33333 8 3.33333C9.28667 3.33333 10.4533 3.86 11.3 4.7L9.33333 6.66667H14Z"
                        fill="#5C5E62"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_64_229">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                {item.time}
              </p>
            </div>
            <div className="profileBox">
              <div className="photoList">
                <Image
                  src={`/assets/no_profile.png`}
                  alt="프로필"
                  width={28}
                  height={28}
                />
                <Image
                  src={`/assets/no_profile.png`}
                  alt="프로필"
                  width={28}
                  height={28}
                />
                <Image
                  src={`/assets/no_profile.png`}
                  alt="프로필"
                  width={28}
                  height={28}
                />
              </div>
              <p>15명</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
