'use client';

import React, { useEffect, useRef, useState } from 'react';

import styled from './feedbackWrite.module.scss';

import { Header, DateInput, FileInput, LinkInput, TextArea } from '@components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema, FormType } from '@/_schema';
import { SelectClassInput } from '@/_components/form/input/selectClassInput';
import { IconCalendar } from '@assets';
import { useRouter } from 'next/navigation';
import { feedbackStore } from '@/_store/feedback';
import { getClassList } from '@apis';
import { searchClassStore } from '@store';

interface CustomFormData {
  date: string;
  files: File[] | null;
  targets: string;
  link: string | null;
  content: string;
}

export default function FeedbackWrite() {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);

  const { setFeedbackFormData, resetFeedbackFormData, getFeedbackFormData } =
    feedbackStore();
  const { resetClassData } = searchClassStore();
  const [lecture, setLecture] = useState<any>();
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const getLecturesData = async () => {
      const data = await getClassList();
      if (data.data) {
        const lectureTime = data.lectureTime ? data.lectureTime.split('-') : [];
        setLecture({ ...data.data, lectureTime });
      }
    };
    getLecturesData();
  }, []);

  const {
    register, // RHF의 상태에 연결
    handleSubmit, // RHF에서 제공하는 함수 & event.preventDefault()를 자동으로 호출
    control,
    setValue,
    formState: { errors, isValid, isDirty },
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  // handleSubmit에는 RHF에서 validate된 데이터가 들어간다
  const onSubmit = async (data: FormType) => {
    const formData = new FormData();

    formData.append('target', data.target);
    formData.append('date', data.date);
    // @ts-ignore
    formData.append('link', data.link);
    formData.append('content', data.content);
    // https://stackoverflow.com/questions/35940290/how-to-convert-base64-string-to-javascript-file-object-like-as-from-file-input-f
    Array.from(images).forEach((el, i) => {
      // @ts-ignore
      formData.append('file', el.file);
      // @ts-ignore
      formData.append('fileURL', el.dataUrl);
    });

    // @ts-ignore
    const formDataObject: CustomFormData = {};

    formData.forEach((value, key) => {
      // console.log(value, key);
      // File 다중선택시 배열이 아닌, 1개만 들어가는 문제 해결방법,,
      if (key === 'fileURL' || key === 'file') {
        if (Object.hasOwn(formDataObject, key)) {
          // @ts-ignore
          formDataObject[key].push(value);
        } else {
          // @ts-ignore
          formDataObject[key] = [value];
        }
      } else {
        // @ts-ignore
        formDataObject[key] = value;
      }
    });

    setFeedbackFormData(formDataObject, 'group');
    return router.push('/feedback/create/confirmClass');
  };

  const handleClick = () => {
    fileRef?.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetFiles = (e.target as HTMLInputElement).files as FileList;
    const targetFilesArray = Array.from(targetFiles);

    [...targetFilesArray].forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        const result = reader.result as string;
        const obj = {
          name: file.name,
          dataUrl: result,
          file: file,
        };
        // @ts-ignore
        setImages((prev) => [...prev, obj]);
      };
    });
  };

  return (
    <>
      <Header
        title="반별 피드백 작성하기"
        resetFunc1={resetFeedbackFormData}
        resetFunc2={resetClassData}
        routerBackUrl={'/feedback'}
      />
      <form onSubmit={handleSubmit(onSubmit)} className={styled.feedback_write}>
        {/* <form onSubmit={onValid} className={styled.feedback_write}> */}
        <div className={styled.inner}>
          <div className={styled.select_customer}>
            <div className={styled.title}>
              수업 선택하기 <span>(필수)</span>
            </div>
            <div className={styled.sub_title}>
              피드백을 남길 수업의 정보를 확인해주세요
            </div>
            <SelectClassInput
              {...register('target')}
              lecture={lecture}
              setValue={setValue}
              errors={[errors.target?.message ?? '']}
            />
          </div>
        </div>

        <div className={styled.divider}></div>

        <div className={styled.feedback_write}>
          <div className={styled.feedback_content}>
            <div className={styled.wrap}>
              <div className={styled.title}>
                피드백 기준 수업일 <span>(필수)</span>
              </div>
              <DateInput
                renderIcon={() => <IconCalendar width={14} height={14} />}
                placeholder="수업 일자를 선택해주세요"
                {...register('date')}
                // @ts-ignore
                errors={[errors.date?.message ?? '']}
              />
            </div>

            <div className={styled.wrap}>
              <div className={styled.title}>첨부 파일</div>
              <div className={`${styled.sub_title} ${styled.file}`}>
                최대 4개의 20MB 이하 파일만 첨부 가능합니다
              </div>

              <FileInput
                {...register('file')}
                onChange={handleChange}
                // @ts-ignore
                setValue={setValue}
              />
            </div>

            <div className={styled.wrap}>
              <div className={styled.title}>첨부 링크</div>
              <LinkInput
                placeholder="첨부하고자 하는 URL을 입력해주세요"
                {...register('link')}
                // @ts-ignore
                errors={[errors.link?.message ?? '']}
              />
            </div>

            <div className={styled.wrap}>
              <div className={styled.title}>
                피드백 남기기 <span>(필수)</span>
              </div>
              <TextArea
                placeholder="피드백을 입력해주세요"
                height={100}
                {...register('content')}
                // @ts-ignore
                errors={[errors.content?.message ?? '']}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className={`${styled.submit_btn} ${!isValid ? styled.disabled : ''}`}
          disabled={!isValid}>
          작성완료
        </button>
      </form>
    </>
  );
}
