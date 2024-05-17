import { MyEmail, MyEmailInput } from "../../../styles/01-02-emotion";
import Image from 'next/image';

export default function EmotionPage() {
  return (
    <div>
      <MyEmail>이메일:</MyEmail>
      <MyEmailInput type="text" />
      <MyEmailInput type="text" />
      <MyEmailInput type="text" />
      <MyEmailInput type="text" />
      <MyEmailInput type="text" />
      <button>클릭하세요!</button>
      <Image src="/next.svg" alt="Next.js logo" />
    </div>
  );
}