import { useState } from "react";
import { useMutation } from "react-query";
import { useUserStore } from "../../../store/userStore";
import LayoutService from "../service/layoutService";

export const useHandleDataRegister = (handleModal) => {
  const [error, setError] = useState(null);
  const setRetryRequest = useUserStore((state) => state.setRetryRequest);
  const retryRequest = useUserStore((state) => state.retryRequest);

  const { mutate, isLoading } = useMutation(LayoutService.registerUser, {
    onSuccess: (data) => {
      setRetryRequest(!retryRequest);
      setError(null);
      handleModal();
    },
    onError: (err) => {
      setError(err.response.data.message);
    },
  });

  const onFinish = (values) => {
    mutate(values);
  };

  return { onFinish, mutate, isLoading, error };
};
