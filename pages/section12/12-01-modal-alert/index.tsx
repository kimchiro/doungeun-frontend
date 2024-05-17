import {Modal} from 'antd';

export default function ModalAlertPage(): JSX.Element {
 
 const onClickSuccess = (): void => {
    Modal.success({content: '성공'});
 };
 
const onClickError = (): void => {
    Modal.error({content: '실패'});
};

    return <div>
        <button onClick={onClickSuccess}>성공</button>
        <button onClick={onClickError}>실패</button>
        </div>;
}

