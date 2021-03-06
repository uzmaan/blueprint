/*
 * Copyright 2018 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import { Intent, IProps } from "../../common";

export const HandleType = {
    /** A full handle appears as a small square. */
    FULL: "full" as "full",

    /** A start handle appears as the left or top half of a square. */
    START: "start" as "start",

    /** An end handle appears as the right or bottom half of a square. */
    END: "end" as "end",
};
export type HandleType = typeof HandleType[keyof typeof HandleType];

export const HandleInteractionKind = {
    /** Locked handles prevent other handles from being dragged past then. */
    LOCK: "lock" as "lock",

    /** Push handles move overlapping handles with them as they are dragged. */
    PUSH: "push" as "push",

    /**
     * Handles marked "none" are not interactive and do not appear in the UI.
     * They serve only to break the track into subsections that can be colored separately.
     */
    NONE: "none" as "none",
};
export type HandleInteractionKind = typeof HandleInteractionKind[keyof typeof HandleInteractionKind];

export interface IHandleProps extends IProps {
    /** Numeric value of this handle. */
    value: number;

    /** Intent for the track segment immediately after this handle, taking priority over `intentBefore`. */
    intentAfter?: Intent;

    /** Intent for the track segment immediately before this handle. */
    intentBefore?: Intent;

    /**
     * How this handle interacts with other handles.
     * @default "lock"
     */
    interactionKind?: HandleInteractionKind;

    /**
     * Callback invoked when this handle's value is changed due to a drag
     * interaction. Note that "push" interactions can cause multiple handles to
     * update at the same time.
     */
    onChange?: (newValue: number) => void;

    /** Callback invoked when this handle is released (the end of a drag interaction). */
    onRelease?: (newValue: number) => void;

    /**
     * Handle appearance type.
     * @default "full"
     */
    type?: HandleType;
}
