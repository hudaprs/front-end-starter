import { ref, type Ref } from 'vue';
import type { AxiosRequestConfig } from 'axios';

export const useHttpAbort = () => {
  const httpAbort_request: Ref<Record<string, AbortController>> = ref({});

  const httpAbort_clearAllRequest = (): void => {
    if (Object.keys(httpAbort_request.value).length > 0) {
      Object.values(httpAbort_request.value).forEach((controller: AbortController) => {
        if (!controller.signal.aborted) controller.abort();
      });
      httpAbort_request.value = {};
    }
  };

  const httpAbort_clearRequest = (id: string): void => {
    if (httpAbort_request.value[id]) delete httpAbort_request.value[id];
  };

  const httpAbort_abortRequest = (id: string): void => {
    const request = httpAbort_request.value[id] ?? null;
    if (request) {
      if (!request.signal.aborted) request.abort();
      httpAbort_clearRequest(id);
    }
  };

  const httpAbort_setAbortController = (id: string): AxiosRequestConfig => {
    const abortController = new AbortController();
    httpAbort_request.value[id] = abortController;
    return { signal: abortController.signal };
  };

  const httpAbort_registerAbort = (id: string): AxiosRequestConfig => {
    if (httpAbort_request.value[id]) httpAbort_abortRequest(id);
    return httpAbort_setAbortController(id);
  };

  return {
    httpAbort_abortRequest,
    httpAbort_clearRequest,
    httpAbort_clearAllRequest,
    httpAbort_registerAbort,
    httpAbort_setAbortController,
  };
};
