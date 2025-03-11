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
exports.id = "app/api/removalQuote/route";
exports.ids = ["app/api/removalQuote/route"];
exports.modules = {

/***/ "(rsc)/./app/api/removalQuote/route.ts":
/*!***************************************!*\
  !*** ./app/api/removalQuote/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _models_RemovalQuoteSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/RemovalQuoteSchema */ \"(rsc)/./models/RemovalQuoteSchema.ts\");\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/mongoose */ \"(rsc)/./lib/mongoose.ts\");\n\n\n\nasync function GET() {\n    try {\n        await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        const quotes = await _models_RemovalQuoteSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            data: quotes\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Error fetching the removal quote data.\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(request) {\n    try {\n        await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        const data = await request.json();\n        const newquote = _models_RemovalQuoteSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(data);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"New removal quote data created successfully.\",\n            data: newquote\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Error sending the data to database\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3JlbW92YWxRdW90ZS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyQztBQUNZO0FBQ2Q7QUFFbEMsZUFBZUc7SUFDcEIsSUFBSTtRQUNGLE1BQU1ELHlEQUFXQTtRQUNqQixNQUFNRSxTQUFTLE1BQU1ILGtFQUFZQSxDQUFDSSxJQUFJO1FBQ3RDLE9BQU9MLHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7WUFBRUMsTUFBTUg7UUFBTyxHQUFHO1lBQUVJLFFBQVE7UUFBSTtJQUMzRCxFQUFFLE9BQU9DLE9BQU87UUFDZCxPQUFPVCxxREFBWUEsQ0FBQ00sSUFBSSxDQUN0QjtZQUFFRyxPQUFPO1FBQXlDLEdBQ2xEO1lBQUVELFFBQVE7UUFBSTtJQUVsQjtBQUNGO0FBRU8sZUFBZUUsS0FBS0MsT0FBZ0I7SUFDekMsSUFBSTtRQUNGLE1BQU1ULHlEQUFXQTtRQUNqQixNQUFNSyxPQUFPLE1BQU1JLFFBQVFMLElBQUk7UUFDL0IsTUFBTU0sV0FBV1gsa0VBQVlBLENBQUNZLE1BQU0sQ0FBQ047UUFDckMsT0FBT1AscURBQVlBLENBQUNNLElBQUksQ0FDdEI7WUFDRVEsU0FBUztZQUNUUCxNQUFNSztRQUNSLEdBQ0E7WUFBRUosUUFBUTtRQUFJO0lBRWxCLEVBQUUsT0FBT0MsT0FBTztRQUNkLE9BQU9ULHFEQUFZQSxDQUFDTSxJQUFJLENBQ3RCO1lBQUVHLE9BQU87UUFBcUMsR0FDOUM7WUFBRUQsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIi9ob21lL3NoYXNoYW5rL0RvY3VtZW50cy9HaXRIdWIvUHJvamVjdC9XaXBlT3V0LVNlcnZpY2VzL2FwcC9hcGkvcmVtb3ZhbFF1b3RlL3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IFJlbW92YWxRdW90ZSBmcm9tIFwiQC9tb2RlbHMvUmVtb3ZhbFF1b3RlU2NoZW1hXCI7XG5pbXBvcnQgY29ubmVjdFRvREIgZnJvbSBcIkAvbGliL21vbmdvb3NlXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgY29ubmVjdFRvREIoKTtcbiAgICBjb25zdCBxdW90ZXMgPSBhd2FpdCBSZW1vdmFsUXVvdGUuZmluZCgpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGRhdGE6IHF1b3RlcyB9LCB7IHN0YXR1czogMjAxIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgZXJyb3I6IFwiRXJyb3IgZmV0Y2hpbmcgdGhlIHJlbW92YWwgcXVvdGUgZGF0YS5cIiB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgY29ubmVjdFRvREIoKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gICAgY29uc3QgbmV3cXVvdGUgPSBSZW1vdmFsUXVvdGUuY3JlYXRlKGRhdGEpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHtcbiAgICAgICAgbWVzc2FnZTogXCJOZXcgcmVtb3ZhbCBxdW90ZSBkYXRhIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5LlwiLFxuICAgICAgICBkYXRhOiBuZXdxdW90ZSxcbiAgICAgIH0sXG4gICAgICB7IHN0YXR1czogMjAxIH1cbiAgICApO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgZXJyb3I6IFwiRXJyb3Igc2VuZGluZyB0aGUgZGF0YSB0byBkYXRhYmFzZVwiIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiUmVtb3ZhbFF1b3RlIiwiY29ubmVjdFRvREIiLCJHRVQiLCJxdW90ZXMiLCJmaW5kIiwianNvbiIsImRhdGEiLCJzdGF0dXMiLCJlcnJvciIsIlBPU1QiLCJyZXF1ZXN0IiwibmV3cXVvdGUiLCJjcmVhdGUiLCJtZXNzYWdlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/removalQuote/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/mongoose.ts":
/*!*************************!*\
  !*** ./lib/mongoose.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectToDB = async ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections)[0].readyState) {\n        console.log(\"Already connected to mongoDB.\");\n        return;\n    }\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n        console.log(\"Successfully connected to MongoDB.\");\n    } catch (error) {\n        console.error(\"Failed to connect to MongoDB:\", error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectToDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29vc2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRS9CLE1BQU1DLGNBQWM7SUFDaEIsSUFBR0QsNkRBQW9CLENBQUMsRUFBRSxDQUFDRyxVQUFVLEVBQ3JDO1FBQ0lDLFFBQVFDLEdBQUcsQ0FBQztRQUNaO0lBQ0o7SUFFQSxJQUFJO1FBQ0EsTUFBTUwsdURBQWdCLENBQUNPLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFZO1lBQ3REQyxpQkFBaUI7WUFDakJDLG9CQUFvQjtRQUN4QjtRQUNBUCxRQUFRQyxHQUFHLENBQUM7SUFDaEIsRUFBRSxPQUFPTyxPQUFPO1FBQ1pSLFFBQVFRLEtBQUssQ0FBQyxpQ0FBaUNBO0lBQ25EO0FBQ0o7QUFFQSxpRUFBZVgsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsiL2hvbWUvc2hhc2hhbmsvRG9jdW1lbnRzL0dpdEh1Yi9Qcm9qZWN0L1dpcGVPdXQtU2VydmljZXMvbGliL21vbmdvb3NlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuY29uc3QgY29ubmVjdFRvREIgPSBhc3luYygpOlByb21pc2U8dm9pZD4gPT57XG4gICAgaWYobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSlcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWxyZWFkeSBjb25uZWN0ZWQgdG8gbW9uZ29EQi5cIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJIGFzIHN0cmluZywge1xuICAgICAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlXG4gICAgICAgIH0gYXMgbW9uZ29vc2UuQ29ubmVjdE9wdGlvbnMpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3NmdWxseSBjb25uZWN0ZWQgdG8gTW9uZ29EQi5cIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBjb25uZWN0IHRvIE1vbmdvREI6XCIsIGVycm9yKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RUb0RCOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3RUb0RCIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJlcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongoose.ts\n");

/***/ }),

/***/ "(rsc)/./models/RemovalQuoteSchema.ts":
/*!**************************************!*\
  !*** ./models/RemovalQuoteSchema.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst RemovalQuoteSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String\n    },\n    from: {\n        type: String,\n        required: true\n    },\n    to: {\n        type: String,\n        required: true\n    },\n    serviceType: {\n        type: String,\n        required: true,\n        enum: [\n            \"1helper\",\n            \"1van1helper\",\n            \"1van2helpers\",\n            \"4.5ton1helper\",\n            \"4.5ton2helpers\",\n            \"4.5ton3helpers\"\n        ]\n    },\n    phone: {\n        type: String,\n        required: true,\n        match: /^[0-9]{10}$/\n    },\n    email: {\n        type: String,\n        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/\n    },\n    date: {\n        type: Date,\n        required: true\n    },\n    status: {\n        type: String,\n        enum: [\n            \"pending\",\n            \"done\"\n        ],\n        default: \"pending\"\n    }\n});\nconst RemovalQuote = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).RemovalQuote || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"RemovalQuote\", RemovalQuoteSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RemovalQuote);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvUmVtb3ZhbFF1b3RlU2NoZW1hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxxQkFBcUIsSUFBSUQsd0RBQWUsQ0FBQztJQUMzQ0csTUFBSztRQUNEQyxNQUFLQztJQUNUO0lBQ0ZDLE1BQU07UUFDSkYsTUFBTUM7UUFDTkUsVUFBVTtJQUNaO0lBQ0FDLElBQUk7UUFDRkosTUFBTUM7UUFDTkUsVUFBVTtJQUNaO0lBQ0FFLGFBQWE7UUFDWEwsTUFBTUM7UUFDTkUsVUFBVTtRQUNWRyxNQUFNO1lBQUM7WUFBVztZQUFlO1lBQWU7WUFBZ0I7WUFBaUI7U0FBaUI7SUFDcEc7SUFDQUMsT0FBTztRQUNMUCxNQUFNQztRQUNORSxVQUFVO1FBQ1ZLLE9BQU87SUFDVDtJQUNBQyxPQUFPO1FBQ0xULE1BQU1DO1FBQ05PLE9BQU87SUFDVDtJQUNBRSxNQUFNO1FBQ0pWLE1BQU1XO1FBQ05SLFVBQVU7SUFDWjtJQUNBUyxRQUFRO1FBQUVaLE1BQU1DO1FBQVFLLE1BQU07WUFBQztZQUFXO1NBQU87UUFBRU8sU0FBUztJQUFVO0FBQ3hFO0FBRUEsTUFBTUMsZUFBZWxCLHdEQUFlLENBQUNrQixZQUFZLElBQUlsQixxREFBYyxDQUFDLGdCQUFnQkM7QUFDcEYsaUVBQWVpQixZQUFZQSxFQUFDIiwic291cmNlcyI6WyIvaG9tZS9zaGFzaGFuay9Eb2N1bWVudHMvR2l0SHViL1Byb2plY3QvV2lwZU91dC1TZXJ2aWNlcy9tb2RlbHMvUmVtb3ZhbFF1b3RlU2NoZW1hLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgUmVtb3ZhbFF1b3RlU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgbmFtZTp7XG4gICAgICAgIHR5cGU6U3RyaW5nXG4gICAgfSxcbiAgZnJvbToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgfSxcbiAgdG86IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIHNlcnZpY2VUeXBlOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGVudW06IFtcIjFoZWxwZXJcIiwgXCIxdmFuMWhlbHBlclwiLCBcIjF2YW4yaGVscGVyc1wiLFwiNC41dG9uMWhlbHBlclwiLFwiNC41dG9uMmhlbHBlcnNcIixcIjQuNXRvbjNoZWxwZXJzXCJdLFxuICB9LFxuICBwaG9uZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBtYXRjaDogL15bMC05XXsxMH0kLywgLy8gMTAtZGlnaXQgcGhvbmUgbnVtYmVyIHZhbGlkYXRpb25cbiAgfSxcbiAgZW1haWw6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgbWF0Y2g6IC9eW2EtekEtWjAtOS5fJSstXStAW2EtekEtWjAtOS4tXStcXC5bYS16QS1aXXsyLH0kLywgLy8gRW1haWwgdmFsaWRhdGlvblxuICB9LFxuICBkYXRlOiB7XG4gICAgdHlwZTogRGF0ZSxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgfSxcbiAgc3RhdHVzOiB7IHR5cGU6IFN0cmluZywgZW51bTogW1wicGVuZGluZ1wiLCBcImRvbmVcIl0sIGRlZmF1bHQ6IFwicGVuZGluZ1wiIH1cbn0pO1xuXG5jb25zdCBSZW1vdmFsUXVvdGUgPSBtb25nb29zZS5tb2RlbHMuUmVtb3ZhbFF1b3RlIHx8IG1vbmdvb3NlLm1vZGVsKFwiUmVtb3ZhbFF1b3RlXCIsIFJlbW92YWxRdW90ZVNjaGVtYSk7XG5leHBvcnQgZGVmYXVsdCBSZW1vdmFsUXVvdGU7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiUmVtb3ZhbFF1b3RlU2NoZW1hIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJmcm9tIiwicmVxdWlyZWQiLCJ0byIsInNlcnZpY2VUeXBlIiwiZW51bSIsInBob25lIiwibWF0Y2giLCJlbWFpbCIsImRhdGUiLCJEYXRlIiwic3RhdHVzIiwiZGVmYXVsdCIsIlJlbW92YWxRdW90ZSIsIm1vZGVscyIsIm1vZGVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/RemovalQuoteSchema.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FremovalQuote%2Froute&page=%2Fapi%2FremovalQuote%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FremovalQuote%2Froute.ts&appDir=%2Fhome%2Fshashank%2FDocuments%2FGitHub%2FProject%2FWipeOut-Services%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fshashank%2FDocuments%2FGitHub%2FProject%2FWipeOut-Services&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FremovalQuote%2Froute&page=%2Fapi%2FremovalQuote%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FremovalQuote%2Froute.ts&appDir=%2Fhome%2Fshashank%2FDocuments%2FGitHub%2FProject%2FWipeOut-Services%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fshashank%2FDocuments%2FGitHub%2FProject%2FWipeOut-Services&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_shashank_Documents_GitHub_Project_WipeOut_Services_app_api_removalQuote_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/removalQuote/route.ts */ \"(rsc)/./app/api/removalQuote/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/removalQuote/route\",\n        pathname: \"/api/removalQuote\",\n        filename: \"route\",\n        bundlePath: \"app/api/removalQuote/route\"\n    },\n    resolvedPagePath: \"/home/shashank/Documents/GitHub/Project/WipeOut-Services/app/api/removalQuote/route.ts\",\n    nextConfigOutput,\n    userland: _home_shashank_Documents_GitHub_Project_WipeOut_Services_app_api_removalQuote_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZyZW1vdmFsUXVvdGUlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnJlbW92YWxRdW90ZSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnJlbW92YWxRdW90ZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGc2hhc2hhbmslMkZEb2N1bWVudHMlMkZHaXRIdWIlMkZQcm9qZWN0JTJGV2lwZU91dC1TZXJ2aWNlcyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGaG9tZSUyRnNoYXNoYW5rJTJGRG9jdW1lbnRzJTJGR2l0SHViJTJGUHJvamVjdCUyRldpcGVPdXQtU2VydmljZXMmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3NDO0FBQ25IO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvaG9tZS9zaGFzaGFuay9Eb2N1bWVudHMvR2l0SHViL1Byb2plY3QvV2lwZU91dC1TZXJ2aWNlcy9hcHAvYXBpL3JlbW92YWxRdW90ZS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcmVtb3ZhbFF1b3RlL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcmVtb3ZhbFF1b3RlXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9yZW1vdmFsUXVvdGUvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvaG9tZS9zaGFzaGFuay9Eb2N1bWVudHMvR2l0SHViL1Byb2plY3QvV2lwZU91dC1TZXJ2aWNlcy9hcHAvYXBpL3JlbW92YWxRdW90ZS9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FremovalQuote%2Froute&page=%2Fapi%2FremovalQuote%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FremovalQuote%2Froute.ts&appDir=%2Fhome%2Fshashank%2FDocuments%2FGitHub%2FProject%2FWipeOut-Services%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fshashank%2FDocuments%2FGitHub%2FProject%2FWipeOut-Services&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FremovalQuote%2Froute&page=%2Fapi%2FremovalQuote%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FremovalQuote%2Froute.ts&appDir=%2Fhome%2Fshashank%2FDocuments%2FGitHub%2FProject%2FWipeOut-Services%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fshashank%2FDocuments%2FGitHub%2FProject%2FWipeOut-Services&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();