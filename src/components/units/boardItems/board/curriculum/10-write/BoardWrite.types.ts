
import { ChangeEvent, MouseEvent } from "react";

export interface IBoardWriteUIProps {
  writerError: any
  passwordError: any
  titleError: any
  contentsError: any
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeContents: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void
  isEdit: boolean
  data?: any 
}

export interface IBoardWriteProps {
    isEdit: boolean
    data?: any
  }

export interface IMyvariables {
    number : number
    writer?: string
    title ?: string 
    contents?: string
  }


