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
exports.id = "app/api/removal/route";
exports.ids = ["app/api/removal/route"];
exports.modules = {

/***/ "(rsc)/./app/api/removal/route.ts":
/*!**********************************!*\
  !*** ./app/api/removal/route.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _models_RemovalFormSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/RemovalFormSchema */ \"(rsc)/./models/RemovalFormSchema.ts\");\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/mongoose */ \"(rsc)/./lib/mongoose.ts\");\n\n\n\nasync function GET() {\n    try {\n        await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        const bookings = await _models_RemovalFormSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            data: bookings\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Error fetching the removal booking data.\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(request) {\n    try {\n        await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        const data = await request.json();\n        const newBooking = _models_RemovalFormSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(data);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"New removal booking data created successfully.\",\n            data: newBooking\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Error sending the data to database\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3JlbW92YWwvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMkM7QUFDVTtBQUNaO0FBRWxDLGVBQWVHO0lBQ3BCLElBQUk7UUFDRixNQUFNRCx5REFBV0E7UUFDakIsTUFBTUUsV0FBVyxNQUFNSCxpRUFBV0EsQ0FBQ0ksSUFBSTtRQUN2QyxPQUFPTCxxREFBWUEsQ0FBQ00sSUFBSSxDQUFDO1lBQUVDLE1BQU1IO1FBQVMsR0FBRztZQUFFSSxRQUFRO1FBQUk7SUFDN0QsRUFBRSxPQUFPQyxPQUFPO1FBQ2QsT0FBT1QscURBQVlBLENBQUNNLElBQUksQ0FDdEI7WUFBRUcsT0FBTztRQUEyQyxHQUNwRDtZQUFFRCxRQUFRO1FBQUk7SUFFbEI7QUFDRjtBQUVPLGVBQWVFLEtBQUtDLE9BQWdCO0lBQ3pDLElBQUk7UUFDRixNQUFNVCx5REFBV0E7UUFDakIsTUFBTUssT0FBTyxNQUFNSSxRQUFRTCxJQUFJO1FBQy9CLE1BQU1NLGFBQWFYLGlFQUFXQSxDQUFDWSxNQUFNLENBQUNOO1FBQ3RDLE9BQU9QLHFEQUFZQSxDQUFDTSxJQUFJLENBQ3RCO1lBQ0VRLFNBQVM7WUFDVFAsTUFBTUs7UUFDUixHQUNBO1lBQUVKLFFBQVE7UUFBSTtJQUVsQixFQUFFLE9BQU9DLE9BQU87UUFDZCxPQUFPVCxxREFBWUEsQ0FBQ00sSUFBSSxDQUN0QjtZQUFFRyxPQUFPO1FBQXFDLEdBQzlDO1lBQUVELFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyIvaG9tZS9zaGFzaGFuay9Eb2N1bWVudHMvR2l0SHViL1Byb2plY3QvV2lwZU91dC1TZXJ2aWNlcy9hcHAvYXBpL3JlbW92YWwvcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgUmVtb3ZhbEZvcm0gZnJvbSBcIkAvbW9kZWxzL1JlbW92YWxGb3JtU2NoZW1hXCI7XG5pbXBvcnQgY29ubmVjdFRvREIgZnJvbSBcIkAvbGliL21vbmdvb3NlXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgY29ubmVjdFRvREIoKTtcbiAgICBjb25zdCBib29raW5ncyA9IGF3YWl0IFJlbW92YWxGb3JtLmZpbmQoKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBkYXRhOiBib29raW5ncyB9LCB7IHN0YXR1czogMjAxIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgZXJyb3I6IFwiRXJyb3IgZmV0Y2hpbmcgdGhlIHJlbW92YWwgYm9va2luZyBkYXRhLlwiIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBjb25uZWN0VG9EQigpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICBjb25zdCBuZXdCb29raW5nID0gUmVtb3ZhbEZvcm0uY3JlYXRlKGRhdGEpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHtcbiAgICAgICAgbWVzc2FnZTogXCJOZXcgcmVtb3ZhbCBib29raW5nIGRhdGEgY3JlYXRlZCBzdWNjZXNzZnVsbHkuXCIsXG4gICAgICAgIGRhdGE6IG5ld0Jvb2tpbmcsXG4gICAgICB9LFxuICAgICAgeyBzdGF0dXM6IDIwMSB9XG4gICAgKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGVycm9yOiBcIkVycm9yIHNlbmRpbmcgdGhlIGRhdGEgdG8gZGF0YWJhc2VcIiB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIlJlbW92YWxGb3JtIiwiY29ubmVjdFRvREIiLCJHRVQiLCJib29raW5ncyIsImZpbmQiLCJqc29uIiwiZGF0YSIsInN0YXR1cyIsImVycm9yIiwiUE9TVCIsInJlcXVlc3QiLCJuZXdCb29raW5nIiwiY3JlYXRlIiwibWVzc2FnZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/removal/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/mongoose.ts":
/*!*************************!*\
  !*** ./lib/mongoose.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectToDB = async ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections)[0].readyState) {\n        console.log(\"Already connected to mongoDB.\");\n        return;\n    }\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n        console.log(\"Successfully connected to MongoDB.\");\n    } catch (error) {\n        console.error(\"Failed to connect to MongoDB:\", error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectToDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29vc2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRS9CLE1BQU1DLGNBQWM7SUFDaEIsSUFBR0QsNkRBQW9CLENBQUMsRUFBRSxDQUFDRyxVQUFVLEVBQ3JDO1FBQ0lDLFFBQVFDLEdBQUcsQ0FBQztRQUNaO0lBQ0o7SUFFQSxJQUFJO1FBQ0EsTUFBTUwsdURBQWdCLENBQUNPLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFZO1lBQ3REQyxpQkFBaUI7WUFDakJDLG9CQUFvQjtRQUN4QjtRQUNBUCxRQUFRQyxHQUFHLENBQUM7SUFDaEIsRUFBRSxPQUFPTyxPQUFPO1FBQ1pSLFFBQVFRLEtBQUssQ0FBQyxpQ0FBaUNBO0lBQ25EO0FBQ0o7QUFFQSxpRUFBZVgsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsiL2hvbWUvc2hhc2hhbmsvRG9jdW1lbnRzL0dpdEh1Yi9Qcm9qZWN0L1dpcGVPdXQtU2VydmljZXMvbGliL21vbmdvb3NlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuY29uc3QgY29ubmVjdFRvREIgPSBhc3luYygpOlByb21pc2U8dm9pZD4gPT57XG4gICAgaWYobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSlcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWxyZWFkeSBjb25uZWN0ZWQgdG8gbW9uZ29EQi5cIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJIGFzIHN0cmluZywge1xuICAgICAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlXG4gICAgICAgIH0gYXMgbW9uZ29vc2UuQ29ubmVjdE9wdGlvbnMpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3NmdWxseSBjb25uZWN0ZWQgdG8gTW9uZ29EQi5cIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBjb25uZWN0IHRvIE1vbmdvREI6XCIsIGVycm9yKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RUb0RCOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3RUb0RCIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJlcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongoose.ts\n");

/***/ }),

/***/ "(rsc)/./models/RemovalFormSchema.ts":
/*!*************************************!*\
  !*** ./models/RemovalFormSchema.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst RemovalFormSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    from: {\n        type: String,\n        required: true\n    },\n    to: {\n        type: String,\n        required: true\n    },\n    serviceType: {\n        type: String,\n        required: true,\n        enum: [\n            \"furniture-removal\",\n            \"house-moving\",\n            \"office-relocation\"\n        ]\n    },\n    phone: {\n        type: String,\n        required: true,\n        match: /^[0-9]{10}$/\n    },\n    email: {\n        type: String,\n        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/\n    },\n    date: {\n        type: Date,\n        required: true\n    },\n    status: {\n        type: String,\n        enum: [\n            \"pending\",\n            \"done\"\n        ],\n        default: \"pending\"\n    }\n});\nconst RemovalForm = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).RemovalForm || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"RemovalForm\", RemovalFormSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RemovalForm);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvUmVtb3ZhbEZvcm1TY2hlbWEudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLG9CQUFvQixJQUFJRCx3REFBZSxDQUFDO0lBQzVDRyxNQUFNO1FBQ0pDLE1BQU1DO1FBQ05DLFVBQVU7SUFDWjtJQUNBQyxJQUFJO1FBQ0ZILE1BQU1DO1FBQ05DLFVBQVU7SUFDWjtJQUNBRSxhQUFhO1FBQ1hKLE1BQU1DO1FBQ05DLFVBQVU7UUFDVkcsTUFBTTtZQUFDO1lBQXFCO1lBQWdCO1NBQW9CO0lBQ2xFO0lBQ0FDLE9BQU87UUFDTE4sTUFBTUM7UUFDTkMsVUFBVTtRQUNWSyxPQUFPO0lBQ1Q7SUFDQUMsT0FBTztRQUNMUixNQUFNQztRQUNOTSxPQUFPO0lBQ1Q7SUFDQUUsTUFBTTtRQUNKVCxNQUFNVTtRQUNOUixVQUFVO0lBQ1o7SUFDQVMsUUFBUTtRQUFFWCxNQUFNQztRQUFRSSxNQUFNO1lBQUM7WUFBVztTQUFPO1FBQUVPLFNBQVM7SUFBVTtBQUN4RTtBQUVBLE1BQU1DLGNBQWNqQix3REFBZSxDQUFDaUIsV0FBVyxJQUFJakIscURBQWMsQ0FBQyxlQUFlQztBQUNqRixpRUFBZWdCLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIi9ob21lL3NoYXNoYW5rL0RvY3VtZW50cy9HaXRIdWIvUHJvamVjdC9XaXBlT3V0LVNlcnZpY2VzL21vZGVscy9SZW1vdmFsRm9ybVNjaGVtYS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IFJlbW92YWxGb3JtU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIGZyb206IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIHRvOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICB9LFxuICBzZXJ2aWNlVHlwZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBlbnVtOiBbXCJmdXJuaXR1cmUtcmVtb3ZhbFwiLCBcImhvdXNlLW1vdmluZ1wiLCBcIm9mZmljZS1yZWxvY2F0aW9uXCJdLFxuICB9LFxuICBwaG9uZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBtYXRjaDogL15bMC05XXsxMH0kLywgLy8gMTAtZGlnaXQgcGhvbmUgbnVtYmVyIHZhbGlkYXRpb25cbiAgfSxcbiAgZW1haWw6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgbWF0Y2g6IC9eW2EtekEtWjAtOS5fJSstXStAW2EtekEtWjAtOS4tXStcXC5bYS16QS1aXXsyLH0kLywgLy8gRW1haWwgdmFsaWRhdGlvblxuICB9LFxuICBkYXRlOiB7XG4gICAgdHlwZTogRGF0ZSxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgfSxcbiAgc3RhdHVzOiB7IHR5cGU6IFN0cmluZywgZW51bTogW1wicGVuZGluZ1wiLCBcImRvbmVcIl0sIGRlZmF1bHQ6IFwicGVuZGluZ1wiIH0sXG59KTtcblxuY29uc3QgUmVtb3ZhbEZvcm0gPSBtb25nb29zZS5tb2RlbHMuUmVtb3ZhbEZvcm0gfHwgbW9uZ29vc2UubW9kZWwoXCJSZW1vdmFsRm9ybVwiLCBSZW1vdmFsRm9ybVNjaGVtYSk7XG5leHBvcnQgZGVmYXVsdCBSZW1vdmFsRm9ybTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJSZW1vdmFsRm9ybVNjaGVtYSIsIlNjaGVtYSIsImZyb20iLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ0byIsInNlcnZpY2VUeXBlIiwiZW51bSIsInBob25lIiwibWF0Y2giLCJlbWFpbCIsImRhdGUiLCJEYXRlIiwic3RhdHVzIiwiZGVmYXVsdCIsIlJlbW92YWxGb3JtIiwibW9kZWxzIiwibW9kZWwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./models/RemovalFormSchema.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fremoval%2Froute&page=%2Fapi%2Fremoval%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fremoval%2Froute.ts&appDir=%2Fhome%2Fshashank%2FDocuments%2FGitHub%2FProject%2FWipeOut-Services%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fshashank%2FDocuments%2FGitHub%2FProject%2FWipeOut-Services&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fremoval%2Froute&page=%2Fapi%2Fremoval%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fremoval%2Froute.ts&appDir=%2Fhome%2Fshashank%2FDocuments%2FGitHub%2FProject%2FWipeOut-Services%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fshashank%2FDocuments%2FGitHub%2FProject%2FWipeOut-Services&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_shashank_Documents_GitHub_Project_WipeOut_Services_app_api_removal_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/removal/route.ts */ \"(rsc)/./app/api/removal/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/removal/route\",\n        pathname: \"/api/removal\",\n        filename: \"route\",\n        bundlePath: \"app/api/removal/route\"\n    },\n    resolvedPagePath: \"/home/shashank/Documents/GitHub/Project/WipeOut-Services/app/api/removal/route.ts\",\n    nextConfigOutput,\n    userland: _home_shashank_Documents_GitHub_Project_WipeOut_Services_app_api_removal_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZyZW1vdmFsJTJGcm91dGUmcGFnZT0lMkZhcGklMkZyZW1vdmFsJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcmVtb3ZhbCUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGc2hhc2hhbmslMkZEb2N1bWVudHMlMkZHaXRIdWIlMkZQcm9qZWN0JTJGV2lwZU91dC1TZXJ2aWNlcyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGaG9tZSUyRnNoYXNoYW5rJTJGRG9jdW1lbnRzJTJGR2l0SHViJTJGUHJvamVjdCUyRldpcGVPdXQtU2VydmljZXMmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2lDO0FBQzlHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvaG9tZS9zaGFzaGFuay9Eb2N1bWVudHMvR2l0SHViL1Byb2plY3QvV2lwZU91dC1TZXJ2aWNlcy9hcHAvYXBpL3JlbW92YWwvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3JlbW92YWwvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9yZW1vdmFsXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9yZW1vdmFsL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL2hvbWUvc2hhc2hhbmsvRG9jdW1lbnRzL0dpdEh1Yi9Qcm9qZWN0L1dpcGVPdXQtU2VydmljZXMvYXBwL2FwaS9yZW1vdmFsL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fremoval%2Froute&page=%2Fapi%2Fremoval%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fremoval%2Froute.ts&appDir=%2Fhome%2Fshashank%2FDocuments%2FGitHub%2FProject%2FWipeOut-Services%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fshashank%2FDocuments%2FGitHub%2FProject%2FWipeOut-Services&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fremoval%2Froute&page=%2Fapi%2Fremoval%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fremoval%2Froute.ts&appDir=%2Fhome%2Fshashank%2FDocuments%2FGitHub%2FProject%2FWipeOut-Services%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fshashank%2FDocuments%2FGitHub%2FProject%2FWipeOut-Services&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();