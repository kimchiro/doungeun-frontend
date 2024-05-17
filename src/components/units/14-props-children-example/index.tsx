interface ExampleProps {
    school: string;
    children: React.ReactNode;
}

export default function Example(props: ExampleProps) {
  return (
    <div>
      <div>안녕하세요</div>
      <div>{props.school}</div>
      {props.children}
      <div>영희입니다</div>
    </div>
  );
}