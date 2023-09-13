import * as React from "react";
import { useState, useEffect } from "react";
import { Wrap, WrapItem, Center } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import ModalComponent from "../molecules/Modal";
import { useRouter } from "next/navigation";
import RandomFromArray from "@/app/utils/randFromArray";
import LinkGallery from "../molecules/LinkGallery";

export interface NotebookProp {
  Id: number;
  Title: string;
}

interface Props {
  data: NotebookProp[];
  addNotebook: (notebook: NotebookProp) => void;
}



const NotebookGrid = ({ data, addNotebook }: Props): JSX.Element => {

  const router = useRouter()
  const [openModal, setOpenModal] = useState(false);
  const colors = ["red", "blue", "green", "gray"]

  return (
    <>
      <Wrap>
       
       <LinkGallery url="editor" data={data} colors={colors}/>
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
