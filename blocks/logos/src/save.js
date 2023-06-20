import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';

import {
	BLOCK_CLASS_NAME,
	TITLE_TAG,
	HAS_TITLE_DEFAULT,
	HAS_DESCRIPTION_DEFAULT,
	ALIGNMENT_DEFAULT,
	ALLOWED_BLOCKS,
} from './constants';

export default function save({ attributes }) {
	const {
		hasTitle = HAS_TITLE_DEFAULT,
		title,
		hasDescription = HAS_DESCRIPTION_DEFAULT,
		description,
		alignment = ALIGNMENT_DEFAULT,
	} = attributes;

	let listClassName = `${BLOCK_CLASS_NAME}__list`;

	if (alignment !== 'none') {
		listClassName += ` ${BLOCK_CLASS_NAME}__list_${alignment}`;
	}

	return (
		<div
			{...useBlockProps.save({
				className: BLOCK_CLASS_NAME,
			})}
		>
			<div className={`${BLOCK_CLASS_NAME}__header`}>
				{hasTitle && <RichText.Content tagName={TITLE_TAG} className={`${BLOCK_CLASS_NAME}__title`} value={title} />}
				{hasDescription && (
					<RichText.Content
						tagName="div"
						multiline="p"
						value={description}
						className={`${BLOCK_CLASS_NAME}__description`}
					/>
				)}
			</div>
			<div className={listClassName}>
				<InnerBlocks.Content allowedBlocks={ALLOWED_BLOCKS} />
			</div>
		</div>
	);
}
