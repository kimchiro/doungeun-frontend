import { Modal } from 'antd';
import { useState } from 'react';
import DaumPostcodeEmbed from 'react-daum-postcode';
import type { Address } from 'react-daum-postcode';

export default function ModalCustomPage(): JSX.Element {
    const [open, setOpen] = useState(false);

    const showModal = (): void => {
        setOpen(true);
    };

    const handleOk = (): void => {
        setOpen(false);
    };

    const handleCancel = (): void => {
        setOpen(false);
    };

    const handleComplete = (data: Address): void => {
        console.log(data);
        setOpen(false);
    };

    return (
        <div>
            <button onClick={showModal}>모달 열기</button>
            {/* 모달 종료방식 -1 모달 숨기는 방법 (ex, 이력서, 주소, 글*/}
            {/* <Modal open={open} onOk={handleOk} onCancel={handleCancel}>
              <DaumPostcodeEmbed />
            </Modal> */ }
            {/* 모달 종룝방식 -2 모달 삭제하는 방법  (ex 신용카드 정보, 개인정보, 비밀번호*/}
            {open && (
                <Modal open={true} onOk={handleOk} onCancel={handleCancel}>
              <DaumPostcodeEmbed  onComplete={handleComplete}/>
            </Modal>
                )}
        </div>
    );
}
