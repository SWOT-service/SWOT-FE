'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import addIcon from '@assets/add.png';
import profile from '@assets/profile1.png';
import deleteButton from '@assets/delete_button.png';

import styled from './feedbackWrite.module.scss';
import {
  Header,
  DateInput,
  FileInput,
  TextInput,
  TextArea,
  SelectPersonInput,
} from '@components';

import { IconCalendar } from '@assets';

export default function FeedbackWrite() {
  let now = new Date();

  let yaer = now.getFullYear();
  let month = (now.getMonth() + 1).toString().padStart(2, '0');
  let day = now.getDate().toString().padStart(2, '0');

  let date = `${yaer}.${month}.${day}`;
  // console.log(date)

  const fileRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    console.log('fileRef', fileRef);
    fileRef?.current?.click();
  };

  const [images, setImages] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent) => {
    const targetFiles = (e.target as HTMLInputElement).files as FileList;
    const targetFilesArray = Array.from(targetFiles);
    const selectedFiles: string[] = targetFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    // 합체!
    setImages((prev) => prev.concat(selectedFiles));
  };

  return (
    <>
      <Header title="개별 피드백 작성하기" />
      <div className={styled.feedback_write}>
        <div className={styled.select_customer}>
          <div className={styled.title}>
            수강생 선택하기 <span>(필수)</span>
          </div>
          <div className={styled.sub_title}>
            피드백을 남길 수강생의 정보를 확인해주세요
          </div>
          <SelectPersonInput name="fileinput" />
        </div>

        <div className={styled.feedback_content}>
          <div className={styled.wrap}>
            <div className={styled.title}>
              피드백 기준 수업일 <span>(필수)</span>
            </div>
            <DateInput
              name="dateinput"
              renderIcon={() => <IconCalendar width={14} height={14} />}
              placeholder="수업 일자를 선택해주세요"
              suffix="종료"
              defaultValue={date}
            />
          </div>
          <div className={styled.title}>첨부 파일</div>
          <div className={styled.sub_title}>
            최대 4개의 20MB 이하 파일만 첨부 가능합니다
          </div>
          <FileInput name="fileinput" />

          <div className={styled.title}>첨부 링크</div>
          <TextInput
            name="textinput"
            placeholder="첨부하고자 하는 URL을 입력해주세요"
            valid={true}
            link={true}
          />
          {/* <div className={styled.link}>
            <input type="text" />
            <button>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.10512 17.8216H14.8953L15.4355 6.39307H4.56494L5.10512 17.8216Z"
                  fill="#F8F9FA"
                />
                <path
                  d="M17.8573 4.78557H15.0001V2.99986C15.0001 2.21191 14.3595 1.57129 13.5716 1.57129H6.42871C5.64077 1.57129 5.00014 2.21191 5.00014 2.99986V4.78557H2.143C1.74791 4.78557 1.42871 5.10477 1.42871 5.49986V6.21415C1.42871 6.31236 1.50907 6.39272 1.60728 6.39272H2.9555L3.50684 18.0668C3.54255 18.828 4.17201 19.4284 4.93318 19.4284H15.0671C15.8305 19.4284 16.4577 18.8302 16.4934 18.0668L17.0448 6.39272H18.393C18.4912 6.39272 18.5716 6.31236 18.5716 6.21415V5.49986C18.5716 5.10477 18.2524 4.78557 17.8573 4.78557ZM6.60728 3.17843H13.393V4.78557H6.60728V3.17843ZM14.8952 17.8213H5.10505L4.56487 6.39272H15.4354L14.8952 17.8213Z"
                  fill="#212223"
                />
              </svg>
            </button>
          </div> */}
          <div className={styled.title}>
            피드백 남기기 <span>(필수)</span>
          </div>
          {/* <textarea
            placeholder="피드백을 입력해주세요"
            className={styled.feedback_area}>
          </textarea> */}
          <TextArea
            name="textarea"
            placeholder="피드백을 입력해주세요"
            height={100}
          />
        </div>
      </div>
      <button className={styled.submit_btn}>전송하기</button>
    </>
  );
}
