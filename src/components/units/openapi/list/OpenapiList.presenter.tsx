import { Image, Wrapper } from "./OpenapiList.styles";
import type { IOpenapiListUIProps } from "./OpenapiList.types";

export default function OpenapiListUI(props: IOpenapiListUIProps): JSX.Element {
  console.log(props.imgUrls);
  return (
    <Wrapper>
      {props.imgUrls.map((el, index) => (
        <Image key={index} alt={`dog-${index}`} src={el} />
      ))}
    </Wrapper>
  );
}