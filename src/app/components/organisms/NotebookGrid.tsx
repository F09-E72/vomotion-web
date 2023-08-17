import * as React from "react";
import { useState, useEffect } from "react";
import { Wrap, WrapItem, Center } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import ModalComponent from "../molecules/Modal";

export interface NotebookProp {
  Id: number;
  Title: string;
}

interface Props {
  data: NotebookProp[];
  addNotebook: (notebook: NotebookProp) => void;
}

const NotebookGrid = ({ data, addNotebook }: Props): JSX.Element => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Wrap>
        {data.map((item) => {
          return (
            <WrapItem>
              <Center w="120px" h="200px" bg="red.400">
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
