const FRUITS = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
  { number: 7, title: "딸기" },
  { number: 8, title: "천혜향" },
  { number: 9, title: "과일선물세트" },
  { number: 10, title: "귤" },
];

export default function MapFruitsPage() {
  const aaa = [
    <div key="1">1 레드향</div>,
    <div key="2">2 샤인머스켓</div>,
    <div key="3">3 산청딸기</div>,
  ];

  return (
    <div>
      <div>
        1번째 <br />
        {aaa}
      </div>
      =============================
      <div>
        2번째 <br />
        {aaa}
      </div>
      =============================
      <div>
        3번째 실무코드 <br />
        {FRUITS.map((item) => (
          <div key={item.number}>
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}