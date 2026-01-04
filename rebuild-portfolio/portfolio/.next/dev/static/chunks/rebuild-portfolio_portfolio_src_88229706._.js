(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/rebuild-portfolio/portfolio/src/lib/hooks/useMagneticCursor.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMagneticCursor",
    ()=>useMagneticCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rebuild-portfolio/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useMagneticCursor(strength = 0.3) {
    _s();
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const handleMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMagneticCursor.useCallback[handleMouseMove]": (e)=>{
            const rect = e.currentTarget.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) * strength;
            const y = (e.clientY - rect.top - rect.height / 2) * strength;
            setPosition({
                x,
                y
            });
        }
    }["useMagneticCursor.useCallback[handleMouseMove]"], [
        strength
    ]);
    const handleMouseLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMagneticCursor.useCallback[handleMouseLeave]": ()=>{
            setPosition({
                x: 0,
                y: 0
            });
        }
    }["useMagneticCursor.useCallback[handleMouseLeave]"], []);
    const style = {
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.2s cubic-bezier(0.4, 0.0, 0.2, 1)'
    };
    return {
        position,
        handleMouseMove,
        handleMouseLeave,
        style
    };
}
_s(useMagneticCursor, "9J/a1Klj1ih+0z947kXcpx0xf6Y=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/rebuild-portfolio/portfolio/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clamp",
    ()=>clamp,
    "cn",
    ()=>cn,
    "debounce",
    ()=>debounce,
    "formatNumber",
    ()=>formatNumber,
    "lerp",
    ()=>lerp,
    "mapRange",
    ()=>mapRange,
    "scrollToElement",
    ()=>scrollToElement,
    "throttle",
    ()=>throttle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rebuild-portfolio/portfolio/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rebuild-portfolio/portfolio/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
function scrollToElement(elementId, offset = 0) {
    const element = document.getElementById(elementId);
    if (!element) return;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}
function debounce(func, wait) {
    let timeout = null;
    return function executedFunction(...args) {
        const later = ()=>{
            timeout = null;
            func(...args);
        };
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
function throttle(func, limit) {
    let inThrottle = false;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(()=>inThrottle = false, limit);
        }
    };
}
function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
function lerp(start, end, factor) {
    return start + (end - start) * factor;
}
function mapRange(value, inMin, inMax, outMin, outMax) {
    return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/rebuild-portfolio/portfolio/src/components/layouts/Navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navigation",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rebuild-portfolio/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rebuild-portfolio/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rebuild-portfolio/portfolio/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rebuild-portfolio/portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rebuild-portfolio/portfolio/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rebuild-portfolio/portfolio/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$src$2f$lib$2f$hooks$2f$useMagneticCursor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rebuild-portfolio/portfolio/src/lib/hooks/useMagneticCursor.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rebuild-portfolio/portfolio/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const navItems = [
    {
        label: 'Work',
        href: '/work'
    },
    {
        label: 'Insights',
        href: '/insights'
    },
    {
        label: 'About',
        href: '/about'
    },
    {
        label: 'Connect',
        href: '/connect'
    }
];
function NavItem({ label, href }) {
    _s();
    const { handleMouseMove, handleMouseLeave, style } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$src$2f$lib$2f$hooks$2f$useMagneticCursor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMagneticCursor"])(0.4);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        style: style,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            className: "luxury-link relative text-sm font-medium text-platinum transition-colors duration-200",
            children: label
        }, void 0, false, {
            fileName: "[project]/rebuild-portfolio/portfolio/src/components/layouts/Navigation.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/rebuild-portfolio/portfolio/src/components/layouts/Navigation.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(NavItem, "9w0IAHKyAM0GlAFEx3PBELBWFCw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$src$2f$lib$2f$hooks$2f$useMagneticCursor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMagneticCursor"]
    ];
});
_c = NavItem;
function Navigation() {
    _s1();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [maxScroll, setMaxScroll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1000);
    const { scrollY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])();
    // Transform background opacity based on scroll
    const backgroundOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollY, [
        0,
        100
    ], [
        0,
        0.95
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigation.useEffect": ()=>{
            const handleScroll = {
                "Navigation.useEffect.handleScroll": ()=>{
                    setScrolled(window.scrollY > 50);
                }
            }["Navigation.useEffect.handleScroll"];
            const updateMaxScroll = {
                "Navigation.useEffect.updateMaxScroll": ()=>{
                    setMaxScroll(document.documentElement.scrollHeight - window.innerHeight);
                }
            }["Navigation.useEffect.updateMaxScroll"];
            // Calculate initial max scroll
            updateMaxScroll();
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            window.addEventListener('resize', updateMaxScroll, {
                passive: true
            });
            return ({
                "Navigation.useEffect": ()=>{
                    window.removeEventListener('scroll', handleScroll);
                    window.removeEventListener('resize', updateMaxScroll);
                }
            })["Navigation.useEffect"];
        }
    }["Navigation.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].header, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('fixed top-0 left-0 right-0 z-50 transition-all duration-500', scrolled ? 'py-4' : 'py-6'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 -z-10 glass",
                style: {
                    opacity: backgroundOpacity
                }
            }, void 0, false, {
                fileName: "[project]/rebuild-portfolio/portfolio/src/components/layouts/Navigation.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-wide",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "relative group",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                className: "text-2xl font-display font-normal text-platinum transition-colors duration-200 group-hover:text-teal-brilliant",
                                whileHover: {
                                    scale: 1.02
                                },
                                transition: {
                                    type: 'spring',
                                    stiffness: 400,
                                    damping: 10
                                },
                                children: "AP"
                            }, void 0, false, {
                                fileName: "[project]/rebuild-portfolio/portfolio/src/components/layouts/Navigation.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/rebuild-portfolio/portfolio/src/components/layouts/Navigation.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-10",
                            children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                    ...item
                                }, item.href, false, {
                                    fileName: "[project]/rebuild-portfolio/portfolio/src/components/layouts/Navigation.tsx",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/rebuild-portfolio/portfolio/src/components/layouts/Navigation.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/rebuild-portfolio/portfolio/src/components/layouts/Navigation.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/rebuild-portfolio/portfolio/src/components/layouts/Navigation.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-brilliant to-transparent origin-left",
                style: {
                    scaleX: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollY, [
                        0,
                        maxScroll
                    ], [
                        0,
                        1
                    ])
                }
            }, void 0, false, {
                fileName: "[project]/rebuild-portfolio/portfolio/src/components/layouts/Navigation.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/rebuild-portfolio/portfolio/src/components/layouts/Navigation.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_s1(Navigation, "fZR+ae1YJl4Vo6EG80ysSY2Xr7I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c1 = Navigation;
var _c, _c1;
__turbopack_context__.k.register(_c, "NavItem");
__turbopack_context__.k.register(_c1, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/rebuild-portfolio/portfolio/src/components/layouts/SmoothScroll.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SmoothScroll",
    ()=>SmoothScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rebuild-portfolio/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rebuild-portfolio/portfolio/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function SmoothScroll() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmoothScroll.useEffect": ()=>{
            const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$rebuild$2d$portfolio$2f$portfolio$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                duration: 1.2,
                easing: {
                    "SmoothScroll.useEffect": (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t))
                }["SmoothScroll.useEffect"],
                smoothWheel: true,
                smoothTouch: false,
                touchMultiplier: 2
            });
            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
            return ({
                "SmoothScroll.useEffect": ()=>{
                    lenis.destroy();
                }
            })["SmoothScroll.useEffect"];
        }
    }["SmoothScroll.useEffect"], []);
    return null;
}
_s(SmoothScroll, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = SmoothScroll;
var _c;
__turbopack_context__.k.register(_c, "SmoothScroll");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=rebuild-portfolio_portfolio_src_88229706._.js.map