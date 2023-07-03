'use client';

import { useCallback, useState } from "react";
import { useAccessToken } from "./useAccessToken";

export const enum AsyncState {
  INITIAL = 1,
  PENDING = 2,
  SUCCESS = 3,
  ERROR = 4,
}

export const useAsync = <T, P, E = string>(
  asyncOperation: (params: P) => Promise<T>
) => {
  const [status, setStatus] = useState<AsyncState>(AsyncState.INITIAL);
  const [error, setError] = useState<E | null>(null);
  const [data, setData] = useState<T | null>(null);
  const { saveAccessToken } = useAccessToken();

  const execute = useCallback(
    async (params: P) => {
      setStatus(AsyncState.PENDING);
      setError(null)
      setData(null)
      try {
        await saveAccessToken();
        const response = await asyncOperation(params);
        setStatus(AsyncState.SUCCESS);
        setData(response);
        setError(null);
      } catch (err: any) {
        setError(err.toString());
        setStatus(AsyncState.ERROR);
      }
    },
    [asyncOperation, saveAccessToken]
  );

  return {
    status,
    data,
    error,
    execute,
  };
};
