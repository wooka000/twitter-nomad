"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/tweet/upload";
exports.ids = ["pages/tweet/upload"];
exports.modules = {

/***/ "./lib/client/useMutation.tsx":
/*!************************************!*\
  !*** ./lib/client/useMutation.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useMutation)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useMutation(url) {\n    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n        loading: false,\n        data: undefined,\n        error: undefined\n    });\n    function mutation(data1) {\n        setState((prev)=>({\n                ...prev,\n                loading: true\n            })\n        );\n        fetch(url, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data1)\n        }).then((response)=>response.json().catch(()=>{})\n        ).then((data)=>setState((prev)=>({\n                    ...prev,\n                    data\n                })\n            )\n        ).catch((error)=>setState((prev)=>({\n                    ...prev,\n                    error\n                })\n            )\n        ).finally(()=>setState((prev)=>({\n                    ...prev,\n                    loading: false\n                })\n            )\n        );\n    }\n    return [\n        mutation,\n        {\n            ...state\n        }\n    ];\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY2xpZW50L3VzZU11dGF0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUM7QUFTbEIsU0FBU0MsV0FBVyxDQUNqQ0MsR0FBVyxFQUNXO0lBQ3RCLE1BQU0sRUFaUixHQVlTQyxLQUFLLEdBWmQsR0FZZ0JDLFFBQVEsTUFBSUosK0NBQVEsQ0FBc0I7UUFDdERLLE9BQU8sRUFBRSxLQUFLO1FBQ2RDLElBQUksRUFBRUMsU0FBUztRQUNmQyxLQUFLLEVBQUVELFNBQVM7S0FDakIsQ0FBQztJQUNGLFNBQVNFLFFBQVEsQ0FBQ0gsS0FBUyxFQUFFO1FBQzNCRixRQUFRLENBQUMsQ0FBQ00sSUFBSSxHQUFLLENBQUM7Z0JBQUUsR0FBR0EsSUFBSTtnQkFBRUwsT0FBTyxFQUFFLElBQUk7YUFBRSxDQUFDO1FBQUEsQ0FBQyxDQUFDO1FBQ2pETSxLQUFLLENBQUNULEdBQUcsRUFBRTtZQUNUVSxNQUFNLEVBQUUsTUFBTTtZQUNkQyxPQUFPLEVBQUU7Z0JBQ1AsY0FBYyxFQUFFLGtCQUFrQjthQUNuQztZQUNEQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDVixLQUFJLENBQUM7U0FDM0IsQ0FBQyxDQUNDVyxJQUFJLENBQUMsQ0FBQ0MsUUFBUSxHQUFLQSxRQUFRLENBQUNDLElBQUksRUFBRSxDQUFDQyxLQUFLLENBQUMsSUFBTSxFQUFFLENBQUM7UUFBQSxDQUFDLENBQ25ESCxJQUFJLENBQUMsQ0FBQ1gsSUFBSSxHQUFLRixRQUFRLENBQUMsQ0FBQ00sSUFBSSxHQUFLLENBQUM7b0JBQUUsR0FBR0EsSUFBSTtvQkFBRUosSUFBSTtpQkFBRSxDQUFDO1lBQUEsQ0FBQztRQUFBLENBQUMsQ0FDdkRjLEtBQUssQ0FBQyxDQUFDWixLQUFLLEdBQUtKLFFBQVEsQ0FBQyxDQUFDTSxJQUFJLEdBQUssQ0FBQztvQkFBRSxHQUFHQSxJQUFJO29CQUFFRixLQUFLO2lCQUFFLENBQUM7WUFBQSxDQUFDO1FBQUEsQ0FBQyxDQUMxRGEsT0FBTyxDQUFDLElBQU1qQixRQUFRLENBQUMsQ0FBQ00sSUFBSSxHQUFLLENBQUM7b0JBQUUsR0FBR0EsSUFBSTtvQkFBRUwsT0FBTyxFQUFFLEtBQUs7aUJBQUUsQ0FBQztZQUFBLENBQUM7UUFBQSxDQUFDLENBQUM7S0FDckU7SUFDRCxPQUFPO1FBQUNJLFFBQVE7UUFBRTtZQUFFLEdBQUdOLEtBQUs7U0FBRTtLQUFDLENBQUM7Q0FDakMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXR5cGVzY3JpcHQtdGFpbHdpbmQtYmx1ZXByaW50Ly4vbGliL2NsaWVudC91c2VNdXRhdGlvbi50c3g/MDYxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIFVzZU11dGF0aW9uU3RhdGU8VD4ge1xyXG4gIGxvYWRpbmc6IGJvb2xlYW47XHJcbiAgZGF0YT86IFQ7XHJcbiAgZXJyb3I/OiBvYmplY3Q7XHJcbn1cclxudHlwZSBVc2VNdXRhdGlvblJlc3VsdDxUPiA9IFsoZGF0YTogYW55KSA9PiB2b2lkLCBVc2VNdXRhdGlvblN0YXRlPFQ+XTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZU11dGF0aW9uPFQgPSBhbnk+KFxyXG4gIHVybDogc3RyaW5nXHJcbik6IFVzZU11dGF0aW9uUmVzdWx0PFQ+IHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlPFVzZU11dGF0aW9uU3RhdGU8VD4+KHtcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgZGF0YTogdW5kZWZpbmVkLFxyXG4gICAgZXJyb3I6IHVuZGVmaW5lZCxcclxuICB9KTtcclxuICBmdW5jdGlvbiBtdXRhdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIHNldFN0YXRlKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBsb2FkaW5nOiB0cnVlIH0pKTtcclxuICAgIGZldGNoKHVybCwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkuY2F0Y2goKCkgPT4ge30pKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4gc2V0U3RhdGUoKHByZXYpID0+ICh7IC4uLnByZXYsIGRhdGEgfSkpKVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBzZXRTdGF0ZSgocHJldikgPT4gKHsgLi4ucHJldiwgZXJyb3IgfSkpKVxyXG4gICAgICAuZmluYWxseSgoKSA9PiBzZXRTdGF0ZSgocHJldikgPT4gKHsgLi4ucHJldiwgbG9hZGluZzogZmFsc2UgfSkpKTtcclxuICB9XHJcbiAgcmV0dXJuIFttdXRhdGlvbiwgeyAuLi5zdGF0ZSB9XTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VNdXRhdGlvbiIsInVybCIsInN0YXRlIiwic2V0U3RhdGUiLCJsb2FkaW5nIiwiZGF0YSIsInVuZGVmaW5lZCIsImVycm9yIiwibXV0YXRpb24iLCJwcmV2IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiY2F0Y2giLCJmaW5hbGx5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/client/useMutation.tsx\n");

/***/ }),

/***/ "./pages/tweet/upload.tsx":
/*!********************************!*\
  !*** ./pages/tweet/upload.tsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_client_useMutation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/client/useMutation */ \"./lib/client/useMutation.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__]);\nreact_hook_form__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst Upload = ()=>{\n    const { register , handleSubmit  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)();\n    const [uploadTweet, { loading , data: data1  }] = (0,_lib_client_useMutation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/api/tweets\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const onValid = async (data)=>{\n        if (loading) return;\n        uploadTweet(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (data1?.status === \"success\") {\n            router.push(`/tweet/${data1.tweet.id}`);\n        }\n    }, [\n        data1,\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"p-4 space-y-4 mt-72\",\n        onSubmit: handleSubmit(onValid),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                ...register(\"message\", {\n                    required: true\n                }),\n                name: \"message\",\n                className: \"border-2 border-[#0065fc] w-full resize-none min-h-[100px] placeholder:pt-1 pl-2\",\n                placeholder: \"Write Your Text\",\n                required: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wooka\\\\OneDrive\\\\Desktop\\\\twitter-final\\\\pages\\\\tweet\\\\upload.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"w-full h-9 bg-[#0065fc] hover:bg-blue-600 text-white px-4 border border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none\",\n                children: loading ? \"Loading\" : \"Upload Tweet\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wooka\\\\OneDrive\\\\Desktop\\\\twitter-final\\\\pages\\\\tweet\\\\upload.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\wooka\\\\OneDrive\\\\Desktop\\\\twitter-final\\\\pages\\\\tweet\\\\upload.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Upload);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90d2VldC91cGxvYWQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMEM7QUFDUjtBQUNNO0FBRWU7QUFhdkQsTUFBTUksTUFBTSxHQUFhLElBQU07SUFDN0IsTUFBTSxFQUFFQyxRQUFRLEdBQUVDLFlBQVksR0FBRSxHQUFHTix3REFBTyxFQUFxQjtJQUMvRCxNQUFNLENBQUNPLFdBQVcsRUFBRSxFQUFFQyxPQUFPLEdBQUVDLElBQUksRUFBSkEsS0FBSSxHQUFFLENBQUMsR0FDcENOLG1FQUFXLENBQXVCLGFBQWEsQ0FBQztJQUNsRCxNQUFNTyxNQUFNLEdBQUdSLHNEQUFTLEVBQUU7SUFFMUIsTUFBTVMsT0FBTyxHQUFHLE9BQU9GLElBQXVCLEdBQUs7UUFDakQsSUFBSUQsT0FBTyxFQUFFLE9BQU87UUFDcEJELFdBQVcsQ0FBQ0UsSUFBSSxDQUFDLENBQUM7S0FDbkI7SUFFRFIsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsSUFBSVEsS0FBSSxFQUFFRyxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQzlCRixNQUFNLENBQUNHLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRUosS0FBSSxDQUFDSyxLQUFLLENBQUNDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4QztLQUNGLEVBQUU7UUFBQ04sS0FBSTtRQUFFQyxNQUFNO0tBQUMsQ0FBQyxDQUFDO0lBRW5CLHFCQUNFLDhEQUFDTSxNQUFJO1FBQUNDLFNBQVMsRUFBQyxxQkFBcUI7UUFBQ0MsUUFBUSxFQUFFWixZQUFZLENBQUNLLE9BQU8sQ0FBQzs7MEJBQ25FLDhEQUFDUSxVQUFRO2dCQUNOLEdBQUdkLFFBQVEsQ0FBQyxTQUFTLEVBQUU7b0JBQUVlLFFBQVEsRUFBRSxJQUFJO2lCQUFFLENBQUM7Z0JBQzNDQyxJQUFJLEVBQUMsU0FBUztnQkFDZEosU0FBUyxFQUFDLGtGQUFrRjtnQkFDNUZLLFdBQVcsRUFBQyxpQkFBaUI7Z0JBQzdCRixRQUFROzs7Ozt5QkFDUjswQkFDRiw4REFBQ0csUUFBTTtnQkFBQ04sU0FBUyxFQUFDLDhMQUFnTTswQkFDL01ULE9BQU8sR0FBRyxTQUFTLEdBQUcsY0FBYzs7Ozs7eUJBQzlCOzs7Ozs7aUJBQ0osQ0FDUDtDQUNIO0FBRUQsaUVBQWVKLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9wYWdlcy90d2VldC91cGxvYWQudHN4PzQ0YTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVHdlZXQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IHVzZU11dGF0aW9uIGZyb20gXCIuLi8uLi9saWIvY2xpZW50L3VzZU11dGF0aW9uXCI7XHJcblxyXG5pbnRlcmZhY2UgVXBsb2FkUHJvZHVjdEZvcm0ge1xyXG4gIHR3ZWV0SW1nPzogRmlsZUxpc3Q7XHJcbiAgbWVzc2FnZT86IG51bWJlcjtcclxuICB0d2VldEltZ0lkPzogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVXBsb2FkUHJvZHVjdE11dGFpb24ge1xyXG4gIHN0YXR1czogc3RyaW5nO1xyXG4gIHR3ZWV0OiBUd2VldDtcclxufVxyXG5cclxuY29uc3QgVXBsb2FkOiBOZXh0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm08VXBsb2FkUHJvZHVjdEZvcm0+KCk7XHJcbiAgY29uc3QgW3VwbG9hZFR3ZWV0LCB7IGxvYWRpbmcsIGRhdGEgfV0gPVxyXG4gICAgdXNlTXV0YXRpb248VXBsb2FkUHJvZHVjdE11dGFpb24+KFwiL2FwaS90d2VldHNcIik7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IG9uVmFsaWQgPSBhc3luYyAoZGF0YTogVXBsb2FkUHJvZHVjdEZvcm0pID0+IHtcclxuICAgIGlmIChsb2FkaW5nKSByZXR1cm47XHJcbiAgICB1cGxvYWRUd2VldChkYXRhKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGRhdGE/LnN0YXR1cyA9PT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgcm91dGVyLnB1c2goYC90d2VldC8ke2RhdGEudHdlZXQuaWR9YCk7XHJcbiAgICB9XHJcbiAgfSwgW2RhdGEsIHJvdXRlcl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gY2xhc3NOYW1lPVwicC00IHNwYWNlLXktNCBtdC03MlwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25WYWxpZCl9PlxyXG4gICAgICA8dGV4dGFyZWFcclxuICAgICAgICB7Li4ucmVnaXN0ZXIoXCJtZXNzYWdlXCIsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1bIzAwNjVmY10gdy1mdWxsIHJlc2l6ZS1ub25lIG1pbi1oLVsxMDBweF0gcGxhY2Vob2xkZXI6cHQtMSBwbC0yXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIldyaXRlIFlvdXIgVGV4dFwiXHJcbiAgICAgICAgcmVxdWlyZWRcclxuICAgICAgLz5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgIGgtOSBiZy1bIzAwNjVmY10gaG92ZXI6YmctYmx1ZS02MDAgdGV4dC13aGl0ZSAgcHgtNCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQtbWQgc2hhZG93LXNtIGZvbnQtbWVkaXVtIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6b3V0bGluZS1ub25lXCI+XHJcbiAgICAgICAge2xvYWRpbmcgPyBcIkxvYWRpbmdcIiA6IFwiVXBsb2FkIFR3ZWV0XCJ9XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVcGxvYWQ7XHJcbiJdLCJuYW1lcyI6WyJ1c2VGb3JtIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwidXNlTXV0YXRpb24iLCJVcGxvYWQiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInVwbG9hZFR3ZWV0IiwibG9hZGluZyIsImRhdGEiLCJyb3V0ZXIiLCJvblZhbGlkIiwic3RhdHVzIiwicHVzaCIsInR3ZWV0IiwiaWQiLCJmb3JtIiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJ0ZXh0YXJlYSIsInJlcXVpcmVkIiwibmFtZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/tweet/upload.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/tweet/upload.tsx"));
module.exports = __webpack_exports__;

})();