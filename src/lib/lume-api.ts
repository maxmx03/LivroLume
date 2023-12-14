import { EntityId } from '@reduxjs/toolkit';
import { os } from '@tauri-apps/api';
import { open } from '@tauri-apps/api/dialog';
import { readBinaryFile } from '@tauri-apps/api/fs';
import { convertFileSrc } from '@tauri-apps/api/tauri';
import ePub from 'epubjs';

export const getFile = async (): Promise<string | string[] | null> => {
  const selected = await open({
    multiple: true,
    filters: [
      {
        name: 'Epub',
        extensions: ['epub'],
      },
    ],
  });

  return selected;
};

export const getDir = async (): Promise<string | string[] | null> => {
  const selectedDir = await open({
    multiple: false,
    directory: true,
    filters: [
      {
        name: 'Epub',
        extensions: ['epub'],
      },
    ],
  });

  return selectedDir;
};

export const getBook = async (filePath: string) => {
  let book;
  const platform = await os.platform();

  if (platform === 'win32') {
    const url = convertFileSrc(filePath);
    book = ePub(url);
  } else {
    const data = await readBinaryFile(filePath);
    book = ePub(data.buffer);
  }

  await book.ready;
  const { title, description, pubdate, publisher, creator } =
    await book.loaded.metadata;
  const cover = (await book.coverUrl()) ?? '/book.png';

  return {
    id: filePath as EntityId,
    title,
    description,
    pubdate,
    publisher,
    creator,
    cover,
    location: 0,
    isPageMarked: false,
    filePath,
  };
};
