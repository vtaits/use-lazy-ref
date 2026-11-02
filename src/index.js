import { useRef } from "react";

/**
 * @import { RefObject } from "react"
 */

const EMPTY_VALUE = Symbol("useLazyRef empty value");

/**
 * @template T
 * @param {() => T} init
 */
export function useLazyRef(init) {
	/** @type {RefObject<T | typeof EMPTY_VALUE>} */
	const resultRef = useRef(EMPTY_VALUE);

	if (resultRef.current === EMPTY_VALUE) {
		resultRef.current = init();
	}

	return /** @type {RefObject<T>} */ (resultRef);
}
