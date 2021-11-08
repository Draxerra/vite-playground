import React, { FC } from "react";

import { useAppDispatch, useAppSelector } from "~/store";
import { decrement, increment } from "~/store/counter";

import AppCounter from "~/components/molecules/AppCounter";

const AppHome: FC = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <AppCounter
      decrement={() => dispatch(decrement())}
      increment={() => dispatch(increment())}
    >
      {count}
    </AppCounter>
  );
};

export default AppHome;
