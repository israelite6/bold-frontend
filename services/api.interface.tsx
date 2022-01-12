export interface ILoginProps {
  emailAddress: string;
  userPassword: string;
}

export interface ILoginResponse {
  token: string;
}

export interface IGetProfileResponse {
  userName: string;
  role: string;
  permissions: any;
  id: number;
  emailAddress?: string;
}

export interface IRegisterProps {
  userName: string;
  role?: string;
  emailAddress: string;
  userPassword: string;
}

export interface IRegisterResponse {
  description: string;
}

export interface IScholarship {
  title: string;
  description?: string;
  closeAt: string;
  amount: number;
  fundedBy: string;
  id?: number;
}

export interface IGetScholarshipResponse {
  scholarships: IScholarship[];
  meta: {
    total: number;
    perPage: number;
  };
}

export interface ICreateScholarshipProps {
  title: string;
  description: string;
  fundedBy: string;
  amount: string;
  closeAt: string;
}
