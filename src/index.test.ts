import { expect, mock, test } from "bun:test";
import { renderHook } from "@testing-library/react";
import { useLazyRef } from "./index";

test("should call init only on first render", () => {
	const init = mock().mockReturnValue("test");

	// call init on first render
	const {
		result: { current },
		rerender,
	} = renderHook(() => useLazyRef(init));

	expect(init).toHaveBeenCalledTimes(1);
	expect(current).toEqual({
		current: "test",
	});

	// no call init on not first render if value not changed
	rerender();

	expect(init).toHaveBeenCalledTimes(1);
	expect(current).toEqual({
		current: "test",
	});

	// no call init on not first render if value changed
	current.current = "test2";

	rerender();

	expect(init).toHaveBeenCalledTimes(1);
	expect(current).toEqual({
		current: "test2",
	});
});
