import { useRef } from "react";
import { expect, test, vi } from "vitest";

vi.mock("react", () => ({
	useRef: vi.fn(),
}));

const { useLazyRef, EMPTY_VALUE } = await import("../index");

const mockedUseRef = vi.mocked(useRef);

test("should return filled value and not call init", () => {
	const init = vi.fn();

	const refResult = {
		current: Symbol("result"),
	};

	mockedUseRef.mockReturnValue(refResult);

	const result = useLazyRef(init);

	expect(init).toHaveBeenCalledTimes(0);
	expect(result).toBe(refResult);
});

test("should return result of init", () => {
	const resultValue = Symbol("result");

	const init = vi.fn().mockReturnValue(resultValue);

	mockedUseRef.mockReturnValue({
		current: EMPTY_VALUE,
	});

	const result = useLazyRef(init);

	expect(init).toHaveBeenCalledTimes(1);
	expect(result).toEqual({
		current: resultValue,
	});
});
