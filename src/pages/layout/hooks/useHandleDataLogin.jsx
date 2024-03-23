import { useState, useRef } from "react";
import { useMutation } from "react-query";
import LayoutService from "../service/layoutService";
import { useUserStore } from "../../../store/userStore";

export const useHandleDataLogin = (handleModal) => {
  const formRef = useRef();
  const [error, setError] = useState(null);
  const setRetryRequest = useUserStore((state) => state.setRetryRequest);
  const retryRequest = useUserStore((state) => state.retryRequest);

  const { mutate, isLoading } = useMutation(LayoutService.loginUser, {
    onSuccess: () => {
      setRetryRequest(!retryRequest); //actualizo ese estado para que se vuelva a llamar en app
      formRef.current.resetFields(); //limpio el formulario
      setError(null); //borro el error para limpiar los msg de errores
      handleModal(); //cierro el modal con este prop
    },
    onError: (err) => {
      setError(err.response.data.message);
    },
  });

  const onFinish = (values) => mutate(values); //funcion del formulario

  return { onFinish, isLoading, error, formRef };
};
