import { Modal } from 'antd';
import { useState } from 'react';

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

    return (
        <div>
            <button onClick={showModal}>모달 열기</button>
            <Modal title="모달 제목" open={open} onOk={handleOk} onCancel={handleCancel}>
                비밀번호 입력: <input type="password" />
            </Modal>
        </div>
    );
}
