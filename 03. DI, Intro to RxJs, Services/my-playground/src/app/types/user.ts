export interface User{
    name: string, 
    age: number
}

interface Geo {
    lat: string,
    lng: string
}

interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: string,
}
interface Company {
    name: string,
    catchPhrase: string,
    bs: string
}
interface User2 {
    id: number, 
    name: string,
    username: string,
    email: string
}
export interface JsonPlaceHolder extends User2{
    address: Address,
    phone: string,
    company: Company
}

