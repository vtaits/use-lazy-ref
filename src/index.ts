import { useRef } from "react";
import type { MutableRefObject } from "react";

export const EMPTY_VALUE = Symbol("useLazyRef empty value");

export const useLazyRef = <T>(init: () => T): MutableRefObject<T> => {
	const resultRef = useRef<T | typeof EMPTY_VALUE>(EMPTY_VALUE);

	if (resultRef.current === EMPTY_VALUE) {
		resultRef.current = init();
	}

	return resultRef as MutableRefObject<T>;
};
