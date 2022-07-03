import { applyFilters } from '@wordpress/hooks';

export const SIZE = applyFilters('innocode.block-logo.size', 'innocode-block-logo');
export const ALLOWED_TYPES = applyFilters('innocode.block-logo.allowed_types', ['image']);
export const WIDTH_BASE = applyFilters('innocode.block-logo.width_base', 75);
export const HAS_CAPTION_DEFAULT = applyFilters('innocode.block-logo.has_caption.default', false);
export const CAPTION_ALIGNMENT_DEFAULT = applyFilters('innocode.block-logo.caption_alignment.default', 'none');
