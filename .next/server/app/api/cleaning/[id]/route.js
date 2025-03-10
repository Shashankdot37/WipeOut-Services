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
exports.id = "app/api/cleaning/[id]/route";
exports.ids = ["app/api/cleaning/[id]/route"];
exports.modules = {

/***/ "(rsc)/./app/api/cleaning/[id]/route.ts":
/*!****************************************!*\
  !*** ./app/api/cleaning/[id]/route.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PATCH: () => (/* binding */ PATCH)\n/* harmony export */ });\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongoose */ \"(rsc)/./lib/mongoose.ts\");\n/* harmony import */ var _models_CleaningFormSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/CleaningFormSchema */ \"(rsc)/./models/CleaningFormSchema.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nasync function PATCH(request, { params }) {\n    try {\n        await _lib_mongoose__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        const { id } = params;\n        const updatedBooking = await _models_CleaningFormSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndUpdate(id, {\n            status: \"done\"\n        }, {\n            new: true\n        });\n        if (!updatedBooking) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                error: \"Booking not found\"\n            }, {\n                status: 404\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: \"Status updated\",\n            data: updatedBooking\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: \"Error updating status\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NsZWFuaW5nL1tpZF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF5QztBQUNjO0FBQ0E7QUFFaEQsZUFBZUcsTUFBTUMsT0FBbUIsRUFBQyxFQUFDQyxNQUFNLEVBQXNCO0lBRTdFLElBQUk7UUFDQSxNQUFNTCxxREFBV0E7UUFDakIsTUFBTSxFQUFDTSxFQUFFLEVBQUMsR0FBR0Q7UUFDYixNQUFNRSxpQkFBaUIsTUFBTU4sa0VBQVlBLENBQUNPLGlCQUFpQixDQUN2REYsSUFDQTtZQUFDRyxRQUFPO1FBQU0sR0FDZDtZQUFDQyxLQUFJO1FBQUk7UUFFYixJQUFHLENBQUNILGdCQUNKO1lBQ0ksT0FBT0wscURBQVlBLENBQUNTLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFvQixHQUFHO2dCQUFFSCxRQUFRO1lBQUk7UUFDM0U7UUFDQSxPQUFPUCxxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO1lBQUVFLFNBQVM7WUFBa0JDLE1BQU1QO1FBQWUsR0FBRztZQUFFRSxRQUFRO1FBQUk7SUFDaEcsRUFBRSxPQUFPRyxPQUFPO1FBQ1osT0FBT1YscURBQVlBLENBQUNTLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXdCLEdBQUc7WUFBRUgsUUFBUTtRQUFJO0lBQy9FO0FBQ0EiLCJzb3VyY2VzIjpbIi9ob21lL3NoYXNoYW5rL0RvY3VtZW50cy9HaXRIdWIvUHJvamVjdC9XaXBlT3V0LVNlcnZpY2VzL2FwcC9hcGkvY2xlYW5pbmcvW2lkXS9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubmVjdFRvREIgZnJvbSBcIkAvbGliL21vbmdvb3NlXCI7XG5pbXBvcnQgQ2xlYW5pbmdGb3JtIGZyb20gXCJAL21vZGVscy9DbGVhbmluZ0Zvcm1TY2hlbWFcIjtcbmltcG9ydCB7IE5leHRSZXNwb25zZSxOZXh0UmVxdWVzdCB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUEFUQ0gocmVxdWVzdDpOZXh0UmVxdWVzdCx7cGFyYW1zfTp7cGFyYW1zOntpZDpzdHJpbmd9fSlcbntcbnRyeSB7XG4gICAgYXdhaXQgY29ubmVjdFRvREI7XG4gICAgY29uc3Qge2lkfSA9IHBhcmFtcztcbiAgICBjb25zdCB1cGRhdGVkQm9va2luZyA9IGF3YWl0IENsZWFuaW5nRm9ybS5maW5kQnlJZEFuZFVwZGF0ZShcbiAgICAgICAgaWQsXG4gICAgICAgIHtzdGF0dXM6XCJkb25lXCJ9LFxuICAgICAgICB7bmV3OnRydWV9XG4gICAgKTtcbiAgICBpZighdXBkYXRlZEJvb2tpbmcpXG4gICAge1xuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJCb29raW5nIG5vdCBmb3VuZFwiIH0sIHsgc3RhdHVzOiA0MDQgfSk7XG4gICAgfVxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiU3RhdHVzIHVwZGF0ZWRcIiwgZGF0YTogdXBkYXRlZEJvb2tpbmcgfSwgeyBzdGF0dXM6IDIwMCB9KTtcbn0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiRXJyb3IgdXBkYXRpbmcgc3RhdHVzXCIgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbn1cbn0iXSwibmFtZXMiOlsiY29ubmVjdFRvREIiLCJDbGVhbmluZ0Zvcm0iLCJOZXh0UmVzcG9uc2UiLCJQQVRDSCIsInJlcXVlc3QiLCJwYXJhbXMiLCJpZCIsInVwZGF0ZWRCb29raW5nIiwiZmluZEJ5SWRBbmRVcGRhdGUiLCJzdGF0dXMiLCJuZXciLCJqc29uIiwiZXJyb3IiLCJtZXNzYWdlIiwiZGF0YSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/cleaning/[id]/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/mongoose.ts":
/*!*************************!*\
  !*** ./lib/mongoose.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectToDB = async ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections)[0].readyState) {\n        console.log(\"Already connected to mongoDB.\");\n        return;\n    }\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n        console.log(\"Successfully connected to MongoDB.\");\n    } catch (error) {\n        console.error(\"Failed to connect to MongoDB:\", error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectToDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29vc2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRS9CLE1BQU1DLGNBQWM7SUFDaEIsSUFBR0QsNkRBQW9CLENBQUMsRUFBRSxDQUFDRyxVQUFVLEVBQ3JDO1FBQ0lDLFFBQVFDLEdBQUcsQ0FBQztRQUNaO0lBQ0o7SUFFQSxJQUFJO1FBQ0EsTUFBTUwsdURBQWdCLENBQUNPLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFZO1lBQ3REQyxpQkFBaUI7WUFDakJDLG9CQUFvQjtRQUN4QjtRQUNBUCxRQUFRQyxHQUFHLENBQUM7SUFDaEIsRUFBRSxPQUFPTyxPQUFPO1FBQ1pSLFFBQVFRLEtBQUssQ0FBQyxpQ0FBaUNBO0lBQ25EO0FBQ0o7QUFFQSxpRUFBZVgsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsiL2hvbWUvc2hhc2hhbmsvRG9jdW1lbnRzL0dpdEh1Yi9Qcm9qZWN0L1dpcGVPdXQtU2VydmljZXMvbGliL21vbmdvb3NlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuY29uc3QgY29ubmVjdFRvREIgPSBhc3luYygpOlByb21pc2U8dm9pZD4gPT57XG4gICAgaWYobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSlcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWxyZWFkeSBjb25uZWN0ZWQgdG8gbW9uZ29EQi5cIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJIGFzIHN0cmluZywge1xuICAgICAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlXG4gICAgICAgIH0gYXMgbW9uZ29vc2UuQ29ubmVjdE9wdGlvbnMpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3NmdWxseSBjb25uZWN0ZWQgdG8gTW9uZ29EQi5cIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBjb25uZWN0IHRvIE1vbmdvREI6XCIsIGVycm9yKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RUb0RCOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3RUb0RCIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJlcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongoose.ts\n");

/***/ }),

/***/ "(rsc)/./models/CleaningFormSchema.ts":
/*!**************************************!*\
  !*** ./models/CleaningFormSchema.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CleaningFormSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    serviceType: {\n        type: String,\n        required: true,\n        enum: [\n            \"general-cleaning\",\n            \"end-of-lease-cleaning\",\n            \"office-cleaning\",\n            \"deep-cleaning\",\n            \"regular-cleaning\",\n            \"construction-cleaning\",\n            \"commercial-cleaning\",\n            \"carpet-cleaning\",\n            \"apartment-cleaning\",\n            \"restaurant-cleaning\"\n        ]\n    },\n    location: {\n        type: String,\n        required: true\n    },\n    phone: {\n        type: String,\n        required: true,\n        match: /^[0-9]{10}$/\n    },\n    email: {\n        type: String,\n        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/\n    },\n    bedrooms: {\n        type: Number,\n        min: 1\n    },\n    bathrooms: {\n        type: Number,\n        min: 1\n    },\n    date: {\n        type: Date,\n        required: true\n    },\n    time: {\n        type: String\n    },\n    status: {\n        type: String,\n        enum: [\n            \"pending\",\n            \"done\"\n        ],\n        default: \"pending\"\n    }\n});\nconst CleaningForm = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).CleaningForm || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"CleaningForm\", CleaningFormSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CleaningForm);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvQ2xlYW5pbmdGb3JtU2NoZW1hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxxQkFBcUIsSUFBSUQsd0RBQWUsQ0FBQztJQUM3Q0csYUFBYTtRQUNYQyxNQUFNQztRQUNOQyxVQUFVO1FBQ1ZDLE1BQU07WUFBQztZQUFvQjtZQUF5QjtZQUFtQjtZQUFpQjtZQUFvQjtZQUF5QjtZQUF1QjtZQUFtQjtZQUFzQjtTQUFzQjtJQUM3TjtJQUNBQyxVQUFVO1FBQ1JKLE1BQU1DO1FBQ05DLFVBQVU7SUFDWjtJQUNBRyxPQUFPO1FBQ0xMLE1BQU1DO1FBQ05DLFVBQVU7UUFDVkksT0FBTztJQUNUO0lBQ0FDLE9BQU87UUFDTFAsTUFBTUM7UUFDTkssT0FBTztJQUNUO0lBQ0FFLFVBQVU7UUFDUlIsTUFBTVM7UUFDTkMsS0FBSztJQUNQO0lBQ0FDLFdBQVc7UUFDVFgsTUFBTVM7UUFDTkMsS0FBSztJQUNQO0lBQ0FFLE1BQU07UUFDSlosTUFBTWE7UUFDTlgsVUFBVTtJQUNaO0lBQ0FZLE1BQU07UUFDSmQsTUFBTUM7SUFDUjtJQUNBYyxRQUFRO1FBQUVmLE1BQU1DO1FBQVFFLE1BQU07WUFBQztZQUFXO1NBQU87UUFBRWEsU0FBUztJQUFVO0FBQ3hFO0FBRUEsTUFBTUMsZUFBZXJCLHdEQUFlLENBQUNxQixZQUFZLElBQUlyQixxREFBYyxDQUFDLGdCQUFnQkM7QUFDcEYsaUVBQWVvQixZQUFZQSxFQUFDIiwic291cmNlcyI6WyIvaG9tZS9zaGFzaGFuay9Eb2N1bWVudHMvR2l0SHViL1Byb2plY3QvV2lwZU91dC1TZXJ2aWNlcy9tb2RlbHMvQ2xlYW5pbmdGb3JtU2NoZW1hLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgQ2xlYW5pbmdGb3JtU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIHNlcnZpY2VUeXBlOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGVudW06IFtcImdlbmVyYWwtY2xlYW5pbmdcIiwgXCJlbmQtb2YtbGVhc2UtY2xlYW5pbmdcIiwgXCJvZmZpY2UtY2xlYW5pbmdcIiwgXCJkZWVwLWNsZWFuaW5nXCIsIFwicmVndWxhci1jbGVhbmluZ1wiLCBcImNvbnN0cnVjdGlvbi1jbGVhbmluZ1wiLCBcImNvbW1lcmNpYWwtY2xlYW5pbmdcIiwgXCJjYXJwZXQtY2xlYW5pbmdcIiwgXCJhcGFydG1lbnQtY2xlYW5pbmdcIiwgXCJyZXN0YXVyYW50LWNsZWFuaW5nXCJdLFxuICB9LFxuICBsb2NhdGlvbjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgfSxcbiAgcGhvbmU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgbWF0Y2g6IC9eWzAtOV17MTB9JC8sIC8vIDEwLWRpZ2l0IHBob25lIG51bWJlciB2YWxpZGF0aW9uXG4gIH0sXG4gIGVtYWlsOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIG1hdGNoOiAvXlthLXpBLVowLTkuXyUrLV0rQFthLXpBLVowLTkuLV0rXFwuW2EtekEtWl17Mix9JC8sIC8vIEVtYWlsIHZhbGlkYXRpb25cbiAgfSxcbiAgYmVkcm9vbXM6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgbWluOiAxLFxuICB9LFxuICBiYXRocm9vbXM6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgbWluOiAxLFxuICB9LFxuICBkYXRlOiB7XG4gICAgdHlwZTogRGF0ZSxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgfSxcbiAgdGltZToge1xuICAgIHR5cGU6IFN0cmluZ1xuICB9LFxuICBzdGF0dXM6IHsgdHlwZTogU3RyaW5nLCBlbnVtOiBbXCJwZW5kaW5nXCIsIFwiZG9uZVwiXSwgZGVmYXVsdDogXCJwZW5kaW5nXCIgfSxcbn0pO1xuXG5jb25zdCBDbGVhbmluZ0Zvcm0gPSBtb25nb29zZS5tb2RlbHMuQ2xlYW5pbmdGb3JtIHx8IG1vbmdvb3NlLm1vZGVsKFwiQ2xlYW5pbmdGb3JtXCIsIENsZWFuaW5nRm9ybVNjaGVtYSk7XG5leHBvcnQgZGVmYXVsdCBDbGVhbmluZ0Zvcm07XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJDbGVhbmluZ0Zvcm1TY2hlbWEiLCJTY2hlbWEiLCJzZXJ2aWNlVHlwZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImVudW0iLCJsb2NhdGlvbiIsInBob25lIiwibWF0Y2giLCJlbWFpbCIsImJlZHJvb21zIiwiTnVtYmVyIiwibWluIiwiYmF0aHJvb21zIiwiZGF0ZSIsIkRhdGUiLCJ0aW1lIiwic3RhdHVzIiwiZGVmYXVsdCIsIkNsZWFuaW5nRm9ybSIsIm1vZGVscyIsIm1vZGVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/CleaningFormSchema.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcleaning%2F%5Bid%5D%2Froute&page=%2Fapi%2Fcleaning%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcleaning%2F%5Bid%5D%2Froute.ts&appDir=%2Fhome%2Fshashank%2FDocuments%2FGitHub%2FProject%2FWipeOut-Services%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fshashank%2FDocuments%2FGitHub%2FProject%2FWipeOut-Services&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcleaning%2F%5Bid%5D%2Froute&page=%2Fapi%2Fcleaning%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcleaning%2F%5Bid%5D%2Froute.ts&appDir=%2Fhome%2Fshashank%2FDocuments%2FGitHub%2FProject%2FWipeOut-Services%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fshashank%2FDocuments%2FGitHub%2FProject%2FWipeOut-Services&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_shashank_Documents_GitHub_Project_WipeOut_Services_app_api_cleaning_id_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/cleaning/[id]/route.ts */ \"(rsc)/./app/api/cleaning/[id]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/cleaning/[id]/route\",\n        pathname: \"/api/cleaning/[id]\",\n        filename: \"route\",\n        bundlePath: \"app/api/cleaning/[id]/route\"\n    },\n    resolvedPagePath: \"/home/shashank/Documents/GitHub/Project/WipeOut-Services/app/api/cleaning/[id]/route.ts\",\n    nextConfigOutput,\n    userland: _home_shashank_Documents_GitHub_Project_WipeOut_Services_app_api_cleaning_id_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZjbGVhbmluZyUyRiU1QmlkJTVEJTJGcm91dGUmcGFnZT0lMkZhcGklMkZjbGVhbmluZyUyRiU1QmlkJTVEJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY2xlYW5pbmclMkYlNUJpZCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGc2hhc2hhbmslMkZEb2N1bWVudHMlMkZHaXRIdWIlMkZQcm9qZWN0JTJGV2lwZU91dC1TZXJ2aWNlcyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGaG9tZSUyRnNoYXNoYW5rJTJGRG9jdW1lbnRzJTJGR2l0SHViJTJGUHJvamVjdCUyRldpcGVPdXQtU2VydmljZXMmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3VDO0FBQ3BIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvaG9tZS9zaGFzaGFuay9Eb2N1bWVudHMvR2l0SHViL1Byb2plY3QvV2lwZU91dC1TZXJ2aWNlcy9hcHAvYXBpL2NsZWFuaW5nL1tpZF0vcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2NsZWFuaW5nL1tpZF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9jbGVhbmluZy9baWRdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jbGVhbmluZy9baWRdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL2hvbWUvc2hhc2hhbmsvRG9jdW1lbnRzL0dpdEh1Yi9Qcm9qZWN0L1dpcGVPdXQtU2VydmljZXMvYXBwL2FwaS9jbGVhbmluZy9baWRdL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcleaning%2F%5Bid%5D%2Froute&page=%2Fapi%2Fcleaning%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcleaning%2F%5Bid%5D%2Froute.ts&appDir=%2Fhome%2Fshashank%2FDocuments%2FGitHub%2FProject%2FWipeOut-Services%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fshashank%2FDocuments%2FGitHub%2FProject%2FWipeOut-Services&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcleaning%2F%5Bid%5D%2Froute&page=%2Fapi%2Fcleaning%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcleaning%2F%5Bid%5D%2Froute.ts&appDir=%2Fhome%2Fshashank%2FDocuments%2FGitHub%2FProject%2FWipeOut-Services%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fshashank%2FDocuments%2FGitHub%2FProject%2FWipeOut-Services&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();