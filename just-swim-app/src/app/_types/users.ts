import { SNS, USER_TYPE } from '@data';

export type Provider = (typeof SNS)[keyof typeof SNS];
export type UserType = (typeof USER_TYPE)[keyof typeof USER_TYPE];

export interface UserEntity {
  userId: string;
  userType: UserType;
  provider: Provider;
  email: string;
  name: string;
  profileImage: string;
  birth: string;
  phoneNumber: string;
  userCreatedAt: string;
  userUpdatedAt: string;
  userDeletedAt: string;
}

export interface PostUserLoginReq
  extends Pick<UserEntity, 'email' | 'provider'> {}

export interface PostUserTypeReq extends Pick<UserEntity, 'userType'> {}

export interface PatchUserProfileReq
  extends Pick<UserEntity, 'name' | 'profileImage' | 'birth' | 'phoneNumber'> {}

export interface GetUserProfileRes {
  status: number;
  data: {
    success: boolean;
    message: string;
    data: UserEntity;
  };
}

export interface PostUserTypeReq {
  userType: UserType;
}

export interface PatchUserEditReq {
  profileImage: string;
  name: string;
  birth: string;
  phoneNumber: string;
}

export interface DeleteUserReq {
  withdrawalReasonContent: string;
}
