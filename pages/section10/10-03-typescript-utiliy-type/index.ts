export interface IProfile {
    name : string
    age : number
    school: string
    hobby?: string
}

export interface IProfile2 {
    name?: string
    age?: number
    school?: string
    hobby?: string
}


// Partial 타입 __데이터가 있을수도 있고 없을수도 있는 타입
type aaa = Partial<IProfile>

// Required 타입 __데이터 모두 존재해야하는 타입
type bbb = Required<IProfile>

// Pick 타입 __선택
type ccc = Pick<IProfile, "name" | "age">

// Omit 타입 __제외
type ddd = Omit<IProfile, "school">

// Record 타입
type eee = "철수" | "영희" | "훈이" 
let child: eee = "철수"
let child2: string = "사과" // 철수, 영희, 훈이, 바나나도 가능


type fff = Record<eee, IProfile> /// Record 타입

//객체의 key들로 Union타입 만들기
type ggg = keyof IProfile //"name", | "age" | "school" | "hobby"

//type vs interface 차이 => interface는 선언병합 가능
export interface IProfile {
    candy: number // 선언병합으로 추가됨
}

// 응용
let profile: Partial<IProfile> = {
    candy: 10

}