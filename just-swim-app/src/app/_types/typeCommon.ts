import { Dispatch, MouseEvent, SetStateAction } from "react";

export interface ConfirmButtonProps {
  text: string;
  kind: 'confirm' | 'confirm-sub' | 'cancel' | 'cancel-sub' | 'normal';
  border?: boolean;
  loading?: string;
  active?: boolean;
}

export interface CalendarProps {
  selectedDate?: string,
  changeSelectedDate?: (date: string) => void
}

export interface CalendarItemProps {
  year?: number,
  month?: number,
  date: number,
  isDisabled: boolean,
  isToday: boolean,
  isSelected: boolean,
}

export interface ImageCarouselProps {
  images: string[],
  index: number,
  setIndex: Dispatch<SetStateAction<number>>,
  useDeleteButton?: boolean,
  deleteImage?: (index: number) => void,
  hideModal: (event: MouseEvent<HTMLButtonElement>) => void,
}