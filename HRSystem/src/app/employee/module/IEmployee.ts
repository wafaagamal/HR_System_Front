export interface IEmployee{
    id:number,
    name:string,
    address:string,
    mobileNo:string,
    email:string,
    manger:IEmployee,
    birthDate:Date,
    attendences:[]
}