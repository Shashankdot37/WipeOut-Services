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
exports.id = "app/api/removal/[id]/route";
exports.ids = ["app/api/removal/[id]/route"];
exports.modules = {

/***/ "(rsc)/./app/api/removal/[id]/route.ts":
/*!***************************************!*\
  !*** ./app/api/removal/[id]/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PATCH: () => (/* binding */ PATCH),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongoose */ \"(rsc)/./lib/mongoose.ts\");\n/* harmony import */ var _models_RemovalFormSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/RemovalFormSchema */ \"(rsc)/./models/RemovalFormSchema.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nasync function PATCH(request, { params }) {\n    try {\n        await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const { id } = params;\n        const updatedBooking = await _models_RemovalFormSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndUpdate(id, {\n            status: \"done\"\n        }, {\n            new: true\n        });\n        if (!updatedBooking) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                error: \"Booking not found\"\n            }, {\n                status: 404\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: \"Status updated\",\n            data: updatedBooking\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: \"Error updating status\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function PUT(request, { params }) {\n    try {\n        await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const { id } = params;\n        const { adminNote } = await request.json();\n        const updatedBooking = await _models_RemovalFormSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndUpdate(id, {\n            adminNote\n        }, {\n            new: true\n        });\n        if (!adminNote) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                error: \"Admin Note is required.\"\n            }, {\n                status: 400\n            });\n        }\n        if (!updatedBooking) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                error: \"Error updating the booking\"\n            }, {\n                status: 404\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: \"Admin Note updated\",\n            data: updatedBooking\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: \"Error updating admin note\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3JlbW92YWwvW2lkXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QztBQUNZO0FBQ0U7QUFFaEQsZUFBZUcsTUFBTUMsT0FBbUIsRUFBRSxFQUFDQyxNQUFNLEVBQXNCO0lBQzlFLElBQUk7UUFDQSxNQUFNTCx5REFBV0E7UUFDakIsTUFBTSxFQUFDTSxFQUFFLEVBQUMsR0FBR0Q7UUFDYixNQUFNRSxpQkFBaUIsTUFBTU4saUVBQVdBLENBQUNPLGlCQUFpQixDQUN0REYsSUFDQTtZQUFDRyxRQUFPO1FBQU0sR0FDZDtZQUFDQyxLQUFJO1FBQUk7UUFFYixJQUFHLENBQUNILGdCQUNKO1lBQ0ksT0FBT0wscURBQVlBLENBQUNTLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFvQixHQUFHO2dCQUFFSCxRQUFRO1lBQUk7UUFDM0U7UUFDQSxPQUFPUCxxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO1lBQUVFLFNBQVM7WUFBa0JDLE1BQU1QO1FBQWUsR0FBRztZQUFFRSxRQUFRO1FBQUk7SUFDaEcsRUFBRSxPQUFPRyxPQUFPO1FBQ1osT0FBT1YscURBQVlBLENBQUNTLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXdCLEdBQUc7WUFBRUgsUUFBUTtRQUFJO0lBQy9FO0FBQ0E7QUFFTyxlQUFlTSxJQUFJWCxPQUFtQixFQUFFLEVBQUNDLE1BQU0sRUFBc0I7SUFFeEUsSUFBSTtRQUNBLE1BQU1MLHlEQUFXQTtRQUNqQixNQUFNLEVBQUNNLEVBQUUsRUFBQyxHQUFHRDtRQUNiLE1BQU0sRUFBQ1csU0FBUyxFQUFDLEdBQUcsTUFBTVosUUFBUU8sSUFBSTtRQUN0QyxNQUFNSixpQkFBaUIsTUFBTU4saUVBQVdBLENBQUNPLGlCQUFpQixDQUMxREYsSUFDQTtZQUFDVTtRQUFTLEdBQ1Y7WUFBQ04sS0FBSTtRQUFJO1FBR1QsSUFBRyxDQUFDTSxXQUNKO1lBQ0ksT0FBT2QscURBQVlBLENBQUNTLElBQUksQ0FBQztnQkFBQ0MsT0FBTTtZQUF5QixHQUFFO2dCQUFDSCxRQUFPO1lBQUc7UUFDMUU7UUFFQSxJQUFHLENBQUNGLGdCQUNKO1lBQ0ksT0FBT0wscURBQVlBLENBQUNTLElBQUksQ0FBQztnQkFBQ0MsT0FBTTtZQUE0QixHQUFFO2dCQUFDSCxRQUFPO1lBQUc7UUFDN0U7UUFFQSxPQUFPUCxxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO1lBQUNFLFNBQVE7WUFBc0JDLE1BQUtQO1FBQWM7SUFDL0UsRUFBRSxPQUFPSyxPQUFPO1FBQ1osT0FBT1YscURBQVlBLENBQUNTLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQTJCLEdBQUc7WUFBRUgsUUFBUTtRQUFJO0lBQ2xGO0FBQ0oiLCJzb3VyY2VzIjpbIi9ob21lL3NoYXNoYW5rL0RvY3VtZW50cy9HaXRIdWIvUHJvamVjdC9XaXBlT3V0LVNlcnZpY2VzL2FwcC9hcGkvcmVtb3ZhbC9baWRdL3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uZWN0VG9EQiBmcm9tIFwiQC9saWIvbW9uZ29vc2VcIjtcbmltcG9ydCBSZW1vdmFsRm9ybSBmcm9tIFwiQC9tb2RlbHMvUmVtb3ZhbEZvcm1TY2hlbWFcIjtcbmltcG9ydCB7IE5leHRSZXF1ZXN0LE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUEFUQ0gocmVxdWVzdDpOZXh0UmVxdWVzdCwge3BhcmFtc306e3BhcmFtczp7aWQ6c3RyaW5nfX0pe1xudHJ5IHtcbiAgICBhd2FpdCBjb25uZWN0VG9EQigpO1xuICAgIGNvbnN0IHtpZH0gPSBwYXJhbXM7XG4gICAgY29uc3QgdXBkYXRlZEJvb2tpbmcgPSBhd2FpdCBSZW1vdmFsRm9ybS5maW5kQnlJZEFuZFVwZGF0ZShcbiAgICAgICAgaWQsXG4gICAgICAgIHtzdGF0dXM6XCJkb25lXCJ9LFxuICAgICAgICB7bmV3OnRydWV9XG4gICAgKSBcbiAgICBpZighdXBkYXRlZEJvb2tpbmcpXG4gICAge1xuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJCb29raW5nIG5vdCBmb3VuZFwiIH0sIHsgc3RhdHVzOiA0MDQgfSlcbiAgICB9XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJTdGF0dXMgdXBkYXRlZFwiLCBkYXRhOiB1cGRhdGVkQm9va2luZyB9LCB7IHN0YXR1czogMjAwIH0pO1xufSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJFcnJvciB1cGRhdGluZyBzdGF0dXNcIiB9LCB7IHN0YXR1czogNTAwIH0pO1xufVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUFVUKHJlcXVlc3Q6TmV4dFJlcXVlc3QsIHtwYXJhbXN9OntwYXJhbXM6e2lkOnN0cmluZ319KVxue1xuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGNvbm5lY3RUb0RCKCk7XG4gICAgICAgIGNvbnN0IHtpZH0gPSBwYXJhbXM7XG4gICAgICAgIGNvbnN0IHthZG1pbk5vdGV9ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRCb29raW5nID0gYXdhaXQgUmVtb3ZhbEZvcm0uZmluZEJ5SWRBbmRVcGRhdGUoXG4gICAgICAgIGlkLFxuICAgICAgICB7YWRtaW5Ob3RlfSxcbiAgICAgICAge25ldzp0cnVlfVxuICAgICAgICApXG5cbiAgICAgICAgaWYoIWFkbWluTm90ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtlcnJvcjpcIkFkbWluIE5vdGUgaXMgcmVxdWlyZWQuXCJ9LHtzdGF0dXM6NDAwfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCF1cGRhdGVkQm9va2luZylcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtlcnJvcjpcIkVycm9yIHVwZGF0aW5nIHRoZSBib29raW5nXCJ9LHtzdGF0dXM6NDA0fSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7bWVzc2FnZTpcIkFkbWluIE5vdGUgdXBkYXRlZFwiLCBkYXRhOnVwZGF0ZWRCb29raW5nfSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJFcnJvciB1cGRhdGluZyBhZG1pbiBub3RlXCJ9LCB7IHN0YXR1czogNTAwIH0pO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiY29ubmVjdFRvREIiLCJSZW1vdmFsRm9ybSIsIk5leHRSZXNwb25zZSIsIlBBVENIIiwicmVxdWVzdCIsInBhcmFtcyIsImlkIiwidXBkYXRlZEJvb2tpbmciLCJmaW5kQnlJZEFuZFVwZGF0ZSIsInN0YXR1cyIsIm5ldyIsImpzb24iLCJlcnJvciIsIm1lc3NhZ2UiLCJkYXRhIiwiUFVUIiwiYWRtaW5Ob3RlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/removal/[id]/route.ts\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst RemovalFormSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    from: {\n        type: String,\n        required: true\n    },\n    to: {\n        type: String,\n        required: true\n    },\n    serviceType: {\n        type: String,\n        required: true,\n        enum: [\n            \"1helper\",\n            \"1van1helper\",\n            \"1van2helpers\",\n            \"4.5ton1helper\",\n            \"4.5ton2helpers\",\n            \"4.5ton3helpers\"\n        ]\n    },\n    phone: {\n        type: String,\n        required: true,\n        match: /^[0-9]{10}$/\n    },\n    email: {\n        type: String,\n        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/\n    },\n    date: {\n        type: Date,\n        required: true\n    },\n    status: {\n        type: String,\n        enum: [\n            \"pending\",\n            \"done\"\n        ],\n        default: \"pending\"\n    },\n    adminNote: {\n        type: String,\n        default: \"\"\n    }\n});\nconst RemovalForm = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).RemovalForm || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"RemovalForm\", RemovalFormSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RemovalForm);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvUmVtb3ZhbEZvcm1TY2hlbWEudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLG9CQUFvQixJQUFJRCx3REFBZSxDQUFDO0lBQzVDRyxNQUFNO1FBQ0pDLE1BQU1DO1FBQ05DLFVBQVU7SUFDWjtJQUNBQyxJQUFJO1FBQ0ZILE1BQU1DO1FBQ05DLFVBQVU7SUFDWjtJQUNBRSxhQUFhO1FBQ1hKLE1BQU1DO1FBQ05DLFVBQVU7UUFDVkcsTUFBTTtZQUFDO1lBQVc7WUFBZTtZQUFlO1lBQWdCO1lBQWlCO1NBQWlCO0lBQ3BHO0lBQ0FDLE9BQU87UUFDTE4sTUFBTUM7UUFDTkMsVUFBVTtRQUNWSyxPQUFPO0lBQ1Q7SUFDQUMsT0FBTztRQUNMUixNQUFNQztRQUNOTSxPQUFPO0lBQ1Q7SUFDQUUsTUFBTTtRQUNKVCxNQUFNVTtRQUNOUixVQUFVO0lBQ1o7SUFDQVMsUUFBUTtRQUFFWCxNQUFNQztRQUFRSSxNQUFNO1lBQUM7WUFBVztTQUFPO1FBQUVPLFNBQVM7SUFBVTtJQUN0RUMsV0FBVztRQUNUYixNQUFNQztRQUNOVyxTQUFTO0lBQ1g7QUFDRjtBQUVBLE1BQU1FLGNBQWNsQix3REFBZSxDQUFDa0IsV0FBVyxJQUFJbEIscURBQWMsQ0FBQyxlQUFlQztBQUNqRixpRUFBZWlCLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIi9ob21lL3NoYXNoYW5rL0RvY3VtZW50cy9HaXRIdWIvUHJvamVjdC9XaXBlT3V0LVNlcnZpY2VzL21vZGVscy9SZW1vdmFsRm9ybVNjaGVtYS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IFJlbW92YWxGb3JtU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIGZyb206IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIHRvOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICB9LFxuICBzZXJ2aWNlVHlwZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBlbnVtOiBbXCIxaGVscGVyXCIsIFwiMXZhbjFoZWxwZXJcIiwgXCIxdmFuMmhlbHBlcnNcIixcIjQuNXRvbjFoZWxwZXJcIixcIjQuNXRvbjJoZWxwZXJzXCIsXCI0LjV0b24zaGVscGVyc1wiXSxcbiAgfSxcbiAgcGhvbmU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgbWF0Y2g6IC9eWzAtOV17MTB9JC8sIC8vIDEwLWRpZ2l0IHBob25lIG51bWJlciB2YWxpZGF0aW9uXG4gIH0sXG4gIGVtYWlsOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIG1hdGNoOiAvXlthLXpBLVowLTkuXyUrLV0rQFthLXpBLVowLTkuLV0rXFwuW2EtekEtWl17Mix9JC8sIC8vIEVtYWlsIHZhbGlkYXRpb25cbiAgfSxcbiAgZGF0ZToge1xuICAgIHR5cGU6IERhdGUsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIHN0YXR1czogeyB0eXBlOiBTdHJpbmcsIGVudW06IFtcInBlbmRpbmdcIiwgXCJkb25lXCJdLCBkZWZhdWx0OiBcInBlbmRpbmdcIiB9LFxuICBhZG1pbk5vdGU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogXCJcIixcbiAgfSxcbn0pO1xuXG5jb25zdCBSZW1vdmFsRm9ybSA9IG1vbmdvb3NlLm1vZGVscy5SZW1vdmFsRm9ybSB8fCBtb25nb29zZS5tb2RlbChcIlJlbW92YWxGb3JtXCIsIFJlbW92YWxGb3JtU2NoZW1hKTtcbmV4cG9ydCBkZWZhdWx0IFJlbW92YWxGb3JtOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlJlbW92YWxGb3JtU2NoZW1hIiwiU2NoZW1hIiwiZnJvbSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInRvIiwic2VydmljZVR5cGUiLCJlbnVtIiwicGhvbmUiLCJtYXRjaCIsImVtYWlsIiwiZGF0ZSIsIkRhdGUiLCJzdGF0dXMiLCJkZWZhdWx0IiwiYWRtaW5Ob3RlIiwiUmVtb3ZhbEZvcm0iLCJtb2RlbHMiLCJtb2RlbCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./models/RemovalFormSchema.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fremoval%2F%5Bid%5D%2Froute&page=%2Fapi%2Fremoval%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fremoval%2F%5Bid%5D%2Froute.ts&appDir=%2Fhome%2Fshashank%2FDocuments%2FGitHub%2FProject%2FWipeOut-Services%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fshashank%2FDocuments%2FGitHub%2FProject%2FWipeOut-Services&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fremoval%2F%5Bid%5D%2Froute&page=%2Fapi%2Fremoval%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fremoval%2F%5Bid%5D%2Froute.ts&appDir=%2Fhome%2Fshashank%2FDocuments%2FGitHub%2FProject%2FWipeOut-Services%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fshashank%2FDocuments%2FGitHub%2FProject%2FWipeOut-Services&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_shashank_Documents_GitHub_Project_WipeOut_Services_app_api_removal_id_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/removal/[id]/route.ts */ \"(rsc)/./app/api/removal/[id]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/removal/[id]/route\",\n        pathname: \"/api/removal/[id]\",\n        filename: \"route\",\n        bundlePath: \"app/api/removal/[id]/route\"\n    },\n    resolvedPagePath: \"/home/shashank/Documents/GitHub/Project/WipeOut-Services/app/api/removal/[id]/route.ts\",\n    nextConfigOutput,\n    userland: _home_shashank_Documents_GitHub_Project_WipeOut_Services_app_api_removal_id_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZyZW1vdmFsJTJGJTVCaWQlNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnJlbW92YWwlMkYlNUJpZCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnJlbW92YWwlMkYlNUJpZCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGc2hhc2hhbmslMkZEb2N1bWVudHMlMkZHaXRIdWIlMkZQcm9qZWN0JTJGV2lwZU91dC1TZXJ2aWNlcyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGaG9tZSUyRnNoYXNoYW5rJTJGRG9jdW1lbnRzJTJGR2l0SHViJTJGUHJvamVjdCUyRldpcGVPdXQtU2VydmljZXMmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3NDO0FBQ25IO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvaG9tZS9zaGFzaGFuay9Eb2N1bWVudHMvR2l0SHViL1Byb2plY3QvV2lwZU91dC1TZXJ2aWNlcy9hcHAvYXBpL3JlbW92YWwvW2lkXS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcmVtb3ZhbC9baWRdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcmVtb3ZhbC9baWRdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9yZW1vdmFsL1tpZF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvaG9tZS9zaGFzaGFuay9Eb2N1bWVudHMvR2l0SHViL1Byb2plY3QvV2lwZU91dC1TZXJ2aWNlcy9hcHAvYXBpL3JlbW92YWwvW2lkXS9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fremoval%2F%5Bid%5D%2Froute&page=%2Fapi%2Fremoval%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fremoval%2F%5Bid%5D%2Froute.ts&appDir=%2Fhome%2Fshashank%2FDocuments%2FGitHub%2FProject%2FWipeOut-Services%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fshashank%2FDocuments%2FGitHub%2FProject%2FWipeOut-Services&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fremoval%2F%5Bid%5D%2Froute&page=%2Fapi%2Fremoval%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fremoval%2F%5Bid%5D%2Froute.ts&appDir=%2Fhome%2Fshashank%2FDocuments%2FGitHub%2FProject%2FWipeOut-Services%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fshashank%2FDocuments%2FGitHub%2FProject%2FWipeOut-Services&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();