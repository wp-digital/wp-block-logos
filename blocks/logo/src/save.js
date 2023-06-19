import { has, isEmpty } from 'lodash';

import { RichText, useBlockProps } from '@wordpress/block-editor';

import { BLOCK_CLASS_NAME } from './constants';
import { HAS_CAPTION_DEFAULT, CAPTION_ALIGNMENT_DEFAULT, HAS_ICON_DEFAULT, ICONS } from './constants/editor';
import { Icon } from '@wordpress/components';

export default function save({ attributes }) {
	const {
		href,
		target,
		rel,
		url,
		alt,
		title,
		width,
		height,
		hasCaption = HAS_CAPTION_DEFAULT,
		caption,
		captionAlignment = CAPTION_ALIGNMENT_DEFAULT,
		backgroundColor,
		color,
		invert,
		hasIcon = HAS_ICON_DEFAULT,
		icon,
	} = attributes;

	let image = null;

	if (ICONS.length && hasIcon) {
		if (icon) {
			const value = ICONS.find((item) => item.value === icon);

			if (value) {
				image = (
					<Icon
						icon={has(value, 'icon') ? value.icon : value.value}
						className={`${BLOCK_CLASS_NAME}__icon`}
						style={invert ? { filter: `invert(${invert}%)` } : undefined}
					/>
				);
			}
		}
	} else if (url) {
		image = (
			<img
				src={url}
				alt={alt}
				width={width}
				height={height}
				title={title}
				className={`${BLOCK_CLASS_NAME}__image`}
				style={invert ? { filter: `invert(${invert}%)` } : undefined}
			/>
		);
	}

	let captionClassName = `${BLOCK_CLASS_NAME}__caption`;

	if (captionAlignment !== 'none') {
		captionClassName += ` ${BLOCK_CLASS_NAME}__caption_${captionAlignment}`;
	}

	return (
		<figure
			{...useBlockProps.save({
				className: BLOCK_CLASS_NAME,
			})}
			style={backgroundColor ? { backgroundColor } : undefined}
		>
			{href ? (
				<a href={href} target={target} rel={isEmpty(rel) ? undefined : rel} className={`${BLOCK_CLASS_NAME}__link`}>
					{image}
				</a>
			) : (
				image
			)}
			{hasCaption && !RichText.isEmpty(caption) && (
				<RichText.Content
					tagName="figcaption"
					value={caption}
					className={captionClassName}
					style={color ? { color } : undefined}
				/>
			)}
		</figure>
	);
}
