import {
  ClassNameGenerator_default,
  DefaultPropsProvider_default,
  GlobalStyles_default,
  capitalize,
  clsx_default,
  composeClasses,
  createChainedFunction,
  debounce,
  defaultTheme_default,
  deprecatedPropType,
  extendSxProp,
  generateUtilityClass,
  generateUtilityClasses,
  identifier_default,
  init_DefaultPropsProvider,
  init_capitalize,
  init_clsx,
  init_composeClasses,
  init_createChainedFunction,
  init_debounce,
  init_defaultTheme,
  init_deprecatedPropType,
  init_esm,
  init_generateUtilityClass,
  init_generateUtilityClasses,
  init_identifier,
  init_isMuiElement,
  init_ownerDocument,
  init_ownerWindow,
  init_requirePropFactory,
  init_setRef,
  init_styleFunctionSx,
  init_styled,
  init_system,
  init_unsupportedProp,
  init_useControlled,
  init_useEnhancedEffect,
  init_useEventCallback,
  init_useForkRef,
  init_useId,
  init_useTheme,
  isMuiElement,
  ownerDocument,
  ownerWindow,
  requirePropFactory,
  require_jsx_runtime,
  require_prop_types,
  setRef,
  styled_default,
  unsupportedProp,
  useControlled,
  useDefaultProps,
  useEnhancedEffect_default,
  useEventCallback_default,
  useForkRef,
  useId
} from "./chunk-ZGB3ASBP.js";
import {
  require_react
} from "./chunk-W4EHDCLL.js";
import {
  __esm,
  __export,
  __toESM
} from "./chunk-EWTE5DHJ.js";

// node_modules/@mui/material/utils/capitalize.js
var capitalize_default;
var init_capitalize2 = __esm({
  "node_modules/@mui/material/utils/capitalize.js"() {
    init_capitalize();
    capitalize_default = capitalize;
  }
});

// node_modules/@mui/material/utils/createChainedFunction.js
var createChainedFunction_default;
var init_createChainedFunction2 = __esm({
  "node_modules/@mui/material/utils/createChainedFunction.js"() {
    init_createChainedFunction();
    createChainedFunction_default = createChainedFunction;
  }
});

// node_modules/@mui/material/GlobalStyles/GlobalStyles.js
function GlobalStyles(props) {
  return (0, import_jsx_runtime.jsx)(GlobalStyles_default, {
    ...props,
    defaultTheme: defaultTheme_default,
    themeId: identifier_default
  });
}
var React, import_prop_types, import_jsx_runtime, GlobalStyles_default2;
var init_GlobalStyles = __esm({
  "node_modules/@mui/material/GlobalStyles/GlobalStyles.js"() {
    "use client";
    React = __toESM(require_react());
    import_prop_types = __toESM(require_prop_types());
    init_system();
    init_defaultTheme();
    init_identifier();
    import_jsx_runtime = __toESM(require_jsx_runtime());
    true ? GlobalStyles.propTypes = {
      // ┌────────────────────────────── Warning ──────────────────────────────┐
      // │ These PropTypes are generated from the TypeScript type definitions. │
      // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
      // └─────────────────────────────────────────────────────────────────────┘
      /**
       * The styles you want to apply globally.
       */
      styles: import_prop_types.default.oneOfType([import_prop_types.default.array, import_prop_types.default.func, import_prop_types.default.number, import_prop_types.default.object, import_prop_types.default.string, import_prop_types.default.bool])
    } : void 0;
    GlobalStyles_default2 = GlobalStyles;
  }
});

// node_modules/@mui/material/GlobalStyles/index.js
var init_GlobalStyles2 = __esm({
  "node_modules/@mui/material/GlobalStyles/index.js"() {
    init_GlobalStyles();
  }
});

// node_modules/@mui/material/utils/memoTheme.js
function memoTheme(styleFn) {
  let lastValue;
  let lastTheme;
  return (props) => {
    let value = lastValue;
    if (value === void 0 || props.theme !== lastTheme) {
      arg.theme = props.theme;
      value = styleFn(arg);
      lastValue = value;
      lastTheme = props.theme;
    }
    return value;
  };
}
var arg;
var init_memoTheme = __esm({
  "node_modules/@mui/material/utils/memoTheme.js"() {
    arg = {
      theme: void 0
    };
  }
});

// node_modules/@mui/material/SvgIcon/svgIconClasses.js
function getSvgIconUtilityClass(slot) {
  return generateUtilityClass("MuiSvgIcon", slot);
}
var svgIconClasses, svgIconClasses_default;
var init_svgIconClasses = __esm({
  "node_modules/@mui/material/SvgIcon/svgIconClasses.js"() {
    init_generateUtilityClasses();
    init_generateUtilityClass();
    svgIconClasses = generateUtilityClasses("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
    svgIconClasses_default = svgIconClasses;
  }
});

// node_modules/@mui/material/zero-styled/index.js
function globalCss(styles) {
  return function GlobalStylesWrapper(props) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      (0, import_jsx_runtime2.jsx)(GlobalStyles_default2, {
        styles: typeof styles === "function" ? (theme) => styles({
          theme,
          ...props
        }) : styles
      })
    );
  };
}
function internal_createExtendSxProp() {
  return extendSxProp;
}
var React2, import_jsx_runtime2;
var init_zero_styled = __esm({
  "node_modules/@mui/material/zero-styled/index.js"() {
    React2 = __toESM(require_react());
    init_styleFunctionSx();
    init_useTheme();
    init_GlobalStyles2();
    import_jsx_runtime2 = __toESM(require_jsx_runtime());
    init_system();
    init_styled();
  }
});

// node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
function DefaultPropsProvider(props) {
  return (0, import_jsx_runtime3.jsx)(DefaultPropsProvider_default, {
    ...props
  });
}
function useDefaultProps2(params) {
  return useDefaultProps(params);
}
var React3, import_prop_types2, import_jsx_runtime3;
var init_DefaultPropsProvider2 = __esm({
  "node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"() {
    "use client";
    React3 = __toESM(require_react());
    import_prop_types2 = __toESM(require_prop_types());
    init_DefaultPropsProvider();
    import_jsx_runtime3 = __toESM(require_jsx_runtime());
    true ? DefaultPropsProvider.propTypes = {
      // ┌────────────────────────────── Warning ──────────────────────────────┐
      // │ These PropTypes are generated from the TypeScript type definitions. │
      // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
      // └─────────────────────────────────────────────────────────────────────┘
      /**
       * @ignore
       */
      children: import_prop_types2.default.node,
      /**
       * @ignore
       */
      value: import_prop_types2.default.object.isRequired
    } : void 0;
  }
});

// node_modules/@mui/material/DefaultPropsProvider/index.js
var init_DefaultPropsProvider3 = __esm({
  "node_modules/@mui/material/DefaultPropsProvider/index.js"() {
    init_DefaultPropsProvider2();
  }
});

// node_modules/@mui/material/SvgIcon/SvgIcon.js
var React4, import_prop_types3, import_jsx_runtime4, useUtilityClasses, SvgIconRoot, SvgIcon, SvgIcon_default;
var init_SvgIcon = __esm({
  "node_modules/@mui/material/SvgIcon/SvgIcon.js"() {
    "use client";
    React4 = __toESM(require_react());
    import_prop_types3 = __toESM(require_prop_types());
    init_clsx();
    init_composeClasses();
    init_capitalize2();
    init_zero_styled();
    init_memoTheme();
    init_DefaultPropsProvider3();
    init_svgIconClasses();
    import_jsx_runtime4 = __toESM(require_jsx_runtime());
    useUtilityClasses = (ownerState) => {
      const {
        color,
        fontSize,
        classes
      } = ownerState;
      const slots = {
        root: ["root", color !== "inherit" && `color${capitalize_default(color)}`, `fontSize${capitalize_default(fontSize)}`]
      };
      return composeClasses(slots, getSvgIconUtilityClass, classes);
    };
    SvgIconRoot = styled_default("svg", {
      name: "MuiSvgIcon",
      slot: "Root",
      overridesResolver: (props, styles) => {
        const {
          ownerState
        } = props;
        return [styles.root, ownerState.color !== "inherit" && styles[`color${capitalize_default(ownerState.color)}`], styles[`fontSize${capitalize_default(ownerState.fontSize)}`]];
      }
    })(memoTheme(({
      theme
    }) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
      return {
        userSelect: "none",
        width: "1em",
        height: "1em",
        display: "inline-block",
        flexShrink: 0,
        transition: (_d = (_a = theme.transitions) == null ? void 0 : _a.create) == null ? void 0 : _d.call(_a, "fill", {
          duration: (_c = (_b = (theme.vars ?? theme).transitions) == null ? void 0 : _b.duration) == null ? void 0 : _c.shorter
        }),
        variants: [
          {
            props: (props) => !props.hasSvgAsChild,
            style: {
              // the <svg> will define the property that has `currentColor`
              // for example heroicons uses fill="none" and stroke="currentColor"
              fill: "currentColor"
            }
          },
          {
            props: {
              fontSize: "inherit"
            },
            style: {
              fontSize: "inherit"
            }
          },
          {
            props: {
              fontSize: "small"
            },
            style: {
              fontSize: ((_f = (_e = theme.typography) == null ? void 0 : _e.pxToRem) == null ? void 0 : _f.call(_e, 20)) || "1.25rem"
            }
          },
          {
            props: {
              fontSize: "medium"
            },
            style: {
              fontSize: ((_h = (_g = theme.typography) == null ? void 0 : _g.pxToRem) == null ? void 0 : _h.call(_g, 24)) || "1.5rem"
            }
          },
          {
            props: {
              fontSize: "large"
            },
            style: {
              fontSize: ((_j = (_i = theme.typography) == null ? void 0 : _i.pxToRem) == null ? void 0 : _j.call(_i, 35)) || "2.1875rem"
            }
          },
          // TODO v5 deprecate color prop, v6 remove for sx
          ...Object.entries((theme.vars ?? theme).palette).filter(([, value]) => value && value.main).map(([color]) => {
            var _a2, _b2;
            return {
              props: {
                color
              },
              style: {
                color: (_b2 = (_a2 = (theme.vars ?? theme).palette) == null ? void 0 : _a2[color]) == null ? void 0 : _b2.main
              }
            };
          }),
          {
            props: {
              color: "action"
            },
            style: {
              color: (_l = (_k = (theme.vars ?? theme).palette) == null ? void 0 : _k.action) == null ? void 0 : _l.active
            }
          },
          {
            props: {
              color: "disabled"
            },
            style: {
              color: (_n = (_m = (theme.vars ?? theme).palette) == null ? void 0 : _m.action) == null ? void 0 : _n.disabled
            }
          },
          {
            props: {
              color: "inherit"
            },
            style: {
              color: void 0
            }
          }
        ]
      };
    }));
    SvgIcon = React4.forwardRef(function SvgIcon2(inProps, ref) {
      const props = useDefaultProps2({
        props: inProps,
        name: "MuiSvgIcon"
      });
      const {
        children,
        className,
        color = "inherit",
        component = "svg",
        fontSize = "medium",
        htmlColor,
        inheritViewBox = false,
        titleAccess,
        viewBox = "0 0 24 24",
        ...other
      } = props;
      const hasSvgAsChild = React4.isValidElement(children) && children.type === "svg";
      const ownerState = {
        ...props,
        color,
        component,
        fontSize,
        instanceFontSize: inProps.fontSize,
        inheritViewBox,
        viewBox,
        hasSvgAsChild
      };
      const more = {};
      if (!inheritViewBox) {
        more.viewBox = viewBox;
      }
      const classes = useUtilityClasses(ownerState);
      return (0, import_jsx_runtime4.jsxs)(SvgIconRoot, {
        as: component,
        className: clsx_default(classes.root, className),
        focusable: "false",
        color: htmlColor,
        "aria-hidden": titleAccess ? void 0 : true,
        role: titleAccess ? "img" : void 0,
        ref,
        ...more,
        ...other,
        ...hasSvgAsChild && children.props,
        ownerState,
        children: [hasSvgAsChild ? children.props.children : children, titleAccess ? (0, import_jsx_runtime4.jsx)("title", {
          children: titleAccess
        }) : null]
      });
    });
    true ? SvgIcon.propTypes = {
      // ┌────────────────────────────── Warning ──────────────────────────────┐
      // │ These PropTypes are generated from the TypeScript type definitions. │
      // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
      // └─────────────────────────────────────────────────────────────────────┘
      /**
       * Node passed into the SVG element.
       */
      children: import_prop_types3.default.node,
      /**
       * Override or extend the styles applied to the component.
       */
      classes: import_prop_types3.default.object,
      /**
       * @ignore
       */
      className: import_prop_types3.default.string,
      /**
       * The color of the component.
       * It supports both default and custom theme colors, which can be added as shown in the
       * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
       * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
       * @default 'inherit'
       */
      color: import_prop_types3.default.oneOfType([import_prop_types3.default.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types3.default.string]),
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: import_prop_types3.default.elementType,
      /**
       * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
       * @default 'medium'
       */
      fontSize: import_prop_types3.default.oneOfType([import_prop_types3.default.oneOf(["inherit", "large", "medium", "small"]), import_prop_types3.default.string]),
      /**
       * Applies a color attribute to the SVG element.
       */
      htmlColor: import_prop_types3.default.string,
      /**
       * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
       * prop will be ignored.
       * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
       * `component`'s viewBox to the root node.
       * @default false
       */
      inheritViewBox: import_prop_types3.default.bool,
      /**
       * The shape-rendering attribute. The behavior of the different options is described on the
       * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
       * If you are having issues with blurry icons you should investigate this prop.
       */
      shapeRendering: import_prop_types3.default.string,
      /**
       * The system prop that allows defining system overrides as well as additional CSS styles.
       */
      sx: import_prop_types3.default.oneOfType([import_prop_types3.default.arrayOf(import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object, import_prop_types3.default.bool])), import_prop_types3.default.func, import_prop_types3.default.object]),
      /**
       * Provides a human-readable title for the element that contains it.
       * https://www.w3.org/TR/SVG-access/#Equivalent
       */
      titleAccess: import_prop_types3.default.string,
      /**
       * Allows you to redefine what the coordinates without units mean inside an SVG element.
       * For example, if the SVG element is 500 (width) by 200 (height),
       * and you pass viewBox="0 0 50 20",
       * this means that the coordinates inside the SVG will go from the top left corner (0,0)
       * to bottom right (50,20) and each unit will be worth 10px.
       * @default '0 0 24 24'
       */
      viewBox: import_prop_types3.default.string
    } : void 0;
    if (SvgIcon) {
      SvgIcon.muiName = "SvgIcon";
    }
    SvgIcon_default = SvgIcon;
  }
});

// node_modules/@mui/material/SvgIcon/index.js
var init_SvgIcon2 = __esm({
  "node_modules/@mui/material/SvgIcon/index.js"() {
    "use client";
    init_SvgIcon();
    init_svgIconClasses();
    init_svgIconClasses();
  }
});

// node_modules/@mui/material/utils/createSvgIcon.js
function createSvgIcon(path, displayName) {
  function Component(props, ref) {
    return (0, import_jsx_runtime5.jsx)(SvgIcon_default, {
      "data-testid": `${displayName}Icon`,
      ref,
      ...props,
      children: path
    });
  }
  if (true) {
    Component.displayName = `${displayName}Icon`;
  }
  Component.muiName = SvgIcon_default.muiName;
  return React5.memo(React5.forwardRef(Component));
}
var React5, import_jsx_runtime5;
var init_createSvgIcon = __esm({
  "node_modules/@mui/material/utils/createSvgIcon.js"() {
    "use client";
    React5 = __toESM(require_react());
    init_SvgIcon2();
    import_jsx_runtime5 = __toESM(require_jsx_runtime());
  }
});

// node_modules/@mui/material/utils/debounce.js
var debounce_default;
var init_debounce2 = __esm({
  "node_modules/@mui/material/utils/debounce.js"() {
    init_debounce();
    debounce_default = debounce;
  }
});

// node_modules/@mui/material/utils/deprecatedPropType.js
var deprecatedPropType_default;
var init_deprecatedPropType2 = __esm({
  "node_modules/@mui/material/utils/deprecatedPropType.js"() {
    init_deprecatedPropType();
    deprecatedPropType_default = deprecatedPropType;
  }
});

// node_modules/@mui/material/utils/isMuiElement.js
var isMuiElement_default;
var init_isMuiElement2 = __esm({
  "node_modules/@mui/material/utils/isMuiElement.js"() {
    init_isMuiElement();
    isMuiElement_default = isMuiElement;
  }
});

// node_modules/@mui/material/utils/ownerDocument.js
var ownerDocument_default;
var init_ownerDocument2 = __esm({
  "node_modules/@mui/material/utils/ownerDocument.js"() {
    init_ownerDocument();
    ownerDocument_default = ownerDocument;
  }
});

// node_modules/@mui/material/utils/ownerWindow.js
var ownerWindow_default;
var init_ownerWindow2 = __esm({
  "node_modules/@mui/material/utils/ownerWindow.js"() {
    init_ownerWindow();
    ownerWindow_default = ownerWindow;
  }
});

// node_modules/@mui/material/utils/requirePropFactory.js
var requirePropFactory_default;
var init_requirePropFactory2 = __esm({
  "node_modules/@mui/material/utils/requirePropFactory.js"() {
    init_requirePropFactory();
    requirePropFactory_default = requirePropFactory;
  }
});

// node_modules/@mui/material/utils/setRef.js
var setRef_default;
var init_setRef2 = __esm({
  "node_modules/@mui/material/utils/setRef.js"() {
    init_setRef();
    setRef_default = setRef;
  }
});

// node_modules/@mui/material/utils/useEnhancedEffect.js
var useEnhancedEffect_default2;
var init_useEnhancedEffect2 = __esm({
  "node_modules/@mui/material/utils/useEnhancedEffect.js"() {
    "use client";
    init_useEnhancedEffect();
    useEnhancedEffect_default2 = useEnhancedEffect_default;
  }
});

// node_modules/@mui/material/utils/useId.js
var useId_default;
var init_useId2 = __esm({
  "node_modules/@mui/material/utils/useId.js"() {
    "use client";
    init_useId();
    useId_default = useId;
  }
});

// node_modules/@mui/material/utils/unsupportedProp.js
var unsupportedProp_default;
var init_unsupportedProp2 = __esm({
  "node_modules/@mui/material/utils/unsupportedProp.js"() {
    init_unsupportedProp();
    unsupportedProp_default = unsupportedProp;
  }
});

// node_modules/@mui/material/utils/useControlled.js
var useControlled_default;
var init_useControlled2 = __esm({
  "node_modules/@mui/material/utils/useControlled.js"() {
    "use client";
    init_useControlled();
    useControlled_default = useControlled;
  }
});

// node_modules/@mui/material/utils/useEventCallback.js
var useEventCallback_default2;
var init_useEventCallback2 = __esm({
  "node_modules/@mui/material/utils/useEventCallback.js"() {
    "use client";
    init_useEventCallback();
    useEventCallback_default2 = useEventCallback_default;
  }
});

// node_modules/@mui/material/utils/useForkRef.js
var useForkRef_default;
var init_useForkRef2 = __esm({
  "node_modules/@mui/material/utils/useForkRef.js"() {
    "use client";
    init_useForkRef();
    useForkRef_default = useForkRef;
  }
});

// node_modules/@mui/material/utils/index.js
var utils_exports = {};
__export(utils_exports, {
  capitalize: () => capitalize_default,
  createChainedFunction: () => createChainedFunction_default,
  createSvgIcon: () => createSvgIcon,
  debounce: () => debounce_default,
  deprecatedPropType: () => deprecatedPropType_default,
  isMuiElement: () => isMuiElement_default,
  ownerDocument: () => ownerDocument_default,
  ownerWindow: () => ownerWindow_default,
  requirePropFactory: () => requirePropFactory_default,
  setRef: () => setRef_default,
  unstable_ClassNameGenerator: () => unstable_ClassNameGenerator,
  unstable_memoTheme: () => memoTheme,
  unstable_useEnhancedEffect: () => useEnhancedEffect_default2,
  unstable_useId: () => useId_default,
  unsupportedProp: () => unsupportedProp_default,
  useControlled: () => useControlled_default,
  useEventCallback: () => useEventCallback_default2,
  useForkRef: () => useForkRef_default
});
var unstable_ClassNameGenerator;
var init_utils = __esm({
  "node_modules/@mui/material/utils/index.js"() {
    "use client";
    init_esm();
    init_capitalize2();
    init_createChainedFunction2();
    init_createSvgIcon();
    init_debounce2();
    init_deprecatedPropType2();
    init_isMuiElement2();
    init_memoTheme();
    init_ownerDocument2();
    init_ownerWindow2();
    init_requirePropFactory2();
    init_setRef2();
    init_useEnhancedEffect2();
    init_useId2();
    init_unsupportedProp2();
    init_useControlled2();
    init_useEventCallback2();
    init_useForkRef2();
    unstable_ClassNameGenerator = {
      configure: (generator) => {
        if (true) {
          console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join("\n"));
        }
        ClassNameGenerator_default.configure(generator);
      }
    };
  }
});

export {
  capitalize_default,
  init_capitalize2 as init_capitalize,
  createChainedFunction_default,
  init_createChainedFunction2 as init_createChainedFunction,
  GlobalStyles_default2 as GlobalStyles_default,
  init_GlobalStyles2 as init_GlobalStyles,
  globalCss,
  internal_createExtendSxProp,
  init_zero_styled,
  memoTheme,
  init_memoTheme,
  useDefaultProps2 as useDefaultProps,
  init_DefaultPropsProvider3 as init_DefaultPropsProvider,
  getSvgIconUtilityClass,
  svgIconClasses_default,
  SvgIcon_default,
  init_SvgIcon2 as init_SvgIcon,
  createSvgIcon,
  init_createSvgIcon,
  debounce_default,
  init_debounce2 as init_debounce,
  deprecatedPropType_default,
  isMuiElement_default,
  init_isMuiElement2 as init_isMuiElement,
  ownerDocument_default,
  init_ownerDocument2 as init_ownerDocument,
  ownerWindow_default,
  init_ownerWindow2 as init_ownerWindow,
  requirePropFactory_default,
  init_requirePropFactory2 as init_requirePropFactory,
  setRef_default,
  useEnhancedEffect_default2 as useEnhancedEffect_default,
  init_useEnhancedEffect2 as init_useEnhancedEffect,
  useId_default,
  init_useId2 as init_useId,
  unsupportedProp_default,
  init_unsupportedProp2 as init_unsupportedProp,
  useControlled_default,
  init_useControlled2 as init_useControlled,
  useEventCallback_default2 as useEventCallback_default,
  init_useEventCallback2 as init_useEventCallback,
  useForkRef_default,
  init_useForkRef2 as init_useForkRef,
  unstable_ClassNameGenerator,
  utils_exports,
  init_utils
};
//# sourceMappingURL=chunk-T7WND7EZ.js.map
