export interface IUser {
  fullName: string;
  id?: any;
  sellerCode?: number;
  userType: string;
  image: string;
  email: string;
  mobileNo: number;
  address: {
    city: string;
    country: string;
  };
  password: string;
}
