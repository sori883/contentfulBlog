import { FC } from 'react';

import { Pagination as MPagination } from '@mantine/core';


type Props = {
  defaultPage: number;
  total: number;
  onChange: (value: number) => void;
}

export const Pagination: FC<Props> = ({
  defaultPage,
  total,
  onChange,
}: Props) => {
  return (
    <MPagination
      defaultValue={defaultPage}
      total={total}
      onChange={onChange}
    />
  );
};