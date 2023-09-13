import * as React from 'react';
import { useState, useEffect } from 'react';
import { WrapItem, Center } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import RandomFromArray from '@/app/utils/randFromArray';

interface Props<T extends Item> {
    url: string,
    colors: string[],
    data:  T[]
}

interface Item {
    Title: string,
    Id: number
}

function LinkGallery<T extends Item>({data, url, colors}: Props<Item>): JSX.Element {

    const router = useRouter()

    return (<>
        {data.map((item) => {
          return (
            <WrapItem>
                <Center onClick={() => router.push(`${url}/${item.Id}`)} cursor={`pointer`} wordBreak={"break-all"} userSelect={"none"} padding={"2"} w="120px" h="200px" bg={`${RandomFromArray<string>(colors)}.400`}>
                    {item.Title.toUpperCase()}
                </Center>
            </WrapItem>
          );
        })}
    </>);
}
 
export default LinkGallery;