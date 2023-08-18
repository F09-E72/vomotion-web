import * as React from "react";
import { useState, useEffect } from "react";
import { Wrap, WrapItem, Center } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import ModalComponent from "../molecules/Modal";
import { useRouter } from "next/navigation";

export interface NotebookProp {
  Id: number;
  Title: string;
}

interface Props {
  data: NotebookProp[];
  addNotebook: (notebook: NotebookProp) => void;
}

function RandomFromArray<T>(arr: T[]): T {

  const random = Math.floor(Math.random() * arr.length);
  return arr[random]

}

const NotebookGrid = ({ data, addNotebook }: Props): JSX.Element => {

  const router = useRouter()
  const [openModal, setOpenModal] = useState(false);
  const colors = ["red", "blue", "green", "gray"]

  return (
    <>
      <Wrap>
        {data.map((item) => {
          return (
            <WrapItem>
              <Center onClick={() => router.push(`editor/${item.Id}`)} cursor={`pointer`} wordBreak={"break-all"} userSelect={"none"} padding={"2"} w="120px" h="200px" bg={`${RandomFromArray<string>(colors)}.400`}>
                {item.Title.toUpperCase()}
              </Center>
            </WrapItem>
          );
        })}
        <WrapItem onClick={() => setOpenModal(true)}>
          <Center w="120px" h="200px">
            <ModalComponent addNotebook={addNotebook}/>
          </Center>
        </WrapItem>
      </Wrap>
    </>
  );
};

export default NotebookGrid;
