export default function TypescriptPage() {
import { array } from '../../../node_modules/@types/prop-types/index.d';
import { profile } from '../../../node_modules/@apollo/client/testing/internal/profile/profile';

    let aaa = "안녕하세요"
    
    let bbb: string = "반갑습니다"

    let ccc: number | string = 1000

    ccc = "1000원"

    let ddd: number = 10
    
    let eee: boolean = true
    eee = false

    let fff: number[] = [1, 2, 3, 4, 5]

    let ggg: string[] = ["철수", "영희", "훈이"]

    let hhh = ["철수", "영희", "훈이", 10]

    const profile = {
        name: "철수",
        age: 9, 
        school: "다람쥐초등학교 "
    }

    interface IProfile {
        name: string
        age: number | string 
        school: string
        hobby?: string
    }

    function add(num1:number, num2: number, unit: string): string {
        return num1 + num2 + unit
    }
    const result = add(1000, 2000,"원")

    const add2 = (num1:number, num2: number, unit: string): string => {
        return num1 + num2 + unit
    }
    const result2 = add(1000, 2000,"원")

    let qqq: any = "철수" // 모든타입이며 실행시 자바스크립트로 변한다

    return <></>
}