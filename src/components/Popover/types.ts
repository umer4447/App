import type {ValueOf} from 'type-fest';
import type {PopoverAnchorPosition} from '@components/Modal/types';
import type BaseModalProps from '@components/Modal/types';
import type CONST from '@src/CONST';

type AnchorAlignment = {
    /** The horizontal anchor alignment of the popover */
    horizontal: ValueOf<typeof CONST.MODAL.ANCHOR_ORIGIN_HORIZONTAL>;

    /** The vertical anchor alignment of the popover */
    vertical: ValueOf<typeof CONST.MODAL.ANCHOR_ORIGIN_VERTICAL>;
};

type PopoverDimensions = {
    width: number;
    height: number;
};

type PopoverProps = BaseModalProps & {
    /** The anchor position of the popover */
    anchorPosition?: PopoverAnchorPosition;

    /** The anchor alignment of the popover */
    anchorAlignment?: AnchorAlignment;

    /** The anchor ref of the popover */
    anchorRef?: React.RefObject<HTMLElement>;

    /** Whether disable the animations */
    disableAnimation?: boolean;

    /** Whether we don't want to show overlay */
    withoutOverlay?: boolean;

    /** The dimensions of the popover */
    popoverDimensions?: PopoverDimensions;

    /** The ref of the popover */
    withoutOverlayRef?: React.RefObject<HTMLElement>;

    /** Whether we want to show the popover on the right side of the screen */
    fromSidebarMediumScreen?: boolean;

    /** The popover children */
    children: React.ReactNode;
};

export type {PopoverProps, AnchorAlignment};
