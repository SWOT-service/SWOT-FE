import { getClassList, getMemberList } from '@/_apis/member';
import { ChangeEvent } from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Member {
  memberId: string;
  userId: string;
  memberNickname: string;
  profileImage: string;
  lectureId: string;
  lectureTitle: string;
}

interface ClassGroup {
  lectureColor: string;
  lectureContent: string;
  lectureDays: string;
  lectureEndDate: string;
  lectureId: string;
  lectureLocatio: string;
  lectureQRCode: string;
  lectureTime: string;
  lectureTitle: string;
  members: {
    userId: string;
    name: string;
    profileImage: string | null;
  }[];
  instructor: {
    instructorName: string;
    instructorProfileImage: string | null;
  };
}

type State = {
  classList?: any[];
  userList?: Member[];
  checkedList: Member[];
  selectedList: Member[];
};

type Prams = {
  userId: string;
  checkedList: Member[];
};

type Action = {
  checkItemHandler: (
    e: ChangeEvent<HTMLInputElement>,
    userId: Prams['userId'],
  ) => void;
  setSelectedListHandler: () => void;
  updateSelectedList: (list: Member[] | []) => void;
  removeItemHandler: (userId: Prams['userId']) => void;
  loadUserList: () => Promise<void>;
};

// @ts-ignore
const initialState: State = {
  selectedList: [],
  checkedList: [],
};

const searchUserStore = create<any>()(
  persist(
    (set) => ({
      userList: [],
      checkedList: [],
      selectedList: [],
      resetMemberData: () => {
        set(initialState);
      },
      //   수강생 데이터 불러오기
      loadUserList: async () => {
        const userList = await getMemberList();
        set({ userList: userList || [] });
      },
      //   유저가 체크됐는지 확인하고, 체크되어있으면 checkedList에 추가, 아니면 checkedList에서 제거
      checkItemHandler: (e: ChangeEvent<HTMLInputElement>, userId: string) =>
        set((state: any) => {
          const isChecked = e.target.checked;

          const selectMember = state.userList.find(
            (member: Member) => member.userId === userId,
          );
          if (!selectMember) return state;
          return {
            checkedList: isChecked
              ? [...state.checkedList, selectMember]
              : state.checkedList.filter(
                  (member: Member) => member.userId !== userId,
                ),
          };
        }),
      updateCheckList: (list: Member[]) =>
        set((state: any) => {
          return {
            checkedList: [...list],
          };
        }),
      // 선택한 수강생을 selectedList에 추가
      updateSelectedList: (list: Member[]) =>
        set((state: any) => {
          return {
            selectedList: [...list],
          };
        }),
      // 선택한 수강생을 selectedList에 추가??? 위와 뭐가 다른거지??
      setSelectedListHandler: () =>
        set((state: any) => {
          return {
            selectedList: state.checkedList,
          };
        }),
      removeItemHandler: (userId: string) =>
        set((state: any) => ({
          selectedList: state.selectedList.filter(
            (member: Member) => member.userId !== userId,
          ),
          checkedList: state.checkedList.filter(
            (member: Member) => member.userId !== userId,
          ),
        })),
    }),
    {
      name: 'checked_list',
      partialize: (state: any) => ({
        selectedList: state.selectedList,
        checkedList: state.checkedList,
        userList: state.userList,
      }),
    },
  ),
);

const searchClassStore = create<any>()(
  persist(
    (set) => ({
      classList: [],
      checkedList: [],
      selectedList: [],
      resetClassData: () => {
        set(initialState);
      },
      loadUserList: async () => {
        const classList = await getClassList();
        const formattedUserList = classList?.data.data.map(
          (classGroup: ClassGroup) => {
            const lectureTime = classGroup.lectureTime
              ? classGroup.lectureTime.split('-')
              : [];

            return {
              ...classGroup,
              lectureTime,
            };
          },
        );

        set({ classList: formattedUserList || [] });
      },
      checkItemHandler: (e: ChangeEvent<HTMLInputElement>, lectureId: string) =>
        set((state: any) => {
          const isChecked = e.target.checked;

          const selectClass = state.classList.find(
            (member: ClassGroup) => member.lectureId === lectureId,
          );
          if (!selectClass) return state;
          return {
            checkedList: isChecked
              ? [...state.checkedList, selectClass]
              : state.checkedList.filter(
                  (member: ClassGroup) => member.lectureId !== lectureId,
                ),
          };
        }),
      setCheckAllHandler: () =>
        set((state: any) => {
          return {
            checkedList: [...state.classList],
          };
        }),
      // 추가한 부분
      updateCheckList: (list: ClassGroup[]) =>
        set((state: any) => {
          return {
            checkedList: [...list],
          };
        }),
      updateSelectedList: (list: ClassGroup[]) =>
        set((state: any) => {
          return {
            selectedList: [...list],
          };
        }),
      setSelectedListHandler: () =>
        set((state: any) => {
          return {
            selectedList: state.checkedList,
          };
        }),

      removeItemHandler: (lectureId: string) =>
        set((state: any) => ({
          selectedList: state.selectedList.filter(
            (member: ClassGroup) => member.lectureId !== lectureId,
          ),
          checkedList: state.checkedList.filter(
            (member: ClassGroup) => member.lectureId !== lectureId,
          ),
        })),
    }),
    {
      name: 'checked_class_list',
      partialize: (state: any) => ({
        selectedList: state.selectedList,
        checkedList: state.checkedList,
      }),
    },
  ),
);
export { searchUserStore, searchClassStore };
