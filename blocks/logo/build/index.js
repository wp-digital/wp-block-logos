/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/link-off.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/link-off.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const linkOff = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (linkOff);
//# sourceMappingURL=link-off.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/link.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/link.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const link = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (link);
//# sourceMappingURL=link.js.map

/***/ }),

/***/ "./blocks/logo/src/attributes.js":
/*!***************************************!*\
  !*** ./blocks/logo/src/attributes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./blocks/logo/src/constants/index.js");
/* harmony import */ var _constants_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/editor */ "./blocks/logo/src/constants/editor.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  href: {
    type: 'string',
    source: 'attribute',
    selector: 'a',
    attribute: 'href'
  },
  target: {
    type: 'string',
    source: 'attribute',
    selector: 'a',
    attribute: 'target'
  },
  rel: {
    type: 'string',
    source: 'attribute',
    selector: 'a',
    attribute: 'rel'
  },
  title: {
    type: 'string',
    source: 'attribute',
    selector: 'a',
    attribute: 'title'
  },
  attachmentId: {
    type: 'integer',
    default: 0
  },
  url: {
    type: 'string',
    source: 'attribute',
    selector: 'img',
    attribute: 'src'
  },
  naturalWidth: {
    type: 'number'
  },
  naturalHeight: {
    type: 'number'
  },
  width: {
    type: 'string',
    source: 'attribute',
    selector: 'img',
    attribute: 'width'
  },
  height: {
    type: 'string',
    source: 'attribute',
    selector: 'img',
    attribute: 'height'
  },
  alt: {
    type: 'string',
    source: 'attribute',
    selector: 'img',
    attribute: 'alt'
  },
  hasCaption: {
    type: 'boolean',
    default: _constants_editor__WEBPACK_IMPORTED_MODULE_1__.HAS_CAPTION_DEFAULT
  },
  caption: {
    type: 'string',
    source: 'html',
    selector: `.${_constants__WEBPACK_IMPORTED_MODULE_0__.BLOCK_CLASS_NAME}__caption`
  },
  captionAlignment: {
    type: 'string',
    default: _constants_editor__WEBPACK_IMPORTED_MODULE_1__.CAPTION_ALIGNMENT_DEFAULT
  },
  backgroundColor: {
    type: 'string'
  },
  invert: {
    type: 'number',
    default: 0
  }
});

/***/ }),

/***/ "./blocks/logo/src/constants/editor.js":
/*!*********************************************!*\
  !*** ./blocks/logo/src/constants/editor.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALLOWED_TYPES": () => (/* binding */ ALLOWED_TYPES),
/* harmony export */   "CAPTION_ALIGNMENT_DEFAULT": () => (/* binding */ CAPTION_ALIGNMENT_DEFAULT),
/* harmony export */   "HAS_CAPTION_DEFAULT": () => (/* binding */ HAS_CAPTION_DEFAULT),
/* harmony export */   "SIZE": () => (/* binding */ SIZE),
/* harmony export */   "WIDTH_BASE": () => (/* binding */ WIDTH_BASE)
/* harmony export */ });
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);

const SIZE = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.applyFilters)('innocode.block-logo.size', 'innocode-block-logo');
const ALLOWED_TYPES = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.applyFilters)('innocode.block-logo.allowed_types', ['image']);
const WIDTH_BASE = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.applyFilters)('innocode.block-logo.width_base', 75);
const HAS_CAPTION_DEFAULT = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.applyFilters)('innocode.block-logo.has_caption.default', false);
const CAPTION_ALIGNMENT_DEFAULT = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.applyFilters)('innocode.block-logo.caption_alignment.default', 'none');

/***/ }),

/***/ "./blocks/logo/src/constants/index.js":
/*!********************************************!*\
  !*** ./blocks/logo/src/constants/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BLOCK_CLASS_NAME": () => (/* binding */ BLOCK_CLASS_NAME),
/* harmony export */   "NEW_TAB_REL": () => (/* binding */ NEW_TAB_REL)
/* harmony export */ });
const BLOCK_CLASS_NAME = 'innocode-block-logo';
const NEW_TAB_REL = 'noreferrer noopener';

/***/ }),

/***/ "./blocks/logo/src/edit.js":
/*!*********************************!*\
  !*** ./blocks/logo/src/edit.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/link.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/link-off.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./blocks/logo/src/constants/index.js");
/* harmony import */ var _constants_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants/editor */ "./blocks/logo/src/constants/editor.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icon */ "./blocks/logo/src/icon.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editor.scss */ "./blocks/logo/src/editor.scss");












function Edit(_ref) {
  let {
    attributes,
    setAttributes,
    isSelected,
    context
  } = _ref;
  const {
    href,
    target,
    rel,
    attachmentId,
    url,
    alt,
    title,
    naturalWidth,
    naturalHeight,
    width,
    height,
    hasCaption = _constants_editor__WEBPACK_IMPORTED_MODULE_7__.HAS_CAPTION_DEFAULT,
    caption,
    captionAlignment = _constants_editor__WEBPACK_IMPORTED_MODULE_7__.CAPTION_ALIGNMENT_DEFAULT,
    invert
  } = attributes;
  const {
    'innocode/block-logos-scaleFactor': scaleFactor,
    'innocode/block-logos-backgroundColor': backgroundColor
  } = context;
  const [isEditingURL, setIsEditingURL] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const opensLinkInNewTab = target === '_blank';

  const onChange = (key, value) => {
    setAttributes({
      [key]: value
    });
  };

  const onLogoChange = media => {
    const newAttributes = {
      attachmentId: media.id,
      alt: media.alt || media.filename
    };

    if ((0,lodash__WEBPACK_IMPORTED_MODULE_2__.has)(media, ['sizes', _constants_editor__WEBPACK_IMPORTED_MODULE_7__.SIZE])) {
      newAttributes.url = media.sizes[_constants_editor__WEBPACK_IMPORTED_MODULE_7__.SIZE].url;
      newAttributes.naturalWidth = media.sizes[_constants_editor__WEBPACK_IMPORTED_MODULE_7__.SIZE].width;
      newAttributes.naturalHeight = media.sizes[_constants_editor__WEBPACK_IMPORTED_MODULE_7__.SIZE].height;
    } else {
      newAttributes.url = media.url;
      newAttributes.naturalWidth = media.width;
      newAttributes.naturalHeight = media.height;
    }

    setAttributes(newAttributes);
  };

  const onToggleOpenLinkInNewTab = value => {
    const newTarget = value ? '_blank' : undefined;
    let updatedRel = rel;

    if (newTarget && !rel) {
      updatedRel = _constants__WEBPACK_IMPORTED_MODULE_6__.NEW_TAB_REL;
    } else if (!newTarget && rel === _constants__WEBPACK_IMPORTED_MODULE_6__.NEW_TAB_REL) {
      updatedRel = undefined;
    }

    setAttributes({
      target: newTarget,
      rel: updatedRel
    });
  };

  const onLinkChange = _ref2 => {
    let {
      url: newURL = '',
      opensInNewTab
    } = _ref2;
    onChange('href', newURL);

    if (opensLinkInNewTab !== opensInNewTab) {
      onToggleOpenLinkInNewTab(opensInNewTab);
    }
  };

  const onHasCaptionChange = () => onChange('hasCaption', !hasCaption);

  const onCaptionChange = value => onChange('caption', value);

  const onCaptionAlignmentChange = value => onChange('captionAlignment', value);

  const onInvertChange = value => onChange('invert', value);

  const startLinkEditing = () => {
    setIsEditingURL(true);
  };

  const stopLinkEditing = () => {
    setIsEditingURL(false);
  };

  const preventDefault = event => {
    event.preventDefault();
  };

  const unlink = () => {
    setAttributes({
      href: undefined,
      target: undefined,
      rel: undefined
    });
    setIsEditingURL(false);
  };

  const scale = (naturalWidth, naturalHeight) => {
    const imageRatio = naturalWidth / naturalHeight;
    const width = Math.floor(Math.pow(imageRatio, scaleFactor / 1000) * _constants_editor__WEBPACK_IMPORTED_MODULE_7__.WIDTH_BASE).toString();
    const height = Math.floor(width / imageRatio).toString();
    setAttributes({
      width,
      height
    });
  };

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (naturalWidth && naturalHeight) {
      scale(naturalWidth, naturalHeight);
    }

    if (backgroundColor) {
      setAttributes({
        backgroundColor
      });
    }
  });
  const image = attachmentId && url ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    src: url,
    alt: alt,
    width: width,
    height: height,
    title: title,
    className: `${_constants__WEBPACK_IMPORTED_MODULE_6__.BLOCK_CLASS_NAME}__image`,
    style: invert ? {
      filter: `invert(${invert}%)`
    } : undefined
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
    onSelect: onLogoChange,
    allowedTypes: _constants_editor__WEBPACK_IMPORTED_MODULE_7__.ALLOWED_TYPES,
    value: attachmentId,
    render: _ref3 => {
      let {
        open
      } = _ref3;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        onClick: open,
        icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Icon, {
          icon: attachmentId ? _wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Spinner : _icon__WEBPACK_IMPORTED_MODULE_8__["default"]
        }),
        iconSize: 46,
        text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Set logo', 'innocode-block-logos'),
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Logo placeholder', 'innocode-block-logos'),
        className: `${_constants__WEBPACK_IMPORTED_MODULE_6__.BLOCK_CLASS_NAME}__upload`
      });
    }
  }));
  let captionClassName = `${_constants__WEBPACK_IMPORTED_MODULE_6__.BLOCK_CLASS_NAME}__caption`;

  if (captionAlignment !== 'none') {
    captionClassName += ` ${_constants__WEBPACK_IMPORTED_MODULE_6__.BLOCK_CLASS_NAME}__caption_${captionAlignment}`;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("figure", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: _constants__WEBPACK_IMPORTED_MODULE_6__.BLOCK_CLASS_NAME
  }), {
    style: backgroundColor ? {
      backgroundColor
    } : undefined
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Settings', 'innocode-block-logos'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Show caption', 'innocode-block-logos'),
    checked: hasCaption,
    onChange: onHasCaptionChange
  })), !!attachmentId && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Invert', 'innocode-block-logos'),
    value: invert,
    onChange: onInvertChange,
    withInputField: false,
    allowReset: true,
    resetFallbackValue: 0,
    min: 0,
    max: 100,
    step: 1
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarGroup, null, !href && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__["default"],
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Link', 'innocode-block-logos'),
    onClick: startLinkEditing
  }), !!href && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__["default"],
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Unlink', 'innocode-block-logos'),
    onClick: unlink,
    isActive: true
  }))), (isEditingURL || isSelected && href) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Popover, {
    position: "bottom center",
    onClose: stopLinkEditing
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalLinkControl, {
    value: {
      url: href,
      opensInNewTab: opensLinkInNewTab
    },
    onChange: onLinkChange,
    onRemove: unlink,
    forceIsEditingLink: isEditingURL
  })), href ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
    href: href,
    target: target,
    rel: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(rel) ? undefined : rel,
    className: `${_constants__WEBPACK_IMPORTED_MODULE_6__.BLOCK_CLASS_NAME}__link`,
    onClick: preventDefault
  }, image) : image, hasCaption && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.AlignmentToolbar, {
    value: captionAlignment,
    onChange: onCaptionAlignmentChange
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tagName: "figcaption",
    value: caption,
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Logo caption text', 'innocode-block-logos'),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Add caption', 'innocode-block-logos'),
    onChange: onCaptionChange,
    inlineToolbar: true,
    className: captionClassName
  })));
}

/***/ }),

/***/ "./blocks/logo/src/icon.js":
/*!*********************************!*\
  !*** ./blocks/logo/src/icon.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  let {
    size
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
    width: size,
    height: size,
    viewBox: "0 0 36 36",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
    fillRule: "evenodd",
    d: "M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33ZM18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
    d: "M13 28V9.00002H16.096V25H23V28H13Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
    d: "M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
  }));
});

/***/ }),

/***/ "./blocks/logo/src/index.js":
/*!**********************************!*\
  !*** ./blocks/logo/src/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/logo/src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./blocks/logo/src/save.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes */ "./blocks/logo/src/attributes.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./blocks/logo/src/icon.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./blocks/logo/src/style.scss");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('innocode/block-logo', {
  apiVersion: 2,
  supports: {
    className: false
  },
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_3__["default"],
  usesContext: ['innocode/block-logos-scaleFactor', 'innocode/block-logos-backgroundColor'],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  icon: _icon__WEBPACK_IMPORTED_MODULE_4__["default"],
  parent: ['innocode/block-logos']
});

/***/ }),

/***/ "./blocks/logo/src/save.js":
/*!*********************************!*\
  !*** ./blocks/logo/src/save.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./blocks/logo/src/constants/index.js");
/* harmony import */ var _constants_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants/editor */ "./blocks/logo/src/constants/editor.js");






function save(_ref) {
  let {
    attributes
  } = _ref;
  const {
    href,
    target,
    rel,
    url,
    alt,
    title,
    width,
    height,
    hasCaption = _constants_editor__WEBPACK_IMPORTED_MODULE_5__.HAS_CAPTION_DEFAULT,
    caption,
    captionAlignment,
    backgroundColor,
    invert
  } = attributes;
  const image = !!url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    src: url,
    alt: alt,
    width: width,
    height: height,
    title: title,
    className: `${_constants__WEBPACK_IMPORTED_MODULE_4__.BLOCK_CLASS_NAME}__image`,
    style: invert ? {
      filter: `invert(${invert}%)`
    } : undefined
  });
  let captionClassName = `${_constants__WEBPACK_IMPORTED_MODULE_4__.BLOCK_CLASS_NAME}__caption`;

  if (captionAlignment !== 'none') {
    captionClassName += ` ${_constants__WEBPACK_IMPORTED_MODULE_4__.BLOCK_CLASS_NAME}__caption_${captionAlignment}`;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("figure", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
    className: _constants__WEBPACK_IMPORTED_MODULE_4__.BLOCK_CLASS_NAME
  }), {
    style: backgroundColor ? {
      backgroundColor
    } : undefined
  }), href ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
    href: href,
    target: target,
    rel: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(rel) ? undefined : rel,
    className: `${_constants__WEBPACK_IMPORTED_MODULE_4__.BLOCK_CLASS_NAME}__link`
  }, image) : image, hasCaption && !_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.isEmpty(caption) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
    tagName: "figcaption",
    value: caption,
    className: captionClassName
  }));
}

/***/ }),

/***/ "./blocks/logo/src/editor.scss":
/*!*************************************!*\
  !*** ./blocks/logo/src/editor.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./blocks/logo/src/style.scss":
/*!************************************!*\
  !*** ./blocks/logo/src/style.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkwp_block_logos"] = globalThis["webpackChunkwp_block_logos"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style-index"], () => (__webpack_require__("./blocks/logo/src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map