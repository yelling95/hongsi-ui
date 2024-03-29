import styleInject from 'style-inject';
import React from 'react';
import moment from 'moment';
import parser from 'html-react-parser';
import ContentLoader from 'react-content-loader';

var css_248z$p = ":root{--black:#393939;--white:#fff;--red:#e50101;--primary-orange:#ed5500;--secondary-orange-60:#d74000;--secondary-orange-70:#b64100;--primary-green:#055b00;--primary-button:#ed5500;--primary-button-pressed:#b64100;--primary-button-hover:#d74000;--primary-button-disabled:#ababab;--secondary-button:#efefef;--secondary-button-pressed:#ababab;--secondary-button-hover:#d8d8d8;--secondary-button-disabled:#ababab;--grey-80:#676767;--grey-70:#7e7e7e;--grey-60:#ababab;--grey-50:#d8d8d8;--grey-30:#efefef;--grey-10:#fafafa;--marker:#ff5206;--dimm-layer:rgba(0,0,0,.4);--disable-layer:rgba(0,0,0,.6)}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbG9yLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFDRSxlQUFnQixDQUNoQixZQUFnQixDQUNoQixhQUFjLENBQ2Qsd0JBQXlCLENBQ3pCLDZCQUE4QixDQUM5Qiw2QkFBOEIsQ0FDOUIsdUJBQXdCLENBQ3hCLHdCQUF5QixDQUN6QixnQ0FBaUMsQ0FDakMsOEJBQStCLENBQy9CLGlDQUFrQyxDQUNsQywwQkFBMkIsQ0FDM0Isa0NBQW1DLENBQ25DLGdDQUFpQyxDQUNqQyxtQ0FBb0MsQ0FDcEMsaUJBQWtCLENBQ2xCLGlCQUFrQixDQUNsQixpQkFBa0IsQ0FDbEIsaUJBQWtCLENBQ2xCLGlCQUFrQixDQUNsQixpQkFBa0IsQ0FDbEIsZ0JBQWlCLENBQ2pCLDJCQUFnQyxDQUNoQyw4QkFDRiIsImZpbGUiOiJjb2xvci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAtLWJsYWNrOiAjMzkzOTM5O1xuICAtLXdoaXRlOiAjZmZmZmZmO1xuICAtLXJlZDogI0U1MDEwMTtcbiAgLS1wcmltYXJ5LW9yYW5nZTogI0VENTUwMDtcbiAgLS1zZWNvbmRhcnktb3JhbmdlLTYwOiAjRDc0MDAwO1xuICAtLXNlY29uZGFyeS1vcmFuZ2UtNzA6ICNCNjQxMDA7XG4gIC0tcHJpbWFyeS1ncmVlbjogIzA1NUIwMDtcbiAgLS1wcmltYXJ5LWJ1dHRvbjogI0VENTUwMDtcbiAgLS1wcmltYXJ5LWJ1dHRvbi1wcmVzc2VkOiAjQjY0MTAwO1xuICAtLXByaW1hcnktYnV0dG9uLWhvdmVyOiAjRDc0MDAwO1xuICAtLXByaW1hcnktYnV0dG9uLWRpc2FibGVkOiAjQUJBQkFCO1xuICAtLXNlY29uZGFyeS1idXR0b246ICNFRkVGRUY7XG4gIC0tc2Vjb25kYXJ5LWJ1dHRvbi1wcmVzc2VkOiAjQUJBQkFCO1xuICAtLXNlY29uZGFyeS1idXR0b24taG92ZXI6ICNEOEQ4RDg7XG4gIC0tc2Vjb25kYXJ5LWJ1dHRvbi1kaXNhYmxlZDogI0FCQUJBQjtcbiAgLS1ncmV5LTgwOiAjNjc2NzY3O1xuICAtLWdyZXktNzA6ICM3RTdFN0U7XG4gIC0tZ3JleS02MDogI0FCQUJBQjtcbiAgLS1ncmV5LTUwOiAjRDhEOEQ4O1xuICAtLWdyZXktMzA6ICNFRkVGRUY7XG4gIC0tZ3JleS0xMDogI0ZBRkFGQTtcbiAgLS1tYXJrZXI6ICNGRjUyMDY7XG4gIC0tZGltbS1sYXllcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAtLWRpc2FibGUtbGF5ZXI6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn0iXX0= */";
styleInject(css_248z$p);

var css_248z$o = "@font-face{font-family:SF Pro Display;font-weight:900;letter-spacing:-.3px;src:url(fonts/Black.woff) format(\"woff\")}@font-face{font-family:SF Pro Display;font-weight:800;letter-spacing:-.3px;src:url(fonts/Heavy.woff) format(\"woff\")}@font-face{font-family:SF Pro Display;font-weight:700;letter-spacing:-.3px;src:url(fonts/Bold.woff) format(\"woff\")}@font-face{font-family:SF Pro Display;font-weight:600;letter-spacing:-.3px;src:url(fonts/Semibold.woff) format(\"woff\")}@font-face{font-family:SF Pro Display;font-weight:500;letter-spacing:-.3px;src:url(fonts/Medium.woff) format(\"woff\")}@font-face{font-family:SF Pro Display;font-weight:400;letter-spacing:-.3px;src:url(fonts/Regular.woff) format(\"woff\")}@font-face{font-family:SF Pro Display;font-weight:300;letter-spacing:-.3px;src:url(fonts/Light.woff) format(\"woff\")}@font-face{font-family:SF Pro Display;font-weight:200;letter-spacing:-.3px;src:url(fonts/Thin.woff) format(\"woff\")}@font-face{font-family:SF Pro Display;font-weight:100;letter-spacing:-.3px;src:url(fonts/Ultralight.woff) format(\"woff\")}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUNFLDBCQUE2QixDQUM3QixlQUFnQixDQUNoQixvQkFBc0IsQ0FDdEIsd0NBQ0YsQ0FDQSxXQUNFLDBCQUE2QixDQUM3QixlQUFnQixDQUNoQixvQkFBc0IsQ0FDdEIsd0NBQ0YsQ0FDQSxXQUNFLDBCQUE2QixDQUM3QixlQUFnQixDQUNoQixvQkFBc0IsQ0FDdEIsdUNBQ0YsQ0FDQSxXQUNFLDBCQUE2QixDQUM3QixlQUFnQixDQUNoQixvQkFBc0IsQ0FDdEIsMkNBQ0YsQ0FDQSxXQUNFLDBCQUE2QixDQUM3QixlQUFnQixDQUNoQixvQkFBc0IsQ0FDdEIseUNBQ0YsQ0FDQSxXQUNFLDBCQUE2QixDQUM3QixlQUFnQixDQUNoQixvQkFBc0IsQ0FDdEIsMENBQ0YsQ0FDQSxXQUNFLDBCQUE2QixDQUM3QixlQUFnQixDQUNoQixvQkFBc0IsQ0FDdEIsd0NBQ0YsQ0FDQSxXQUNFLDBCQUE2QixDQUM3QixlQUFnQixDQUNoQixvQkFBc0IsQ0FDdEIsdUNBQ0YsQ0FDQSxXQUNFLDBCQUE2QixDQUM3QixlQUFnQixDQUNoQixvQkFBc0IsQ0FDdEIsNkNBQ0YiLCJmaWxlIjoiZm9udC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBEaXNwbGF5XCI7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIHNyYzogdXJsKFwiLi9mb250cy9CbGFjay53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIERpc3BsYXlcIjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgc3JjOiB1cmwoXCIuL2ZvbnRzL0hlYXZ5LndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gRGlzcGxheVwiO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBzcmM6IHVybChcIi4vZm9udHMvQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIERpc3BsYXlcIjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgc3JjOiB1cmwoXCIuL2ZvbnRzL1NlbWlib2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gRGlzcGxheVwiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBzcmM6IHVybChcIi4vZm9udHMvTWVkaXVtLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gRGlzcGxheVwiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBzcmM6IHVybChcIi4vZm9udHMvUmVndWxhci53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIERpc3BsYXlcIjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgc3JjOiB1cmwoXCIuL2ZvbnRzL0xpZ2h0LndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gRGlzcGxheVwiO1xuICBmb250LXdlaWdodDogMjAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBzcmM6IHVybChcIi4vZm9udHMvVGhpbi53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIERpc3BsYXlcIjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgc3JjOiB1cmwoXCIuL2ZvbnRzL1VsdHJhbGlnaHQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xufSJdfQ== */";
styleInject(css_248z$o);

var css_248z$n = "*{-webkit-touch-callout:none;-webkit-tap-highlight-color:rgba(0,0,0,0);box-sizing:border-box;margin:0;padding:0}::-webkit-scrollbar{height:4px;width:8px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:#d9d9d9;border-radius:4px}.dimm{background-color:var(--dimm-layer);height:100vh;left:0;position:absolute;top:0;width:100vw;z-index:9998}.limit-line-1{-webkit-line-clamp:1}.limit-line-1,.limit-line-2{-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis;white-space:normal;word-break:break-word}.limit-line-2{-webkit-line-clamp:2}.shadow{-webkit-box-shadow:0 -3px 4px 0 rgba(0,0,0,.3);-moz-box-shadow:0 -3px 4px 0 rgba(0,0,0,.3);box-shadow:0 -3px 4px 0 rgba(0,0,0,.3)}.unread{align-items:center;background-color:var(--primary-orange);border-radius:50%;color:var(--white);display:flex;font-size:12px;font-weight:600;height:19.5px;justify-content:center;text-align:center;width:19.5px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxFQUlFLDBCQUEyQixDQUMzQix5Q0FBNkMsQ0FGN0MscUJBQXNCLENBRnRCLFFBQVcsQ0FDWCxTQUlGLENBQ0Esb0JBRUUsVUFBVyxDQURYLFNBRUYsQ0FDQSwwQkFDRSxzQkFDRixDQUNBLDBCQUNFLGtCQUFtQixDQUNuQixpQkFDRixDQUVBLE1BT0Usa0NBQW1DLENBSm5DLFlBQWEsQ0FFYixNQUFPLENBSlAsaUJBQWtCLENBR2xCLEtBQU0sQ0FGTixXQUFZLENBSVosWUFFRixDQUVBLGNBR0Usb0JBS0YsQ0FFQSw0QkFSRSwyQkFBNEIsQ0FENUIsbUJBQW9CLENBR3BCLGVBQWdCLENBQ2hCLHNCQUF1QixDQUN2QixrQkFBbUIsQ0FDbkIscUJBV0YsQ0FSQSxjQUdFLG9CQUtGLENBRUEsUUFDRSw4Q0FBdUQsQ0FDdkQsMkNBQW9ELENBQ3BELHNDQUNGLENBRUEsUUFFRSxrQkFBbUIsQ0FTbkIsc0NBQXVDLENBRHZDLGlCQUFrQixDQURsQixrQkFBbUIsQ0FSbkIsWUFBYSxDQU1iLGNBQWUsQ0FDZixlQUFnQixDQUhoQixhQUFjLENBRmQsc0JBQXVCLENBR3ZCLGlCQUFrQixDQUZsQixZQVFGIiwiZmlsZSI6ImJhc2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbn1cbio6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA0cHg7XG59XG4qOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuKjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjZDlkOWQ5O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5kaW1tIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogOTk5ODtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGltbS1sYXllcik7XG59XG5cbi5saW1pdC1saW5lLTEge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbn1cblxuLmxpbWl0LWxpbmUtMiB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuXG4uc2hhZG93IHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggLTNweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggLTNweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm94LXNoYWRvdzogMHB4IC0zcHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi51bnJlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDE5LjVweDtcbiAgaGVpZ2h0OiAxOS41cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktb3JhbmdlKTtcbn0iXX0= */";
styleInject(css_248z$n);

var css_248z$m = ".slider{animation:slider 1s ease-out;transform:translateY(100%)}.slider.open{transform:translateY(0)}@keyframes slider{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes snackbar{0%{opacity:0;transform:translateY(50px)}to{opacity:1;transform:translateY(0)}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW0uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxRQUVFLDRCQUE2QixDQUQ3QiwwQkFFRixDQUNBLGFBQ0UsdUJBQ0YsQ0FFQSxrQkFDRSxHQUNFLDBCQUNGLENBQ0EsR0FDRSx1QkFDRixDQUNGLENBQ0Esb0JBQ0UsR0FDRSxTQUFVLENBQ1YsMEJBQ0YsQ0FDQSxHQUNFLFNBQVUsQ0FDVix1QkFDRixDQUNGIiwiZmlsZSI6ImFuaW0uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG4gIGFuaW1hdGlvbjogc2xpZGVyIDFzIGVhc2Utb3V0O1xufVxuLnNsaWRlci5vcGVuIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbn1cblxuQGtleWZyYW1lcyBzbGlkZXIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbmFja2JhciB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufSJdfQ== */";
styleInject(css_248z$m);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var classnamesExports = {};
var classnames$1 = {
  get exports(){ return classnamesExports; },
  set exports(v){ classnamesExports = v; },
};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					if (arg.length) {
						var inner = classNames.apply(null, arg);
						if (inner) {
							classes.push(inner);
						}
					}
				} else if (argType === 'object') {
					if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
						classes.push(arg.toString());
						continue;
					}

					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}());
} (classnames$1));

var classnames = classnamesExports;

var css_248z$l = ".button_container{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;--button-padding-tb:23px;--button-padding-lr:17px;--font-weight:700;--line-height:25px;align-items:center;background:var(--background);border:0;border-radius:11px;box-shadow:none;box-sizing:border-box;color:var(--color);cursor:pointer;display:inline-flex;font-family:SF Pro Display,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Emoji,sans-serif;font-size:var(--font-size);font-style:normal;font-weight:var(--font-weight);height:var(--height);justify-content:center;line-height:var(--line-height);max-width:var(--width);outline:none;padding:var(--button-padding-tb) var(--button-padding-lr);width:100%}.button_container.lg{--width:335px;--height:50px;--font-size:18px}.button_container.md{--width:293px;--height:50px;--font-size:18px}.button_container.sm{--width:166px;--height:50px;--font-size:18px}.button_container.primary{--background:var(--primary-button);--color:var(--white);--pressed-background:var(--primary-button-pressed);--pressed-color:var(--white);--disabled-backgound:var(--primary-button-disabled);--disabled-color:var(--white)}.button_container.primary:hover{--hover-background:var(--primary-button-hover);--hover-color:var(--white)}.button_container.secondary{--background:var(--secondary-button);--color:var(--black);--pressed-background:var(--secondary-button-pressed);--pressed-color:var(--white);--disabled-backgound:var(--secondary-button-disabled);--disabled-color:var(--white)}.button_container.secondary:hover{--hover-background:var(--secondary-button-hover);--hover-color:var(--black)}.button_container:active{background-color:var(--pressed-background);color:var(--pressed-color)}.button_container:disabled{background-color:var(--disabled-backgound);color:var(--disabled-color);cursor:default}.button_container:disabled svg path{fill:var(--disabled-color)}.button_container:hover{background-color:var(--hover-background);color:var(--hover-color)}.button_container svg path{fill:var(--color)}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUdFLGtDQUFtQyxDQUNuQyxpQ0FBa0MsQ0FDbEMsd0JBQXlCLENBQ3pCLHdCQUF5QixDQUN6QixpQkFBa0IsQ0FDbEIsa0JBQW1CLENBR25CLGtCQUFtQixDQUVuQiw0QkFBNkIsQ0FZN0IsUUFBVyxDQUNYLGtCQUFtQixDQUZuQixlQUFnQixDQUxoQixxQkFBc0IsQ0FMdEIsa0JBQW1CLENBQ25CLGNBQWUsQ0FOZixtQkFBb0IsQ0FScEIsME5BQTZQLENBb0I3UCwwQkFBMkIsQ0FuQjNCLGlCQUFrQixDQW9CbEIsOEJBQStCLENBSi9CLG9CQUFxQixDQVJyQixzQkFBdUIsQ0FhdkIsOEJBQStCLENBTi9CLHNCQUF1QixDQUx2QixZQUFhLENBUWIseURBQTBELENBSjFELFVBV0YsQ0FDQSxxQkFDRSxhQUFjLENBQ2QsYUFBYyxDQUNkLGdCQUNGLENBQ0EscUJBQ0UsYUFBYyxDQUNkLGFBQWMsQ0FDZCxnQkFDRixDQUNBLHFCQUNFLGFBQWMsQ0FDZCxhQUFjLENBQ2QsZ0JBQ0YsQ0FDQSwwQkFDRSxrQ0FBbUMsQ0FDbkMsb0JBQXFCLENBQ3JCLGtEQUFtRCxDQUNuRCw0QkFBNkIsQ0FDN0IsbURBQW9ELENBQ3BELDZCQUNGLENBQ0EsZ0NBQ0UsOENBQStDLENBQy9DLDBCQUNGLENBQ0EsNEJBQ0Usb0NBQXFDLENBQ3JDLG9CQUFxQixDQUNyQixvREFBcUQsQ0FDckQsNEJBQTZCLENBQzdCLHFEQUFzRCxDQUN0RCw2QkFDRixDQUNBLGtDQUNFLGdEQUFpRCxDQUNqRCwwQkFDRixDQUNBLHlCQUNFLDBDQUEyQyxDQUMzQywwQkFDRixDQUNBLDJCQUNFLDBDQUEyQyxDQUMzQywyQkFBNEIsQ0FDNUIsY0FDRixDQUNBLG9DQUNFLDBCQUNGLENBQ0Esd0JBQ0Usd0NBQXlDLENBQ3pDLHdCQUNGLENBQ0EsMkJBQ0UsaUJBQ0YiLCJmaWxlIjoiQnV0dG9uLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uX2NvbnRhaW5lciB7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBEaXNwbGF5XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgc3lzdGVtLXVpLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJTZWdvZSBVSVwiLCBcIkFwcGxlIFNEIEdvdGhpYyBOZW9cIiwgXCJOb3RvIFNhbnMgS1JcIiwgXCJNYWxndW4gR290aGljXCIsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gRW1vamlcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgLS1idXR0b24tcGFkZGluZy10YjogMjNweDtcbiAgLS1idXR0b24tcGFkZGluZy1scjogMTdweDtcbiAgLS1mb250LXdlaWdodDogNzAwO1xuICAtLWxpbmUtaGVpZ2h0OiAyNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tY29sb3IpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHZhcigtLXdpZHRoKTtcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiB2YXIoLS1idXR0b24tcGFkZGluZy10YikgdmFyKC0tYnV0dG9uLXBhZGRpbmctbHIpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodCk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodCk7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMXB4O1xufVxuLmJ1dHRvbl9jb250YWluZXIubGcge1xuICAtLXdpZHRoOiAzMzVweDtcbiAgLS1oZWlnaHQ6IDUwcHg7XG4gIC0tZm9udC1zaXplOiAxOHB4O1xufVxuLmJ1dHRvbl9jb250YWluZXIubWQge1xuICAtLXdpZHRoOiAyOTNweDtcbiAgLS1oZWlnaHQ6IDUwcHg7XG4gIC0tZm9udC1zaXplOiAxOHB4O1xufVxuLmJ1dHRvbl9jb250YWluZXIuc20ge1xuICAtLXdpZHRoOiAxNjZweDtcbiAgLS1oZWlnaHQ6IDUwcHg7XG4gIC0tZm9udC1zaXplOiAxOHB4O1xufVxuLmJ1dHRvbl9jb250YWluZXIucHJpbWFyeSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1idXR0b24pO1xuICAtLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIC0tcHJlc3NlZC1iYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWJ1dHRvbi1wcmVzc2VkKTtcbiAgLS1wcmVzc2VkLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIC0tZGlzYWJsZWQtYmFja2dvdW5kOiB2YXIoLS1wcmltYXJ5LWJ1dHRvbi1kaXNhYmxlZCk7XG4gIC0tZGlzYWJsZWQtY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cbi5idXR0b25fY29udGFpbmVyLnByaW1hcnk6aG92ZXIge1xuICAtLWhvdmVyLWJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktYnV0dG9uLWhvdmVyKTtcbiAgLS1ob3Zlci1jb2xvcjogdmFyKC0td2hpdGUpO1xufVxuLmJ1dHRvbl9jb250YWluZXIuc2Vjb25kYXJ5IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktYnV0dG9uKTtcbiAgLS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAtLXByZXNzZWQtYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWJ1dHRvbi1wcmVzc2VkKTtcbiAgLS1wcmVzc2VkLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIC0tZGlzYWJsZWQtYmFja2dvdW5kOiB2YXIoLS1zZWNvbmRhcnktYnV0dG9uLWRpc2FibGVkKTtcbiAgLS1kaXNhYmxlZC1jb2xvcjogdmFyKC0td2hpdGUpO1xufVxuLmJ1dHRvbl9jb250YWluZXIuc2Vjb25kYXJ5OmhvdmVyIHtcbiAgLS1ob3Zlci1iYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktYnV0dG9uLWhvdmVyKTtcbiAgLS1ob3Zlci1jb2xvcjogdmFyKC0tYmxhY2spO1xufVxuLmJ1dHRvbl9jb250YWluZXI6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJlc3NlZC1iYWNrZ3JvdW5kKTtcbiAgY29sb3I6IHZhcigtLXByZXNzZWQtY29sb3IpO1xufVxuLmJ1dHRvbl9jb250YWluZXI6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaXNhYmxlZC1iYWNrZ291bmQpO1xuICBjb2xvcjogdmFyKC0tZGlzYWJsZWQtY29sb3IpO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4uYnV0dG9uX2NvbnRhaW5lcjpkaXNhYmxlZCBzdmcgcGF0aCB7XG4gIGZpbGw6IHZhcigtLWRpc2FibGVkLWNvbG9yKTtcbn1cbi5idXR0b25fY29udGFpbmVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItYmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XG59XG4uYnV0dG9uX2NvbnRhaW5lciBzdmcgcGF0aCB7XG4gIGZpbGw6IHZhcigtLWNvbG9yKTtcbn0iXX0= */";
styleInject(css_248z$l);

var Button = function (_a) {
  var id = _a.id,
    _b = _a.type,
    type = _b === void 0 ? 'primary' : _b,
    _c = _a.size,
    size = _c === void 0 ? 'md' : _c,
    _d = _a.disabled,
    disabled = _d === void 0 ? false : _d,
    _e = _a.children,
    children = _e === void 0 ? 'Button' : _e,
    _f = _a.style,
    style = _f === void 0 ? {} : _f,
    _g = _a.onClick,
    onClick = _g === void 0 ? function () {} : _g,
    props = __rest(_a, ["id", "type", "size", "disabled", "children", "style", "onClick"]);
  return /*#__PURE__*/React.createElement("button", __assign({
    id: id,
    className: classnames('button_container', type || 'primary', size || 'lg'),
    onClick: onClick,
    style: style,
    disabled: disabled,
    type: "button"
  }, props), children);
};

var AccountFull = function (_a) {
  var _b = _a.color,
    color = _b === void 0 ? '#393939' : _b;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5.75988 19.8248C6.9173 17.5547 9.27709 16 12 16C14.7019 16 17.0462 17.5308 18.2131 19.7723M14.3333 10.4444C14.3333 11.7945 13.2389 12.8889 11.8889 12.8889C10.5389 12.8889 9.44444 11.7945 9.44444 10.4444C9.44444 9.09442 10.5389 8 11.8889 8C13.2389 8 14.3333 9.09442 14.3333 10.4444ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "2",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 16C9.2 16 6.83333 18 6 19C11.2 23.4 15.8333 20.8333 17.5 19C16.8333 18 14.8 16 12 16Z",
    fill: color
  }));
};

var Account = function (_a) {
  var _b = _a.color,
    color = _b === void 0 ? '#393939' : _b;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 3C7.02943 3 3 7.02943 3 12C3 14.439 3.97024 16.6515 5.54582 18.2724C7.00077 16.2894 9.34917 15 12 15C14.6509 15 16.9993 16.2895 18.4542 18.2724C20.0298 16.6515 21 14.439 21 12C21 7.02944 16.9705 3 12 3ZM16.9069 19.5459C15.8198 18.0045 14.0266 17 12 17C9.97342 17 8.18017 18.0046 7.09313 19.5459C8.50449 20.4656 10.1898 21 12 21C13.8102 21 15.4955 20.4656 16.9069 19.5459ZM5.24444 20.6818C7.1088 22.1346 9.45333 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92486 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 15.4329 2.57256 18.4985 5.03663 20.5158C5.09697 20.5789 5.16648 20.635 5.24444 20.6818ZM11.8889 9C11.0912 9 10.4444 9.64673 10.4444 10.4444C10.4444 11.2422 11.0912 11.8889 11.8889 11.8889C12.6866 11.8889 13.3333 11.2422 13.3333 10.4444C13.3333 9.6467 12.6866 9 11.8889 9ZM8.44444 10.4444C8.44444 8.54211 9.98664 7 11.8889 7C13.7912 7 15.3333 8.54214 15.3333 10.4444C15.3333 12.3468 13.7912 13.8889 11.8889 13.8889C9.98662 13.8889 8.44444 12.3468 8.44444 10.4444Z",
    fill: color
  }));
};

var Add = function (_a) {
  var _b = _a.color,
    color = _b === void 0 ? '#393939' : _b;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM5 4C4.44771 4 4 4.44771 4 5V19C4 19.5523 4.44771 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44771 19.5523 4 19 4H5ZM12 6C12.5523 6 13 6.44772 13 7V11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H11V7C11 6.44772 11.4477 6 12 6Z",
    fill: color
  }));
};

var All = function (_a) {
  var _b = _a.color,
    color = _b === void 0 ? '#393939' : _b;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12.4913 6.77326C12.4913 6.11027 12.4524 5.44459 12.4994 4.78428C12.6149 3.14488 13.6111 2.12025 15.2599 2.04257C16.6294 1.97828 18.007 1.98899 19.3751 2.05998C20.8749 2.13633 21.9584 3.319 21.9839 4.8191C22.0054 6.12098 22.0054 7.4242 21.9839 8.72608C21.9584 10.3025 20.8265 11.437 19.1939 11.4973C18.0244 11.5401 16.8509 11.5214 15.6801 11.508C15.2867 11.5039 14.8826 11.4758 14.504 11.3767C13.3574 11.0767 12.5706 10.1056 12.5088 8.90823C12.4712 8.19836 12.5021 7.48581 12.5021 6.77326H12.4913ZM14.3952 6.7679C14.3952 7.37062 14.3912 7.972 14.3952 8.57473C14.4019 9.26986 14.7389 9.60605 15.4331 9.60739C16.6348 9.61007 17.8364 9.60873 19.0381 9.60605C19.171 9.60605 19.308 9.59131 19.4355 9.55783C19.8558 9.44666 20.0612 9.13325 20.0639 8.58678C20.0693 7.37598 20.0652 6.16518 20.0639 4.95438C20.0639 4.88741 20.0585 4.82044 20.0518 4.75347C20.0062 4.27665 19.6933 3.95922 19.214 3.9552C17.9398 3.94449 16.6643 3.93779 15.3901 3.95252C14.6946 3.96056 14.3992 4.28201 14.3925 4.97849C14.3872 5.57451 14.3925 6.17054 14.3925 6.7679H14.3952Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.2378 21.9848C16.5432 21.9848 15.8473 22.0157 15.1554 21.9781C13.6911 21.8975 12.6103 20.8053 12.5084 19.3438C12.4883 19.0522 12.4762 18.7581 12.4762 18.4665C12.4762 17.4819 12.4762 16.4972 12.4856 15.5112C12.4923 14.8126 12.6438 14.153 13.0729 13.5848C13.6133 12.8674 14.3669 12.5236 15.2372 12.5021C16.5701 12.4685 17.9056 12.4671 19.2399 12.5007C20.7833 12.5397 21.9351 13.7003 21.9754 15.26C22.0089 16.5832 22.0075 17.9091 21.9754 19.2336C21.9378 20.7516 20.8168 21.8961 19.3015 21.9808C18.615 22.0197 17.9257 21.9875 17.2378 21.9875V21.9848ZM20.0551 17.2548C20.0551 16.5899 20.0645 15.9236 20.0525 15.2586C20.0431 14.7535 19.7146 14.4325 19.2117 14.4056C19.1205 14.4002 19.0293 14.3989 18.9381 14.3989C17.7554 14.3989 16.5727 14.3989 15.3914 14.3989C14.7571 14.4002 14.4125 14.732 14.4085 15.3661C14.4018 16.6181 14.4018 17.8688 14.4085 19.1208C14.4112 19.7199 14.7571 20.0678 15.3525 20.0718C16.6143 20.0786 17.8761 20.0786 19.1379 20.0718C19.6985 20.0692 20.0484 19.7199 20.0551 19.157C20.0632 18.5216 20.0565 17.8876 20.0565 17.2522L20.0551 17.2548Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.75772 21.9839C6.07488 21.9839 5.3907 22.0161 4.71055 21.9772C3.1678 21.8872 2.05701 20.7485 2.02214 19.2056C1.99262 17.8884 1.99262 16.5684 2.02214 15.2511C2.05836 13.7096 3.20938 12.544 4.74945 12.5024C6.08964 12.4661 7.4325 12.4688 8.77403 12.5024C10.2779 12.54 11.394 13.6397 11.492 15.1383C11.5268 15.6821 11.5188 16.2287 11.5215 16.7752C11.5255 17.5043 11.5242 18.2321 11.5188 18.9613C11.5161 19.3842 11.4584 19.8018 11.3028 20.198C10.8695 21.2991 10.0324 21.8805 8.88001 21.9718C8.17705 22.0282 7.46738 21.9825 6.7604 21.9825V21.9866L6.75772 21.9839ZM9.58967 17.2317C9.58967 16.5845 9.59236 15.9386 9.58967 15.2914C9.58699 14.7771 9.25295 14.4118 8.74049 14.4065C7.42982 14.3944 6.11915 14.3944 4.80848 14.4051C4.30675 14.4092 3.95661 14.7435 3.94991 15.243C3.93381 16.5603 3.93112 17.879 3.94722 19.1976C3.95393 19.7387 4.29065 20.0623 4.83129 20.0677C6.12452 20.0798 7.4164 20.0811 8.70963 20.0677C9.23685 20.0623 9.58162 19.7092 9.58967 19.1895C9.60041 18.5369 9.59236 17.8843 9.59236 17.2304L9.58967 17.2317Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5121 6.76305C11.5121 7.43787 11.5417 8.11404 11.5067 8.78752C11.4248 10.3675 10.3279 11.452 8.73645 11.4962C7.42456 11.5323 6.10998 11.5337 4.79809 11.4962C3.17032 11.4507 2.03452 10.2764 2.01032 8.6563C1.99285 7.45796 2.00226 6.25961 2.00494 5.06126C2.01032 3.29386 3.05204 2.12497 4.82094 2.04061C6.19735 1.97501 7.58183 1.99375 8.95824 2.06204C10.3629 2.13166 11.4328 3.2644 11.5 4.66627C11.5336 5.36386 11.5054 6.06412 11.5054 6.76439H11.5108L11.5121 6.76305ZM9.60746 6.77778C9.60746 6.1699 9.60746 5.56202 9.60746 4.9528C9.60746 4.93406 9.60746 4.91665 9.60746 4.89791C9.59268 4.27396 9.25933 3.9486 8.63027 3.9486C7.40978 3.9486 6.18794 3.9486 4.96745 3.9486C4.2779 3.9486 3.9459 4.23379 3.93515 4.91665C3.91498 6.15115 3.91364 7.38565 3.93246 8.62015C3.94321 9.28427 4.29941 9.60026 4.97014 9.60293C6.18525 9.60561 7.40037 9.60695 8.61548 9.60293C9.25798 9.60026 9.60074 9.25883 9.60746 8.62149C9.61418 8.00692 9.60881 7.39235 9.60881 6.77911L9.60746 6.77778Z",
    fill: color
  }));
};

var Calendar = function (_a) {
  var _b = _a.color,
    color = _b === void 0 ? '#393939' : _b;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 5C4.44771 5 4 5.44771 4 6V20C4 20.5523 4.44771 21 5 21H19C19.5523 21 20 20.5523 20 20V6C20 5.44771 19.5523 5 19 5H5ZM2 6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V6Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 10C2 9.44772 2.44772 9 3 9H21C21.5523 9 22 9.44772 22 10C22 10.5523 21.5523 11 21 11H3C2.44772 11 2 10.5523 2 10Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 1C16.5523 1 17 1.44772 17 2V6C17 6.55228 16.5523 7 16 7C15.4477 7 15 6.55228 15 6V2C15 1.44772 15.4477 1 16 1Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 1C8.55228 1 9 1.44772 9 2V6C9 6.55228 8.55228 7 8 7C7.44772 7 7 6.55228 7 6V2C7 1.44772 7.44772 1 8 1Z",
    fill: color
  }));
};

var Camera = function (_a) {
  var _b = _a.color,
    color = _b === void 0 ? '#393939' : _b;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.67863 2.4296C8.86551 2.16049 9.17237 2 9.5 2H14.5C14.8276 2 15.1345 2.16049 15.3214 2.4296L17.523 5.6H20C21.6569 5.6 23 6.94316 23 8.6V19C23 20.6569 21.6569 22 20 22H4C2.34315 22 1 20.6569 1 19V8.6C1 6.94315 2.34314 5.6 4 5.6H6.47697L8.67863 2.4296ZM10.023 4L7.82137 7.1704C7.63449 7.43951 7.32763 7.6 7 7.6H4C3.44772 7.6 3 8.04771 3 8.6V19C3 19.5523 3.44771 20 4 20H20C20.5523 20 21 19.5523 21 19V8.6C21 8.04771 20.5523 7.6 20 7.6H17C16.6724 7.6 16.3655 7.43951 16.1786 7.1704L13.977 4H10.023Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10ZM7 13C7 10.2386 9.23858 8 12 8C14.7614 8 17 10.2386 17 13C17 15.7614 14.7614 18 12 18C9.23858 18 7 15.7614 7 13Z",
    fill: color
  }));
};

var Chat = function (_a) {
  var _b = _a.color,
    color = _b === void 0 ? '#393939' : _b;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92486 23 12C23 18.0751 18.0751 23 12 23H3.10288C1.8137 23 1.12505 21.4812 1.97468 20.5115M1.97469 20.5115L3.41072 18.8725C1.90286 16.9901 1 14.5996 1 12M12 3C7.02943 3 3 7.02943 3 12C3 14.3972 3.93588 16.5736 5.46419 18.1874C5.81919 18.5622 5.83048 19.1457 5.49025 19.534L4.20576 21H12C16.9705 21 21 16.9705 21 12C21 7.02944 16.9705 3 12 3Z",
    fill: color
  }));
};

var ChatEmpty = function (_a) {
  var _b = _a.color,
    color = _b === void 0 ? '#393939' : _b;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92486 23 12C23 18.0751 18.0751 23 12 23H3.10288C1.8137 23 1.12505 21.4812 1.97468 20.5115M1.97469 20.5115L3.41072 18.8725C1.90286 16.9901 1 14.5996 1 12M12 3C7.02943 3 3 7.02943 3 12C3 14.3972 3.93588 16.5736 5.46419 18.1874C5.81919 18.5622 5.83048 19.1457 5.49025 19.534L4.20576 21H12C16.9705 21 21 16.9705 21 12C21 7.02944 16.9705 3 12 3Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 11.5C5 10.6716 5.67157 10 6.5 10C7.32843 10 8 10.6716 8 11.5C8 12.3284 7.32843 13 6.5 13C5.67157 13 5 12.3284 5 11.5Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 11.5C10 10.6716 10.6716 10 11.5 10C12.3284 10 13 10.6716 13 11.5C13 12.3284 12.3284 13 11.5 13C10.6716 13 10 12.3284 10 11.5Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 11.5C15 10.6716 15.6716 10 16.5 10C17.3284 10 18 10.6716 18 11.5C18 12.3284 17.3284 13 16.5 13C15.6716 13 15 12.3284 15 11.5Z",
    fill: color
  }));
};

var ChatFull = function (_a) {
  var _b = _a.color,
    color = _b === void 0 ? '#393939' : _b;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.663 3.04094 17.0829 4.73812 18.875L2.72681 21.1705C2.44361 21.4937 2.67314 22 3.10288 22H12Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92486 23 12C23 18.0751 18.0751 23 12 23H3.10288C1.8137 23 1.12505 21.4812 1.97468 20.5115M1.97469 20.5115L3.41072 18.8725C1.90286 16.9901 1 14.5996 1 12M12 3C7.02943 3 3 7.02943 3 12C3 14.3972 3.93588 16.5736 5.46419 18.1874C5.81919 18.5622 5.83048 19.1457 5.49025 19.534L4.20576 21H12C16.9705 21 21 16.9705 21 12C21 7.02944 16.9705 3 12 3Z",
    fill: color
  }));
};

var Check = function (_a) {
  var _b = _a.color,
    color = _b === void 0 ? '#393939' : _b;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.7071 5.29289C22.0976 5.68342 22.0976 6.31658 21.7071 6.70711L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071L2.29289 12.7071C1.90237 12.3166 1.90237 11.6834 2.29289 11.2929C2.68342 10.9024 3.31658 10.9024 3.70711 11.2929L9 16.5858L20.2929 5.29289C20.6834 4.90237 21.3166 4.90237 21.7071 5.29289Z",
    fill: color
  }));
};

var Close = function (_a) {
  var _b = _a.color,
    color = _b === void 0 ? '#393939' : _b;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L12 10.5858L18.2929 4.29289C18.6834 3.90237 19.3166 3.90237 19.7071 4.29289C20.0976 4.68342 20.0976 5.31658 19.7071 5.70711L13.4142 12L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L12 13.4142L5.70711 19.7071C5.31658 20.0976 4.68342 20.0976 4.29289 19.7071C3.90237 19.3166 3.90237 18.6834 4.29289 18.2929L10.5858 12L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z",
    fill: color
  }));
};

var Dropdown$1 = function (_a) {
  var _b = _a.color,
    color = _b === void 0 ? '#393939' : _b;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.29289 7.29289C3.68342 6.90237 4.31658 6.90237 4.70711 7.29289L12 14.5858L19.2929 7.29289C19.6834 6.90237 20.3166 6.90237 20.7071 7.29289C21.0976 7.68342 21.0976 8.31658 20.7071 8.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L3.29289 8.70711C2.90237 8.31658 2.90237 7.68342 3.29289 7.29289Z",
    fill: color
  }));
};

var EditWrite = function (_a) {
  var _b = _a.color,
    color = _b === void 0 ? '#393939' : _b;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 5C2 3.34315 3.34315 2 5 2H11C11.5523 2 12 2.44772 12 3C12 3.55228 11.5523 4 11 4H5C4.44771 4 4 4.44771 4 5V19C4 19.5523 4.44771 20 5 20H19C19.5523 20 20 19.5523 20 19V13C20 12.4477 20.4477 12 21 12C21.5523 12 22 12.4477 22 13V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.7929 4.20709C19.355 3.76921 18.645 3.76921 18.2071 4.20709L18.2071 4.20711L10.3741 12.0402L9.58117 14.4189L11.9598 13.626L19.7929 5.79291C20.2308 5.355 20.2308 4.645 19.7929 4.20709ZM16.7929 2.79291C18.0118 1.57393 19.9882 1.57393 21.2071 2.79291C22.4261 4.01186 22.4261 5.98814 21.2071 7.20709L21.2071 7.20711L13.2071 15.2071C13.0974 15.3169 12.9635 15.3996 12.8163 15.4487L8.31625 16.9487C7.95692 17.0685 7.56075 16.9749 7.29292 16.7071C7.02509 16.4393 6.93157 16.0431 7.05134 15.6838L8.55134 11.1838C8.60044 11.0365 8.68315 10.9027 8.79292 10.7929L16.7929 2.79291Z",
    fill: color
  }));
};

var Empty = function (_a) {
  var _b = _a.color,
    color = _b === void 0 ? '#393939' : _b;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.84922 4.9804C6.20936 4.37266 6.86338 4 7.5698 4H16.4302C17.1366 4 17.7906 4.37268 18.1508 4.98034L21.5809 10.7686C21.8553 11.2316 22 11.76 22 12.2981V17C22 18.6569 20.6569 20 19 20H5C3.34315 20 2 18.6569 2 17V12.2981C2 11.76 2.14473 11.2317 2.41913 10.7687M4 13V17C4 17.5523 4.44771 18 5 18H19C19.5523 18 20 17.5523 20 17V13H16.0047L14.5252 14.6644C14.3354 14.8779 14.0634 15 13.7778 15H10.2222C9.93656 15 9.66456 14.8779 9.47479 14.6644L7.99537 13H4ZM19.3932 11H15.5556C15.27 11 14.998 11.1221 14.8082 11.3356L13.3287 13H10.6713L9.19185 11.3356C9.00208 11.1221 8.73008 11 8.44444 11H4.60685L7.5698 6H16.4302L19.3932 11ZM2.41913 10.7687L5.84922 4.9804L5.54131 5.5",
    fill: color
  }));
};

var Group = function (_a) {
  var _b = _a.color,
    color = _b === void 0 ? '#393939' : _b;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 4C7.34315 4 6 5.34315 6 7C6 8.65685 7.34315 10 9 10C10.6569 10 12 8.65685 12 7C12 5.34315 10.6569 4 9 4ZM4 7C4 4.23858 6.23858 2 9 2C11.7614 2 14 4.23858 14 7C14 9.76142 11.7614 12 9 12C6.23858 12 4 9.76142 4 7Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 16C3.44771 16 3 16.4477 3 17V21C3 21.5523 2.55228 22 2 22C1.44772 22 1 21.5523 1 21V17C1 15.3431 2.34315 14 4 14H14C15.6569 14 17 15.3431 17 17V21C17 21.5523 16.5523 22 16 22C15.4477 22 15 21.5523 15 21V17C15 16.4477 14.5523 16 14 16H4Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.0312 2.75195C15.1682 2.21693 15.713 1.89426 16.248 2.03125C17.3236 2.30663 18.2768 2.93213 18.9575 3.80914C19.6383 4.68615 20.0078 5.76479 20.0078 6.875C20.0078 7.98521 19.6383 9.06384 18.9575 9.94086C18.2768 10.8179 17.3236 11.4434 16.248 11.7187C15.713 11.8557 15.1682 11.5331 15.0312 10.998C14.8943 10.463 15.2169 9.91824 15.752 9.78125C16.3972 9.61603 16.9692 9.24073 17.3776 8.71452C17.7861 8.18831 18.0078 7.54113 18.0078 6.875C18.0078 6.20887 17.7861 5.56168 17.3776 5.03548C16.9692 4.50926 16.3972 4.13397 15.752 3.96875C15.2169 3.83176 14.8943 3.28698 15.0312 2.75195Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 15C18 14.4477 18.4477 14 19 14H20C21.6569 14 23 15.3431 23 17V21C23 21.5523 22.5523 22 22 22C21.4477 22 21 21.5523 21 21V17C21 16.4477 20.5523 16 20 16H19C18.4477 16 18 15.5523 18 15Z",
    fill: color
  }));
};

var GroupFull = function (_a) {
  var _b = _a.color,
    color = _b === void 0 ? '#393939' : _b;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 4C7.34315 4 6 5.34315 6 7C6 8.65685 7.34315 10 9 10C10.6569 10 12 8.65685 12 7C12 5.34315 10.6569 4 9 4ZM4 7C4 4.23858 6.23858 2 9 2C11.7614 2 14 4.23858 14 7C14 9.76142 11.7614 12 9 12C6.23858 12 4 9.76142 4 7Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 21V17C2 15.8954 2.89543 15 4 15H14C15.1046 15 16 15.8954 16 17V21",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 21V17C2 15.8954 2.89543 15 4 15H14C15.1046 15 16 15.8954 16 17V21",
    stroke: "#393939",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.0312 2.75195C15.1682 2.21693 15.713 1.89426 16.248 2.03125C17.3236 2.30663 18.2768 2.93213 18.9575 3.80914C19.6383 4.68615 20.0078 5.76479 20.0078 6.875C20.0078 7.98521 19.6383 9.06384 18.9575 9.94086C18.2768 10.8179 17.3236 11.4434 16.248 11.7187C15.713 11.8557 15.1682 11.5331 15.0312 10.998C14.8943 10.463 15.2169 9.91824 15.752 9.78125C16.3972 9.61603 16.9692 9.24073 17.3776 8.71452C17.7861 8.18831 18.0078 7.54113 18.0078 6.875C18.0078 6.20887 17.7861 5.56168 17.3776 5.03548C16.9692 4.50926 16.3972 4.13397 15.752 3.96875C15.2169 3.83176 14.8943 3.28698 15.0312 2.75195Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 15C18 14.4477 18.4477 14 19 14H20C21.6569 14 23 15.3431 23 17V21C23 21.5523 22.5523 22 22 22C21.4477 22 21 21.5523 21 21V17C21 16.4477 20.5523 16 20 16H19C18.4477 16 18 15.5523 18 15Z",
    fill: color
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "21",
    width: "14",
    height: "1",
    fill: color
  }));
};

var Home = function (_a) {
  var _b = _a.color,
    color = _b === void 0 ? '#393939' : _b;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.4 2.2C11.7556 1.93333 12.2444 1.93333 12.6 2.2L21.2 8.65C21.7036 9.0277 22 9.62048 22 10.25V20C22 21.1046 21.1046 22 20 22H15.5714C14.4668 22 13.5714 21.1046 13.5714 20V14.2857H10.4286V20C10.4286 21.1046 9.53314 22 8.42857 22H4C2.89543 22 2 21.1046 2 20V10.25C2 9.6205 2.29637 9.02772 2.8 8.65C2.80001 8.65 2.80001 8.64999 2.80002 8.64999L11.4 2.2ZM12 4.25L4 10.25V20H8.42857V13.2857C8.42857 12.7334 8.87629 12.2857 9.42857 12.2857H14.5714C15.1237 12.2857 15.5714 12.7334 15.5714 13.2857V20H20V10.25L12 4.25Z",
    fill: color
  }));
};

var HomeFull = function (_a) {
  var _b = _a.color,
    color = _b === void 0 ? '#393939' : _b;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 10.25V20C3 20.5523 3.44771 21 4 21H8.42857C8.98086 21 9.42857 20.5523 9.42857 20V13.2857H14.5714V20C14.5714 20.5523 15.0191 21 15.5714 21H20C20.5523 21 21 20.5523 21 20V10.25C21 9.93524 20.8518 9.63885 20.6 9.45L12 3L3.4 9.45C3.14819 9.63885 3 9.93524 3 10.25Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.4 2.2C11.7556 1.93333 12.2444 1.93333 12.6 2.2L21.2 8.65C21.7036 9.0277 22 9.62048 22 10.25V20C22 21.1046 21.1046 22 20 22H15.5714C14.4668 22 13.5714 21.1046 13.5714 20V14.2857H10.4286V20C10.4286 21.1046 9.53314 22 8.42857 22H4C2.89543 22 2 21.1046 2 20V10.25C2 9.6205 2.29637 9.02772 2.8 8.65C2.80001 8.65 2.80001 8.64999 2.80002 8.64999L11.4 2.2ZM12 4.25L4 10.25V20H8.42857V13.2857C8.42857 12.7334 8.87629 12.2857 9.42857 12.2857H14.5714C15.1237 12.2857 15.5714 12.7334 15.5714 13.2857V20H20V10.25L12 4.25Z",
    fill: color
  }));
};

var HomeHouse = function () {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 10.25V20C3 20.5523 3.44771 21 4 21H8.42857C8.98086 21 9.42857 20.5523 9.42857 20V13.2857H14.5714V20C14.5714 20.5523 15.0191 21 15.5714 21H20C20.5523 21 21 20.5523 21 20V10.25C21 9.93524 20.8518 9.63885 20.6 9.45L12 3L3.4 9.45C3.14819 9.63885 3 9.93524 3 10.25Z",
    stroke: "black",
    strokeOpacity: "0.95",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Left = function (_a) {
  var _b = _a.color,
    color = _b === void 0 ? '#393939' : _b;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.29289 19.7071C6.90237 19.3166 6.90237 18.6834 7.29289 18.2929L14.5858 11L7.29289 3.70711C6.90237 3.31658 6.90237 2.68342 7.29289 2.29289C7.68342 1.90237 8.31658 1.90237 8.70711 2.29289L16.7071 10.2929C17.0976 10.6834 17.0976 11.3166 16.7071 11.7071L8.70711 19.7071C8.31658 20.0976 7.68342 20.0976 7.29289 19.7071Z",
    fill: color
  }));
};

var Like = function (_a) {
  var _b = _a.color,
    color = _b === void 0 ? '#393939' : _b;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.8748 5.82613C9.35021 3.70925 6.45621 3.38952 4.5451 5.09533C2.5901 6.8403 2.4712 9.97197 4.29742 11.8736L12 19.8946L19.7025 11.8737C21.5288 9.97199 21.4099 6.84031 19.4549 5.09534C17.5437 3.38952 14.6498 3.70925 13.1251 5.82614L12.8114 6.26169C12.6235 6.52261 12.3215 6.67724 12 6.67724C11.6784 6.67724 11.3765 6.52261 11.1886 6.26169L10.8748 5.82613ZM12 4.04596C9.69469 1.53735 5.82571 1.27148 3.21331 3.60324C0.408314 6.10689 0.248048 10.5444 2.85488 13.2589L10.7241 21.4534C11.4239 22.1821 12.576 22.1821 13.2758 21.4535L21.145 13.259C23.7519 10.5444 23.5917 6.10688 20.7867 3.60324C18.1742 1.27149 14.3053 1.53735 12 4.04596Z",
    fill: color
  }));
};

var LikeFull = function (_a) {
  var _b = _a.color,
    color = _b === void 0 ? '#393939' : _b;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M11.4454 20.7608L3.57617 12.5663C1.35964 10.2582 1.49922 6.4736 3.87922 4.34929C6.24035 2.24181 9.82044 2.65105 11.6863 5.24171L12 5.67724L12.3137 5.24171C14.1796 2.65105 17.7596 2.24181 20.1208 4.34929C22.5008 6.4736 22.6404 10.2582 20.4238 12.5663L12.5546 20.7608C12.2483 21.0797 11.7517 21.0797 11.4454 20.7608Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.8748 5.82613C9.35021 3.70925 6.45621 3.38952 4.5451 5.09533L4.5451 5.09533C2.59009 6.84031 2.4712 9.97197 4.29742 11.8736L4.29743 11.8737L12 19.8946L19.7025 11.8737L19.7025 11.8736C21.5288 9.97197 21.4099 6.84031 19.4549 5.09534C17.5437 3.38952 14.6498 3.70925 13.1251 5.82614L13.1251 5.82616L12.8114 6.26169C12.6235 6.52261 12.3215 6.67724 12 6.67724C11.6784 6.67724 11.3765 6.52261 11.1886 6.26169L10.8749 5.82616L10.8748 5.82613ZM12 4.04596C9.69469 1.53735 5.82571 1.27148 3.21331 3.60324C0.408314 6.10689 0.248048 10.5444 2.85488 13.2589C2.85488 13.2589 2.85488 13.2589 2.85488 13.259L10.7241 21.4534L10.7242 21.4535C11.424 22.1821 12.576 22.1821 13.2758 21.4535L13.2759 21.4534L21.145 13.259C21.1451 13.259 21.1451 13.2589 21.1451 13.2589C23.752 10.5444 23.5917 6.10688 20.7867 3.60324L20.1208 4.34929L20.7867 3.60323C18.1742 1.27148 14.3053 1.53735 12 4.04596Z",
    fill: color
  }));
};

var LocationPin = function (_a) {
  var _b = _a.color,
    color = _b === void 0 ? '#393939' : _b;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.28511 15.9517C0.134634 10.1581 4.24814 1 12.0001 1C19.752 1 23.8655 10.1581 18.715 15.9517L12.7474 22.6644C12.5577 22.8779 12.2857 23 12.0001 23C11.7145 23 11.4425 22.8779 11.2527 22.6644L5.28511 15.9517ZM12.0001 3C5.9734 3 2.77631 10.1195 6.77985 14.6229L12.0001 20.4949L17.2203 14.6229C21.2238 10.1195 18.0267 3 12.0001 3Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8ZM8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10Z",
    fill: color
  }));
};

var More = function (_a) {
  var _b = _a.color,
    color = _b === void 0 ? '#393939' : _b;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12Z",
    fill: color
  }));
};

var Notification = function (_a) {
  var _b = _a.color,
    color = _b === void 0 ? '#393939' : _b;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 3C9.01767 3 6.6 5.41766 6.6 8.4V9.45798C6.6 11.7612 5.98498 14.0191 4.82331 16H19.1766C18.015 14.0191 17.4 11.7612 17.4 9.45798V8.4C17.4 5.41766 14.9823 3 12 3ZM4.6 8.4C4.6 4.31309 7.9131 1 12 1C16.0869 1 19.4 4.31308 19.4 8.4V9.45798C19.4 11.5655 20.0092 13.6281 21.1541 15.3976C21.1541 15.3976 21.1541 15.3976 21.1541 15.3976L21.8395 16.4567C22.0386 16.7643 22.0535 17.156 21.8784 17.4779C21.7034 17.7997 21.3664 18 21 18H3C2.63366 18 2.29664 17.7997 2.12157 17.4779C1.94651 17.1561 1.96142 16.7643 2.16044 16.4567L2.84583 15.3975C3.99082 13.6282 4.6 11.5655 4.6 9.45798V8.4Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.3311 20.1456C10.7416 19.7761 11.3739 19.8094 11.7433 20.22C11.8805 20.3724 12.1195 20.3724 12.2567 20.22C12.6262 19.8094 13.2584 19.7761 13.669 20.1456C14.0795 20.515 14.1128 21.1473 13.7433 21.5579C12.8117 22.5931 11.1883 22.5931 10.2567 21.5579C9.88725 21.1473 9.92054 20.515 10.3311 20.1456Z",
    fill: color
  }));
};

var NotificationFull = function (_a) {
  var _b = _a.color,
    color = _b === void 0 ? '#393939' : _b;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5.6 9.45798V8.4C5.6 4.86538 8.46538 2 12 2C15.5346 2 18.4 4.86537 18.4 8.4V9.45798C18.4 11.7583 19.0649 14.0096 20.3146 15.9409L21 17H3L3.68539 15.9408C4.93512 14.0096 5.6 11.7583 5.6 9.45798Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 3C9.01767 3 6.6 5.41766 6.6 8.4V9.45798C6.6 11.7612 5.98498 14.0191 4.82331 16H19.1766C18.015 14.0191 17.4 11.7612 17.4 9.45798V8.4C17.4 5.41766 14.9823 3 12 3ZM4.6 8.4C4.6 4.31309 7.9131 1 12 1C16.0869 1 19.4 4.31308 19.4 8.4V9.45798C19.4 11.5655 20.0092 13.6281 21.1541 15.3976C21.1541 15.3976 21.1541 15.3976 21.1541 15.3976L21.8395 16.4567C22.0386 16.7643 22.0535 17.156 21.8784 17.4779C21.7034 17.7997 21.3664 18 21 18H3C2.63366 18 2.29664 17.7997 2.12157 17.4779C1.94651 17.1561 1.96142 16.7643 2.16044 16.4567L2.84583 15.3975C3.99082 13.6282 4.6 11.5655 4.6 9.45798V8.4Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.3311 20.1456C10.7416 19.7761 11.3739 19.8094 11.7433 20.22C11.8805 20.3724 12.1195 20.3724 12.2567 20.22C12.6262 19.8094 13.2584 19.7761 13.669 20.1456C14.0795 20.515 14.1128 21.1473 13.7433 21.5579C12.8117 22.5931 11.1883 22.5931 10.2567 21.5579C9.88725 21.1473 9.92054 20.515 10.3311 20.1456Z",
    fill: color
  }));
};

var NotificationNone = function (_a) {
  var _b = _a.color,
    color = _b === void 0 ? '#393939' : _b;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 3C9.01767 3 6.6 5.41766 6.6 8.4V9.45798C6.6 11.7612 5.98498 14.0191 4.82331 16H19.1766C18.015 14.0191 17.4 11.7612 17.4 9.45798V8.4C17.4 5.41766 14.9823 3 12 3ZM4.6 8.4C4.6 4.31309 7.9131 1 12 1C16.0869 1 19.4 4.31308 19.4 8.4V9.45798C19.4 11.5655 20.0092 13.6281 21.1541 15.3976C21.1541 15.3976 21.1541 15.3976 21.1541 15.3976L21.8395 16.4567C22.0386 16.7643 22.0535 17.156 21.8784 17.4779C21.7034 17.7997 21.3664 18 21 18H3C2.63366 18 2.29664 17.7997 2.12157 17.4779C1.94651 17.1561 1.96142 16.7643 2.16044 16.4567L2.84583 15.3975C3.99082 13.6282 4.6 11.5655 4.6 9.45798V8.4Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.3311 20.1456C10.7416 19.7761 11.3739 19.8094 11.7433 20.22C11.8805 20.3724 12.1195 20.3724 12.2567 20.22C12.6262 19.8094 13.2584 19.7761 13.669 20.1456C14.0795 20.515 14.1128 21.1473 13.7433 21.5579C12.8117 22.5931 11.1883 22.5931 10.2567 21.5579C9.88725 21.1473 9.92054 20.515 10.3311 20.1456Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 2L4 22",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round"
  }));
};

var Photo = function (_a) {
  var _b = _a.color,
    color = _b === void 0 ? '#393939' : _b;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.2929 9.29289C15.6834 8.90237 16.3166 8.90237 16.7071 9.29289L21.7071 14.2929C22.0976 14.6834 22.0976 15.3166 21.7071 15.7071C21.3166 16.0976 20.6834 16.0976 20.2929 15.7071L16 11.4142L5.70711 21.7071C5.31658 22.0976 4.68342 22.0976 4.29289 21.7071C3.90237 21.3166 3.90237 20.6834 4.29289 20.2929L15.2929 9.29289Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 4C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4H5ZM2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.5 8C8.22386 8 8 8.22386 8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5C9 8.22386 8.77614 8 8.5 8ZM6 8.5C6 7.11929 7.11929 6 8.5 6C9.88071 6 11 7.11929 11 8.5C11 9.88071 9.88071 11 8.5 11C7.11929 11 6 9.88071 6 8.5Z",
    fill: color
  }));
};

var Search = function (_a) {
  var _b = _a.color,
    color = _b === void 0 ? '#393939' : _b;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.75 3C6.46979 3 3 6.46979 3 10.75C3 15.0302 6.46979 18.5 10.75 18.5C15.0302 18.5 18.5 15.0302 18.5 10.75C18.5 6.46979 15.0302 3 10.75 3ZM1 10.75C1 5.36523 5.36523 1 10.75 1C16.1348 1 20.5 5.36523 20.5 10.75C20.5 13.0822 19.6811 15.2232 18.3153 16.901L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L16.901 18.3153C15.2232 19.6811 13.0822 20.5 10.75 20.5C5.36523 20.5 1 16.1348 1 10.75Z",
    fill: color
  }));
};

var Send = function (_a) {
  var _b = _a.color,
    color = _b === void 0 ? '#393939' : _b;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0_499_12804)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16.4943 11.9847L3.99145 13.1616C3.35852 13.2629 3.00395 13.4721 2.77695 14.1228C1.94354 16.5114 1.03557 19.8695 0.152449 22.2399C-0.0496911 22.781 -0.0132397 23.284 0.429149 23.6857C0.871537 24.0874 1.37689 24.0725 1.89218 23.8185C2.02639 23.7521 2.16225 23.6874 2.2948 23.6193C6.42376 21.5377 10.5527 19.4562 14.6817 17.3746C17.5398 15.9338 20.3979 14.4913 23.2594 13.0571C23.6968 12.838 24.0016 12.5375 24 12.0262C24 11.51 23.7365 11.1398 23.2826 10.9041C23.1831 10.8527 23.0821 10.8045 22.981 10.7531C16.0933 7.2821 9.20732 3.80949 2.31965 0.340194C2.11917 0.238938 1.91537 0.141001 1.70329 0.0729427C1.16978 -0.0996921 0.700878 0.0397437 0.314824 0.431492C-0.0563187 0.81162 -0.06626 1.25649 0.11434 1.73621C1.06705 4.28091 1.69004 7.43482 2.69742 9.9596C3.0288 10.7896 3.19449 11.1216 4.02293 11.2876L16.4943 11.9847Z",
    fill: color
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0_499_12804"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "24",
    height: "24",
    fill: "white"
  }))));
};

var Share = function (_a) {
  var _b = _a.color,
    color = _b === void 0 ? '#393939' : _b;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4.23133 19.787H19.7688C19.7688 19.6055 19.7688 19.4454 19.7688 19.2853C19.7688 17.0026 19.7688 14.7199 19.7688 12.4389C19.7688 12.2739 19.7655 12.1072 19.7922 11.9454C19.8888 11.3562 20.387 10.9617 20.9652 11.003C21.5267 11.0426 21.9866 11.4849 21.9882 12.0609C21.9982 14.7562 22.0116 17.4499 21.9816 20.1452C21.9699 21.185 21.0468 21.9789 19.9088 21.9905C18.1193 22.007 16.3281 21.9971 14.5369 21.9971C11.0945 21.9971 7.65208 22.0004 4.21133 21.9954C3.07164 21.9938 2.25186 21.3798 2.04191 20.3911C2.00526 20.2178 2.00192 20.0362 2.00192 19.858C2.00026 17.3277 1.99859 14.7991 2.00192 12.2689C2.00192 11.4998 2.44514 10.9997 3.11496 11.0013C3.77978 11.003 4.22799 11.508 4.22799 12.2755C4.23133 14.6126 4.22799 16.9498 4.22799 19.2869C4.22799 19.447 4.22799 19.6071 4.22799 19.7887L4.23133 19.787Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.8616 6.20529C10.701 6.38841 10.614 6.48157 10.5337 6.58116C9.68054 7.62204 8.82735 8.66291 7.97416 9.70218C7.6814 10.0588 7.29998 10.2258 6.83323 10.1278C6.40664 10.0395 6.06202 9.78571 6.01183 9.36968C5.97503 9.06609 6.0202 8.66613 6.20254 8.43803C7.81022 6.41893 9.44968 4.42391 11.0958 2.43372C11.5709 1.86027 12.3606 1.85385 12.8323 2.42408C14.4902 4.42231 16.1313 6.43338 17.7641 8.45088C18.1539 8.93116 18.0418 9.55922 17.5667 9.92064C17.0782 10.2917 16.4174 10.2339 16.0042 9.74234C15.1292 8.70146 14.2777 7.64292 13.4145 6.5924C13.3308 6.49121 13.2422 6.39483 13.0766 6.20368C13.0766 6.44944 13.0766 6.58919 13.0766 6.72894C13.0766 9.75358 13.0782 12.7766 13.0766 15.8013C13.0766 16.5691 12.6065 17.0349 11.8938 16.998C11.3535 16.969 10.9252 16.5787 10.8717 16.0583C10.8566 15.9121 10.8616 15.7643 10.8616 15.6165C10.8616 12.6465 10.8616 9.67488 10.8616 6.70485V6.2069V6.20529Z",
    fill: color
  }));
};

var Time = function (_a) {
  var _b = _a.color,
    color = _b === void 0 ? '#393939' : _b;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 5C12.5523 5 13 5.44772 13 6V11.5858L16.7071 15.2929C17.0976 15.6834 17.0976 16.3166 16.7071 16.7071C16.3166 17.0976 15.6834 17.0976 15.2929 16.7071L11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12V6C11 5.44772 11.4477 5 12 5Z",
    fill: color
  }));
};

var Warning = function (_a) {
  var _b = _a.color,
    color = _b === void 0 ? '#393939' : _b;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0_498_12175)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11.9769 4.13651e-05C18.5813 -0.0172207 23.9866 5.37046 23.9981 11.9837C24.0096 18.6104 18.6639 23.9751 12.0231 24C5.39183 24.0231 0 18.6335 0 11.9799C0 5.39923 5.37838 0.0173034 11.9769 4.13651e-05ZM22.1803 11.9799C22.1592 6.3659 17.6013 1.83941 11.9846 1.85667C6.33915 1.87393 1.83699 6.39084 1.85044 12.024C1.86389 17.6495 6.39872 22.1626 12.0288 22.153C17.6359 22.1434 22.2014 17.569 22.1803 11.9799Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.9935 9.73963C12.9935 11.1283 13.0011 12.5188 12.9896 13.9075C12.9839 14.6229 12.467 15.0583 11.804 14.9413C11.2948 14.8511 11.0104 14.4503 11.0104 13.7981C11.0085 11.3066 11.0104 8.81516 11.0104 6.32367C11.0104 6.06857 11.0027 5.81156 11.0104 5.55647C11.0316 4.9427 11.4159 4.538 11.9827 4.52841C12.563 4.51691 12.9839 4.93503 12.9896 5.57181C13.0011 6.96044 12.9935 8.351 12.9935 9.73963Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 16.5505C12.661 16.5505 13.199 17.0933 13.1856 17.7415C13.1721 18.3726 12.6399 18.8904 12.0039 18.8885C11.3525 18.8885 10.8029 18.3342 10.8163 17.6936C10.8298 17.0626 11.3601 16.5505 12 16.5505Z",
    fill: color
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0_498_12175"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "24",
    height: "24",
    fill: "white"
  }))));
};

var Default = function (_a) {
  var _b = _a.color,
    color = _b === void 0 ? '#393939' : _b;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M16.4533 8.52051H8.54785V16.4389H16.4533V8.52051Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.4998 0C12.4998 0 8.12258 3.24149 8.54706 8.56122H16.4525C16.4525 8.56122 16.9619 4.0068 12.4998 0Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.4896 25.0002C12.4896 25.0002 16.8668 21.7587 16.4424 16.439H8.53689C8.53689 16.439 8.02751 20.9934 12.4896 25.0002Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5006 16.4389C14.6836 16.4389 16.4533 14.6663 16.4533 12.4797C16.4533 10.2931 14.6836 8.52051 12.5006 8.52051C10.3176 8.52051 8.54785 10.2931 8.54785 12.4797C8.54785 14.6663 10.3176 16.4389 12.5006 16.4389Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M24.9999 12.4797C24.9999 12.4797 21.7637 8.09532 16.4526 8.52049V16.4389C16.4526 16.4389 20.9996 16.9491 24.9999 12.4797Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 12.4694C0 12.4694 3.23622 16.8537 8.54729 16.4285V8.51018C8.54729 8.51018 4.00028 7.99998 0 12.4694Z",
    fill: color
  }));
};

var Clear = function (_a) {
  var _b = _a.color,
    color = _b === void 0 ? '#ABABAB' : _b;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "8",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.14645 4.14645C4.34171 3.95118 4.65829 3.95118 4.85355 4.14645L8 7.29289L11.1464 4.14645C11.3417 3.95118 11.6583 3.95118 11.8536 4.14645C12.0488 4.34171 12.0488 4.65829 11.8536 4.85355L8.70711 8L11.8536 11.1464C12.0488 11.3417 12.0488 11.6583 11.8536 11.8536C11.6583 12.0488 11.3417 12.0488 11.1464 11.8536L8 8.70711L4.85355 11.8536C4.65829 12.0488 4.34171 12.0488 4.14645 11.8536C3.95118 11.6583 3.95118 11.3417 4.14645 11.1464L7.29289 8L4.14645 4.85355C3.95118 4.65829 3.95118 4.34171 4.14645 4.14645Z",
    fill: "#EFEFEF"
  }));
};

var Filter = function (_a) {
  var _b = _a.color,
    color = _b === void 0 ? '#ABABAB' : _b;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6.7665 3.66883C6.7665 3.30971 6.74541 2.94913 6.77087 2.59146C6.83341 1.70346 7.37305 1.14845 8.26614 1.10637C9.00795 1.07155 9.75413 1.07735 10.4952 1.1158C11.3076 1.15716 11.8945 1.79777 11.9083 2.61033C11.9199 3.31551 11.9199 4.02142 11.9083 4.7266C11.8945 5.58051 11.2814 6.19501 10.397 6.22766C9.76358 6.25087 9.12795 6.24072 8.49377 6.23346C8.28068 6.23129 8.06177 6.21605 7.85668 6.16236C7.23559 5.99985 6.80941 5.47387 6.77596 4.82527C6.75559 4.44076 6.77232 4.05479 6.77232 3.66883H6.7665ZM7.79777 3.66593C7.79777 3.9924 7.79559 4.31815 7.79777 4.64462C7.80141 5.02116 7.98395 5.20326 8.35995 5.20398C9.01086 5.20543 9.66177 5.20471 10.3127 5.20326C10.3847 5.20326 10.4589 5.19528 10.5279 5.17714C10.7556 5.11692 10.8669 4.94715 10.8683 4.65115C10.8712 3.9953 10.869 3.33945 10.8683 2.6836C10.8683 2.64733 10.8654 2.61105 10.8618 2.57478C10.837 2.3165 10.6676 2.14456 10.4079 2.14238C9.71777 2.13658 9.02686 2.13295 8.33668 2.14093C7.95995 2.14528 7.79995 2.3194 7.79632 2.69666C7.79341 3.01951 7.79632 3.34235 7.79632 3.66593H7.79777Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.33753 11.9084C8.96128 11.9084 8.58432 11.9252 8.20952 11.9048C7.41636 11.8611 6.83093 11.2695 6.77573 10.4779C6.76484 10.32 6.7583 10.1606 6.7583 10.0027C6.7583 9.46934 6.7583 8.93598 6.76339 8.40188C6.76702 8.0235 6.84909 7.66623 7.08152 7.35843C7.37424 6.96987 7.78244 6.78359 8.25383 6.77195C8.97581 6.75376 9.69924 6.75303 10.422 6.77122C11.258 6.79232 11.8819 7.42101 11.9037 8.26581C11.9218 8.98255 11.9211 9.70074 11.9037 10.4182C11.8833 11.2404 11.2761 11.8604 10.4554 11.9062C10.0835 11.9273 9.71014 11.9099 9.33753 11.9099V11.9084ZM10.8636 9.34637C10.8636 8.98618 10.8686 8.62527 10.8621 8.26508C10.857 7.99149 10.6791 7.81758 10.4067 7.80303C10.3573 7.80012 10.3079 7.79939 10.2585 7.79939C9.61789 7.79939 8.97726 7.79939 8.33736 7.79939C7.9938 7.80012 7.80713 7.97985 7.80495 8.3233C7.80132 9.00146 7.80132 9.67891 7.80495 10.3571C7.80641 10.6816 7.9938 10.8701 8.3163 10.8723C8.99978 10.8759 9.68327 10.8759 10.3668 10.8723C10.6704 10.8708 10.8599 10.6816 10.8636 10.3767C10.8679 10.0325 10.8643 9.68909 10.8643 9.34492L10.8636 9.34637Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.66059 11.9079C3.29072 11.9079 2.92013 11.9254 2.55171 11.9043C1.71605 11.8556 1.11438 11.2388 1.09549 10.4031C1.0795 9.68952 1.0795 8.97454 1.09549 8.26101C1.11511 7.42601 1.73858 6.79467 2.57278 6.77212C3.29872 6.75248 4.0261 6.75394 4.75276 6.77212C5.56735 6.79249 6.17193 7.38819 6.22497 8.19991C6.24387 8.49449 6.23951 8.79052 6.24096 9.08655C6.24314 9.4815 6.24241 9.87573 6.23951 10.2707C6.23805 10.4998 6.20681 10.726 6.12251 10.9406C5.8878 11.537 5.43437 11.8519 4.81017 11.9014C4.4294 11.9319 4.04499 11.9072 3.66205 11.9072V11.9094L3.66059 11.9079ZM5.19457 9.33385C5.19457 8.98327 5.19602 8.63341 5.19457 8.28283C5.19312 8.00425 5.01218 7.80641 4.73459 7.80351C4.02465 7.79696 3.3147 7.79696 2.60476 7.80278C2.33299 7.80496 2.14333 7.98607 2.13969 8.25664C2.13098 8.97017 2.12952 9.68443 2.13824 10.3987C2.14187 10.6918 2.32427 10.8671 2.61711 10.87C3.31761 10.8766 4.01738 10.8773 4.71788 10.87C5.00346 10.8671 5.19021 10.6758 5.19457 10.3943C5.20038 10.0408 5.19602 9.68734 5.19602 9.33312L5.19457 9.33385Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.2359 3.6633C6.2359 4.02883 6.25192 4.39508 6.23299 4.75989C6.18857 5.61569 5.59446 6.20315 4.73241 6.22708C4.0218 6.24667 3.30974 6.24739 2.59913 6.22708C1.71742 6.20242 1.10219 5.56637 1.08909 4.68881C1.07962 4.03971 1.08472 3.3906 1.08617 2.74149C1.08909 1.78415 1.65335 1.151 2.61151 1.10531C3.35706 1.06977 4.10699 1.07993 4.85254 1.11692C5.61339 1.15463 6.19294 1.7682 6.22935 2.52754C6.24755 2.9054 6.23226 3.28471 6.23226 3.66402H6.23517L6.2359 3.6633ZM5.20421 3.67127C5.20421 3.34201 5.20421 3.01274 5.20421 2.68275C5.20421 2.67259 5.20421 2.66317 5.20421 2.65301C5.1962 2.31504 5.01563 2.1388 4.67489 2.1388C4.01379 2.1388 3.35197 2.1388 2.69087 2.1388C2.31736 2.1388 2.13752 2.29328 2.1317 2.66317C2.12078 3.33185 2.12005 4.00054 2.13024 4.66923C2.13607 5.02896 2.32901 5.20012 2.69232 5.20157C3.35051 5.20302 4.0087 5.20374 4.66688 5.20157C5.0149 5.20012 5.20057 5.01518 5.20421 4.66995C5.20785 4.33706 5.20493 4.00417 5.20493 3.672L5.20421 3.67127Z",
    fill: color
  }));
};

var Collapse = function (_a) {
  var _b = _a.color,
    color = _b === void 0 ? '#ABABAB' : _b;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6.5 10L0.870835 0.249999L12.1292 0.25L6.5 10Z",
    fill: color
  }));
};

var Svg = {
  Account: Account,
  AccountFull: AccountFull,
  Add: Add,
  All: All,
  Calendar: Calendar,
  Camera: Camera,
  Chat: Chat,
  ChatEmpty: ChatEmpty,
  ChatFull: ChatFull,
  Check: Check,
  Close: Close,
  Dropdown: Dropdown$1,
  EditWrite: EditWrite,
  Empty: Empty,
  Group: Group,
  GroupFull: GroupFull,
  Home: Home,
  HomeFull: HomeFull,
  HomeHouse: HomeHouse,
  Left: Left,
  Like: Like,
  LikeFull: LikeFull,
  LocationPin: LocationPin,
  More: More,
  Notification: Notification,
  NotificationFull: NotificationFull,
  NotificationNone: NotificationNone,
  Photo: Photo,
  Search: Search,
  Send: Send,
  Share: Share,
  Time: Time,
  Warning: Warning,
  Default: Default,
  Clear: Clear,
  Filter: Filter,
  Collapse: Collapse
};

var css_248z$k = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJJY29uLnNjc3MifQ== */";
styleInject(css_248z$k);

var getIconSvg = function (id, color, fill) {
  if (id === 'Account') return fill ? /*#__PURE__*/React.createElement(Svg.AccountFull, {
    color: fill
  }) : /*#__PURE__*/React.createElement(Svg.Account, {
    color: color
  });
  if (id === 'Home') return fill ? /*#__PURE__*/React.createElement(Svg.HomeFull, {
    color: fill
  }) : /*#__PURE__*/React.createElement(Svg.Home, {
    color: color
  });
  if (id === 'Group') return fill ? /*#__PURE__*/React.createElement(Svg.GroupFull, {
    color: fill
  }) : /*#__PURE__*/React.createElement(Svg.Group, {
    color: color
  });
  if (id === 'Chat') return fill ? /*#__PURE__*/React.createElement(Svg.ChatFull, {
    color: fill
  }) : /*#__PURE__*/React.createElement(Svg.Chat, {
    color: color
  });
  if (id === 'Like') return fill ? /*#__PURE__*/React.createElement(Svg.LikeFull, {
    color: fill
  }) : /*#__PURE__*/React.createElement(Svg.Like, {
    color: color
  });
  if (id === 'LocationPin') return /*#__PURE__*/React.createElement(Svg.LocationPin, {
    color: color
  });
  if (id === 'More') return /*#__PURE__*/React.createElement(Svg.More, {
    color: color
  });
  if (id === 'Warning') return /*#__PURE__*/React.createElement(Svg.Warning, {
    color: color
  });
  if (id === 'Close') return /*#__PURE__*/React.createElement(Svg.Close, {
    color: color
  });
  if (id === 'EditWrite') return /*#__PURE__*/React.createElement(Svg.EditWrite, {
    color: color
  });
  if (id === 'Search') return /*#__PURE__*/React.createElement(Svg.Search, {
    color: color
  });
  if (id === 'Left') return /*#__PURE__*/React.createElement(Svg.Left, {
    color: color
  });
  if (id === 'Right') return /*#__PURE__*/React.createElement(Svg.Left, {
    color: color
  });
  if (id === 'Share') return /*#__PURE__*/React.createElement(Svg.Share, {
    color: color
  });
  if (id === 'More') return /*#__PURE__*/React.createElement(Svg.More, {
    color: color
  });
  if (id === 'Clear') return /*#__PURE__*/React.createElement(Svg.Clear, {
    color: color
  });
  if (id === 'Notification') return fill ? /*#__PURE__*/React.createElement(Svg.NotificationFull, {
    color: fill
  }) : /*#__PURE__*/React.createElement(Svg.Notification, {
    color: color
  });
  if (id === 'NotificationNone') return /*#__PURE__*/React.createElement(Svg.NotificationNone, {
    color: color
  });
  if (id === 'Filter') return /*#__PURE__*/React.createElement(Svg.Filter, {
    color: color
  });
  if (id === 'Dropdown') return /*#__PURE__*/React.createElement(Svg.Dropdown, {
    color: color
  });
  if (id === 'Check') return /*#__PURE__*/React.createElement(Svg.Check, {
    color: color
  });
  if (id === 'Collapse') return /*#__PURE__*/React.createElement(Svg.Collapse, {
    color: color
  });
  if (id === 'Default') return /*#__PURE__*/React.createElement(Svg.Default, {
    color: color
  });
};
var Icon = function (_a) {
  var _b = _a.id,
    id = _b === void 0 ? 'Account' : _b,
    _c = _a.width,
    width = _c === void 0 ? 24 : _c,
    _d = _a.height,
    height = _d === void 0 ? 24 : _d,
    _e = _a.viewBox,
    viewBox = _e === void 0 ? '0 0 24 24' : _e,
    _f = _a.color,
    color = _f === void 0 ? '#393939' : _f,
    fill = _a.fill,
    _g = _a.style,
    style = _g === void 0 ? {} : _g,
    props = __rest(_a, ["id", "width", "height", "viewBox", "color", "fill", "style"]);
  return /*#__PURE__*/React.createElement("svg", __assign({
    width: width,
    height: height,
    viewBox: viewBox,
    style: style,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), getIconSvg(id, color, fill));
};

var css_248z$j = ".icon_button_container{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;--font-weight:700;--color:var(--black);--disabled-color:var(--primary-button-disabled);align-items:center;background-color:transparent;border:0;border-radius:8px;box-shadow:none;box-sizing:border-box;color:var(--color);cursor:pointer;display:inline-flex;font-family:SF Pro Display,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Emoji,sans-serif;font-size:var(--font-size);font-style:normal;font-weight:var(--font-weight);gap:8px;height:var(--height);justify-content:center;letter-spacing:var(--letter-spacing);line-height:var(--line-height);outline:none;padding:var(--button-padding-tb) var(--button-padding-lr);width:var(--width)}.icon_button_container.lg{--width:100%;--height:50px;--font-size:18px;--button-padding-tb:4px;--button-padding-lr:4px}.icon_button_container.md{--width:100%;--height:50px;--button-padding-tb:4px;--button-padding-lr:4px}.icon_button_container.sm{--width:fit-content;--height:fit-content;--button-padding-tb:0px;--button-padding-lr:0px}.icon_button_container:disabled{color:var(--disabled-color);cursor:default}.icon_button_container:disabled>*{cursor:default!important}.icon_button_container:hover{color:var(--color)}.icon_button_container svg{cursor:pointer}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkljb25CdXR0b24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1QkFHRSxrQ0FBbUMsQ0FDbkMsaUNBQWtDLENBQ2xDLGlCQUFrQixDQUNsQixvQkFBcUIsQ0FDckIsK0NBQWdELENBR2hELGtCQUFtQixDQWVuQiw0QkFBNkIsQ0FGN0IsUUFBVyxDQUNYLGlCQUFrQixDQUZsQixlQUFnQixDQU5oQixxQkFBc0IsQ0FKdEIsa0JBQW1CLENBQ25CLGNBQWUsQ0FMZixtQkFBb0IsQ0FQcEIsME5BQTZQLENBaUI3UCwwQkFBMkIsQ0FoQjNCLGlCQUFrQixDQWlCbEIsOEJBQStCLENBTy9CLE9BQVEsQ0FYUixvQkFBcUIsQ0FOckIsc0JBQXVCLENBWXZCLG9DQUFxQyxDQURyQyw4QkFBK0IsQ0FUL0IsWUFBYSxDQU1iLHlEQUEwRCxDQUgxRCxrQkFhRixDQUNBLDBCQUNFLFlBQWEsQ0FDYixhQUFjLENBQ2QsZ0JBQWlCLENBQ2pCLHVCQUF3QixDQUN4Qix1QkFDRixDQUNBLDBCQUNFLFlBQWEsQ0FDYixhQUFjLENBQ2QsdUJBQXdCLENBQ3hCLHVCQUNGLENBQ0EsMEJBQ0UsbUJBQW9CLENBQ3BCLG9CQUFxQixDQUNyQix1QkFBd0IsQ0FDeEIsdUJBQ0YsQ0FDQSxnQ0FDRSwyQkFBNEIsQ0FDNUIsY0FDRixDQUNBLGtDQUNFLHdCQUNGLENBQ0EsNkJBQ0Usa0JBQ0YsQ0FDQSwyQkFDRSxjQUNGIiwiZmlsZSI6Ikljb25CdXR0b24uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uX2J1dHRvbl9jb250YWluZXIge1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gRGlzcGxheVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHN5c3RlbS11aSwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiU2Vnb2UgVUlcIiwgXCJBcHBsZSBTRCBHb3RoaWMgTmVvXCIsIFwiTm90byBTYW5zIEtSXCIsIFwiTWFsZ3VuIEdvdGhpY1wiLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIEVtb2ppXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIC0tZm9udC13ZWlnaHQ6IDcwMDtcbiAgLS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAtLWRpc2FibGVkLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJ1dHRvbi1kaXNhYmxlZCk7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IHZhcigtLWNvbG9yKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogdmFyKC0td2lkdGgpO1xuICBoZWlnaHQ6IHZhcigtLWhlaWdodCk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IHZhcigtLWJ1dHRvbi1wYWRkaW5nLXRiKSB2YXIoLS1idXR0b24tcGFkZGluZy1scik7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0KTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0KTtcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLWxldHRlci1zcGFjaW5nKTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGdhcDogOHB4O1xufVxuLmljb25fYnV0dG9uX2NvbnRhaW5lci5sZyB7XG4gIC0td2lkdGg6IDEwMCU7XG4gIC0taGVpZ2h0OiA1MHB4O1xuICAtLWZvbnQtc2l6ZTogMThweDtcbiAgLS1idXR0b24tcGFkZGluZy10YjogNHB4O1xuICAtLWJ1dHRvbi1wYWRkaW5nLWxyOiA0cHg7XG59XG4uaWNvbl9idXR0b25fY29udGFpbmVyLm1kIHtcbiAgLS13aWR0aDogMTAwJTtcbiAgLS1oZWlnaHQ6IDUwcHg7XG4gIC0tYnV0dG9uLXBhZGRpbmctdGI6IDRweDtcbiAgLS1idXR0b24tcGFkZGluZy1scjogNHB4O1xufVxuLmljb25fYnV0dG9uX2NvbnRhaW5lci5zbSB7XG4gIC0td2lkdGg6IGZpdC1jb250ZW50O1xuICAtLWhlaWdodDogZml0LWNvbnRlbnQ7XG4gIC0tYnV0dG9uLXBhZGRpbmctdGI6IDBweDtcbiAgLS1idXR0b24tcGFkZGluZy1scjogMHB4O1xufVxuLmljb25fYnV0dG9uX2NvbnRhaW5lcjpkaXNhYmxlZCB7XG4gIGNvbG9yOiB2YXIoLS1kaXNhYmxlZC1jb2xvcik7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5pY29uX2J1dHRvbl9jb250YWluZXI6ZGlzYWJsZWQgPiAqIHtcbiAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XG59XG4uaWNvbl9idXR0b25fY29udGFpbmVyOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yKTtcbn1cbi5pY29uX2J1dHRvbl9jb250YWluZXIgc3ZnIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */";
styleInject(css_248z$j);

var IconButton = function (_a) {
  var id = _a.id,
    _b = _a.type,
    type = _b === void 0 ? 'Like' : _b,
    _c = _a.size,
    size = _c === void 0 ? 'sm' : _c,
    _d = _a.disabled,
    disabled = _d === void 0 ? false : _d,
    _e = _a.children,
    children = _e === void 0 ? '' : _e,
    _f = _a.color,
    color = _f === void 0 ? '#ABABAB' : _f,
    fill = _a.fill,
    iconWidth = _a.iconWidth,
    iconHeight = _a.iconHeight,
    _g = _a.style,
    style = _g === void 0 ? {} : _g,
    _h = _a.onClick,
    onClick = _h === void 0 ? function () {} : _h,
    props = __rest(_a, ["id", "type", "size", "disabled", "children", "color", "fill", "iconWidth", "iconHeight", "style", "onClick"]);
  return /*#__PURE__*/React.createElement("button", __assign({
    id: id,
    className: classnames('icon_button_container', size || 'sm'),
    onClick: onClick,
    style: style,
    disabled: disabled,
    type: "button"
  }, props), /*#__PURE__*/React.createElement(Icon, {
    id: type,
    color: color,
    fill: fill,
    width: iconWidth,
    height: iconHeight,
    viewBox: iconWidth !== undefined && iconHeight !== undefined ? "0 0 ".concat(iconWidth, " ").concat(iconHeight) : '0 0 24 24',
    transform: type === 'Right' ? 'rotate(180)' : 'rotate(0)'
  }), children);
};

var css_248z$i = ".button_container{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;--color:var(--primary-button);--pressed-color:var(--primary-button);--disabled-color:var(--primary-button-disabled);--hover-color:var(--primary-button);align-items:center;background:transparent;border:0;box-shadow:none;box-sizing:border-box;color:var(--color);cursor:pointer;display:inline-flex;font-family:SF Pro Display,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Emoji,sans-serif;font-size:18px;font-style:normal;font-weight:700;justify-content:center;line-height:25px;max-width:fit-content;outline:none;padding:6px 0;width:100%}.button_container:active{color:var(--pressed-color)}.button_container:disabled{color:var(--disabled-color);cursor:default}.button_container:hover{color:var(--hover-color)}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRleHRCdXR0b24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFHRSxrQ0FBbUMsQ0FDbkMsaUNBQWtDLENBQ2xDLDZCQUE4QixDQUM5QixxQ0FBc0MsQ0FDdEMsK0NBQWdELENBQ2hELG1DQUFvQyxDQUdwQyxrQkFBbUIsQ0FFbkIsc0JBQXVCLENBV3ZCLFFBQVcsQ0FEWCxlQUFnQixDQUxoQixxQkFBc0IsQ0FKdEIsa0JBQW1CLENBQ25CLGNBQWUsQ0FOZixtQkFBb0IsQ0FScEIsME5BQTZQLENBbUI3UCxjQUFlLENBbEJmLGlCQUFrQixDQW1CbEIsZUFBZ0IsQ0FYaEIsc0JBQXVCLENBWXZCLGdCQUFpQixDQUxqQixxQkFBc0IsQ0FMdEIsWUFBYSxDQU9iLGFBQWMsQ0FIZCxVQVNGLENBQ0EseUJBQ0UsMEJBQ0YsQ0FDQSwyQkFDRSwyQkFBNEIsQ0FDNUIsY0FDRixDQUNBLHdCQUNFLHdCQUNGIiwiZmlsZSI6IlRleHRCdXR0b24uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b25fY29udGFpbmVyIHtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIERpc3BsYXlcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBzeXN0ZW0tdWksIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIlNlZ29lIFVJXCIsIFwiQXBwbGUgU0QgR290aGljIE5lb1wiLCBcIk5vdG8gU2FucyBLUlwiLCBcIk1hbGd1biBHb3RoaWNcIiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBFbW9qaVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAtLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJ1dHRvbik7XG4gIC0tcHJlc3NlZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1idXR0b24pO1xuICAtLWRpc2FibGVkLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJ1dHRvbi1kaXNhYmxlZCk7XG4gIC0taG92ZXItY29sb3I6IHZhcigtLXByaW1hcnktYnV0dG9uKTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWNvbG9yKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogNnB4IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMHB4O1xufVxuLmJ1dHRvbl9jb250YWluZXI6YWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLXByZXNzZWQtY29sb3IpO1xufVxuLmJ1dHRvbl9jb250YWluZXI6ZGlzYWJsZWQge1xuICBjb2xvcjogdmFyKC0tZGlzYWJsZWQtY29sb3IpO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4uYnV0dG9uX2NvbnRhaW5lcjpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XG59Il19 */";
styleInject(css_248z$i);

var TextButton = function (_a) {
  var id = _a.id,
    _b = _a.disabled,
    disabled = _b === void 0 ? false : _b,
    _c = _a.children,
    children = _c === void 0 ? 'Button' : _c,
    _d = _a.style,
    style = _d === void 0 ? {} : _d,
    _e = _a.onClick,
    onClick = _e === void 0 ? function () {} : _e,
    props = __rest(_a, ["id", "disabled", "children", "style", "onClick"]);
  return /*#__PURE__*/React.createElement("button", __assign({
    id: id,
    className: classnames('button_container'),
    onClick: onClick,
    style: style,
    disabled: disabled,
    type: "button"
  }, props), children);
};

var css_248z$h = ".tag_container{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;align-items:center;background:var(--background);border:0;border-radius:25px;color:var(--color);cursor:pointer;display:inline-flex;font-family:SF Pro Display,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Emoji,sans-serif;font-style:normal;font-weight:600;justify-content:center;outline:none}.tag_container.sm{font-size:10px;line-height:12px;padding:2.5px 10px}.tag_container.md{font-size:12px;line-height:14px;padding:3px 10px}.tag_container.lg{font-size:18px;line-height:25px;padding:3px 18px}.tag_container.selected{--background:var(--primary-button);--color:var(--white)}.tag_container:not(.selected){--background:var(--grey-30);--color:var(--grey-60)}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRhZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBR0Usa0NBQW1DLENBQ25DLGlDQUFrQyxDQUdsQyxrQkFBbUIsQ0FFbkIsNEJBQTZCLENBSzdCLFFBQVcsQ0FEWCxrQkFBbUIsQ0FIbkIsa0JBQW1CLENBRW5CLGNBQWUsQ0FQZixtQkFBb0IsQ0FKcEIsME5BQTZQLENBQzdQLGlCQUFrQixDQVNsQixlQUFnQixDQUxoQixzQkFBdUIsQ0FFdkIsWUFPRixDQUNBLGtCQUNFLGNBQWUsQ0FDZixnQkFBaUIsQ0FDakIsa0JBQ0YsQ0FDQSxrQkFDRSxjQUFlLENBQ2YsZ0JBQWlCLENBQ2pCLGdCQUNGLENBQ0Esa0JBQ0UsY0FBZSxDQUNmLGdCQUFpQixDQUNqQixnQkFDRixDQUNBLHdCQUNFLGtDQUFtQyxDQUNuQyxvQkFDRixDQUNBLDhCQUNFLDJCQUE0QixDQUM1QixzQkFDRiIsImZpbGUiOiJUYWcuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWdfY29udGFpbmVyIHtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIERpc3BsYXlcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBzeXN0ZW0tdWksIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIlNlZ29lIFVJXCIsIFwiQXBwbGUgU0QgR290aGljIE5lb1wiLCBcIk5vdG8gU2FucyBLUlwiLCBcIk1hbGd1biBHb3RoaWNcIiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBFbW9qaVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tY29sb3IpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlcjogMHB4O1xufVxuLnRhZ19jb250YWluZXIuc20ge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICBwYWRkaW5nOiAyLjVweCAxMHB4O1xufVxuLnRhZ19jb250YWluZXIubWQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBwYWRkaW5nOiAzcHggMTBweDtcbn1cbi50YWdfY29udGFpbmVyLmxnIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgcGFkZGluZzogM3B4IDE4cHg7XG59XG4udGFnX2NvbnRhaW5lci5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1idXR0b24pO1xuICAtLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG4udGFnX2NvbnRhaW5lcjpub3QoLnNlbGVjdGVkKSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tZ3JleS0zMCk7XG4gIC0tY29sb3I6IHZhcigtLWdyZXktNjApO1xufSJdfQ== */";
styleInject(css_248z$h);

var Tag = function (_a) {
  var id = _a.id,
    _b = _a.size,
    size = _b === void 0 ? 'lg' : _b,
    _c = _a.selected,
    selected = _c === void 0 ? false : _c,
    _d = _a.children,
    children = _d === void 0 ? 'Tag' : _d,
    _e = _a.style,
    style = _e === void 0 ? {} : _e,
    _f = _a.onClick,
    onClick = _f === void 0 ? function () {} : _f,
    props = __rest(_a, ["id", "size", "selected", "children", "style", "onClick"]);
  return /*#__PURE__*/React.createElement("button", __assign({
    id: id,
    className: classnames('tag_container', size || 'lg', selected && 'selected'),
    onClick: onClick,
    style: style
  }, props), children);
};

var css_248z$g = ".gather_container{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:var(--white);border:1px solid var(--border-color);border-radius:8px;display:grid;font-family:SF Pro Display,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Emoji,sans-serif;font-style:normal;gap:13px;grid-template-columns:var(--img-width-size) auto;height:var(--height);max-width:var(--max-width);padding:var(--padding);width:100%}.gather_container.lg{--max-width:375px;--height:145px;--padding:20px;--gap:13px;--border-color:var(--white);--img-width-size:100px;--img-height-size:104px;--like-pos:8px;--like-size:26px;--tag-text-size:12px;--top-margin-bottom:7px;--title-text-size:22px;--title-line-height:30px}.gather_container.md{--max-width:335px;--height:78px;--padding:10px;--gap:10px;--border-color:var(--grey-50);--img-width-size:58px;--img-height-size:58px;--like-pos:5px;--like-size:14px;--tag-text-size:10px;--top-margin-bottom:5px;--title-text-size:15px;--title-line-height:18px}.gather_container .message,.gather_container.md .img_box>svg{display:none}.gather_container .img_box{background-color:var(--white);border-radius:5px;height:var(--img-height-size);overflow:hidden;position:relative;width:100%}.gather_container .img_box>img{cursor:pointer;height:100%;width:100%}.gather_container .img_box>svg{bottom:var(--like-pos);cursor:pointer;height:var(--like-size);position:absolute;right:var(--like-pos);width:var(--like-size);z-index:3}.gather_container .img_box.img_default{background-color:var(--grey-50)}.gather_container .contents_box{cursor:pointer;display:flex;flex-direction:column;height:100%;justify-content:space-between}.gather_container .contents_box .bottom,.gather_container .contents_box .top{align-items:center;display:flex;justify-content:space-between}.gather_container .contents_box .top{margin-bottom:var(--top-margin-bottom)}.gather_container .contents_box .tag{align-items:center;background-color:var(--grey-30);border-radius:10px;color:var(--grey-60);display:flex;font-size:var(--tag-text-size);font-weight:700;height:20px;justify-content:center;padding:3px 10px}.gather_container .contents_box .title{font-size:var(--title-text-size);font-weight:700;line-height:var(--title-line-height);margin-bottom:5px}.gather_container .contents_box .info{align-items:center;color:var(--grey-60);display:flex;font-size:12px;font-weight:700}.gather_container .contents_box .info span{align-items:center;color:var(--black);display:flex;gap:2px}.gather_container.disabled .img_box .message{align-items:center;background-color:var(--disable-layer);border-radius:10px;color:var(--white);display:flex;flex-direction:column;font-size:10px;font-weight:700;gap:5px;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%;z-index:2}.gather_container.disabled .img_box .message .text{margin-bottom:6px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdhdGhlci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUdFLGtDQUFtQyxDQUNuQyxpQ0FBa0MsQ0FPbEMsNkJBQThCLENBQzlCLG9DQUFxQyxDQUNyQyxpQkFBa0IsQ0FSbEIsWUFBYSxDQUpiLDBOQUE2UCxDQUM3UCxpQkFBa0IsQ0FZbEIsUUFBUyxDQVJULGdEQUFpRCxDQUdqRCxvQkFBcUIsQ0FEckIsMEJBQTJCLENBRTNCLHNCQUF1QixDQUh2QixVQVFGLENBQ0EscUJBQ0UsaUJBQWtCLENBQ2xCLGNBQWUsQ0FDZixjQUFlLENBQ2YsVUFBVyxDQUNYLDJCQUE0QixDQUM1QixzQkFBdUIsQ0FDdkIsdUJBQXdCLENBQ3hCLGNBQWUsQ0FDZixnQkFBaUIsQ0FDakIsb0JBQXFCLENBQ3JCLHVCQUF3QixDQUN4QixzQkFBdUIsQ0FDdkIsd0JBQ0YsQ0FDQSxxQkFDRSxpQkFBa0IsQ0FDbEIsYUFBYyxDQUNkLGNBQWUsQ0FDZixVQUFXLENBQ1gsNkJBQThCLENBQzlCLHFCQUFzQixDQUN0QixzQkFBdUIsQ0FDdkIsY0FBZSxDQUNmLGdCQUFpQixDQUNqQixvQkFBcUIsQ0FDckIsdUJBQXdCLENBQ3hCLHNCQUF1QixDQUN2Qix3QkFDRixDQUlBLDZEQUNFLFlBQ0YsQ0FDQSwyQkFLRSw2QkFBOEIsQ0FEOUIsaUJBQWtCLENBRGxCLDZCQUE4QixDQUc5QixlQUFnQixDQUxoQixpQkFBa0IsQ0FDbEIsVUFLRixDQUNBLCtCQUdFLGNBQWUsQ0FEZixXQUFZLENBRFosVUFHRixDQUNBLCtCQUtFLHNCQUF1QixDQUV2QixjQUFlLENBSmYsdUJBQXdCLENBRnhCLGlCQUFrQixDQUdsQixxQkFBc0IsQ0FGdEIsc0JBQXVCLENBSXZCLFNBRUYsQ0FDQSx1Q0FDRSwrQkFDRixDQUNBLGdDQUtFLGNBQWUsQ0FKZixZQUFhLENBQ2IscUJBQXNCLENBRXRCLFdBQVksQ0FEWiw2QkFHRixDQUNBLDZFQUlFLGtCQUFtQixDQUZuQixZQUFhLENBQ2IsNkJBRUYsQ0FDQSxxQ0FDRSxzQ0FDRixDQUNBLHFDQUdFLGtCQUFtQixDQUduQiwrQkFBZ0MsQ0FEaEMsa0JBQW1CLENBS25CLG9CQUFxQixDQVRyQixZQUFhLENBUWIsOEJBQStCLENBRC9CLGVBQWdCLENBRGhCLFdBQVksQ0FMWixzQkFBdUIsQ0FFdkIsZ0JBT0YsQ0FDQSx1Q0FFRSxnQ0FBaUMsQ0FEakMsZUFBZ0IsQ0FFaEIsb0NBQXFDLENBQ3JDLGlCQUNGLENBQ0Esc0NBRUUsa0JBQW1CLENBR25CLG9CQUFxQixDQUpyQixZQUFhLENBR2IsY0FBZSxDQURmLGVBR0YsQ0FDQSwyQ0FHRSxrQkFBbUIsQ0FGbkIsa0JBQW1CLENBQ25CLFlBQWEsQ0FFYixPQUNGLENBQ0EsNkNBSUUsa0JBQW1CLENBWW5CLHFDQUFzQyxDQU50QyxrQkFBbUIsQ0FLbkIsa0JBQW1CLENBYm5CLFlBQWEsQ0FHYixxQkFBc0IsQ0FTdEIsY0FBZSxDQURmLGVBQWdCLENBRGhCLE9BQVEsQ0FMUixXQUFZLENBSlosc0JBQXVCLENBS3ZCLE1BQU8sQ0FQUCxpQkFBa0IsQ0FRbEIsS0FBTSxDQUhOLFVBQVcsQ0FLWCxTQU1GLENBQ0EsbURBQ0UsaUJBQ0YiLCJmaWxlIjoiR2F0aGVyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2F0aGVyX2NvbnRhaW5lciB7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBEaXNwbGF5XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgc3lzdGVtLXVpLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJTZWdvZSBVSVwiLCBcIkFwcGxlIFNEIEdvdGhpYyBOZW9cIiwgXCJOb3RvIFNhbnMgS1JcIiwgXCJNYWxndW4gR290aGljXCIsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gRW1vamlcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB2YXIoLS1pbWctd2lkdGgtc2l6ZSkgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoKTtcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpO1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGdhcDogMTNweDtcbn1cbi5nYXRoZXJfY29udGFpbmVyLmxnIHtcbiAgLS1tYXgtd2lkdGg6IDM3NXB4O1xuICAtLWhlaWdodDogMTQ1cHg7XG4gIC0tcGFkZGluZzogMjBweDtcbiAgLS1nYXA6IDEzcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIC0taW1nLXdpZHRoLXNpemU6IDEwMHB4O1xuICAtLWltZy1oZWlnaHQtc2l6ZTogMTA0cHg7XG4gIC0tbGlrZS1wb3M6IDhweDtcbiAgLS1saWtlLXNpemU6IDI2cHg7XG4gIC0tdGFnLXRleHQtc2l6ZTogMTJweDtcbiAgLS10b3AtbWFyZ2luLWJvdHRvbTogN3B4O1xuICAtLXRpdGxlLXRleHQtc2l6ZTogMjJweDtcbiAgLS10aXRsZS1saW5lLWhlaWdodDogMzBweDtcbn1cbi5nYXRoZXJfY29udGFpbmVyLm1kIHtcbiAgLS1tYXgtd2lkdGg6IDMzNXB4O1xuICAtLWhlaWdodDogNzhweDtcbiAgLS1wYWRkaW5nOiAxMHB4O1xuICAtLWdhcDogMTBweDtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWdyZXktNTApO1xuICAtLWltZy13aWR0aC1zaXplOiA1OHB4O1xuICAtLWltZy1oZWlnaHQtc2l6ZTogNThweDtcbiAgLS1saWtlLXBvczogNXB4O1xuICAtLWxpa2Utc2l6ZTogMTRweDtcbiAgLS10YWctdGV4dC1zaXplOiAxMHB4O1xuICAtLXRvcC1tYXJnaW4tYm90dG9tOiA1cHg7XG4gIC0tdGl0bGUtdGV4dC1zaXplOiAxNXB4O1xuICAtLXRpdGxlLWxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuLmdhdGhlcl9jb250YWluZXIubWQgLmltZ19ib3ggPiBzdmcge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmdhdGhlcl9jb250YWluZXIgLm1lc3NhZ2Uge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmdhdGhlcl9jb250YWluZXIgLmltZ19ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IHZhcigtLWltZy1oZWlnaHQtc2l6ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmdhdGhlcl9jb250YWluZXIgLmltZ19ib3ggPiBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZ2F0aGVyX2NvbnRhaW5lciAuaW1nX2JveCA+IHN2ZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IHZhcigtLWxpa2Utc2l6ZSk7XG4gIGhlaWdodDogdmFyKC0tbGlrZS1zaXplKTtcbiAgcmlnaHQ6IHZhcigtLWxpa2UtcG9zKTtcbiAgYm90dG9tOiB2YXIoLS1saWtlLXBvcyk7XG4gIHotaW5kZXg6IDM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5nYXRoZXJfY29udGFpbmVyIC5pbWdfYm94LmltZ19kZWZhdWx0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleS01MCk7XG59XG4uZ2F0aGVyX2NvbnRhaW5lciAuY29udGVudHNfYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5nYXRoZXJfY29udGFpbmVyIC5jb250ZW50c19ib3ggLnRvcCxcbi5nYXRoZXJfY29udGFpbmVyIC5jb250ZW50c19ib3ggLmJvdHRvbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5nYXRoZXJfY29udGFpbmVyIC5jb250ZW50c19ib3ggLnRvcCB7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXRvcC1tYXJnaW4tYm90dG9tKTtcbn1cbi5nYXRoZXJfY29udGFpbmVyIC5jb250ZW50c19ib3ggLnRhZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAzcHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleS0zMCk7XG4gIGhlaWdodDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiB2YXIoLS10YWctdGV4dC1zaXplKTtcbiAgY29sb3I6IHZhcigtLWdyZXktNjApO1xufVxuLmdhdGhlcl9jb250YWluZXIgLmNvbnRlbnRzX2JveCAudGl0bGUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IHZhcigtLXRpdGxlLXRleHQtc2l6ZSk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS10aXRsZS1saW5lLWhlaWdodCk7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5nYXRoZXJfY29udGFpbmVyIC5jb250ZW50c19ib3ggLmluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1ncmV5LTYwKTtcbn1cbi5nYXRoZXJfY29udGFpbmVyIC5jb250ZW50c19ib3ggLmluZm8gc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMnB4O1xufVxuLmdhdGhlcl9jb250YWluZXIuZGlzYWJsZWQgLmltZ19ib3ggLm1lc3NhZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHotaW5kZXg6IDI7XG4gIGdhcDogNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpc2FibGUtbGF5ZXIpO1xufVxuLmdhdGhlcl9jb250YWluZXIuZGlzYWJsZWQgLmltZ19ib3ggLm1lc3NhZ2UgLnRleHQge1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59Il19 */";
styleInject(css_248z$g);

var Gather = function (_a) {
  var id = _a.id,
    _b = _a.size,
    size = _b === void 0 ? 'lg' : _b,
    _c = _a.disabled,
    disabled = _c === void 0 ? false : _c,
    _d = _a.like,
    like = _d === void 0 ? false : _d;
    _a.tagname;
    var _f = _a.title,
    title = _f === void 0 ? '타이틀은 두 줄 까지 작성하면 됩니다.' : _f,
    _g = _a.local,
    local = _g === void 0 ? '강남구' : _g,
    _h = _a.eventDtm,
    eventDtm = _h === void 0 ? '12월 12일 오후 5:00' : _h,
    _j = _a.member,
    member = _j === void 0 ? 3 : _j,
    _k = _a.imgUrl,
    imgUrl = _k === void 0 ? 'https://cdn.eroun.net/news/photo/201904/5248_19828_3216.jpg' : _k,
    _l = _a.message,
    message = _l === void 0 ? '종료된 모임' : _l,
    _m = _a.onClick,
    onClick = _m === void 0 ? function () {} : _m,
    _o = _a.onClickLike,
    onClickLike = _o === void 0 ? function () {} : _o;
  return /*#__PURE__*/React.createElement("div", {
    id: id,
    className: classnames('gather_container', size || 'lg', disabled && 'disabled')
  }, /*#__PURE__*/React.createElement("div", {
    className: classnames('img_box', (!imgUrl || imgUrl === '') && 'img_default')
  }, imgUrl && /*#__PURE__*/React.createElement("img", {
    src: imgUrl,
    width: "100%",
    height: "100%",
    onClick: onClick
  }), /*#__PURE__*/React.createElement(Icon, {
    id: "Like",
    width: 26,
    height: 26,
    viewBox: '0 0 26 26',
    color: "#ffffff",
    fill: like ? '#393939' : undefined,
    onClick: onClickLike
  }), /*#__PURE__*/React.createElement("div", {
    className: "message"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Icon, {
    id: "Warning",
    width: 13,
    height: 13,
    color: "#ffffff"
  })), /*#__PURE__*/React.createElement("div", {
    className: "text"
  }, message))), /*#__PURE__*/React.createElement("div", {
    className: "contents_box",
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "top"
  }, /*#__PURE__*/React.createElement(Tag, {
    size: size === 'lg' ? 'md' : 'sm'
  })), /*#__PURE__*/React.createElement("div", {
    className: "title limit-line-2"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "bottom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "info"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    id: "LocationPin",
    width: 12,
    height: 12,
    color: '#393939'
  }), " ", local), " \u00B7 ".concat(eventDtm, " \u00B7 \uBA64\uBC84").concat(member, "\uBA85")))));
};

var css_248z$f = ".chatting_container{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:var(--white);display:grid;font-family:SF Pro Display,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Emoji,sans-serif;font-style:normal;gap:14px;grid-template-columns:76px auto;max-height:130px;max-width:375px;min-height:116px;padding:20px}.chatting_container .img_box{align-items:center;background-color:var(--grey-30);border-radius:50%;display:flex;height:76px;justify-content:center;position:relative;width:76px}.chatting_container .img_box img{border-radius:50%}.chatting_container .img_box .unread{align-items:center;background-color:var(--marker);border-radius:50%;color:var(--white);display:flex;font-size:12px;font-weight:700;height:20px;justify-content:center;position:absolute;right:0;top:5%;width:20px}.chatting_container .img_box .unread.over{font-size:10px;font-weight:500}.chatting_container .contents_box .top{align-items:flex-start;display:flex;justify-content:space-between;margin-bottom:4px}.chatting_container .contents_box .title{align-items:flex-end;display:flex;font-size:22px;font-weight:700;gap:4px;line-height:30px}.chatting_container .contents_box .title label{color:var(--grey-60);font-size:18px;line-height:28px}.chatting_container .contents_box .timestamp{color:var(--grey-70);font-size:10px;font-weight:500}.chatting_container .contents_box .message{color:var(--grey-80);font-size:18px;font-weight:500;line-height:28px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNoYXR0aW5nLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBR0Usa0NBQW1DLENBQ25DLGlDQUFrQyxDQU9sQyw2QkFBOEIsQ0FOOUIsWUFBYSxDQUpiLDBOQUE2UCxDQUM3UCxpQkFBa0IsQ0FVbEIsUUFBUyxDQU5ULCtCQUFnQyxDQUdoQyxnQkFBaUIsQ0FGakIsZUFBZ0IsQ0FDaEIsZ0JBQWlCLENBRWpCLFlBR0YsQ0FDQSw2QkFFRSxrQkFBbUIsQ0FNbkIsK0JBQWdDLENBRGhDLGlCQUFrQixDQU5sQixZQUFhLENBS2IsV0FBWSxDQUhaLHNCQUF1QixDQUN2QixpQkFBa0IsQ0FDbEIsVUFJRixDQUNBLGlDQUNFLGlCQUNGLENBQ0EscUNBR0Usa0JBQW1CLENBVW5CLDhCQUErQixDQUovQixpQkFBa0IsQ0FDbEIsa0JBQW1CLENBUm5CLFlBQWEsQ0FVYixjQUFlLENBRGYsZUFBZ0IsQ0FIaEIsV0FBWSxDQUpaLHNCQUF1QixDQUh2QixpQkFBa0IsQ0FLbEIsT0FBUSxDQURSLE1BQU8sQ0FFUCxVQU9GLENBQ0EsMENBQ0UsY0FBZSxDQUNmLGVBQ0YsQ0FDQSx1Q0FFRSxzQkFBdUIsQ0FEdkIsWUFBYSxDQUViLDZCQUE4QixDQUM5QixpQkFDRixDQUNBLHlDQUVFLG9CQUFxQixDQURyQixZQUFhLENBR2IsY0FBZSxDQURmLGVBQWdCLENBR2hCLE9BQVEsQ0FEUixnQkFFRixDQUNBLCtDQUVFLG9CQUFxQixDQURyQixjQUFlLENBRWYsZ0JBQ0YsQ0FDQSw2Q0FHRSxvQkFBcUIsQ0FEckIsY0FBZSxDQURmLGVBR0YsQ0FDQSwyQ0FJRSxvQkFBcUIsQ0FGckIsY0FBZSxDQURmLGVBQWdCLENBRWhCLGdCQUVGIiwiZmlsZSI6IkNoYXR0aW5nLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdHRpbmdfY29udGFpbmVyIHtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIERpc3BsYXlcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBzeXN0ZW0tdWksIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIlNlZ29lIFVJXCIsIFwiQXBwbGUgU0QgR290aGljIE5lb1wiLCBcIk5vdG8gU2FucyBLUlwiLCBcIk1hbGd1biBHb3RoaWNcIiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBFbW9qaVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDc2cHggYXV0bztcbiAgbWF4LXdpZHRoOiAzNzVweDtcbiAgbWluLWhlaWdodDogMTE2cHg7XG4gIG1heC1oZWlnaHQ6IDEzMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGdhcDogMTRweDtcbn1cbi5jaGF0dGluZ19jb250YWluZXIgLmltZ19ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNzZweDtcbiAgaGVpZ2h0OiA3NnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXktMzApO1xufVxuLmNoYXR0aW5nX2NvbnRhaW5lciAuaW1nX2JveCBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uY2hhdHRpbmdfY29udGFpbmVyIC5pbWdfYm94IC51bnJlYWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0b3A6IDUlO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hcmtlcik7XG59XG4uY2hhdHRpbmdfY29udGFpbmVyIC5pbWdfYm94IC51bnJlYWQub3ZlciB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jaGF0dGluZ19jb250YWluZXIgLmNvbnRlbnRzX2JveCAudG9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuLmNoYXR0aW5nX2NvbnRhaW5lciAuY29udGVudHNfYm94IC50aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgZ2FwOiA0cHg7XG59XG4uY2hhdHRpbmdfY29udGFpbmVyIC5jb250ZW50c19ib3ggLnRpdGxlIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogdmFyKC0tZ3JleS02MCk7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuLmNoYXR0aW5nX2NvbnRhaW5lciAuY29udGVudHNfYm94IC50aW1lc3RhbXAge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1ncmV5LTcwKTtcbn1cbi5jaGF0dGluZ19jb250YWluZXIgLmNvbnRlbnRzX2JveCAubWVzc2FnZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGNvbG9yOiB2YXIoLS1ncmV5LTgwKTtcbn0iXX0= */";
styleInject(css_248z$f);

var Chatting = function (_a) {
  var id = _a.id,
    _b = _a.imgUrl,
    imgUrl = _b === void 0 ? '' : _b,
    _c = _a.title,
    title = _c === void 0 ? '프로등산러' : _c,
    _d = _a.lastMessage,
    lastMessage = _d === void 0 ? '이번주는 청계산에 가려고 하는데 어디서 출발하실거에요?' : _d,
    _e = _a.timestamp,
    timestamp = _e === void 0 ? '2023-11-26 12:45:22' : _e,
    _f = _a.memberCnt,
    memberCnt = _f === void 0 ? 5 : _f,
    _g = _a.unreadCnt,
    unreadCnt = _g === void 0 ? 120 : _g,
    _h = _a.onClick,
    onClick = _h === void 0 ? function () {} : _h;
  return /*#__PURE__*/React.createElement("div", {
    id: id,
    className: classnames('chatting_container'),
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: classnames('img_box', (!imgUrl || imgUrl === '') && 'img_default')
  }, imgUrl && /*#__PURE__*/React.createElement("img", {
    src: imgUrl,
    width: "100%",
    height: "100%"
  }), (!imgUrl || imgUrl === '') && /*#__PURE__*/React.createElement(Icon, {
    id: "Default",
    width: 25,
    height: 25,
    color: "#ABABAB"
  }), /*#__PURE__*/React.createElement("label", {
    className: classnames('unread', unreadCnt > 99 && 'over')
  }, unreadCnt > 99 ? '99+' : unreadCnt)), /*#__PURE__*/React.createElement("div", {
    className: "contents_box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, title, /*#__PURE__*/React.createElement("label", null, memberCnt)), /*#__PURE__*/React.createElement("div", {
    className: "timestamp"
  }, timestamp ? moment(timestamp, 'YYYY-MM-DD HH:mm:ss').format('HH:mm') : '')), /*#__PURE__*/React.createElement("div", {
    className: "message limit-line-2"
  }, lastMessage)));
};

var css_248z$e = ".list_container{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:SF Pro Display,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Emoji,sans-serif;font-style:normal;max-width:var(--width);width:100vw}.list_container.lg{--width:375px}.list_container.md{--width:335px}.list_container.primary{--font-weight:600}.list_container.secondary{--font-weight:500}.list_container label{font-weight:var(--font-weight)}.item_container{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;align-items:center;cursor:pointer;display:flex;font-family:SF Pro Display,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Emoji,sans-serif;font-style:normal;height:var(--height);justify-content:space-between;padding:var(--padding);text-align:left;width:100%}.item_container.lg{--width:375px;--height:65px;--padding:20px;--font-size:18px}.item_container.md{--width:335px;--height:42px;--padding:12px 20px;--font-size:15px}.item_container .icon_button_container svg{height:18px;width:18px}.item_container:hover,.item_container:hover .icon_button_container{background-color:var(--grey-30)}.item_container label{font-size:var(--font-size)}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJhc2ljLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBR0Usa0NBQW1DLENBQ25DLGlDQUFrQyxDQUhsQywwTkFBNlAsQ0FDN1AsaUJBQWtCLENBR2xCLHNCQUF1QixDQUN2QixXQUNGLENBQ0EsbUJBQ0UsYUFDRixDQUNBLG1CQUNFLGFBQ0YsQ0FDQSx3QkFDRSxpQkFDRixDQUNBLDBCQUNFLGlCQUNGLENBQ0Esc0JBQ0UsOEJBQ0YsQ0FFQSxnQkFHRSxrQ0FBbUMsQ0FDbkMsaUNBQWtDLENBTWxDLGtCQUFtQixDQUVuQixjQUFlLENBUGYsWUFBYSxDQUpiLDBOQUE2UCxDQUM3UCxpQkFBa0IsQ0FLbEIsb0JBQXFCLENBRXJCLDZCQUE4QixDQUQ5QixzQkFBdUIsQ0FHdkIsZUFBZ0IsQ0FMaEIsVUFPRixDQUNBLG1CQUNFLGFBQWMsQ0FDZCxhQUFjLENBQ2QsY0FBZSxDQUNmLGdCQUNGLENBQ0EsbUJBQ0UsYUFBYyxDQUNkLGFBQWMsQ0FDZCxtQkFBb0IsQ0FDcEIsZ0JBQ0YsQ0FDQSwyQ0FFRSxXQUFZLENBRFosVUFFRixDQUlBLG1FQUNFLCtCQUNGLENBQ0Esc0JBQ0UsMEJBQ0YiLCJmaWxlIjoiQmFzaWMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0X2NvbnRhaW5lciB7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBEaXNwbGF5XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgc3lzdGVtLXVpLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJTZWdvZSBVSVwiLCBcIkFwcGxlIFNEIEdvdGhpYyBOZW9cIiwgXCJOb3RvIFNhbnMgS1JcIiwgXCJNYWxndW4gR290aGljXCIsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gRW1vamlcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgbWF4LXdpZHRoOiB2YXIoLS13aWR0aCk7XG4gIHdpZHRoOiAxMDB2dztcbn1cbi5saXN0X2NvbnRhaW5lci5sZyB7XG4gIC0td2lkdGg6IDM3NXB4O1xufVxuLmxpc3RfY29udGFpbmVyLm1kIHtcbiAgLS13aWR0aDogMzM1cHg7XG59XG4ubGlzdF9jb250YWluZXIucHJpbWFyeSB7XG4gIC0tZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5saXN0X2NvbnRhaW5lci5zZWNvbmRhcnkge1xuICAtLWZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ubGlzdF9jb250YWluZXIgbGFiZWwge1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQpO1xufVxuXG4uaXRlbV9jb250YWluZXIge1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gRGlzcGxheVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHN5c3RlbS11aSwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiU2Vnb2UgVUlcIiwgXCJBcHBsZSBTRCBHb3RoaWMgTmVvXCIsIFwiTm90byBTYW5zIEtSXCIsIFwiTWFsZ3VuIEdvdGhpY1wiLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIEVtb2ppXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IHZhcigtLWhlaWdodCk7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmcpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pdGVtX2NvbnRhaW5lci5sZyB7XG4gIC0td2lkdGg6IDM3NXB4O1xuICAtLWhlaWdodDogNjVweDtcbiAgLS1wYWRkaW5nOiAyMHB4O1xuICAtLWZvbnQtc2l6ZTogMThweDtcbn1cbi5pdGVtX2NvbnRhaW5lci5tZCB7XG4gIC0td2lkdGg6IDMzNXB4O1xuICAtLWhlaWdodDogNDJweDtcbiAgLS1wYWRkaW5nOiAxMnB4IDIwcHg7XG4gIC0tZm9udC1zaXplOiAxNXB4O1xufVxuLml0ZW1fY29udGFpbmVyIC5pY29uX2J1dHRvbl9jb250YWluZXIgc3ZnIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbn1cbi5pdGVtX2NvbnRhaW5lcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXktMzApO1xufVxuLml0ZW1fY29udGFpbmVyOmhvdmVyIC5pY29uX2J1dHRvbl9jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5LTMwKTtcbn1cbi5pdGVtX2NvbnRhaW5lciBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcbn0iXX0= */";
styleInject(css_248z$e);

var BasicItem = function (_a) {
  var id = _a.id,
    _b = _a.size,
    size = _b === void 0 ? 'lg' : _b,
    _c = _a.title,
    title = _c === void 0 ? '제목' : _c,
    _d = _a.disabled,
    disabled = _d === void 0 ? false : _d,
    _e = _a.onClick,
    onClick = _e === void 0 ? function () {} : _e;
  return /*#__PURE__*/React.createElement("div", {
    id: id,
    className: classnames('item_container', size || 'lg', disabled && 'disabled'),
    onClick: onClick
  }, /*#__PURE__*/React.createElement("label", null, title), /*#__PURE__*/React.createElement(IconButton, {
    type: 'Close',
    color: '#393939'
  }));
};

var css_248z$d = ".tab_group_container{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:flex;font-family:SF Pro Display,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Emoji,sans-serif;font-style:normal;gap:20px}.tab_group_container .tab_container{color:var(--grey-60);cursor:pointer;font-size:18px;font-weight:700}.tab_group_container .tab_container.selected{color:var(--primary-orange)}.tab_group_container .tab_container.selected:before{background-color:var(--primary-orange)}.tab_group_container .tab_container:before{content:\"\";display:inline-block;height:3px;margin-bottom:4px;width:100%}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRhYi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFCQUdFLGtDQUFtQyxDQUNuQyxpQ0FBa0MsQ0FDbEMsWUFBYSxDQUpiLDBOQUE2UCxDQUM3UCxpQkFBa0IsQ0FJbEIsUUFDRixDQUNBLG9DQUdFLG9CQUFxQixDQUNyQixjQUFlLENBRmYsY0FBZSxDQURmLGVBSUYsQ0FDQSw2Q0FDRSwyQkFDRixDQUNBLG9EQUNFLHNDQUNGLENBQ0EsMkNBQ0UsVUFBVyxDQUNYLG9CQUFxQixDQUVyQixVQUFXLENBQ1gsaUJBQWtCLENBRmxCLFVBR0YiLCJmaWxlIjoiVGFiLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFiX2dyb3VwX2NvbnRhaW5lciB7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBEaXNwbGF5XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgc3lzdGVtLXVpLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJTZWdvZSBVSVwiLCBcIkFwcGxlIFNEIEdvdGhpYyBOZW9cIiwgXCJOb3RvIFNhbnMgS1JcIiwgXCJNYWxndW4gR290aGljXCIsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gRW1vamlcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyMHB4O1xufVxuLnRhYl9ncm91cF9jb250YWluZXIgLnRhYl9jb250YWluZXIge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB2YXIoLS1ncmV5LTYwKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRhYl9ncm91cF9jb250YWluZXIgLnRhYl9jb250YWluZXIuc2VsZWN0ZWQge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1vcmFuZ2UpO1xufVxuLnRhYl9ncm91cF9jb250YWluZXIgLnRhYl9jb250YWluZXIuc2VsZWN0ZWQ6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktb3JhbmdlKTtcbn1cbi50YWJfZ3JvdXBfY29udGFpbmVyIC50YWJfY29udGFpbmVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDNweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufSJdfQ== */";
styleInject(css_248z$d);

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used for built-in method references. */
var objectProto$s = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$o = objectProto$s.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$3 = objectProto$s.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$o.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$3.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$r = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$2 = objectProto$r.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$2.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/** `Object#toString` result references. */
var symbolTag$3 = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag$3);
}

/** Used as references for various `Number` constants. */
var NAN$2 = 0 / 0;

/**
 * The base implementation of `_.toNumber` which doesn't ensure correct
 * conversions of binary, hexadecimal, or octal string values.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 */
function baseToNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN$2;
  }
  return +value;
}

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/** Used as references for various `Number` constants. */
var INFINITY$5 = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto$2 = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto$2 ? symbolProto$2.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$5) ? '-0' : result;
}

/**
 * Creates a function that performs a mathematical operation on two values.
 *
 * @private
 * @param {Function} operator The function to perform the operation.
 * @param {number} [defaultValue] The value used for `undefined` arguments.
 * @returns {Function} Returns the new mathematical operation function.
 */
function createMathOperation(operator, defaultValue) {
  return function(value, other) {
    var result;
    if (value === undefined && other === undefined) {
      return defaultValue;
    }
    if (value !== undefined) {
      result = value;
    }
    if (other !== undefined) {
      if (result === undefined) {
        return other;
      }
      if (typeof value == 'string' || typeof other == 'string') {
        value = baseToString(value);
        other = baseToString(other);
      } else {
        value = baseToNumber(value);
        other = baseToNumber(other);
      }
      result = operator(value, other);
    }
    return result;
  };
}

/**
 * Adds two numbers.
 *
 * @static
 * @memberOf _
 * @since 3.4.0
 * @category Math
 * @param {number} augend The first number in an addition.
 * @param {number} addend The second number in an addition.
 * @returns {number} Returns the total.
 * @example
 *
 * _.add(6, 4);
 * // => 10
 */
var add = createMathOperation(function(augend, addend) {
  return augend + addend;
}, 0);

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

/** Used to match leading whitespace. */
var reTrimStart$2 = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart$2, '')
    : string;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/** Used as references for various `Number` constants. */
var NAN$1 = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN$1;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN$1 : +value);
}

/** Used as references for various `Number` constants. */
var INFINITY$4 = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY$4 || value === -INFINITY$4) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/** Error message constants. */
var FUNC_ERROR_TEXT$b = 'Expected a function';

/**
 * The opposite of `_.before`; this method creates a function that invokes
 * `func` once it's called `n` or more times.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {number} n The number of calls before `func` is invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * var saves = ['profile', 'settings'];
 *
 * var done = _.after(saves.length, function() {
 *   console.log('done saving!');
 * });
 *
 * _.forEach(saves, function(type) {
 *   asyncSave({ 'type': type, 'complete': done });
 * });
 * // => Logs 'done saving!' after the two async saves have completed.
 */
function after(n, func) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$b);
  }
  n = toInteger(n);
  return function() {
    if (--n < 1) {
      return func.apply(this, arguments);
    }
  };
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag$2 = '[object Function]',
    genTag$1 = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/** Used for built-in method references. */
var funcProto$2 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$2 = funcProto$2.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar$1 = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
    objectProto$q = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$n = objectProto$q.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$n).replace(reRegExpChar$1, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

/** Used to store function metadata. */
var metaMap = WeakMap && new WeakMap;

/**
 * The base implementation of `setData` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var baseSetData = !metaMap ? identity : function(func, data) {
  metaMap.set(func, data);
  return func;
};

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */
function createCtor(Ctor) {
  return function() {
    // Use a `switch` statement to work with class constructors. See
    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;
    switch (args.length) {
      case 0: return new Ctor;
      case 1: return new Ctor(args[0]);
      case 2: return new Ctor(args[0], args[1]);
      case 3: return new Ctor(args[0], args[1], args[2]);
      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args);

    // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.
    return isObject(result) ? result : thisBinding;
  };
}

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG$8 = 1;

/**
 * Creates a function that wraps `func` to invoke it with the optional `this`
 * binding of `thisArg`.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createBind(func, bitmask, thisArg) {
  var isBind = bitmask & WRAP_BIND_FLAG$8,
      Ctor = createCtor(func);

  function wrapper() {
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$g = Math.max;

/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to prepend to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgs(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersLength = holders.length,
      leftIndex = -1,
      leftLength = partials.length,
      rangeLength = nativeMax$g(argsLength - holdersLength, 0),
      result = Array(leftLength + rangeLength),
      isUncurried = !isCurried;

  while (++leftIndex < leftLength) {
    result[leftIndex] = partials[leftIndex];
  }
  while (++argsIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[holders[argsIndex]] = args[argsIndex];
    }
  }
  while (rangeLength--) {
    result[leftIndex++] = args[argsIndex++];
  }
  return result;
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$f = Math.max;

/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `_.partialRight`.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to append to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgsRight(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersIndex = -1,
      holdersLength = holders.length,
      rightIndex = -1,
      rightLength = partials.length,
      rangeLength = nativeMax$f(argsLength - holdersLength, 0),
      result = Array(rangeLength + rightLength),
      isUncurried = !isCurried;

  while (++argsIndex < rangeLength) {
    result[argsIndex] = args[argsIndex];
  }
  var offset = argsIndex;
  while (++rightIndex < rightLength) {
    result[offset + rightIndex] = partials[rightIndex];
  }
  while (++holdersIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[offset + holders[holdersIndex]] = args[argsIndex++];
    }
  }
  return result;
}

/**
 * Gets the number of `placeholder` occurrences in `array`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} placeholder The placeholder to search for.
 * @returns {number} Returns the placeholder count.
 */
function countHolders(array, placeholder) {
  var length = array.length,
      result = 0;

  while (length--) {
    if (array[length] === placeholder) {
      ++result;
    }
  }
  return result;
}

/**
 * The function whose prototype chain sequence wrappers inherit from.
 *
 * @private
 */
function baseLodash() {
  // No operation performed.
}

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH$6 = 4294967295;

/**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @constructor
 * @param {*} value The value to wrap.
 */
function LazyWrapper(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH$6;
  this.__views__ = [];
}

// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype = baseCreate(baseLodash.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */
var getData = !metaMap ? noop : function(func) {
  return metaMap.get(func);
};

/** Used to lookup unminified function names. */
var realNames = {};

/** Used for built-in method references. */
var objectProto$p = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$m = objectProto$p.hasOwnProperty;

/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */
function getFuncName(func) {
  var result = (func.name + ''),
      array = realNames[result],
      length = hasOwnProperty$m.call(realNames, result) ? array.length : 0;

  while (length--) {
    var data = array[length],
        otherFunc = data.func;
    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }
  return result;
}

/**
 * The base constructor for creating `lodash` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable explicit method chain sequences.
 */
function LodashWrapper(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = undefined;
}

LodashWrapper.prototype = baseCreate(baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Creates a clone of `wrapper`.
 *
 * @private
 * @param {Object} wrapper The wrapper to clone.
 * @returns {Object} Returns the cloned wrapper.
 */
function wrapperClone(wrapper) {
  if (wrapper instanceof LazyWrapper) {
    return wrapper.clone();
  }
  var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
  result.__actions__ = copyArray(wrapper.__actions__);
  result.__index__  = wrapper.__index__;
  result.__values__ = wrapper.__values__;
  return result;
}

/** Used for built-in method references. */
var objectProto$o = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$l = objectProto$o.hasOwnProperty;

/**
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chain sequences. Methods that operate on and return arrays, collections,
 * and functions can be chained together. Methods that retrieve a single value
 * or may return a primitive value will automatically end the chain sequence
 * and return the unwrapped value. Otherwise, the value must be unwrapped
 * with `_#value`.
 *
 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
 * enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, it's deferred until
 * `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion.
 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
 * the creation of intermediate arrays and can greatly reduce the number of
 * iteratee executions. Sections of a chain sequence qualify for shortcut
 * fusion if the section is applied to an array and iteratees accept only
 * one argument. The heuristic for whether a section qualifies for shortcut
 * fusion is subject to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
 * `zipObject`, `zipObjectDeep`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
 * `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Seq
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // Returns an unwrapped value.
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // Returns a wrapped value.
 * var squares = wrapped.map(square);
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */
function lodash(value) {
  if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
    if (value instanceof LodashWrapper) {
      return value;
    }
    if (hasOwnProperty$l.call(value, '__wrapped__')) {
      return wrapperClone(value);
    }
  }
  return new LodashWrapper(value);
}

// Ensure wrappers are instances of `baseLodash`.
lodash.prototype = baseLodash.prototype;
lodash.prototype.constructor = lodash;

/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
 *  else `false`.
 */
function isLaziable(func) {
  var funcName = getFuncName(func),
      other = lodash[funcName];

  if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  var data = getData(other);
  return !!data && func === data[0];
}

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/**
 * Sets metadata for `func`.
 *
 * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
 * period of time, it will trip its breaker and transition to an identity
 * function to avoid garbage collection pauses in V8. See
 * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
 * for more details.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var setData = shortOut(baseSetData);

/** Used to match wrap detail comments. */
var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
    reSplitDetails = /,? & /;

/**
 * Extracts wrapper details from the `source` body comment.
 *
 * @private
 * @param {string} source The source to inspect.
 * @returns {Array} Returns the wrapper details.
 */
function getWrapDetails(source) {
  var match = source.match(reWrapDetails);
  return match ? match[1].split(reSplitDetails) : [];
}

/** Used to match wrap detail comments. */
var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;

/**
 * Inserts wrapper `details` in a comment at the top of the `source` body.
 *
 * @private
 * @param {string} source The source to modify.
 * @returns {Array} details The details to insert.
 * @returns {string} Returns the modified source.
 */
function insertWrapDetails(source, details) {
  var length = details.length;
  if (!length) {
    return source;
  }
  var lastIndex = length - 1;
  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
  details = details.join(length > 2 ? ', ' : ' ');
  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
}

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG$7 = 1,
    WRAP_BIND_KEY_FLAG$6 = 2,
    WRAP_CURRY_FLAG$6 = 8,
    WRAP_CURRY_RIGHT_FLAG$3 = 16,
    WRAP_PARTIAL_FLAG$6 = 32,
    WRAP_PARTIAL_RIGHT_FLAG$3 = 64,
    WRAP_ARY_FLAG$4 = 128,
    WRAP_REARG_FLAG$3 = 256,
    WRAP_FLIP_FLAG$2 = 512;

/** Used to associate wrap methods with their bit flags. */
var wrapFlags = [
  ['ary', WRAP_ARY_FLAG$4],
  ['bind', WRAP_BIND_FLAG$7],
  ['bindKey', WRAP_BIND_KEY_FLAG$6],
  ['curry', WRAP_CURRY_FLAG$6],
  ['curryRight', WRAP_CURRY_RIGHT_FLAG$3],
  ['flip', WRAP_FLIP_FLAG$2],
  ['partial', WRAP_PARTIAL_FLAG$6],
  ['partialRight', WRAP_PARTIAL_RIGHT_FLAG$3],
  ['rearg', WRAP_REARG_FLAG$3]
];

/**
 * Updates wrapper `details` based on `bitmask` flags.
 *
 * @private
 * @returns {Array} details The details to modify.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Array} Returns `details`.
 */
function updateWrapDetails(details, bitmask) {
  arrayEach(wrapFlags, function(pair) {
    var value = '_.' + pair[0];
    if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
      details.push(value);
    }
  });
  return details.sort();
}

/**
 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
 * with wrapper details in a comment at the top of the source body.
 *
 * @private
 * @param {Function} wrapper The function to modify.
 * @param {Function} reference The reference function.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Function} Returns `wrapper`.
 */
function setWrapToString(wrapper, reference, bitmask) {
  var source = (reference + '');
  return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
}

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG$6 = 1,
    WRAP_BIND_KEY_FLAG$5 = 2,
    WRAP_CURRY_BOUND_FLAG$1 = 4,
    WRAP_CURRY_FLAG$5 = 8,
    WRAP_PARTIAL_FLAG$5 = 32,
    WRAP_PARTIAL_RIGHT_FLAG$2 = 64;

/**
 * Creates a function that wraps `func` to continue currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {Function} wrapFunc The function to create the `func` wrapper.
 * @param {*} placeholder The placeholder value.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
  var isCurry = bitmask & WRAP_CURRY_FLAG$5,
      newHolders = isCurry ? holders : undefined,
      newHoldersRight = isCurry ? undefined : holders,
      newPartials = isCurry ? partials : undefined,
      newPartialsRight = isCurry ? undefined : partials;

  bitmask |= (isCurry ? WRAP_PARTIAL_FLAG$5 : WRAP_PARTIAL_RIGHT_FLAG$2);
  bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG$2 : WRAP_PARTIAL_FLAG$5);

  if (!(bitmask & WRAP_CURRY_BOUND_FLAG$1)) {
    bitmask &= ~(WRAP_BIND_FLAG$6 | WRAP_BIND_KEY_FLAG$5);
  }
  var newData = [
    func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
    newHoldersRight, argPos, ary, arity
  ];

  var result = wrapFunc.apply(undefined, newData);
  if (isLaziable(func)) {
    setData(result, newData);
  }
  result.placeholder = placeholder;
  return setWrapToString(result, func, bitmask);
}

/**
 * Gets the argument placeholder value for `func`.
 *
 * @private
 * @param {Function} func The function to inspect.
 * @returns {*} Returns the placeholder value.
 */
function getHolder(func) {
  var object = func;
  return object.placeholder;
}

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$5 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$5 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin$e = Math.min;

/**
 * Reorder `array` according to the specified indexes where the element at
 * the first index is assigned as the first element, the element at
 * the second index is assigned as the second element, and so on.
 *
 * @private
 * @param {Array} array The array to reorder.
 * @param {Array} indexes The arranged array indexes.
 * @returns {Array} Returns `array`.
 */
function reorder(array, indexes) {
  var arrLength = array.length,
      length = nativeMin$e(indexes.length, arrLength),
      oldArray = copyArray(array);

  while (length--) {
    var index = indexes[length];
    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
  }
  return array;
}

/** Used as the internal argument placeholder. */
var PLACEHOLDER$1 = '__lodash_placeholder__';

/**
 * Replaces all `placeholder` elements in `array` with an internal placeholder
 * and returns an array of their indexes.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {*} placeholder The placeholder to replace.
 * @returns {Array} Returns the new array of placeholder indexes.
 */
function replaceHolders(array, placeholder) {
  var index = -1,
      length = array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value === placeholder || value === PLACEHOLDER$1) {
      array[index] = PLACEHOLDER$1;
      result[resIndex++] = index;
    }
  }
  return result;
}

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG$5 = 1,
    WRAP_BIND_KEY_FLAG$4 = 2,
    WRAP_CURRY_FLAG$4 = 8,
    WRAP_CURRY_RIGHT_FLAG$2 = 16,
    WRAP_ARY_FLAG$3 = 128,
    WRAP_FLIP_FLAG$1 = 512;

/**
 * Creates a function that wraps `func` to invoke it with optional `this`
 * binding of `thisArg`, partial application, and currying.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [partialsRight] The arguments to append to those provided
 *  to the new function.
 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
  var isAry = bitmask & WRAP_ARY_FLAG$3,
      isBind = bitmask & WRAP_BIND_FLAG$5,
      isBindKey = bitmask & WRAP_BIND_KEY_FLAG$4,
      isCurried = bitmask & (WRAP_CURRY_FLAG$4 | WRAP_CURRY_RIGHT_FLAG$2),
      isFlip = bitmask & WRAP_FLIP_FLAG$1,
      Ctor = isBindKey ? undefined : createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length;

    while (index--) {
      args[index] = arguments[index];
    }
    if (isCurried) {
      var placeholder = getHolder(wrapper),
          holdersCount = countHolders(args, placeholder);
    }
    if (partials) {
      args = composeArgs(args, partials, holders, isCurried);
    }
    if (partialsRight) {
      args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
    }
    length -= holdersCount;
    if (isCurried && length < arity) {
      var newHolders = replaceHolders(args, placeholder);
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, thisArg,
        args, newHolders, argPos, ary, arity - length
      );
    }
    var thisBinding = isBind ? thisArg : this,
        fn = isBindKey ? thisBinding[func] : func;

    length = args.length;
    if (argPos) {
      args = reorder(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }
    if (isAry && ary < length) {
      args.length = ary;
    }
    if (this && this !== root && this instanceof wrapper) {
      fn = Ctor || createCtor(fn);
    }
    return fn.apply(thisBinding, args);
  }
  return wrapper;
}

/**
 * Creates a function that wraps `func` to enable currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {number} arity The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createCurry(func, bitmask, arity) {
  var Ctor = createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length,
        placeholder = getHolder(wrapper);

    while (index--) {
      args[index] = arguments[index];
    }
    var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
      ? []
      : replaceHolders(args, placeholder);

    length -= holders.length;
    if (length < arity) {
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, undefined,
        args, holders, undefined, undefined, arity - length);
    }
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return apply(fn, this, args);
  }
  return wrapper;
}

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG$4 = 1;

/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */
function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & WRAP_BIND_FLAG$4,
      Ctor = createCtor(func);

  function wrapper() {
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG$3 = 1,
    WRAP_BIND_KEY_FLAG$3 = 2,
    WRAP_CURRY_BOUND_FLAG = 4,
    WRAP_CURRY_FLAG$3 = 8,
    WRAP_ARY_FLAG$2 = 128,
    WRAP_REARG_FLAG$2 = 256;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin$d = Math.min;

/**
 * Merges the function metadata of `source` into `data`.
 *
 * Merging metadata reduces the number of wrappers used to invoke a function.
 * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
 * may be applied regardless of execution order. Methods like `_.ary` and
 * `_.rearg` modify function arguments, making the order in which they are
 * executed important, preventing the merging of metadata. However, we make
 * an exception for a safe combined case where curried functions have `_.ary`
 * and or `_.rearg` applied.
 *
 * @private
 * @param {Array} data The destination metadata.
 * @param {Array} source The source metadata.
 * @returns {Array} Returns `data`.
 */
function mergeData(data, source) {
  var bitmask = data[1],
      srcBitmask = source[1],
      newBitmask = bitmask | srcBitmask,
      isCommon = newBitmask < (WRAP_BIND_FLAG$3 | WRAP_BIND_KEY_FLAG$3 | WRAP_ARY_FLAG$2);

  var isCombo =
    ((srcBitmask == WRAP_ARY_FLAG$2) && (bitmask == WRAP_CURRY_FLAG$3)) ||
    ((srcBitmask == WRAP_ARY_FLAG$2) && (bitmask == WRAP_REARG_FLAG$2) && (data[7].length <= source[8])) ||
    ((srcBitmask == (WRAP_ARY_FLAG$2 | WRAP_REARG_FLAG$2)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG$3));

  // Exit early if metadata can't be merged.
  if (!(isCommon || isCombo)) {
    return data;
  }
  // Use source `thisArg` if available.
  if (srcBitmask & WRAP_BIND_FLAG$3) {
    data[2] = source[2];
    // Set when currying a bound function.
    newBitmask |= bitmask & WRAP_BIND_FLAG$3 ? 0 : WRAP_CURRY_BOUND_FLAG;
  }
  // Compose partial arguments.
  var value = source[3];
  if (value) {
    var partials = data[3];
    data[3] = partials ? composeArgs(partials, value, source[4]) : value;
    data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
  }
  // Compose partial right arguments.
  value = source[5];
  if (value) {
    partials = data[5];
    data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
    data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
  }
  // Use source `argPos` if available.
  value = source[7];
  if (value) {
    data[7] = value;
  }
  // Use source `ary` if it's smaller.
  if (srcBitmask & WRAP_ARY_FLAG$2) {
    data[8] = data[8] == null ? source[8] : nativeMin$d(data[8], source[8]);
  }
  // Use source `arity` if one is not provided.
  if (data[9] == null) {
    data[9] = source[9];
  }
  // Use source `func` and merge bitmasks.
  data[0] = source[0];
  data[1] = newBitmask;

  return data;
}

/** Error message constants. */
var FUNC_ERROR_TEXT$a = 'Expected a function';

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG$2 = 1,
    WRAP_BIND_KEY_FLAG$2 = 2,
    WRAP_CURRY_FLAG$2 = 8,
    WRAP_CURRY_RIGHT_FLAG$1 = 16,
    WRAP_PARTIAL_FLAG$4 = 32,
    WRAP_PARTIAL_RIGHT_FLAG$1 = 64;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$e = Math.max;

/**
 * Creates a function that either curries or invokes `func` with optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags.
 *    1 - `_.bind`
 *    2 - `_.bindKey`
 *    4 - `_.curry` or `_.curryRight` of a bound function
 *    8 - `_.curry`
 *   16 - `_.curryRight`
 *   32 - `_.partial`
 *   64 - `_.partialRight`
 *  128 - `_.rearg`
 *  256 - `_.ary`
 *  512 - `_.flip`
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to be partially applied.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
  var isBindKey = bitmask & WRAP_BIND_KEY_FLAG$2;
  if (!isBindKey && typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$a);
  }
  var length = partials ? partials.length : 0;
  if (!length) {
    bitmask &= ~(WRAP_PARTIAL_FLAG$4 | WRAP_PARTIAL_RIGHT_FLAG$1);
    partials = holders = undefined;
  }
  ary = ary === undefined ? ary : nativeMax$e(toInteger(ary), 0);
  arity = arity === undefined ? arity : toInteger(arity);
  length -= holders ? holders.length : 0;

  if (bitmask & WRAP_PARTIAL_RIGHT_FLAG$1) {
    var partialsRight = partials,
        holdersRight = holders;

    partials = holders = undefined;
  }
  var data = isBindKey ? undefined : getData(func);

  var newData = [
    func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
    argPos, ary, arity
  ];

  if (data) {
    mergeData(newData, data);
  }
  func = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] === undefined
    ? (isBindKey ? 0 : func.length)
    : nativeMax$e(newData[9] - length, 0);

  if (!arity && bitmask & (WRAP_CURRY_FLAG$2 | WRAP_CURRY_RIGHT_FLAG$1)) {
    bitmask &= ~(WRAP_CURRY_FLAG$2 | WRAP_CURRY_RIGHT_FLAG$1);
  }
  if (!bitmask || bitmask == WRAP_BIND_FLAG$2) {
    var result = createBind(func, bitmask, thisArg);
  } else if (bitmask == WRAP_CURRY_FLAG$2 || bitmask == WRAP_CURRY_RIGHT_FLAG$1) {
    result = createCurry(func, bitmask, arity);
  } else if ((bitmask == WRAP_PARTIAL_FLAG$4 || bitmask == (WRAP_BIND_FLAG$2 | WRAP_PARTIAL_FLAG$4)) && !holders.length) {
    result = createPartial(func, bitmask, thisArg, partials);
  } else {
    result = createHybrid.apply(undefined, newData);
  }
  var setter = data ? baseSetData : setData;
  return setWrapToString(setter(result, newData), func, bitmask);
}

/** Used to compose bitmasks for function metadata. */
var WRAP_ARY_FLAG$1 = 128;

/**
 * Creates a function that invokes `func`, with up to `n` arguments,
 * ignoring any additional arguments.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} func The function to cap arguments for.
 * @param {number} [n=func.length] The arity cap.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the new capped function.
 * @example
 *
 * _.map(['6', '8', '10'], _.ary(parseInt, 1));
 * // => [6, 8, 10]
 */
function ary(func, n, guard) {
  n = guard ? undefined : n;
  n = (func && n == null) ? func.length : n;
  return createWrap(func, WRAP_ARY_FLAG$1, undefined, undefined, undefined, undefined, n);
}

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/** Used for built-in method references. */
var objectProto$n = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$k = objectProto$n.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$k.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$d = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax$d(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax$d(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$4 = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$4;
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/** Used for built-in method references. */
var objectProto$m = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$m;

  return value === proto;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/** `Object#toString` result references. */
var argsTag$3 = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$3;
}

/** Used for built-in method references. */
var objectProto$l = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$j = objectProto$l.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$l.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$j.call(value, 'callee') &&
    !propertyIsEnumerable$1.call(value, 'callee');
};

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/** Detect free variable `exports`. */
var freeExports$2 = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule$2 = freeExports$2 && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;

/** Built-in value references. */
var Buffer$1 = moduleExports$2 ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]',
    arrayTag$2 = '[object Array]',
    boolTag$4 = '[object Boolean]',
    dateTag$4 = '[object Date]',
    errorTag$3 = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag$9 = '[object Map]',
    numberTag$4 = '[object Number]',
    objectTag$4 = '[object Object]',
    regexpTag$4 = '[object RegExp]',
    setTag$9 = '[object Set]',
    stringTag$4 = '[object String]',
    weakMapTag$3 = '[object WeakMap]';

var arrayBufferTag$4 = '[object ArrayBuffer]',
    dataViewTag$4 = '[object DataView]',
    float32Tag$2 = '[object Float32Array]',
    float64Tag$2 = '[object Float64Array]',
    int8Tag$2 = '[object Int8Array]',
    int16Tag$2 = '[object Int16Array]',
    int32Tag$2 = '[object Int32Array]',
    uint8Tag$2 = '[object Uint8Array]',
    uint8ClampedTag$2 = '[object Uint8ClampedArray]',
    uint16Tag$2 = '[object Uint16Array]',
    uint32Tag$2 = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] =
typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] =
typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] =
typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] =
typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] =
typedArrayTags[arrayBufferTag$4] = typedArrayTags[boolTag$4] =
typedArrayTags[dataViewTag$4] = typedArrayTags[dateTag$4] =
typedArrayTags[errorTag$3] = typedArrayTags[funcTag$1] =
typedArrayTags[mapTag$9] = typedArrayTags[numberTag$4] =
typedArrayTags[objectTag$4] = typedArrayTags[regexpTag$4] =
typedArrayTags[setTag$9] = typedArrayTags[stringTag$4] =
typedArrayTags[weakMapTag$3] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/** Detect free variable `exports`. */
var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports$1 && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule$1 && freeModule$1.require && freeModule$1.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/** Used for built-in method references. */
var objectProto$k = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$i = objectProto$k.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$i.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

/** Used for built-in method references. */
var objectProto$j = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$h = objectProto$j.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$h.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/** Used for built-in method references. */
var objectProto$i = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$g = objectProto$i.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty$g.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$h = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$f = objectProto$h.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$f.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * This method is like `_.assign` except that it iterates over own and
 * inherited source properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extend
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assign
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assignIn({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
 */
var assignIn = createAssigner(function(object, source) {
  copyObject(source, keysIn(source), object);
});

/**
 * This method is like `_.assignIn` except that it accepts `customizer`
 * which is invoked to produce the assigned values. If `customizer` returns
 * `undefined`, assignment is handled by the method instead. The `customizer`
 * is invoked with five arguments: (objValue, srcValue, key, object, source).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extendWith
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @see _.assignWith
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   return _.isUndefined(objValue) ? srcValue : objValue;
 * }
 *
 * var defaults = _.partialRight(_.assignInWith, customizer);
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
  copyObject(source, keysIn(source), object, customizer);
});

/**
 * This method is like `_.assign` except that it accepts `customizer`
 * which is invoked to produce the assigned values. If `customizer` returns
 * `undefined`, assignment is handled by the method instead. The `customizer`
 * is invoked with five arguments: (objValue, srcValue, key, object, source).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @see _.assignInWith
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   return _.isUndefined(objValue) ? srcValue : objValue;
 * }
 *
 * var defaults = _.partialRight(_.assignWith, customizer);
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
  copyObject(source, keys(source), object, customizer);
});

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$g = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$e = objectProto$g.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? undefined : result;
  }
  return hasOwnProperty$e.call(data, key) ? data[key] : undefined;
}

/** Used for built-in method references. */
var objectProto$f = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$d = objectProto$f.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty$d.call(data, key);
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/** Used for built-in method references. */
var arrayProto$5 = Array.prototype;

/** Built-in value references. */
var splice$2 = arrayProto$5.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice$2.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/** Error message constants. */
var FUNC_ERROR_TEXT$9 = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT$9);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

/** Used as references for various `Number` constants. */
var INFINITY$3 = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$3) ? '-0' : result;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/**
 * The base implementation of `_.at` without support for individual paths.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {string[]} paths The property paths to pick.
 * @returns {Array} Returns the picked elements.
 */
function baseAt(object, paths) {
  var index = -1,
      length = paths.length,
      result = Array(length),
      skip = object == null;

  while (++index < length) {
    result[index] = skip ? undefined : get(object, paths[index]);
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

/**
 * Creates an array of values corresponding to `paths` of `object`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Array} Returns the picked values.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
 *
 * _.at(object, ['a[0].b.c', 'a[1]']);
 * // => [3, 4]
 */
var at = flatRest(baseAt);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

/** `Object#toString` result references. */
var objectTag$3 = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto$e = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$c = objectProto$e.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag$3) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$c.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/** `Object#toString` result references. */
var domExcTag = '[object DOMException]',
    errorTag$2 = '[object Error]';

/**
 * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
 * `SyntaxError`, `TypeError`, or `URIError` object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
 * @example
 *
 * _.isError(new Error);
 * // => true
 *
 * _.isError(Error);
 * // => false
 */
function isError(value) {
  if (!isObjectLike(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == errorTag$2 || tag == domExcTag ||
    (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
}

/**
 * Attempts to invoke `func`, returning either the result or the caught error
 * object. Any additional arguments are provided to `func` when it's invoked.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Util
 * @param {Function} func The function to attempt.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {*} Returns the `func` result or error object.
 * @example
 *
 * // Avoid throwing errors for invalid selectors.
 * var elements = _.attempt(function(selector) {
 *   return document.querySelectorAll(selector);
 * }, '>_>');
 *
 * if (_.isError(elements)) {
 *   elements = [];
 * }
 */
var attempt = baseRest(function(func, args) {
  try {
    return apply(func, undefined, args);
  } catch (e) {
    return isError(e) ? e : new Error(e);
  }
});

/** Error message constants. */
var FUNC_ERROR_TEXT$8 = 'Expected a function';

/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {number} n The number of calls at which `func` is no longer invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * jQuery(element).on('click', _.before(5, addContactToList));
 * // => Allows adding up to 4 contacts to the list.
 */
function before(n, func) {
  var result;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$8);
  }
  n = toInteger(n);
  return function() {
    if (--n > 0) {
      result = func.apply(this, arguments);
    }
    if (n <= 1) {
      func = undefined;
    }
    return result;
  };
}

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG$1 = 1,
    WRAP_PARTIAL_FLAG$3 = 32;

/**
 * Creates a function that invokes `func` with the `this` binding of `thisArg`
 * and `partials` prepended to the arguments it receives.
 *
 * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for partially applied arguments.
 *
 * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
 * property of bound functions.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * function greet(greeting, punctuation) {
 *   return greeting + ' ' + this.user + punctuation;
 * }
 *
 * var object = { 'user': 'fred' };
 *
 * var bound = _.bind(greet, object, 'hi');
 * bound('!');
 * // => 'hi fred!'
 *
 * // Bound with placeholders.
 * var bound = _.bind(greet, object, _, '!');
 * bound('hi');
 * // => 'hi fred!'
 */
var bind = baseRest(function(func, thisArg, partials) {
  var bitmask = WRAP_BIND_FLAG$1;
  if (partials.length) {
    var holders = replaceHolders(partials, getHolder(bind));
    bitmask |= WRAP_PARTIAL_FLAG$3;
  }
  return createWrap(func, bitmask, thisArg, partials, holders);
});

// Assign default placeholders.
bind.placeholder = {};

/**
 * Binds methods of an object to the object itself, overwriting the existing
 * method.
 *
 * **Note:** This method doesn't set the "length" property of bound functions.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {Object} object The object to bind and assign the bound methods to.
 * @param {...(string|string[])} methodNames The object method names to bind.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var view = {
 *   'label': 'docs',
 *   'click': function() {
 *     console.log('clicked ' + this.label);
 *   }
 * };
 *
 * _.bindAll(view, ['click']);
 * jQuery(element).on('click', view.click);
 * // => Logs 'clicked docs' when clicked.
 */
var bindAll = flatRest(function(object, methodNames) {
  arrayEach(methodNames, function(key) {
    key = toKey(key);
    baseAssignValue(object, key, bind(object[key], object));
  });
  return object;
});

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG$1 = 2,
    WRAP_PARTIAL_FLAG$2 = 32;

/**
 * Creates a function that invokes the method at `object[key]` with `partials`
 * prepended to the arguments it receives.
 *
 * This method differs from `_.bind` by allowing bound functions to reference
 * methods that may be redefined or don't yet exist. See
 * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
 * for more details.
 *
 * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
 * builds, may be used as a placeholder for partially applied arguments.
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Function
 * @param {Object} object The object to invoke the method on.
 * @param {string} key The key of the method.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * var object = {
 *   'user': 'fred',
 *   'greet': function(greeting, punctuation) {
 *     return greeting + ' ' + this.user + punctuation;
 *   }
 * };
 *
 * var bound = _.bindKey(object, 'greet', 'hi');
 * bound('!');
 * // => 'hi fred!'
 *
 * object.greet = function(greeting, punctuation) {
 *   return greeting + 'ya ' + this.user + punctuation;
 * };
 *
 * bound('!');
 * // => 'hiya fred!'
 *
 * // Bound with placeholders.
 * var bound = _.bindKey(object, 'greet', _, '!');
 * bound('hi');
 * // => 'hiya fred!'
 */
var bindKey = baseRest(function(object, key, partials) {
  var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG$1;
  if (partials.length) {
    var holders = replaceHolders(partials, getHolder(bindKey));
    bitmask |= WRAP_PARTIAL_FLAG$2;
  }
  return createWrap(key, bitmask, object, partials, holders);
});

// Assign default placeholders.
bindKey.placeholder = {};

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

/** Used to compose unicode character classes. */
var rsAstralRange$3 = '\\ud800-\\udfff',
    rsComboMarksRange$4 = '\\u0300-\\u036f',
    reComboHalfMarksRange$4 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$4 = '\\u20d0-\\u20ff',
    rsComboRange$4 = rsComboMarksRange$4 + reComboHalfMarksRange$4 + rsComboSymbolsRange$4,
    rsVarRange$3 = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ$3 = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ$3 + rsAstralRange$3  + rsComboRange$4 + rsVarRange$3 + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

/** Used to compose unicode character classes. */
var rsAstralRange$2 = '\\ud800-\\udfff',
    rsComboMarksRange$3 = '\\u0300-\\u036f',
    reComboHalfMarksRange$3 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$3 = '\\u20d0-\\u20ff',
    rsComboRange$3 = rsComboMarksRange$3 + reComboHalfMarksRange$3 + rsComboSymbolsRange$3,
    rsVarRange$2 = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral$1 = '[' + rsAstralRange$2 + ']',
    rsCombo$3 = '[' + rsComboRange$3 + ']',
    rsFitz$2 = '\\ud83c[\\udffb-\\udfff]',
    rsModifier$2 = '(?:' + rsCombo$3 + '|' + rsFitz$2 + ')',
    rsNonAstral$2 = '[^' + rsAstralRange$2 + ']',
    rsRegional$2 = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair$2 = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ$2 = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod$2 = rsModifier$2 + '?',
    rsOptVar$2 = '[' + rsVarRange$2 + ']?',
    rsOptJoin$2 = '(?:' + rsZWJ$2 + '(?:' + [rsNonAstral$2, rsRegional$2, rsSurrPair$2].join('|') + ')' + rsOptVar$2 + reOptMod$2 + ')*',
    rsSeq$2 = rsOptVar$2 + reOptMod$2 + rsOptJoin$2,
    rsSymbol$1 = '(?:' + [rsNonAstral$2 + rsCombo$3 + '?', rsCombo$3, rsRegional$2, rsSurrPair$2, rsAstral$1].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode$1 = RegExp(rsFitz$2 + '(?=' + rsFitz$2 + ')|' + rsSymbol$1 + rsSeq$2, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode$1) || [];
}

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('FRED');
 * // => 'Fred'
 */
function capitalize(string) {
  return upperFirst(toString(string).toLowerCase());
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange$2 = '\\u0300-\\u036f',
    reComboHalfMarksRange$2 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$2 = '\\u20d0-\\u20ff',
    rsComboRange$2 = rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2;

/** Used to compose unicode capture groups. */
var rsCombo$2 = '[' + rsComboRange$2 + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo$2, 'g');

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

/** Used to compose unicode character classes. */
var rsAstralRange$1 = '\\ud800-\\udfff',
    rsComboMarksRange$1 = '\\u0300-\\u036f',
    reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
    rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1,
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange$1 = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos$1 = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo$1 = '[' + rsComboRange$1 + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange$1 + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz$1 = '\\ud83c[\\udffb-\\udfff]',
    rsModifier$1 = '(?:' + rsCombo$1 + '|' + rsFitz$1 + ')',
    rsNonAstral$1 = '[^' + rsAstralRange$1 + ']',
    rsRegional$1 = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair$1 = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ$1 = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos$1 + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos$1 + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod$1 = rsModifier$1 + '?',
    rsOptVar$1 = '[' + rsVarRange$1 + ']?',
    rsOptJoin$1 = '(?:' + rsZWJ$1 + '(?:' + [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsOptVar$1 + reOptMod$1 + ')*',
    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
    rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1,
    rsEmoji = '(?:' + [rsDingbat, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsSeq$1;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * _.camelCase('Foo Bar');
 * // => 'fooBar'
 *
 * _.camelCase('--foo-bar--');
 * // => 'fooBar'
 *
 * _.camelCase('__FOO_BAR__');
 * // => 'fooBar'
 */
var camelCase = createCompounder(function(result, word, index) {
  word = word.toLowerCase();
  return result + (index ? capitalize(word) : word);
});

/**
 * Casts `value` as an array if it's not one.
 *
 * @static
 * @memberOf _
 * @since 4.4.0
 * @category Lang
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast array.
 * @example
 *
 * _.castArray(1);
 * // => [1]
 *
 * _.castArray({ 'a': 1 });
 * // => [{ 'a': 1 }]
 *
 * _.castArray('abc');
 * // => ['abc']
 *
 * _.castArray(null);
 * // => [null]
 *
 * _.castArray(undefined);
 * // => [undefined]
 *
 * _.castArray();
 * // => []
 *
 * var array = [1, 2, 3];
 * console.log(_.castArray(array) === array);
 * // => true
 */
function castArray() {
  if (!arguments.length) {
    return [];
  }
  var value = arguments[0];
  return isArray(value) ? value : [value];
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsFinite$1 = root.isFinite,
    nativeMin$c = Math.min;

/**
 * Creates a function like `_.round`.
 *
 * @private
 * @param {string} methodName The name of the `Math` method to use when rounding.
 * @returns {Function} Returns the new round function.
 */
function createRound(methodName) {
  var func = Math[methodName];
  return function(number, precision) {
    number = toNumber(number);
    precision = precision == null ? 0 : nativeMin$c(toInteger(precision), 292);
    if (precision && nativeIsFinite$1(number)) {
      // Shift with exponential notation to avoid floating-point issues.
      // See [MDN](https://mdn.io/round#Examples) for more details.
      var pair = (toString(number) + 'e').split('e'),
          value = func(pair[0] + 'e' + (+pair[1] + precision));

      pair = (toString(value) + 'e').split('e');
      return +(pair[0] + 'e' + (+pair[1] - precision));
    }
    return func(number);
  };
}

/**
 * Computes `number` rounded up to `precision`.
 *
 * @static
 * @memberOf _
 * @since 3.10.0
 * @category Math
 * @param {number} number The number to round up.
 * @param {number} [precision=0] The precision to round up to.
 * @returns {number} Returns the rounded up number.
 * @example
 *
 * _.ceil(4.006);
 * // => 5
 *
 * _.ceil(6.004, 2);
 * // => 6.01
 *
 * _.ceil(6040, -2);
 * // => 6100
 */
var ceil = createRound('ceil');

/**
 * Creates a `lodash` wrapper instance that wraps `value` with explicit method
 * chain sequences enabled. The result of such sequences must be unwrapped
 * with `_#value`.
 *
 * @static
 * @memberOf _
 * @since 1.3.0
 * @category Seq
 * @param {*} value The value to wrap.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36 },
 *   { 'user': 'fred',    'age': 40 },
 *   { 'user': 'pebbles', 'age': 1 }
 * ];
 *
 * var youngest = _
 *   .chain(users)
 *   .sortBy('age')
 *   .map(function(o) {
 *     return o.user + ' is ' + o.age;
 *   })
 *   .head()
 *   .value();
 * // => 'pebbles is 1'
 */
function chain(value) {
  var result = lodash(value);
  result.__chain__ = true;
  return result;
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil$3 = Math.ceil,
    nativeMax$c = Math.max;

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * _.chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * _.chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size, guard) {
  if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
    size = 1;
  } else {
    size = nativeMax$c(toInteger(size), 0);
  }
  var length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  var index = 0,
      resIndex = 0,
      result = Array(nativeCeil$3(length / size));

  while (index < length) {
    result[resIndex++] = baseSlice(array, index, (index += size));
  }
  return result;
}

/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper;
    }
    if (lower !== undefined) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}

/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Number
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 * @example
 *
 * _.clamp(-10, -5, 5);
 * // => -5
 *
 * _.clamp(10, -5, 5);
 * // => 5
 */
function clamp(number, lower, upper) {
  if (upper === undefined) {
    upper = lower;
    lower = undefined;
  }
  if (upper !== undefined) {
    upper = toNumber(upper);
    upper = upper === upper ? upper : 0;
  }
  if (lower !== undefined) {
    lower = toNumber(lower);
    lower = lower === lower ? lower : 0;
  }
  return baseClamp(toNumber(number), lower, upper);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE$2 = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE$2 - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/** Used for built-in method references. */
var objectProto$d = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$d.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols$1 ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

/* Built-in method references that are verified to be native. */
var Promise$1 = getNative(root, 'Promise');

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

/** `Object#toString` result references. */
var mapTag$8 = '[object Map]',
    objectTag$2 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$8 = '[object Set]',
    weakMapTag$2 = '[object WeakMap]';

var dataViewTag$3 = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise$1),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag$3) ||
    (Map && getTag(new Map) != mapTag$8) ||
    (Promise$1 && getTag(Promise$1.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag$8) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag$2)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag$2 ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag$3;
        case mapCtorString: return mapTag$8;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag$8;
        case weakMapCtorString: return weakMapTag$2;
      }
    }
    return result;
  };
}

var getTag$1 = getTag;

/** Used for built-in method references. */
var objectProto$c = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$b = objectProto$c.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty$b.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags$1 = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags$1.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/** Used to convert symbols to primitives and strings. */
var symbolProto$1 = Symbol ? Symbol.prototype : undefined,
    symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/** `Object#toString` result references. */
var boolTag$3 = '[object Boolean]',
    dateTag$3 = '[object Date]',
    mapTag$7 = '[object Map]',
    numberTag$3 = '[object Number]',
    regexpTag$3 = '[object RegExp]',
    setTag$7 = '[object Set]',
    stringTag$3 = '[object String]',
    symbolTag$2 = '[object Symbol]';

var arrayBufferTag$3 = '[object ArrayBuffer]',
    dataViewTag$2 = '[object DataView]',
    float32Tag$1 = '[object Float32Array]',
    float64Tag$1 = '[object Float64Array]',
    int8Tag$1 = '[object Int8Array]',
    int16Tag$1 = '[object Int16Array]',
    int32Tag$1 = '[object Int32Array]',
    uint8Tag$1 = '[object Uint8Array]',
    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
    uint16Tag$1 = '[object Uint16Array]',
    uint32Tag$1 = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$3:
      return cloneArrayBuffer(object);

    case boolTag$3:
    case dateTag$3:
      return new Ctor(+object);

    case dataViewTag$2:
      return cloneDataView(object, isDeep);

    case float32Tag$1: case float64Tag$1:
    case int8Tag$1: case int16Tag$1: case int32Tag$1:
    case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
      return cloneTypedArray(object, isDeep);

    case mapTag$7:
      return new Ctor;

    case numberTag$3:
    case stringTag$3:
      return new Ctor(object);

    case regexpTag$3:
      return cloneRegExp(object);

    case setTag$7:
      return new Ctor;

    case symbolTag$2:
      return cloneSymbol(object);
  }
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/** `Object#toString` result references. */
var mapTag$6 = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag$1(value) == mapTag$6;
}

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

/** `Object#toString` result references. */
var setTag$6 = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag$1(value) == setTag$6;
}

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG$7 = 1,
    CLONE_FLAT_FLAG$1 = 2,
    CLONE_SYMBOLS_FLAG$5 = 4;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    boolTag$2 = '[object Boolean]',
    dateTag$2 = '[object Date]',
    errorTag$1 = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag$5 = '[object Map]',
    numberTag$2 = '[object Number]',
    objectTag$1 = '[object Object]',
    regexpTag$2 = '[object RegExp]',
    setTag$5 = '[object Set]',
    stringTag$2 = '[object String]',
    symbolTag$1 = '[object Symbol]',
    weakMapTag$1 = '[object WeakMap]';

var arrayBufferTag$2 = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag$1] = cloneableTags[arrayTag$1] =
cloneableTags[arrayBufferTag$2] = cloneableTags[dataViewTag$1] =
cloneableTags[boolTag$2] = cloneableTags[dateTag$2] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag$5] =
cloneableTags[numberTag$2] = cloneableTags[objectTag$1] =
cloneableTags[regexpTag$2] = cloneableTags[setTag$5] =
cloneableTags[stringTag$2] = cloneableTags[symbolTag$1] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag$1] = cloneableTags[funcTag] =
cloneableTags[weakMapTag$1] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG$7,
      isFlat = bitmask & CLONE_FLAT_FLAG$1,
      isFull = bitmask & CLONE_SYMBOLS_FLAG$5;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag$1(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag$1 || tag == argsTag$1 || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

/** Used to compose bitmasks for cloning. */
var CLONE_SYMBOLS_FLAG$4 = 4;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG$4);
}

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG$6 = 1,
    CLONE_SYMBOLS_FLAG$3 = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG$6 | CLONE_SYMBOLS_FLAG$3);
}

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG$5 = 1,
    CLONE_SYMBOLS_FLAG$2 = 4;

/**
 * This method is like `_.cloneWith` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @param {Function} [customizer] The function to customize cloning.
 * @returns {*} Returns the deep cloned value.
 * @see _.cloneWith
 * @example
 *
 * function customizer(value) {
 *   if (_.isElement(value)) {
 *     return value.cloneNode(true);
 *   }
 * }
 *
 * var el = _.cloneDeepWith(document.body, customizer);
 *
 * console.log(el === document.body);
 * // => false
 * console.log(el.nodeName);
 * // => 'BODY'
 * console.log(el.childNodes.length);
 * // => 20
 */
function cloneDeepWith(value, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined;
  return baseClone(value, CLONE_DEEP_FLAG$5 | CLONE_SYMBOLS_FLAG$2, customizer);
}

/** Used to compose bitmasks for cloning. */
var CLONE_SYMBOLS_FLAG$1 = 4;

/**
 * This method is like `_.clone` except that it accepts `customizer` which
 * is invoked to produce the cloned value. If `customizer` returns `undefined`,
 * cloning is handled by the method instead. The `customizer` is invoked with
 * up to four arguments; (value [, index|key, object, stack]).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to clone.
 * @param {Function} [customizer] The function to customize cloning.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeepWith
 * @example
 *
 * function customizer(value) {
 *   if (_.isElement(value)) {
 *     return value.cloneNode(false);
 *   }
 * }
 *
 * var el = _.cloneWith(document.body, customizer);
 *
 * console.log(el === document.body);
 * // => false
 * console.log(el.nodeName);
 * // => 'BODY'
 * console.log(el.childNodes.length);
 * // => 0
 */
function cloneWith(value, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined;
  return baseClone(value, CLONE_SYMBOLS_FLAG$1, customizer);
}

/**
 * Executes the chain sequence and returns the wrapped result.
 *
 * @name commit
 * @memberOf _
 * @since 3.2.0
 * @category Seq
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * var array = [1, 2];
 * var wrapped = _(array).push(3);
 *
 * console.log(array);
 * // => [1, 2]
 *
 * wrapped = wrapped.commit();
 * console.log(array);
 * // => [1, 2, 3]
 *
 * wrapped.last();
 * // => 3
 *
 * console.log(array);
 * // => [1, 2, 3]
 */
function wrapperCommit() {
  return new LodashWrapper(this.value(), this.__chain__);
}

/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.compact([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 */
function compact(array) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * Creates a new array concatenating `array` with any additional arrays
 * and/or values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to concatenate.
 * @param {...*} [values] The values to concatenate.
 * @returns {Array} Returns the new concatenated array.
 * @example
 *
 * var array = [1];
 * var other = _.concat(array, 2, [3], [[4]]);
 *
 * console.log(other);
 * // => [1, 2, 3, [4]]
 *
 * console.log(array);
 * // => [1]
 */
function concat() {
  var length = arguments.length;
  if (!length) {
    return [];
  }
  var args = Array(length - 1),
      array = arguments[0],
      index = length;

  while (index--) {
    args[index - 1] = arguments[index];
  }
  return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$5 = 1,
    COMPARE_UNORDERED_FLAG$3 = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG$3) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$4 = 1,
    COMPARE_UNORDERED_FLAG$2 = 2;

/** `Object#toString` result references. */
var boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    errorTag = '[object Error]',
    mapTag$4 = '[object Map]',
    numberTag$1 = '[object Number]',
    regexpTag$1 = '[object RegExp]',
    setTag$4 = '[object Set]',
    stringTag$1 = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag$1:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag$1:
    case dateTag$1:
    case numberTag$1:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag$1:
    case stringTag$1:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag$4:
      var convert = mapToArray;

    case setTag$4:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$3 = 1;

/** Used for built-in method references. */
var objectProto$b = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$a = objectProto$b.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$a.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$2 = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto$a = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$9 = objectProto$a.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag$1(object),
      othTag = othIsArr ? arrayTag : getTag$1(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty$9.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$9.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$1 = 1,
    COMPARE_UNORDERED_FLAG$1 = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

/** Error message constants. */
var FUNC_ERROR_TEXT$7 = 'Expected a function';

/**
 * Creates a function that iterates over `pairs` and invokes the corresponding
 * function of the first predicate to return truthy. The predicate-function
 * pairs are invoked with the `this` binding and arguments of the created
 * function.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Util
 * @param {Array} pairs The predicate-function pairs.
 * @returns {Function} Returns the new composite function.
 * @example
 *
 * var func = _.cond([
 *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
 *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
 *   [_.stubTrue,                      _.constant('no match')]
 * ]);
 *
 * func({ 'a': 1, 'b': 2 });
 * // => 'matches A'
 *
 * func({ 'a': 0, 'b': 1 });
 * // => 'matches B'
 *
 * func({ 'a': '1', 'b': '2' });
 * // => 'no match'
 */
function cond(pairs) {
  var length = pairs == null ? 0 : pairs.length,
      toIteratee = baseIteratee;

  pairs = !length ? [] : arrayMap(pairs, function(pair) {
    if (typeof pair[1] != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT$7);
    }
    return [toIteratee(pair[0]), pair[1]];
  });

  return baseRest(function(args) {
    var index = -1;
    while (++index < length) {
      var pair = pairs[index];
      if (apply(pair[0], this, args)) {
        return apply(pair[1], this, args);
      }
    }
  });
}

/**
 * The base implementation of `_.conformsTo` which accepts `props` to check.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property predicates to conform to.
 * @returns {boolean} Returns `true` if `object` conforms, else `false`.
 */
function baseConformsTo(object, source, props) {
  var length = props.length;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (length--) {
    var key = props[length],
        predicate = source[key],
        value = object[key];

    if ((value === undefined && !(key in object)) || !predicate(value)) {
      return false;
    }
  }
  return true;
}

/**
 * The base implementation of `_.conforms` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property predicates to conform to.
 * @returns {Function} Returns the new spec function.
 */
function baseConforms(source) {
  var props = keys(source);
  return function(object) {
    return baseConformsTo(object, source, props);
  };
}

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG$4 = 1;

/**
 * Creates a function that invokes the predicate properties of `source` with
 * the corresponding property values of a given object, returning `true` if
 * all predicates return truthy, else `false`.
 *
 * **Note:** The created function is equivalent to `_.conformsTo` with
 * `source` partially applied.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Util
 * @param {Object} source The object of property predicates to conform to.
 * @returns {Function} Returns the new spec function.
 * @example
 *
 * var objects = [
 *   { 'a': 2, 'b': 1 },
 *   { 'a': 1, 'b': 2 }
 * ];
 *
 * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
 * // => [{ 'a': 1, 'b': 2 }]
 */
function conforms(source) {
  return baseConforms(baseClone(source, CLONE_DEEP_FLAG$4));
}

/**
 * Checks if `object` conforms to `source` by invoking the predicate
 * properties of `source` with the corresponding property values of `object`.
 *
 * **Note:** This method is equivalent to `_.conforms` when `source` is
 * partially applied.
 *
 * @static
 * @memberOf _
 * @since 4.14.0
 * @category Lang
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property predicates to conform to.
 * @returns {boolean} Returns `true` if `object` conforms, else `false`.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 *
 * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
 * // => true
 *
 * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
 * // => false
 */
function conformsTo(object, source) {
  return source == null || baseConformsTo(object, source, keys(source));
}

/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

/**
 * Aggregates elements of `collection` on `accumulator` with keys transformed
 * by `iteratee` and values set by `setter`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function baseAggregator(collection, setter, iteratee, accumulator) {
  baseEach(collection, function(value, key, collection) {
    setter(accumulator, value, iteratee(value), collection);
  });
  return accumulator;
}

/**
 * Creates a function like `_.groupBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} [initializer] The accumulator object initializer.
 * @returns {Function} Returns the new aggregator function.
 */
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = isArray(collection) ? arrayAggregator : baseAggregator,
        accumulator = initializer ? initializer() : {};

    return func(collection, setter, baseIteratee(iteratee), accumulator);
  };
}

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$9.hasOwnProperty;

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The corresponding value of
 * each key is the number of times the key was returned by `iteratee`. The
 * iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * _.countBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': 1, '6': 2 }
 *
 * // The `_.property` iteratee shorthand.
 * _.countBy(['one', 'two', 'three'], 'length');
 * // => { '3': 2, '5': 1 }
 */
var countBy = createAggregator(function(result, value, key) {
  if (hasOwnProperty$8.call(result, key)) {
    ++result[key];
  } else {
    baseAssignValue(result, key, 1);
  }
});

/**
 * Creates an object that inherits from the `prototype` object. If a
 * `properties` object is given, its own enumerable string keyed properties
 * are assigned to the created object.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Object
 * @param {Object} prototype The object to inherit from.
 * @param {Object} [properties] The properties to assign to the object.
 * @returns {Object} Returns the new object.
 * @example
 *
 * function Shape() {
 *   this.x = 0;
 *   this.y = 0;
 * }
 *
 * function Circle() {
 *   Shape.call(this);
 * }
 *
 * Circle.prototype = _.create(Shape.prototype, {
 *   'constructor': Circle
 * });
 *
 * var circle = new Circle;
 * circle instanceof Circle;
 * // => true
 *
 * circle instanceof Shape;
 * // => true
 */
function create(prototype, properties) {
  var result = baseCreate(prototype);
  return properties == null ? result : baseAssign(result, properties);
}

/** Used to compose bitmasks for function metadata. */
var WRAP_CURRY_FLAG$1 = 8;

/**
 * Creates a function that accepts arguments of `func` and either invokes
 * `func` returning its result, if at least `arity` number of arguments have
 * been provided, or returns a function that accepts the remaining `func`
 * arguments, and so on. The arity of `func` may be specified if `func.length`
 * is not sufficient.
 *
 * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for provided arguments.
 *
 * **Note:** This method doesn't set the "length" property of curried functions.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Function
 * @param {Function} func The function to curry.
 * @param {number} [arity=func.length] The arity of `func`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the new curried function.
 * @example
 *
 * var abc = function(a, b, c) {
 *   return [a, b, c];
 * };
 *
 * var curried = _.curry(abc);
 *
 * curried(1)(2)(3);
 * // => [1, 2, 3]
 *
 * curried(1, 2)(3);
 * // => [1, 2, 3]
 *
 * curried(1, 2, 3);
 * // => [1, 2, 3]
 *
 * // Curried with placeholders.
 * curried(1)(_, 3)(2);
 * // => [1, 2, 3]
 */
function curry(func, arity, guard) {
  arity = guard ? undefined : arity;
  var result = createWrap(func, WRAP_CURRY_FLAG$1, undefined, undefined, undefined, undefined, undefined, arity);
  result.placeholder = curry.placeholder;
  return result;
}

// Assign default placeholders.
curry.placeholder = {};

/** Used to compose bitmasks for function metadata. */
var WRAP_CURRY_RIGHT_FLAG = 16;

/**
 * This method is like `_.curry` except that arguments are applied to `func`
 * in the manner of `_.partialRight` instead of `_.partial`.
 *
 * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
 * builds, may be used as a placeholder for provided arguments.
 *
 * **Note:** This method doesn't set the "length" property of curried functions.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} func The function to curry.
 * @param {number} [arity=func.length] The arity of `func`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the new curried function.
 * @example
 *
 * var abc = function(a, b, c) {
 *   return [a, b, c];
 * };
 *
 * var curried = _.curryRight(abc);
 *
 * curried(3)(2)(1);
 * // => [1, 2, 3]
 *
 * curried(2, 3)(1);
 * // => [1, 2, 3]
 *
 * curried(1, 2, 3);
 * // => [1, 2, 3]
 *
 * // Curried with placeholders.
 * curried(3)(1, _)(2);
 * // => [1, 2, 3]
 */
function curryRight(func, arity, guard) {
  arity = guard ? undefined : arity;
  var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
  result.placeholder = curryRight.placeholder;
  return result;
}

// Assign default placeholders.
curryRight.placeholder = {};

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/** Error message constants. */
var FUNC_ERROR_TEXT$6 = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$b = Math.max,
    nativeMin$b = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$6);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax$b(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin$b(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks `value` to determine whether a default value should be returned in
 * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
 * or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.14.0
 * @category Util
 * @param {*} value The value to check.
 * @param {*} defaultValue The default value.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * _.defaultTo(1, 10);
 * // => 1
 *
 * _.defaultTo(undefined, 10);
 * // => 10
 */
function defaultTo(value, defaultValue) {
  return (value == null || value !== value) ? defaultValue : value;
}

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function(object, sources) {
  object = Object(object);

  var index = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : undefined;

  if (guard && isIterateeCall(sources[0], sources[1], guard)) {
    length = 1;
  }

  while (++index < length) {
    var source = sources[index];
    var props = keysIn(source);
    var propsIndex = -1;
    var propsLength = props.length;

    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];

      if (value === undefined ||
          (eq(value, objectProto$8[key]) && !hasOwnProperty$7.call(object, key))) {
        object[key] = source[key];
      }
    }
  }

  return object;
});

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

/**
 * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
 * objects into destination objects that are passed thru.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to merge.
 * @param {Object} object The parent object of `objValue`.
 * @param {Object} source The parent object of `srcValue`.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 * @returns {*} Returns the value to assign.
 */
function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
  if (isObject(objValue) && isObject(srcValue)) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, objValue);
    baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
    stack['delete'](srcValue);
  }
  return objValue;
}

/**
 * This method is like `_.merge` except that it accepts `customizer` which
 * is invoked to produce the merged values of the destination and source
 * properties. If `customizer` returns `undefined`, merging is handled by the
 * method instead. The `customizer` is invoked with six arguments:
 * (objValue, srcValue, key, object, source, stack).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   if (_.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 *
 * var object = { 'a': [1], 'b': [2] };
 * var other = { 'a': [3], 'b': [4] };
 *
 * _.mergeWith(object, other, customizer);
 * // => { 'a': [1, 3], 'b': [2, 4] }
 */
var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
  baseMerge(object, source, srcIndex, customizer);
});

/**
 * This method is like `_.defaults` except that it recursively assigns
 * default properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaults
 * @example
 *
 * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
 * // => { 'a': { 'b': 2, 'c': 3 } }
 */
var defaultsDeep = baseRest(function(args) {
  args.push(undefined, customDefaultsMerge);
  return apply(mergeWith, undefined, args);
});

/** Error message constants. */
var FUNC_ERROR_TEXT$5 = 'Expected a function';

/**
 * The base implementation of `_.delay` and `_.defer` which accepts `args`
 * to provide to `func`.
 *
 * @private
 * @param {Function} func The function to delay.
 * @param {number} wait The number of milliseconds to delay invocation.
 * @param {Array} args The arguments to provide to `func`.
 * @returns {number|Object} Returns the timer id or timeout object.
 */
function baseDelay(func, wait, args) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$5);
  }
  return setTimeout(function() { func.apply(undefined, args); }, wait);
}

/**
 * Defers invoking the `func` until the current call stack has cleared. Any
 * additional arguments are provided to `func` when it's invoked.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to defer.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {number} Returns the timer id.
 * @example
 *
 * _.defer(function(text) {
 *   console.log(text);
 * }, 'deferred');
 * // => Logs 'deferred' after one millisecond.
 */
var defer = baseRest(function(func, args) {
  return baseDelay(func, 1, args);
});

/**
 * Invokes `func` after `wait` milliseconds. Any additional arguments are
 * provided to `func` when it's invoked.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to delay.
 * @param {number} wait The number of milliseconds to delay invocation.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {number} Returns the timer id.
 * @example
 *
 * _.delay(function(text) {
 *   console.log(text);
 * }, 1000, 'later');
 * // => Logs 'later' after one second.
 */
var delay = baseRest(function(func, wait, args) {
  return baseDelay(func, toNumber(wait) || 0, args);
});

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE$1 = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE$1) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : [];
});

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

/**
 * This method is like `_.difference` except that it accepts `iteratee` which
 * is invoked for each element of `array` and `values` to generate the criterion
 * by which they're compared. The order and references of result values are
 * determined by the first array. The iteratee is invoked with one argument:
 * (value).
 *
 * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
 * // => [1.2]
 *
 * // The `_.property` iteratee shorthand.
 * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
 * // => [{ 'x': 2 }]
 */
var differenceBy = baseRest(function(array, values) {
  var iteratee = last(values);
  if (isArrayLikeObject(iteratee)) {
    iteratee = undefined;
  }
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), baseIteratee(iteratee))
    : [];
});

/**
 * This method is like `_.difference` except that it accepts `comparator`
 * which is invoked to compare elements of `array` to `values`. The order and
 * references of result values are determined by the first array. The comparator
 * is invoked with two arguments: (arrVal, othVal).
 *
 * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 *
 * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
 * // => [{ 'x': 2, 'y': 1 }]
 */
var differenceWith = baseRest(function(array, values) {
  var comparator = last(values);
  if (isArrayLikeObject(comparator)) {
    comparator = undefined;
  }
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
    : [];
});

/**
 * Divide two numbers.
 *
 * @static
 * @memberOf _
 * @since 4.7.0
 * @category Math
 * @param {number} dividend The first number in a division.
 * @param {number} divisor The second number in a division.
 * @returns {number} Returns the quotient.
 * @example
 *
 * _.divide(6, 4);
 * // => 1.5
 */
var divide = createMathOperation(function(dividend, divisor) {
  return dividend / divisor;
}, 1);

/**
 * Creates a slice of `array` with `n` elements dropped from the beginning.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.drop([1, 2, 3]);
 * // => [2, 3]
 *
 * _.drop([1, 2, 3], 2);
 * // => [3]
 *
 * _.drop([1, 2, 3], 5);
 * // => []
 *
 * _.drop([1, 2, 3], 0);
 * // => [1, 2, 3]
 */
function drop(array, n, guard) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  n = (guard || n === undefined) ? 1 : toInteger(n);
  return baseSlice(array, n < 0 ? 0 : n, length);
}

/**
 * Creates a slice of `array` with `n` elements dropped from the end.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.dropRight([1, 2, 3]);
 * // => [1, 2]
 *
 * _.dropRight([1, 2, 3], 2);
 * // => [1]
 *
 * _.dropRight([1, 2, 3], 5);
 * // => []
 *
 * _.dropRight([1, 2, 3], 0);
 * // => [1, 2, 3]
 */
function dropRight(array, n, guard) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  n = (guard || n === undefined) ? 1 : toInteger(n);
  n = length - n;
  return baseSlice(array, 0, n < 0 ? 0 : n);
}

/**
 * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
 * without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to query.
 * @param {Function} predicate The function invoked per iteration.
 * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the slice of `array`.
 */
function baseWhile(array, predicate, isDrop, fromRight) {
  var length = array.length,
      index = fromRight ? length : -1;

  while ((fromRight ? index-- : ++index < length) &&
    predicate(array[index], index, array)) {}

  return isDrop
    ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
    : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
}

/**
 * Creates a slice of `array` excluding elements dropped from the end.
 * Elements are dropped until `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index, array).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': false }
 * ];
 *
 * _.dropRightWhile(users, function(o) { return !o.active; });
 * // => objects for ['barney']
 *
 * // The `_.matches` iteratee shorthand.
 * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
 * // => objects for ['barney', 'fred']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.dropRightWhile(users, ['active', false]);
 * // => objects for ['barney']
 *
 * // The `_.property` iteratee shorthand.
 * _.dropRightWhile(users, 'active');
 * // => objects for ['barney', 'fred', 'pebbles']
 */
function dropRightWhile(array, predicate) {
  return (array && array.length)
    ? baseWhile(array, baseIteratee(predicate), true, true)
    : [];
}

/**
 * Creates a slice of `array` excluding elements dropped from the beginning.
 * Elements are dropped until `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index, array).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.dropWhile(users, function(o) { return !o.active; });
 * // => objects for ['pebbles']
 *
 * // The `_.matches` iteratee shorthand.
 * _.dropWhile(users, { 'user': 'barney', 'active': false });
 * // => objects for ['fred', 'pebbles']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.dropWhile(users, ['active', false]);
 * // => objects for ['pebbles']
 *
 * // The `_.property` iteratee shorthand.
 * _.dropWhile(users, 'active');
 * // => objects for ['barney', 'fred', 'pebbles']
 */
function dropWhile(array, predicate) {
  return (array && array.length)
    ? baseWhile(array, baseIteratee(predicate), true)
    : [];
}

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

/**
 * A specialized version of `_.forEachRight` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEachRight(array, iteratee) {
  var length = array == null ? 0 : array.length;

  while (length--) {
    if (iteratee(array[length], length, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * This function is like `baseFor` except that it iterates over properties
 * in the opposite order.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseForRight = createBaseFor(true);

/**
 * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwnRight(object, iteratee) {
  return object && baseForRight(object, iteratee, keys);
}

/**
 * The base implementation of `_.forEachRight` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEachRight = createBaseEach(baseForOwnRight, true);

/**
 * This method is like `_.forEach` except that it iterates over elements of
 * `collection` from right to left.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @alias eachRight
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEach
 * @example
 *
 * _.forEachRight([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `2` then `1`.
 */
function forEachRight(collection, iteratee) {
  var func = isArray(collection) ? arrayEachRight : baseEachRight;
  return func(collection, castFunction(iteratee));
}

/**
 * Checks if `string` ends with the given target string.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {string} [target] The string to search for.
 * @param {number} [position=string.length] The position to search up to.
 * @returns {boolean} Returns `true` if `string` ends with `target`,
 *  else `false`.
 * @example
 *
 * _.endsWith('abc', 'c');
 * // => true
 *
 * _.endsWith('abc', 'b');
 * // => false
 *
 * _.endsWith('abc', 'b', 2);
 * // => true
 */
function endsWith(string, target, position) {
  string = toString(string);
  target = baseToString(target);

  var length = string.length;
  position = position === undefined
    ? length
    : baseClamp(toInteger(position), 0, length);

  var end = position;
  position -= target.length;
  return position >= 0 && string.slice(position, end) == target;
}

/**
 * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
 * of key-value pairs for `object` corresponding to the property names of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the key-value pairs.
 */
function baseToPairs(object, props) {
  return arrayMap(props, function(key) {
    return [key, object[key]];
  });
}

/**
 * Converts `set` to its value-value pairs.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the value-value pairs.
 */
function setToPairs(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = [value, value];
  });
  return result;
}

/** `Object#toString` result references. */
var mapTag$3 = '[object Map]',
    setTag$3 = '[object Set]';

/**
 * Creates a `_.toPairs` or `_.toPairsIn` function.
 *
 * @private
 * @param {Function} keysFunc The function to get the keys of a given object.
 * @returns {Function} Returns the new pairs function.
 */
function createToPairs(keysFunc) {
  return function(object) {
    var tag = getTag$1(object);
    if (tag == mapTag$3) {
      return mapToArray(object);
    }
    if (tag == setTag$3) {
      return setToPairs(object);
    }
    return baseToPairs(object, keysFunc(object));
  };
}

/**
 * Creates an array of own enumerable string keyed-value pairs for `object`
 * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
 * entries are returned.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias entries
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the key-value pairs.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.toPairs(new Foo);
 * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
 */
var toPairs = createToPairs(keys);

/**
 * Creates an array of own and inherited enumerable string keyed-value pairs
 * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
 * or set, its entries are returned.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias entriesIn
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the key-value pairs.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.toPairsIn(new Foo);
 * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
 */
var toPairsIn = createToPairs(keysIn);

/** Used to map characters to HTML entities. */
var htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

/**
 * Used by `_.escape` to convert characters to HTML entities.
 *
 * @private
 * @param {string} chr The matched character to escape.
 * @returns {string} Returns the escaped character.
 */
var escapeHtmlChar = basePropertyOf(htmlEscapes);

/** Used to match HTML entities and HTML characters. */
var reUnescapedHtml = /[&<>"']/g,
    reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

/**
 * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
 * corresponding HTML entities.
 *
 * **Note:** No other characters are escaped. To escape additional
 * characters use a third-party library like [_he_](https://mths.be/he).
 *
 * Though the ">" character is escaped for symmetry, characters like
 * ">" and "/" don't need escaping in HTML and have no special meaning
 * unless they're part of a tag or unquoted attribute value. See
 * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
 * (under "semi-related fun fact") for more details.
 *
 * When working with HTML you should always
 * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
 * XSS vectors.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escape('fred, barney, & pebbles');
 * // => 'fred, barney, &amp; pebbles'
 */
function escape(string) {
  string = toString(string);
  return (string && reHasUnescapedHtml.test(string))
    ? string.replace(reUnescapedHtml, escapeHtmlChar)
    : string;
}

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
    reHasRegExpChar = RegExp(reRegExpChar.source);

/**
 * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
 * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escapeRegExp('[lodash](https://lodash.com/)');
 * // => '\[lodash\]\(https://lodash\.com/\)'
 */
function escapeRegExp(string) {
  string = toString(string);
  return (string && reHasRegExpChar.test(string))
    ? string.replace(reRegExpChar, '\\$&')
    : string;
}

/**
 * A specialized version of `_.every` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 */
function arrayEvery(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (!predicate(array[index], index, array)) {
      return false;
    }
  }
  return true;
}

/**
 * The base implementation of `_.every` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`
 */
function baseEvery(collection, predicate) {
  var result = true;
  baseEach(collection, function(value, index, collection) {
    result = !!predicate(value, index, collection);
    return result;
  });
  return result;
}

/**
 * Checks if `predicate` returns truthy for **all** elements of `collection`.
 * Iteration is stopped once `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * **Note:** This method returns `true` for
 * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
 * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
 * elements of empty collections.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 * @example
 *
 * _.every([true, 1, null, 'yes'], Boolean);
 * // => false
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': false },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.every(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.every(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.every(users, 'active');
 * // => false
 */
function every(collection, predicate, guard) {
  var func = isArray(collection) ? arrayEvery : baseEvery;
  if (guard && isIterateeCall(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, baseIteratee(predicate));
}

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH$5 = 4294967295;

/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object.
 *
 * **Note:** This method is based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toLength(3.2);
 * // => 3
 *
 * _.toLength(Number.MIN_VALUE);
 * // => 0
 *
 * _.toLength(Infinity);
 * // => 4294967295
 *
 * _.toLength('3.2');
 * // => 3
 */
function toLength(value) {
  return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH$5) : 0;
}

/**
 * The base implementation of `_.fill` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to fill.
 * @param {*} value The value to fill `array` with.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns `array`.
 */
function baseFill(array, value, start, end) {
  var length = array.length;

  start = toInteger(start);
  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = (end === undefined || end > length) ? length : toInteger(end);
  if (end < 0) {
    end += length;
  }
  end = start > end ? 0 : toLength(end);
  while (start < end) {
    array[start++] = value;
  }
  return array;
}

/**
 * Fills elements of `array` with `value` from `start` up to, but not
 * including, `end`.
 *
 * **Note:** This method mutates `array`.
 *
 * @static
 * @memberOf _
 * @since 3.2.0
 * @category Array
 * @param {Array} array The array to fill.
 * @param {*} value The value to fill `array` with.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns `array`.
 * @example
 *
 * var array = [1, 2, 3];
 *
 * _.fill(array, 'a');
 * console.log(array);
 * // => ['a', 'a', 'a']
 *
 * _.fill(Array(3), 2);
 * // => [2, 2, 2]
 *
 * _.fill([4, 6, 8, 10], '*', 1, 3);
 * // => [4, '*', '*', 10]
 */
function fill(array, value, start, end) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
    start = 0;
    end = length;
  }
  return baseFill(array, value, start, end);
}

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 *
 * // Combining several predicates using `_.overEvery` or `_.overSome`.
 * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
 * // => objects for ['fred', 'barney']
 */
function filter(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee(predicate));
}

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$a = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax$a(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate), index);
}

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

/**
 * The base implementation of methods like `_.findKey` and `_.findLastKey`,
 * without support for iteratee shorthands, which iterates over `collection`
 * using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the found element or its key, else `undefined`.
 */
function baseFindKey(collection, predicate, eachFunc) {
  var result;
  eachFunc(collection, function(value, key, collection) {
    if (predicate(value, key, collection)) {
      result = key;
      return false;
    }
  });
  return result;
}

/**
 * This method is like `_.find` except that it returns the key of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Object
 * @param {Object} object The object to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {string|undefined} Returns the key of the matched element,
 *  else `undefined`.
 * @example
 *
 * var users = {
 *   'barney':  { 'age': 36, 'active': true },
 *   'fred':    { 'age': 40, 'active': false },
 *   'pebbles': { 'age': 1,  'active': true }
 * };
 *
 * _.findKey(users, function(o) { return o.age < 40; });
 * // => 'barney' (iteration order is not guaranteed)
 *
 * // The `_.matches` iteratee shorthand.
 * _.findKey(users, { 'age': 1, 'active': true });
 * // => 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findKey(users, ['active', false]);
 * // => 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.findKey(users, 'active');
 * // => 'barney'
 */
function findKey(object, predicate) {
  return baseFindKey(object, baseIteratee(predicate), baseForOwn);
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$9 = Math.max,
    nativeMin$a = Math.min;

/**
 * This method is like `_.findIndex` except that it iterates over elements
 * of `collection` from right to left.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=array.length-1] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': false }
 * ];
 *
 * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
 * // => 2
 *
 * // The `_.matches` iteratee shorthand.
 * _.findLastIndex(users, { 'user': 'barney', 'active': true });
 * // => 0
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findLastIndex(users, ['active', false]);
 * // => 2
 *
 * // The `_.property` iteratee shorthand.
 * _.findLastIndex(users, 'active');
 * // => 0
 */
function findLastIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = length - 1;
  if (fromIndex !== undefined) {
    index = toInteger(fromIndex);
    index = fromIndex < 0
      ? nativeMax$9(length + index, 0)
      : nativeMin$a(index, length - 1);
  }
  return baseFindIndex(array, baseIteratee(predicate), index, true);
}

/**
 * This method is like `_.find` except that it iterates over elements of
 * `collection` from right to left.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=collection.length-1] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * _.findLast([1, 2, 3, 4], function(n) {
 *   return n % 2 == 1;
 * });
 * // => 3
 */
var findLast = createFind(findLastIndex);

/**
 * This method is like `_.findKey` except that it iterates over elements of
 * a collection in the opposite order.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Object
 * @param {Object} object The object to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {string|undefined} Returns the key of the matched element,
 *  else `undefined`.
 * @example
 *
 * var users = {
 *   'barney':  { 'age': 36, 'active': true },
 *   'fred':    { 'age': 40, 'active': false },
 *   'pebbles': { 'age': 1,  'active': true }
 * };
 *
 * _.findLastKey(users, function(o) { return o.age < 40; });
 * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.findLastKey(users, { 'age': 36, 'active': true });
 * // => 'barney'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findLastKey(users, ['active', false]);
 * // => 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.findLastKey(users, 'active');
 * // => 'pebbles'
 */
function findLastKey(object, predicate) {
  return baseFindKey(object, baseIteratee(predicate), baseForOwnRight);
}

/**
 * Gets the first element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias first
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @example
 *
 * _.head([1, 2, 3]);
 * // => 1
 *
 * _.head([]);
 * // => undefined
 */
function head(array) {
  return (array && array.length) ? array[0] : undefined;
}

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee));
}

/**
 * Creates a flattened array of values by running each element in `collection`
 * thru `iteratee` and flattening the mapped results. The iteratee is invoked
 * with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * function duplicate(n) {
 *   return [n, n];
 * }
 *
 * _.flatMap([1, 2], duplicate);
 * // => [1, 1, 2, 2]
 */
function flatMap(collection, iteratee) {
  return baseFlatten(map(collection, iteratee), 1);
}

/** Used as references for various `Number` constants. */
var INFINITY$2 = 1 / 0;

/**
 * This method is like `_.flatMap` except that it recursively flattens the
 * mapped results.
 *
 * @static
 * @memberOf _
 * @since 4.7.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * function duplicate(n) {
 *   return [[[n, n]]];
 * }
 *
 * _.flatMapDeep([1, 2], duplicate);
 * // => [1, 1, 2, 2]
 */
function flatMapDeep(collection, iteratee) {
  return baseFlatten(map(collection, iteratee), INFINITY$2);
}

/**
 * This method is like `_.flatMap` except that it recursively flattens the
 * mapped results up to `depth` times.
 *
 * @static
 * @memberOf _
 * @since 4.7.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {number} [depth=1] The maximum recursion depth.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * function duplicate(n) {
 *   return [[[n, n]]];
 * }
 *
 * _.flatMapDepth([1, 2], duplicate, 2);
 * // => [[1, 1], [2, 2]]
 */
function flatMapDepth(collection, iteratee, depth) {
  depth = depth === undefined ? 1 : toInteger(depth);
  return baseFlatten(map(collection, iteratee), depth);
}

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/**
 * Recursively flattens `array`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flattenDeep([1, [2, [3, [4]], 5]]);
 * // => [1, 2, 3, 4, 5]
 */
function flattenDeep(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, INFINITY$1) : [];
}

/**
 * Recursively flatten `array` up to `depth` times.
 *
 * @static
 * @memberOf _
 * @since 4.4.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @param {number} [depth=1] The maximum recursion depth.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * var array = [1, [2, [3, [4]], 5]];
 *
 * _.flattenDepth(array, 1);
 * // => [1, 2, [3, [4]], 5]
 *
 * _.flattenDepth(array, 2);
 * // => [1, 2, 3, [4], 5]
 */
function flattenDepth(array, depth) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  depth = depth === undefined ? 1 : toInteger(depth);
  return baseFlatten(array, depth);
}

/** Used to compose bitmasks for function metadata. */
var WRAP_FLIP_FLAG = 512;

/**
 * Creates a function that invokes `func` with arguments reversed.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Function
 * @param {Function} func The function to flip arguments for.
 * @returns {Function} Returns the new flipped function.
 * @example
 *
 * var flipped = _.flip(function() {
 *   return _.toArray(arguments);
 * });
 *
 * flipped('a', 'b', 'c', 'd');
 * // => ['d', 'c', 'b', 'a']
 */
function flip(func) {
  return createWrap(func, WRAP_FLIP_FLAG);
}

/**
 * Computes `number` rounded down to `precision`.
 *
 * @static
 * @memberOf _
 * @since 3.10.0
 * @category Math
 * @param {number} number The number to round down.
 * @param {number} [precision=0] The precision to round down to.
 * @returns {number} Returns the rounded down number.
 * @example
 *
 * _.floor(4.006);
 * // => 4
 *
 * _.floor(0.046, 2);
 * // => 0.04
 *
 * _.floor(4060, -2);
 * // => 4000
 */
var floor = createRound('floor');

/** Error message constants. */
var FUNC_ERROR_TEXT$4 = 'Expected a function';

/** Used to compose bitmasks for function metadata. */
var WRAP_CURRY_FLAG = 8,
    WRAP_PARTIAL_FLAG$1 = 32,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG$1 = 256;

/**
 * Creates a `_.flow` or `_.flowRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new flow function.
 */
function createFlow(fromRight) {
  return flatRest(function(funcs) {
    var length = funcs.length,
        index = length,
        prereq = LodashWrapper.prototype.thru;

    if (fromRight) {
      funcs.reverse();
    }
    while (index--) {
      var func = funcs[index];
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT$4);
      }
      if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
        var wrapper = new LodashWrapper([], true);
      }
    }
    index = wrapper ? index : length;
    while (++index < length) {
      func = funcs[index];

      var funcName = getFuncName(func),
          data = funcName == 'wrapper' ? getData(func) : undefined;

      if (data && isLaziable(data[0]) &&
            data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG$1 | WRAP_REARG_FLAG$1) &&
            !data[4].length && data[9] == 1
          ) {
        wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
      } else {
        wrapper = (func.length == 1 && isLaziable(func))
          ? wrapper[funcName]()
          : wrapper.thru(func);
      }
    }
    return function() {
      var args = arguments,
          value = args[0];

      if (wrapper && args.length == 1 && isArray(value)) {
        return wrapper.plant(value).value();
      }
      var index = 0,
          result = length ? funcs[index].apply(this, args) : value;

      while (++index < length) {
        result = funcs[index].call(this, result);
      }
      return result;
    };
  });
}

/**
 * Creates a function that returns the result of invoking the given functions
 * with the `this` binding of the created function, where each successive
 * invocation is supplied the return value of the previous.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Util
 * @param {...(Function|Function[])} [funcs] The functions to invoke.
 * @returns {Function} Returns the new composite function.
 * @see _.flowRight
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var addSquare = _.flow([_.add, square]);
 * addSquare(1, 2);
 * // => 9
 */
var flow = createFlow();

/**
 * This method is like `_.flow` except that it creates a function that
 * invokes the given functions from right to left.
 *
 * @static
 * @since 3.0.0
 * @memberOf _
 * @category Util
 * @param {...(Function|Function[])} [funcs] The functions to invoke.
 * @returns {Function} Returns the new composite function.
 * @see _.flow
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var addSquare = _.flowRight([square, _.add]);
 * addSquare(1, 2);
 * // => 9
 */
var flowRight = createFlow(true);

/**
 * Iterates over own and inherited enumerable string keyed properties of an
 * object and invokes `iteratee` for each property. The iteratee is invoked
 * with three arguments: (value, key, object). Iteratee functions may exit
 * iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 0.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns `object`.
 * @see _.forInRight
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forIn(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
 */
function forIn(object, iteratee) {
  return object == null
    ? object
    : baseFor(object, castFunction(iteratee), keysIn);
}

/**
 * This method is like `_.forIn` except that it iterates over properties of
 * `object` in the opposite order.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns `object`.
 * @see _.forIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forInRight(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
 */
function forInRight(object, iteratee) {
  return object == null
    ? object
    : baseForRight(object, castFunction(iteratee), keysIn);
}

/**
 * Iterates over own enumerable string keyed properties of an object and
 * invokes `iteratee` for each property. The iteratee is invoked with three
 * arguments: (value, key, object). Iteratee functions may exit iteration
 * early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 0.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns `object`.
 * @see _.forOwnRight
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forOwn(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forOwn(object, iteratee) {
  return object && baseForOwn(object, castFunction(iteratee));
}

/**
 * This method is like `_.forOwn` except that it iterates over properties of
 * `object` in the opposite order.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns `object`.
 * @see _.forOwn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forOwnRight(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
 */
function forOwnRight(object, iteratee) {
  return object && baseForOwnRight(object, castFunction(iteratee));
}

/**
 * The inverse of `_.toPairs`; this method returns an object composed
 * from key-value `pairs`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} pairs The key-value pairs.
 * @returns {Object} Returns the new object.
 * @example
 *
 * _.fromPairs([['a', 1], ['b', 2]]);
 * // => { 'a': 1, 'b': 2 }
 */
function fromPairs(pairs) {
  var index = -1,
      length = pairs == null ? 0 : pairs.length,
      result = {};

  while (++index < length) {
    var pair = pairs[index];
    result[pair[0]] = pair[1];
  }
  return result;
}

/**
 * The base implementation of `_.functions` which creates an array of
 * `object` function property names filtered from `props`.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Array} props The property names to filter.
 * @returns {Array} Returns the function names.
 */
function baseFunctions(object, props) {
  return arrayFilter(props, function(key) {
    return isFunction(object[key]);
  });
}

/**
 * Creates an array of function property names from own enumerable properties
 * of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to inspect.
 * @returns {Array} Returns the function names.
 * @see _.functionsIn
 * @example
 *
 * function Foo() {
 *   this.a = _.constant('a');
 *   this.b = _.constant('b');
 * }
 *
 * Foo.prototype.c = _.constant('c');
 *
 * _.functions(new Foo);
 * // => ['a', 'b']
 */
function functions(object) {
  return object == null ? [] : baseFunctions(object, keys(object));
}

/**
 * Creates an array of function property names from own and inherited
 * enumerable properties of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to inspect.
 * @returns {Array} Returns the function names.
 * @see _.functions
 * @example
 *
 * function Foo() {
 *   this.a = _.constant('a');
 *   this.b = _.constant('b');
 * }
 *
 * Foo.prototype.c = _.constant('c');
 *
 * _.functionsIn(new Foo);
 * // => ['a', 'b', 'c']
 */
function functionsIn(object) {
  return object == null ? [] : baseFunctions(object, keysIn(object));
}

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the
 * key. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * _.groupBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 *
 * // The `_.property` iteratee shorthand.
 * _.groupBy(['one', 'two', 'three'], 'length');
 * // => { '3': ['one', 'two'], '5': ['three'] }
 */
var groupBy = createAggregator(function(result, value, key) {
  if (hasOwnProperty$6.call(result, key)) {
    result[key].push(value);
  } else {
    baseAssignValue(result, key, [value]);
  }
});

/**
 * The base implementation of `_.gt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is greater than `other`,
 *  else `false`.
 */
function baseGt(value, other) {
  return value > other;
}

/**
 * Creates a function that performs a relational operation on two values.
 *
 * @private
 * @param {Function} operator The function to perform the operation.
 * @returns {Function} Returns the new relational operation function.
 */
function createRelationalOperation(operator) {
  return function(value, other) {
    if (!(typeof value == 'string' && typeof other == 'string')) {
      value = toNumber(value);
      other = toNumber(other);
    }
    return operator(value, other);
  };
}

/**
 * Checks if `value` is greater than `other`.
 *
 * @static
 * @memberOf _
 * @since 3.9.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is greater than `other`,
 *  else `false`.
 * @see _.lt
 * @example
 *
 * _.gt(3, 1);
 * // => true
 *
 * _.gt(3, 3);
 * // => false
 *
 * _.gt(1, 3);
 * // => false
 */
var gt = createRelationalOperation(baseGt);

/**
 * Checks if `value` is greater than or equal to `other`.
 *
 * @static
 * @memberOf _
 * @since 3.9.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is greater than or equal to
 *  `other`, else `false`.
 * @see _.lte
 * @example
 *
 * _.gte(3, 1);
 * // => true
 *
 * _.gte(3, 3);
 * // => true
 *
 * _.gte(1, 3);
 * // => false
 */
var gte = createRelationalOperation(function(value, other) {
  return value >= other;
});

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHas(object, key) {
  return object != null && hasOwnProperty$5.call(object, key);
}

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */
function has(object, path) {
  return object != null && hasPath(object, path, baseHas);
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$8 = Math.max,
    nativeMin$9 = Math.min;

/**
 * The base implementation of `_.inRange` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to check.
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 */
function baseInRange(number, start, end) {
  return number >= nativeMin$9(start, end) && number < nativeMax$8(start, end);
}

/**
 * Checks if `n` is between `start` and up to, but not including, `end`. If
 * `end` is not specified, it's set to `start` with `start` then set to `0`.
 * If `start` is greater than `end` the params are swapped to support
 * negative ranges.
 *
 * @static
 * @memberOf _
 * @since 3.3.0
 * @category Number
 * @param {number} number The number to check.
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 * @see _.range, _.rangeRight
 * @example
 *
 * _.inRange(3, 2, 4);
 * // => true
 *
 * _.inRange(4, 8);
 * // => true
 *
 * _.inRange(4, 2);
 * // => false
 *
 * _.inRange(2, 2);
 * // => false
 *
 * _.inRange(1.2, 2);
 * // => true
 *
 * _.inRange(5.2, 4);
 * // => false
 *
 * _.inRange(-3, -2, -6);
 * // => true
 */
function inRange(number, start, end) {
  start = toFinite(start);
  if (end === undefined) {
    end = start;
    start = 0;
  } else {
    end = toFinite(end);
  }
  number = toNumber(number);
  return baseInRange(number, start, end);
}

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$7 = Math.max;

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike(collection) ? collection : values(collection);
  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax$7(length + fromIndex, 0);
  }
  return isString(collection)
    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$6 = Math.max;

/**
 * Gets the index at which the first occurrence of `value` is found in `array`
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. If `fromIndex` is negative, it's used as the
 * offset from the end of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 * @example
 *
 * _.indexOf([1, 2, 1, 2], 2);
 * // => 1
 *
 * // Search from the `fromIndex`.
 * _.indexOf([1, 2, 1, 2], 2, 2);
 * // => 3
 */
function indexOf(array, value, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax$6(length + index, 0);
  }
  return baseIndexOf(array, value, index);
}

/**
 * Gets all but the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.initial([1, 2, 3]);
 * // => [1, 2]
 */
function initial(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseSlice(array, 0, -1) : [];
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin$8 = Math.min;

/**
 * The base implementation of methods like `_.intersection`, without support
 * for iteratee shorthands, that accepts an array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of shared values.
 */
function baseIntersection(arrays, iteratee, comparator) {
  var includes = comparator ? arrayIncludesWith : arrayIncludes,
      length = arrays[0].length,
      othLength = arrays.length,
      othIndex = othLength,
      caches = Array(othLength),
      maxLength = Infinity,
      result = [];

  while (othIndex--) {
    var array = arrays[othIndex];
    if (othIndex && iteratee) {
      array = arrayMap(array, baseUnary(iteratee));
    }
    maxLength = nativeMin$8(array.length, maxLength);
    caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
      ? new SetCache(othIndex && array)
      : undefined;
  }
  array = arrays[0];

  var index = -1,
      seen = caches[0];

  outer:
  while (++index < length && result.length < maxLength) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (!(seen
          ? cacheHas(seen, computed)
          : includes(result, computed, comparator)
        )) {
      othIndex = othLength;
      while (--othIndex) {
        var cache = caches[othIndex];
        if (!(cache
              ? cacheHas(cache, computed)
              : includes(arrays[othIndex], computed, comparator))
            ) {
          continue outer;
        }
      }
      if (seen) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

/**
 * Casts `value` to an empty array if it's not an array like object.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array|Object} Returns the cast array-like object.
 */
function castArrayLikeObject(value) {
  return isArrayLikeObject(value) ? value : [];
}

/**
 * Creates an array of unique values that are included in all given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * _.intersection([2, 1], [2, 3]);
 * // => [2]
 */
var intersection = baseRest(function(arrays) {
  var mapped = arrayMap(arrays, castArrayLikeObject);
  return (mapped.length && mapped[0] === arrays[0])
    ? baseIntersection(mapped)
    : [];
});

/**
 * This method is like `_.intersection` except that it accepts `iteratee`
 * which is invoked for each element of each `arrays` to generate the criterion
 * by which they're compared. The order and references of result values are
 * determined by the first array. The iteratee is invoked with one argument:
 * (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
 * // => [2.1]
 *
 * // The `_.property` iteratee shorthand.
 * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }]
 */
var intersectionBy = baseRest(function(arrays) {
  var iteratee = last(arrays),
      mapped = arrayMap(arrays, castArrayLikeObject);

  if (iteratee === last(mapped)) {
    iteratee = undefined;
  } else {
    mapped.pop();
  }
  return (mapped.length && mapped[0] === arrays[0])
    ? baseIntersection(mapped, baseIteratee(iteratee))
    : [];
});

/**
 * This method is like `_.intersection` except that it accepts `comparator`
 * which is invoked to compare elements of `arrays`. The order and references
 * of result values are determined by the first array. The comparator is
 * invoked with two arguments: (arrVal, othVal).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 *
 * _.intersectionWith(objects, others, _.isEqual);
 * // => [{ 'x': 1, 'y': 2 }]
 */
var intersectionWith = baseRest(function(arrays) {
  var comparator = last(arrays),
      mapped = arrayMap(arrays, castArrayLikeObject);

  comparator = typeof comparator == 'function' ? comparator : undefined;
  if (comparator) {
    mapped.pop();
  }
  return (mapped.length && mapped[0] === arrays[0])
    ? baseIntersection(mapped, undefined, comparator)
    : [];
});

/**
 * The base implementation of `_.invert` and `_.invertBy` which inverts
 * `object` with values transformed by `iteratee` and set by `setter`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform values.
 * @param {Object} accumulator The initial inverted object.
 * @returns {Function} Returns `accumulator`.
 */
function baseInverter(object, setter, iteratee, accumulator) {
  baseForOwn(object, function(value, key, object) {
    setter(accumulator, iteratee(value), key, object);
  });
  return accumulator;
}

/**
 * Creates a function like `_.invertBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} toIteratee The function to resolve iteratees.
 * @returns {Function} Returns the new inverter function.
 */
function createInverter(setter, toIteratee) {
  return function(object, iteratee) {
    return baseInverter(object, setter, toIteratee(iteratee), {});
  };
}

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$5.toString;

/**
 * Creates an object composed of the inverted keys and values of `object`.
 * If `object` contains duplicate values, subsequent values overwrite
 * property assignments of previous values.
 *
 * @static
 * @memberOf _
 * @since 0.7.0
 * @category Object
 * @param {Object} object The object to invert.
 * @returns {Object} Returns the new inverted object.
 * @example
 *
 * var object = { 'a': 1, 'b': 2, 'c': 1 };
 *
 * _.invert(object);
 * // => { '1': 'c', '2': 'b' }
 */
var invert = createInverter(function(result, value, key) {
  if (value != null &&
      typeof value.toString != 'function') {
    value = nativeObjectToString$1.call(value);
  }

  result[value] = key;
}, constant(identity));

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$4.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$4.toString;

/**
 * This method is like `_.invert` except that the inverted object is generated
 * from the results of running each element of `object` thru `iteratee`. The
 * corresponding inverted value of each inverted key is an array of keys
 * responsible for generating the inverted value. The iteratee is invoked
 * with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.1.0
 * @category Object
 * @param {Object} object The object to invert.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Object} Returns the new inverted object.
 * @example
 *
 * var object = { 'a': 1, 'b': 2, 'c': 1 };
 *
 * _.invertBy(object);
 * // => { '1': ['a', 'c'], '2': ['b'] }
 *
 * _.invertBy(object, function(value) {
 *   return 'group' + value;
 * });
 * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
 */
var invertBy = createInverter(function(result, value, key) {
  if (value != null &&
      typeof value.toString != 'function') {
    value = nativeObjectToString.call(value);
  }

  if (hasOwnProperty$4.call(result, value)) {
    result[value].push(key);
  } else {
    result[value] = [key];
  }
}, baseIteratee);

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

/**
 * The base implementation of `_.invoke` without support for individual
 * method arguments.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the method to invoke.
 * @param {Array} args The arguments to invoke the method with.
 * @returns {*} Returns the result of the invoked method.
 */
function baseInvoke(object, path, args) {
  path = castPath(path, object);
  object = parent(object, path);
  var func = object == null ? object : object[toKey(last(path))];
  return func == null ? undefined : apply(func, object, args);
}

/**
 * Invokes the method at `path` of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the method to invoke.
 * @param {...*} [args] The arguments to invoke the method with.
 * @returns {*} Returns the result of the invoked method.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
 *
 * _.invoke(object, 'a[0].b.c.slice', 1, 3);
 * // => [2, 3]
 */
var invoke = baseRest(baseInvoke);

/**
 * Invokes the method at `path` of each element in `collection`, returning
 * an array of the results of each invoked method. Any additional arguments
 * are provided to each invoked method. If `path` is a function, it's invoked
 * for, and `this` bound to, each element in `collection`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Array|Function|string} path The path of the method to invoke or
 *  the function invoked per iteration.
 * @param {...*} [args] The arguments to invoke each method with.
 * @returns {Array} Returns the array of results.
 * @example
 *
 * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
 * // => [[1, 5, 7], [1, 2, 3]]
 *
 * _.invokeMap([123, 456], String.prototype.split, '');
 * // => [['1', '2', '3'], ['4', '5', '6']]
 */
var invokeMap = baseRest(function(collection, path, args) {
  var index = -1,
      isFunc = typeof path == 'function',
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value) {
    result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
  });
  return result;
});

var arrayBufferTag = '[object ArrayBuffer]';

/**
 * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
 */
function baseIsArrayBuffer(value) {
  return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
}

/* Node.js helper references. */
var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer;

/**
 * Checks if `value` is classified as an `ArrayBuffer` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
 * @example
 *
 * _.isArrayBuffer(new ArrayBuffer(2));
 * // => true
 *
 * _.isArrayBuffer(new Array(2));
 * // => false
 */
var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]';

/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
 * @example
 *
 * _.isBoolean(false);
 * // => true
 *
 * _.isBoolean(null);
 * // => false
 */
function isBoolean(value) {
  return value === true || value === false ||
    (isObjectLike(value) && baseGetTag(value) == boolTag);
}

/** `Object#toString` result references. */
var dateTag = '[object Date]';

/**
 * The base implementation of `_.isDate` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
 */
function baseIsDate(value) {
  return isObjectLike(value) && baseGetTag(value) == dateTag;
}

/* Node.js helper references. */
var nodeIsDate = nodeUtil && nodeUtil.isDate;

/**
 * Checks if `value` is classified as a `Date` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
 * @example
 *
 * _.isDate(new Date);
 * // => true
 *
 * _.isDate('Mon April 23 2012');
 * // => false
 */
var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

/**
 * Checks if `value` is likely a DOM element.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
 * @example
 *
 * _.isElement(document.body);
 * // => true
 *
 * _.isElement('<body>');
 * // => false
 */
function isElement(value) {
  return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
}

/** `Object#toString` result references. */
var mapTag$2 = '[object Map]',
    setTag$2 = '[object Set]';

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag$1(value);
  if (tag == mapTag$2 || tag == setTag$2) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty$3.call(value, key)) {
      return false;
    }
  }
  return true;
}

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

/**
 * This method is like `_.isEqual` except that it accepts `customizer` which
 * is invoked to compare values. If `customizer` returns `undefined`, comparisons
 * are handled by the method instead. The `customizer` is invoked with up to
 * six arguments: (objValue, othValue [, index|key, object, other, stack]).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * function isGreeting(value) {
 *   return /^h(?:i|ello)$/.test(value);
 * }
 *
 * function customizer(objValue, othValue) {
 *   if (isGreeting(objValue) && isGreeting(othValue)) {
 *     return true;
 *   }
 * }
 *
 * var array = ['hello', 'goodbye'];
 * var other = ['hi', 'goodbye'];
 *
 * _.isEqualWith(array, other, customizer);
 * // => true
 */
function isEqualWith(value, other, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined;
  var result = customizer ? customizer(value, other) : undefined;
  return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsFinite = root.isFinite;

/**
 * Checks if `value` is a finite primitive number.
 *
 * **Note:** This method is based on
 * [`Number.isFinite`](https://mdn.io/Number/isFinite).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
 * @example
 *
 * _.isFinite(3);
 * // => true
 *
 * _.isFinite(Number.MIN_VALUE);
 * // => true
 *
 * _.isFinite(Infinity);
 * // => false
 *
 * _.isFinite('3');
 * // => false
 */
function isFinite(value) {
  return typeof value == 'number' && nativeIsFinite(value);
}

/**
 * Checks if `value` is an integer.
 *
 * **Note:** This method is based on
 * [`Number.isInteger`](https://mdn.io/Number/isInteger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
 * @example
 *
 * _.isInteger(3);
 * // => true
 *
 * _.isInteger(Number.MIN_VALUE);
 * // => false
 *
 * _.isInteger(Infinity);
 * // => false
 *
 * _.isInteger('3');
 * // => false
 */
function isInteger(value) {
  return typeof value == 'number' && value == toInteger(value);
}

/**
 * Performs a partial deep comparison between `object` and `source` to
 * determine if `object` contains equivalent property values.
 *
 * **Note:** This method is equivalent to `_.matches` when `source` is
 * partially applied.
 *
 * Partial comparisons will match empty array and empty object `source`
 * values against any array or object value, respectively. See `_.isEqual`
 * for a list of supported value comparisons.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 *
 * _.isMatch(object, { 'b': 2 });
 * // => true
 *
 * _.isMatch(object, { 'b': 1 });
 * // => false
 */
function isMatch(object, source) {
  return object === source || baseIsMatch(object, source, getMatchData(source));
}

/**
 * This method is like `_.isMatch` except that it accepts `customizer` which
 * is invoked to compare values. If `customizer` returns `undefined`, comparisons
 * are handled by the method instead. The `customizer` is invoked with five
 * arguments: (objValue, srcValue, index|key, object, source).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 * @example
 *
 * function isGreeting(value) {
 *   return /^h(?:i|ello)$/.test(value);
 * }
 *
 * function customizer(objValue, srcValue) {
 *   if (isGreeting(objValue) && isGreeting(srcValue)) {
 *     return true;
 *   }
 * }
 *
 * var object = { 'greeting': 'hello' };
 * var source = { 'greeting': 'hi' };
 *
 * _.isMatchWith(object, source, customizer);
 * // => true
 */
function isMatchWith(object, source, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined;
  return baseIsMatch(object, source, getMatchData(source), customizer);
}

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && baseGetTag(value) == numberTag);
}

/**
 * Checks if `value` is `NaN`.
 *
 * **Note:** This method is based on
 * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
 * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
 * `undefined` and other non-number values.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 * @example
 *
 * _.isNaN(NaN);
 * // => true
 *
 * _.isNaN(new Number(NaN));
 * // => true
 *
 * isNaN(undefined);
 * // => true
 *
 * _.isNaN(undefined);
 * // => false
 */
function isNaN(value) {
  // An `NaN` primitive is the only value that is not equal to itself.
  // Perform the `toStringTag` check first to avoid errors with some
  // ActiveX objects in IE.
  return isNumber(value) && value != +value;
}

/**
 * Checks if `func` is capable of being masked.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
 */
var isMaskable = coreJsData ? isFunction : stubFalse;

/** Error message constants. */
var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.';

/**
 * Checks if `value` is a pristine native function.
 *
 * **Note:** This method can't reliably detect native functions in the presence
 * of the core-js package because core-js circumvents this kind of detection.
 * Despite multiple requests, the core-js maintainer has made it clear: any
 * attempt to fix the detection will be obstructed. As a result, we're left
 * with little choice but to throw an error. Unfortunately, this also affects
 * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
 * which rely on core-js.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if (isMaskable(value)) {
    throw new Error(CORE_ERROR_TEXT);
  }
  return baseIsNative(value);
}

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}

/**
 * Checks if `value` is `null`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * _.isNull(null);
 * // => true
 *
 * _.isNull(void 0);
 * // => false
 */
function isNull(value) {
  return value === null;
}

/** `Object#toString` result references. */
var regexpTag = '[object RegExp]';

/**
 * The base implementation of `_.isRegExp` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 */
function baseIsRegExp(value) {
  return isObjectLike(value) && baseGetTag(value) == regexpTag;
}

/* Node.js helper references. */
var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;

/**
 * Checks if `value` is classified as a `RegExp` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 * @example
 *
 * _.isRegExp(/abc/);
 * // => true
 *
 * _.isRegExp('/abc/');
 * // => false
 */
var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$3 = 9007199254740991;

/**
 * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
 * double precision number which isn't the result of a rounded unsafe integer.
 *
 * **Note:** This method is based on
 * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
 * @example
 *
 * _.isSafeInteger(3);
 * // => true
 *
 * _.isSafeInteger(Number.MIN_VALUE);
 * // => false
 *
 * _.isSafeInteger(Infinity);
 * // => false
 *
 * _.isSafeInteger('3');
 * // => false
 */
function isSafeInteger(value) {
  return isInteger(value) && value >= -MAX_SAFE_INTEGER$3 && value <= MAX_SAFE_INTEGER$3;
}

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

/** `Object#toString` result references. */
var weakMapTag = '[object WeakMap]';

/**
 * Checks if `value` is classified as a `WeakMap` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
 * @example
 *
 * _.isWeakMap(new WeakMap);
 * // => true
 *
 * _.isWeakMap(new Map);
 * // => false
 */
function isWeakMap(value) {
  return isObjectLike(value) && getTag$1(value) == weakMapTag;
}

/** `Object#toString` result references. */
var weakSetTag = '[object WeakSet]';

/**
 * Checks if `value` is classified as a `WeakSet` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
 * @example
 *
 * _.isWeakSet(new WeakSet);
 * // => true
 *
 * _.isWeakSet(new Set);
 * // => false
 */
function isWeakSet(value) {
  return isObjectLike(value) && baseGetTag(value) == weakSetTag;
}

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG$3 = 1;

/**
 * Creates a function that invokes `func` with the arguments of the created
 * function. If `func` is a property name, the created function returns the
 * property value for a given element. If `func` is an array or object, the
 * created function returns `true` for elements that contain the equivalent
 * source properties, otherwise it returns `false`.
 *
 * @static
 * @since 4.0.0
 * @memberOf _
 * @category Util
 * @param {*} [func=_.identity] The value to convert to a callback.
 * @returns {Function} Returns the callback.
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
 * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, _.iteratee(['user', 'fred']));
 * // => [{ 'user': 'fred', 'age': 40 }]
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, _.iteratee('user'));
 * // => ['barney', 'fred']
 *
 * // Create custom iteratee shorthands.
 * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
 *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
 *     return func.test(string);
 *   };
 * });
 *
 * _.filter(['abc', 'def'], /ef/);
 * // => ['def']
 */
function iteratee(func) {
  return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG$3));
}

/** Used for built-in method references. */
var arrayProto$4 = Array.prototype;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeJoin = arrayProto$4.join;

/**
 * Converts all elements in `array` into a string separated by `separator`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to convert.
 * @param {string} [separator=','] The element separator.
 * @returns {string} Returns the joined string.
 * @example
 *
 * _.join(['a', 'b', 'c'], '~');
 * // => 'a~b~c'
 */
function join(array, separator) {
  return array == null ? '' : nativeJoin.call(array, separator);
}

/**
 * Converts `string` to
 * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the kebab cased string.
 * @example
 *
 * _.kebabCase('Foo Bar');
 * // => 'foo-bar'
 *
 * _.kebabCase('fooBar');
 * // => 'foo-bar'
 *
 * _.kebabCase('__FOO_BAR__');
 * // => 'foo-bar'
 */
var kebabCase = createCompounder(function(result, word, index) {
  return result + (index ? '-' : '') + word.toLowerCase();
});

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The corresponding value of
 * each key is the last element responsible for generating the key. The
 * iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * var array = [
 *   { 'dir': 'left', 'code': 97 },
 *   { 'dir': 'right', 'code': 100 }
 * ];
 *
 * _.keyBy(array, function(o) {
 *   return String.fromCharCode(o.code);
 * });
 * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
 *
 * _.keyBy(array, 'dir');
 * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
 */
var keyBy = createAggregator(function(result, value, key) {
  baseAssignValue(result, key, value);
});

/**
 * A specialized version of `_.lastIndexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictLastIndexOf(array, value, fromIndex) {
  var index = fromIndex + 1;
  while (index--) {
    if (array[index] === value) {
      return index;
    }
  }
  return index;
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$5 = Math.max,
    nativeMin$7 = Math.min;

/**
 * This method is like `_.indexOf` except that it iterates over elements of
 * `array` from right to left.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=array.length-1] The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 * @example
 *
 * _.lastIndexOf([1, 2, 1, 2], 2);
 * // => 3
 *
 * // Search from the `fromIndex`.
 * _.lastIndexOf([1, 2, 1, 2], 2, 2);
 * // => 1
 */
function lastIndexOf(array, value, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = length;
  if (fromIndex !== undefined) {
    index = toInteger(fromIndex);
    index = index < 0 ? nativeMax$5(length + index, 0) : nativeMin$7(index, length - 1);
  }
  return value === value
    ? strictLastIndexOf(array, value, index)
    : baseFindIndex(array, baseIsNaN, index, true);
}

/**
 * Converts `string`, as space separated words, to lower case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the lower cased string.
 * @example
 *
 * _.lowerCase('--Foo-Bar--');
 * // => 'foo bar'
 *
 * _.lowerCase('fooBar');
 * // => 'foo bar'
 *
 * _.lowerCase('__FOO_BAR__');
 * // => 'foo bar'
 */
var lowerCase = createCompounder(function(result, word, index) {
  return result + (index ? ' ' : '') + word.toLowerCase();
});

/**
 * Converts the first character of `string` to lower case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.lowerFirst('Fred');
 * // => 'fred'
 *
 * _.lowerFirst('FRED');
 * // => 'fRED'
 */
var lowerFirst = createCaseFirst('toLowerCase');

/**
 * The base implementation of `_.lt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is less than `other`,
 *  else `false`.
 */
function baseLt(value, other) {
  return value < other;
}

/**
 * Checks if `value` is less than `other`.
 *
 * @static
 * @memberOf _
 * @since 3.9.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is less than `other`,
 *  else `false`.
 * @see _.gt
 * @example
 *
 * _.lt(1, 3);
 * // => true
 *
 * _.lt(3, 3);
 * // => false
 *
 * _.lt(3, 1);
 * // => false
 */
var lt = createRelationalOperation(baseLt);

/**
 * Checks if `value` is less than or equal to `other`.
 *
 * @static
 * @memberOf _
 * @since 3.9.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is less than or equal to
 *  `other`, else `false`.
 * @see _.gte
 * @example
 *
 * _.lte(1, 3);
 * // => true
 *
 * _.lte(3, 3);
 * // => true
 *
 * _.lte(3, 1);
 * // => false
 */
var lte = createRelationalOperation(function(value, other) {
  return value <= other;
});

/**
 * The opposite of `_.mapValues`; this method creates an object with the
 * same values as `object` and keys generated by running each own enumerable
 * string keyed property of `object` thru `iteratee`. The iteratee is invoked
 * with three arguments: (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 3.8.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapValues
 * @example
 *
 * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
 *   return key + value;
 * });
 * // => { 'a1': 1, 'b2': 2 }
 */
function mapKeys(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee);

  baseForOwn(object, function(value, key, object) {
    baseAssignValue(result, iteratee(value, key, object), value);
  });
  return result;
}

/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee);

  baseForOwn(object, function(value, key, object) {
    baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG$2 = 1;

/**
 * Creates a function that performs a partial deep comparison between a given
 * object and `source`, returning `true` if the given object has equivalent
 * property values, else `false`.
 *
 * **Note:** The created function is equivalent to `_.isMatch` with `source`
 * partially applied.
 *
 * Partial comparisons will match empty array and empty object `source`
 * values against any array or object value, respectively. See `_.isEqual`
 * for a list of supported value comparisons.
 *
 * **Note:** Multiple values can be checked by combining several matchers
 * using `_.overSome`
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Util
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 * @example
 *
 * var objects = [
 *   { 'a': 1, 'b': 2, 'c': 3 },
 *   { 'a': 4, 'b': 5, 'c': 6 }
 * ];
 *
 * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
 * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
 *
 * // Checking for several possible values
 * _.filter(objects, _.overSome([_.matches({ 'a': 1 }), _.matches({ 'a': 4 })]));
 * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
 */
function matches(source) {
  return baseMatches(baseClone(source, CLONE_DEEP_FLAG$2));
}

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG$1 = 1;

/**
 * Creates a function that performs a partial deep comparison between the
 * value at `path` of a given object to `srcValue`, returning `true` if the
 * object value is equivalent, else `false`.
 *
 * **Note:** Partial comparisons will match empty array and empty object
 * `srcValue` values against any array or object value, respectively. See
 * `_.isEqual` for a list of supported value comparisons.
 *
 * **Note:** Multiple values can be checked by combining several matchers
 * using `_.overSome`
 *
 * @static
 * @memberOf _
 * @since 3.2.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 * @example
 *
 * var objects = [
 *   { 'a': 1, 'b': 2, 'c': 3 },
 *   { 'a': 4, 'b': 5, 'c': 6 }
 * ];
 *
 * _.find(objects, _.matchesProperty('a', 4));
 * // => { 'a': 4, 'b': 5, 'c': 6 }
 *
 * // Checking for several possible values
 * _.filter(objects, _.overSome([_.matchesProperty('a', 1), _.matchesProperty('a', 4)]));
 * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
 */
function matchesProperty(path, srcValue) {
  return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG$1));
}

/**
 * The base implementation of methods like `_.max` and `_.min` which accepts a
 * `comparator` to determine the extremum value.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per iteration.
 * @param {Function} comparator The comparator used to compare values.
 * @returns {*} Returns the extremum value.
 */
function baseExtremum(array, iteratee, comparator) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    var value = array[index],
        current = iteratee(value);

    if (current != null && (computed === undefined
          ? (current === current && !isSymbol(current))
          : comparator(current, computed)
        )) {
      var computed = current,
          result = value;
    }
  }
  return result;
}

/**
 * Computes the maximum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * _.max([4, 2, 8, 6]);
 * // => 8
 *
 * _.max([]);
 * // => undefined
 */
function max(array) {
  return (array && array.length)
    ? baseExtremum(array, identity, baseGt)
    : undefined;
}

/**
 * This method is like `_.max` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * the value is ranked. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * _.maxBy(objects, function(o) { return o.n; });
 * // => { 'n': 2 }
 *
 * // The `_.property` iteratee shorthand.
 * _.maxBy(objects, 'n');
 * // => { 'n': 2 }
 */
function maxBy(array, iteratee) {
  return (array && array.length)
    ? baseExtremum(array, baseIteratee(iteratee), baseGt)
    : undefined;
}

/**
 * The base implementation of `_.sum` and `_.sumBy` without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {number} Returns the sum.
 */
function baseSum(array, iteratee) {
  var result,
      index = -1,
      length = array.length;

  while (++index < length) {
    var current = iteratee(array[index]);
    if (current !== undefined) {
      result = result === undefined ? current : (result + current);
    }
  }
  return result;
}

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/**
 * The base implementation of `_.mean` and `_.meanBy` without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {number} Returns the mean.
 */
function baseMean(array, iteratee) {
  var length = array == null ? 0 : array.length;
  return length ? (baseSum(array, iteratee) / length) : NAN;
}

/**
 * Computes the mean of the values in `array`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {number} Returns the mean.
 * @example
 *
 * _.mean([4, 2, 8, 6]);
 * // => 5
 */
function mean(array) {
  return baseMean(array, identity);
}

/**
 * This method is like `_.mean` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the value to be averaged.
 * The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.7.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {number} Returns the mean.
 * @example
 *
 * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
 *
 * _.meanBy(objects, function(o) { return o.n; });
 * // => 5
 *
 * // The `_.property` iteratee shorthand.
 * _.meanBy(objects, 'n');
 * // => 5
 */
function meanBy(array, iteratee) {
  return baseMean(array, baseIteratee(iteratee));
}

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

/**
 * Creates a function that invokes the method at `path` of a given object.
 * Any additional arguments are provided to the invoked method.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Util
 * @param {Array|string} path The path of the method to invoke.
 * @param {...*} [args] The arguments to invoke the method with.
 * @returns {Function} Returns the new invoker function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': _.constant(2) } },
 *   { 'a': { 'b': _.constant(1) } }
 * ];
 *
 * _.map(objects, _.method('a.b'));
 * // => [2, 1]
 *
 * _.map(objects, _.method(['a', 'b']));
 * // => [2, 1]
 */
var method = baseRest(function(path, args) {
  return function(object) {
    return baseInvoke(object, path, args);
  };
});

/**
 * The opposite of `_.method`; this method creates a function that invokes
 * the method at a given path of `object`. Any additional arguments are
 * provided to the invoked method.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Util
 * @param {Object} object The object to query.
 * @param {...*} [args] The arguments to invoke the method with.
 * @returns {Function} Returns the new invoker function.
 * @example
 *
 * var array = _.times(3, _.constant),
 *     object = { 'a': array, 'b': array, 'c': array };
 *
 * _.map(['a[2]', 'c[0]'], _.methodOf(object));
 * // => [2, 0]
 *
 * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
 * // => [2, 0]
 */
var methodOf = baseRest(function(object, args) {
  return function(path) {
    return baseInvoke(object, path, args);
  };
});

/**
 * Computes the minimum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * _.min([4, 2, 8, 6]);
 * // => 2
 *
 * _.min([]);
 * // => undefined
 */
function min(array) {
  return (array && array.length)
    ? baseExtremum(array, identity, baseLt)
    : undefined;
}

/**
 * This method is like `_.min` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * the value is ranked. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * _.minBy(objects, function(o) { return o.n; });
 * // => { 'n': 1 }
 *
 * // The `_.property` iteratee shorthand.
 * _.minBy(objects, 'n');
 * // => { 'n': 1 }
 */
function minBy(array, iteratee) {
  return (array && array.length)
    ? baseExtremum(array, baseIteratee(iteratee), baseLt)
    : undefined;
}

/**
 * Adds all own enumerable string keyed function properties of a source
 * object to the destination object. If `object` is a function, then methods
 * are added to its prototype as well.
 *
 * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
 * avoid conflicts caused by modifying the original.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {Function|Object} [object=lodash] The destination object.
 * @param {Object} source The object of functions to add.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
 * @returns {Function|Object} Returns `object`.
 * @example
 *
 * function vowels(string) {
 *   return _.filter(string, function(v) {
 *     return /[aeiou]/i.test(v);
 *   });
 * }
 *
 * _.mixin({ 'vowels': vowels });
 * _.vowels('fred');
 * // => ['e']
 *
 * _('fred').vowels().value();
 * // => ['e']
 *
 * _.mixin({ 'vowels': vowels }, { 'chain': false });
 * _('fred').vowels();
 * // => ['e']
 */
function mixin$1(object, source, options) {
  var props = keys(source),
      methodNames = baseFunctions(source, props);

  var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
      isFunc = isFunction(object);

  arrayEach(methodNames, function(methodName) {
    var func = source[methodName];
    object[methodName] = func;
    if (isFunc) {
      object.prototype[methodName] = function() {
        var chainAll = this.__chain__;
        if (chain || chainAll) {
          var result = object(this.__wrapped__),
              actions = result.__actions__ = copyArray(this.__actions__);

          actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
          result.__chain__ = chainAll;
          return result;
        }
        return func.apply(object, arrayPush([this.value()], arguments));
      };
    }
  });

  return object;
}

/**
 * Multiply two numbers.
 *
 * @static
 * @memberOf _
 * @since 4.7.0
 * @category Math
 * @param {number} multiplier The first number in a multiplication.
 * @param {number} multiplicand The second number in a multiplication.
 * @returns {number} Returns the product.
 * @example
 *
 * _.multiply(6, 4);
 * // => 24
 */
var multiply = createMathOperation(function(multiplier, multiplicand) {
  return multiplier * multiplicand;
}, 1);

/** Error message constants. */
var FUNC_ERROR_TEXT$3 = 'Expected a function';

/**
 * Creates a function that negates the result of the predicate `func`. The
 * `func` predicate is invoked with the `this` binding and arguments of the
 * created function.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} predicate The predicate to negate.
 * @returns {Function} Returns the new negated function.
 * @example
 *
 * function isEven(n) {
 *   return n % 2 == 0;
 * }
 *
 * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
 * // => [1, 3, 5]
 */
function negate(predicate) {
  if (typeof predicate != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$3);
  }
  return function() {
    var args = arguments;
    switch (args.length) {
      case 0: return !predicate.call(this);
      case 1: return !predicate.call(this, args[0]);
      case 2: return !predicate.call(this, args[0], args[1]);
      case 3: return !predicate.call(this, args[0], args[1], args[2]);
    }
    return !predicate.apply(this, args);
  };
}

/**
 * Converts `iterator` to an array.
 *
 * @private
 * @param {Object} iterator The iterator to convert.
 * @returns {Array} Returns the converted array.
 */
function iteratorToArray(iterator) {
  var data,
      result = [];

  while (!(data = iterator.next()).done) {
    result.push(data.value);
  }
  return result;
}

/** `Object#toString` result references. */
var mapTag$1 = '[object Map]',
    setTag$1 = '[object Set]';

/** Built-in value references. */
var symIterator$1 = Symbol ? Symbol.iterator : undefined;

/**
 * Converts `value` to an array.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Array} Returns the converted array.
 * @example
 *
 * _.toArray({ 'a': 1, 'b': 2 });
 * // => [1, 2]
 *
 * _.toArray('abc');
 * // => ['a', 'b', 'c']
 *
 * _.toArray(1);
 * // => []
 *
 * _.toArray(null);
 * // => []
 */
function toArray(value) {
  if (!value) {
    return [];
  }
  if (isArrayLike(value)) {
    return isString(value) ? stringToArray(value) : copyArray(value);
  }
  if (symIterator$1 && value[symIterator$1]) {
    return iteratorToArray(value[symIterator$1]());
  }
  var tag = getTag$1(value),
      func = tag == mapTag$1 ? mapToArray : (tag == setTag$1 ? setToArray : values);

  return func(value);
}

/**
 * Gets the next value on a wrapped object following the
 * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
 *
 * @name next
 * @memberOf _
 * @since 4.0.0
 * @category Seq
 * @returns {Object} Returns the next iterator value.
 * @example
 *
 * var wrapped = _([1, 2]);
 *
 * wrapped.next();
 * // => { 'done': false, 'value': 1 }
 *
 * wrapped.next();
 * // => { 'done': false, 'value': 2 }
 *
 * wrapped.next();
 * // => { 'done': true, 'value': undefined }
 */
function wrapperNext() {
  if (this.__values__ === undefined) {
    this.__values__ = toArray(this.value());
  }
  var done = this.__index__ >= this.__values__.length,
      value = done ? undefined : this.__values__[this.__index__++];

  return { 'done': done, 'value': value };
}

/**
 * The base implementation of `_.nth` which doesn't coerce arguments.
 *
 * @private
 * @param {Array} array The array to query.
 * @param {number} n The index of the element to return.
 * @returns {*} Returns the nth element of `array`.
 */
function baseNth(array, n) {
  var length = array.length;
  if (!length) {
    return;
  }
  n += n < 0 ? length : 0;
  return isIndex(n, length) ? array[n] : undefined;
}

/**
 * Gets the element at index `n` of `array`. If `n` is negative, the nth
 * element from the end is returned.
 *
 * @static
 * @memberOf _
 * @since 4.11.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=0] The index of the element to return.
 * @returns {*} Returns the nth element of `array`.
 * @example
 *
 * var array = ['a', 'b', 'c', 'd'];
 *
 * _.nth(array, 1);
 * // => 'b'
 *
 * _.nth(array, -2);
 * // => 'c';
 */
function nth(array, n) {
  return (array && array.length) ? baseNth(array, toInteger(n)) : undefined;
}

/**
 * Creates a function that gets the argument at index `n`. If `n` is negative,
 * the nth argument from the end is returned.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Util
 * @param {number} [n=0] The index of the argument to return.
 * @returns {Function} Returns the new pass-thru function.
 * @example
 *
 * var func = _.nthArg(1);
 * func('a', 'b', 'c', 'd');
 * // => 'b'
 *
 * var func = _.nthArg(-2);
 * func('a', 'b', 'c', 'd');
 * // => 'c'
 */
function nthArg(n) {
  n = toInteger(n);
  return baseRest(function(args) {
    return baseNth(args, n);
  });
}

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return isPlainObject(value) ? undefined : value;
}

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pickBy(object, _.isNumber);
 * // => { 'a': 1, 'c': 3 }
 */
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = arrayMap(getAllKeysIn(object), function(prop) {
    return [prop];
  });
  predicate = baseIteratee(predicate);
  return basePickBy(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}

/**
 * The opposite of `_.pickBy`; this method creates an object composed of
 * the own and inherited enumerable string keyed properties of `object` that
 * `predicate` doesn't return truthy for. The predicate is invoked with two
 * arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omitBy(object, _.isNumber);
 * // => { 'b': '2' }
 */
function omitBy(object, predicate) {
  return pickBy(object, negate(baseIteratee(predicate)));
}

/**
 * Creates a function that is restricted to invoking `func` once. Repeat calls
 * to the function return the value of the first invocation. The `func` is
 * invoked with the `this` binding and arguments of the created function.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * var initialize = _.once(createApplication);
 * initialize();
 * initialize();
 * // => `createApplication` is invoked once
 */
function once(func) {
  return before(2, func);
}

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = arrayMap(iteratees, function(iteratee) {
      if (isArray(iteratee)) {
        return function(value) {
          return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        }
      }
      return iteratee;
    });
  } else {
    iteratees = [identity];
  }

  var index = -1;
  iteratees = arrayMap(iteratees, baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

/**
 * This method is like `_.sortBy` except that it allows specifying the sort
 * orders of the iteratees to sort by. If `orders` is unspecified, all values
 * are sorted in ascending order. Otherwise, specify an order of "desc" for
 * descending or "asc" for ascending sort order of corresponding values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @param {string[]} [orders] The sort orders of `iteratees`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 34 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 36 }
 * ];
 *
 * // Sort by `user` in ascending order and by `age` in descending order.
 * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 */
function orderBy(collection, iteratees, orders, guard) {
  if (collection == null) {
    return [];
  }
  if (!isArray(iteratees)) {
    iteratees = iteratees == null ? [] : [iteratees];
  }
  orders = guard ? undefined : orders;
  if (!isArray(orders)) {
    orders = orders == null ? [] : [orders];
  }
  return baseOrderBy(collection, iteratees, orders);
}

/**
 * Creates a function like `_.over`.
 *
 * @private
 * @param {Function} arrayFunc The function to iterate over iteratees.
 * @returns {Function} Returns the new over function.
 */
function createOver(arrayFunc) {
  return flatRest(function(iteratees) {
    iteratees = arrayMap(iteratees, baseUnary(baseIteratee));
    return baseRest(function(args) {
      var thisArg = this;
      return arrayFunc(iteratees, function(iteratee) {
        return apply(iteratee, thisArg, args);
      });
    });
  });
}

/**
 * Creates a function that invokes `iteratees` with the arguments it receives
 * and returns their results.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Util
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to invoke.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var func = _.over([Math.max, Math.min]);
 *
 * func(1, 2, 3, 4);
 * // => [4, 1]
 */
var over = createOver(arrayMap);

/**
 * A `baseRest` alias which can be replaced with `identity` by module
 * replacement plugins.
 *
 * @private
 * @type {Function}
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
var castRest = baseRest;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin$6 = Math.min;

/**
 * Creates a function that invokes `func` with its arguments transformed.
 *
 * @static
 * @since 4.0.0
 * @memberOf _
 * @category Function
 * @param {Function} func The function to wrap.
 * @param {...(Function|Function[])} [transforms=[_.identity]]
 *  The argument transforms.
 * @returns {Function} Returns the new function.
 * @example
 *
 * function doubled(n) {
 *   return n * 2;
 * }
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var func = _.overArgs(function(x, y) {
 *   return [x, y];
 * }, [square, doubled]);
 *
 * func(9, 3);
 * // => [81, 6]
 *
 * func(10, 5);
 * // => [100, 10]
 */
var overArgs = castRest(function(func, transforms) {
  transforms = (transforms.length == 1 && isArray(transforms[0]))
    ? arrayMap(transforms[0], baseUnary(baseIteratee))
    : arrayMap(baseFlatten(transforms, 1), baseUnary(baseIteratee));

  var funcsLength = transforms.length;
  return baseRest(function(args) {
    var index = -1,
        length = nativeMin$6(args.length, funcsLength);

    while (++index < length) {
      args[index] = transforms[index].call(this, args[index]);
    }
    return apply(func, this, args);
  });
});

/**
 * Creates a function that checks if **all** of the `predicates` return
 * truthy when invoked with the arguments it receives.
 *
 * Following shorthands are possible for providing predicates.
 * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
 * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Util
 * @param {...(Function|Function[])} [predicates=[_.identity]]
 *  The predicates to check.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var func = _.overEvery([Boolean, isFinite]);
 *
 * func('1');
 * // => true
 *
 * func(null);
 * // => false
 *
 * func(NaN);
 * // => false
 */
var overEvery = createOver(arrayEvery);

/**
 * Creates a function that checks if **any** of the `predicates` return
 * truthy when invoked with the arguments it receives.
 *
 * Following shorthands are possible for providing predicates.
 * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
 * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Util
 * @param {...(Function|Function[])} [predicates=[_.identity]]
 *  The predicates to check.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var func = _.overSome([Boolean, isFinite]);
 *
 * func('1');
 * // => true
 *
 * func(null);
 * // => true
 *
 * func(NaN);
 * // => false
 *
 * var matchesFunc = _.overSome([{ 'a': 1 }, { 'a': 2 }])
 * var matchesPropertyFunc = _.overSome([['a', 1], ['a', 2]])
 */
var overSome = createOver(arraySome);

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$2 = 9007199254740991;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeFloor$3 = Math.floor;

/**
 * The base implementation of `_.repeat` which doesn't coerce arguments.
 *
 * @private
 * @param {string} string The string to repeat.
 * @param {number} n The number of times to repeat the string.
 * @returns {string} Returns the repeated string.
 */
function baseRepeat(string, n) {
  var result = '';
  if (!string || n < 1 || n > MAX_SAFE_INTEGER$2) {
    return result;
  }
  // Leverage the exponentiation by squaring algorithm for a faster repeat.
  // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
  do {
    if (n % 2) {
      result += string;
    }
    n = nativeFloor$3(n / 2);
    if (n) {
      string += string;
    }
  } while (n);

  return result;
}

/**
 * Gets the size of an ASCII `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
var asciiSize = baseProperty('length');

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Gets the size of a Unicode `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
function unicodeSize(string) {
  var result = reUnicode.lastIndex = 0;
  while (reUnicode.test(string)) {
    ++result;
  }
  return result;
}

/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 */
function stringSize(string) {
  return hasUnicode(string)
    ? unicodeSize(string)
    : asciiSize(string);
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil$2 = Math.ceil;

/**
 * Creates the padding for `string` based on `length`. The `chars` string
 * is truncated if the number of characters exceeds `length`.
 *
 * @private
 * @param {number} length The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padding for `string`.
 */
function createPadding(length, chars) {
  chars = chars === undefined ? ' ' : baseToString(chars);

  var charsLength = chars.length;
  if (charsLength < 2) {
    return charsLength ? baseRepeat(chars, length) : chars;
  }
  var result = baseRepeat(chars, nativeCeil$2(length / stringSize(chars)));
  return hasUnicode(chars)
    ? castSlice(stringToArray(result), 0, length).join('')
    : result.slice(0, length);
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil$1 = Math.ceil,
    nativeFloor$2 = Math.floor;

/**
 * Pads `string` on the left and right sides if it's shorter than `length`.
 * Padding characters are truncated if they can't be evenly divided by `length`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to pad.
 * @param {number} [length=0] The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padded string.
 * @example
 *
 * _.pad('abc', 8);
 * // => '  abc   '
 *
 * _.pad('abc', 8, '_-');
 * // => '_-abc_-_'
 *
 * _.pad('abc', 3);
 * // => 'abc'
 */
function pad(string, length, chars) {
  string = toString(string);
  length = toInteger(length);

  var strLength = length ? stringSize(string) : 0;
  if (!length || strLength >= length) {
    return string;
  }
  var mid = (length - strLength) / 2;
  return (
    createPadding(nativeFloor$2(mid), chars) +
    string +
    createPadding(nativeCeil$1(mid), chars)
  );
}

/**
 * Pads `string` on the right side if it's shorter than `length`. Padding
 * characters are truncated if they exceed `length`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to pad.
 * @param {number} [length=0] The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padded string.
 * @example
 *
 * _.padEnd('abc', 6);
 * // => 'abc   '
 *
 * _.padEnd('abc', 6, '_-');
 * // => 'abc_-_'
 *
 * _.padEnd('abc', 3);
 * // => 'abc'
 */
function padEnd(string, length, chars) {
  string = toString(string);
  length = toInteger(length);

  var strLength = length ? stringSize(string) : 0;
  return (length && strLength < length)
    ? (string + createPadding(length - strLength, chars))
    : string;
}

/**
 * Pads `string` on the left side if it's shorter than `length`. Padding
 * characters are truncated if they exceed `length`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to pad.
 * @param {number} [length=0] The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padded string.
 * @example
 *
 * _.padStart('abc', 6);
 * // => '   abc'
 *
 * _.padStart('abc', 6, '_-');
 * // => '_-_abc'
 *
 * _.padStart('abc', 3);
 * // => 'abc'
 */
function padStart(string, length, chars) {
  string = toString(string);
  length = toInteger(length);

  var strLength = length ? stringSize(string) : 0;
  return (length && strLength < length)
    ? (createPadding(length - strLength, chars) + string)
    : string;
}

/** Used to match leading whitespace. */
var reTrimStart$1 = /^\s+/;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeParseInt = root.parseInt;

/**
 * Converts `string` to an integer of the specified radix. If `radix` is
 * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
 * hexadecimal, in which case a `radix` of `16` is used.
 *
 * **Note:** This method aligns with the
 * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category String
 * @param {string} string The string to convert.
 * @param {number} [radix=10] The radix to interpret `value` by.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.parseInt('08');
 * // => 8
 *
 * _.map(['6', '08', '10'], _.parseInt);
 * // => [6, 8, 10]
 */
function parseInt$1(string, radix, guard) {
  if (guard || radix == null) {
    radix = 0;
  } else if (radix) {
    radix = +radix;
  }
  return nativeParseInt(toString(string).replace(reTrimStart$1, ''), radix || 0);
}

/** Used to compose bitmasks for function metadata. */
var WRAP_PARTIAL_FLAG = 32;

/**
 * Creates a function that invokes `func` with `partials` prepended to the
 * arguments it receives. This method is like `_.bind` except it does **not**
 * alter the `this` binding.
 *
 * The `_.partial.placeholder` value, which defaults to `_` in monolithic
 * builds, may be used as a placeholder for partially applied arguments.
 *
 * **Note:** This method doesn't set the "length" property of partially
 * applied functions.
 *
 * @static
 * @memberOf _
 * @since 0.2.0
 * @category Function
 * @param {Function} func The function to partially apply arguments to.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new partially applied function.
 * @example
 *
 * function greet(greeting, name) {
 *   return greeting + ' ' + name;
 * }
 *
 * var sayHelloTo = _.partial(greet, 'hello');
 * sayHelloTo('fred');
 * // => 'hello fred'
 *
 * // Partially applied with placeholders.
 * var greetFred = _.partial(greet, _, 'fred');
 * greetFred('hi');
 * // => 'hi fred'
 */
var partial = baseRest(function(func, partials) {
  var holders = replaceHolders(partials, getHolder(partial));
  return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
});

// Assign default placeholders.
partial.placeholder = {};

/** Used to compose bitmasks for function metadata. */
var WRAP_PARTIAL_RIGHT_FLAG = 64;

/**
 * This method is like `_.partial` except that partially applied arguments
 * are appended to the arguments it receives.
 *
 * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
 * builds, may be used as a placeholder for partially applied arguments.
 *
 * **Note:** This method doesn't set the "length" property of partially
 * applied functions.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Function
 * @param {Function} func The function to partially apply arguments to.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new partially applied function.
 * @example
 *
 * function greet(greeting, name) {
 *   return greeting + ' ' + name;
 * }
 *
 * var greetFred = _.partialRight(greet, 'fred');
 * greetFred('hi');
 * // => 'hi fred'
 *
 * // Partially applied with placeholders.
 * var sayHelloTo = _.partialRight(greet, 'hello', _);
 * sayHelloTo('fred');
 * // => 'hello fred'
 */
var partialRight = baseRest(function(func, partials) {
  var holders = replaceHolders(partials, getHolder(partialRight));
  return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
});

// Assign default placeholders.
partialRight.placeholder = {};

/**
 * Creates an array of elements split into two groups, the first of which
 * contains elements `predicate` returns truthy for, the second of which
 * contains elements `predicate` returns falsey for. The predicate is
 * invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the array of grouped elements.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': false },
 *   { 'user': 'fred',    'age': 40, 'active': true },
 *   { 'user': 'pebbles', 'age': 1,  'active': false }
 * ];
 *
 * _.partition(users, function(o) { return o.active; });
 * // => objects for [['fred'], ['barney', 'pebbles']]
 *
 * // The `_.matches` iteratee shorthand.
 * _.partition(users, { 'age': 1, 'active': false });
 * // => objects for [['pebbles'], ['barney', 'fred']]
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.partition(users, ['active', false]);
 * // => objects for [['barney', 'pebbles'], ['fred']]
 *
 * // The `_.property` iteratee shorthand.
 * _.partition(users, 'active');
 * // => objects for [['fred'], ['barney', 'pebbles']]
 */
var partition = createAggregator(function(result, value, key) {
  result[key ? 0 : 1].push(value);
}, function() { return [[], []]; });

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});

/**
 * Creates a clone of the chain sequence planting `value` as the wrapped value.
 *
 * @name plant
 * @memberOf _
 * @since 3.2.0
 * @category Seq
 * @param {*} value The value to plant.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2]).map(square);
 * var other = wrapped.plant([3, 4]);
 *
 * other.value();
 * // => [9, 16]
 *
 * wrapped.value();
 * // => [1, 4]
 */
function wrapperPlant(value) {
  var result,
      parent = this;

  while (parent instanceof baseLodash) {
    var clone = wrapperClone(parent);
    clone.__index__ = 0;
    clone.__values__ = undefined;
    if (result) {
      previous.__wrapped__ = clone;
    } else {
      result = clone;
    }
    var previous = clone;
    parent = parent.__wrapped__;
  }
  previous.__wrapped__ = value;
  return result;
}

/**
 * The opposite of `_.property`; this method creates a function that returns
 * the value at a given path of `object`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Util
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var array = [0, 1, 2],
 *     object = { 'a': array, 'b': array, 'c': array };
 *
 * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
 * // => [2, 0]
 *
 * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
 * // => [2, 0]
 */
function propertyOf(object) {
  return function(path) {
    return object == null ? undefined : baseGet(object, path);
  };
}

/**
 * This function is like `baseIndexOf` except that it accepts a comparator.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOfWith(array, value, fromIndex, comparator) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (comparator(array[index], value)) {
      return index;
    }
  }
  return -1;
}

/** Used for built-in method references. */
var arrayProto$3 = Array.prototype;

/** Built-in value references. */
var splice$1 = arrayProto$3.splice;

/**
 * The base implementation of `_.pullAllBy` without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to remove.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns `array`.
 */
function basePullAll(array, values, iteratee, comparator) {
  var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
      index = -1,
      length = values.length,
      seen = array;

  if (array === values) {
    values = copyArray(values);
  }
  if (iteratee) {
    seen = arrayMap(array, baseUnary(iteratee));
  }
  while (++index < length) {
    var fromIndex = 0,
        value = values[index],
        computed = iteratee ? iteratee(value) : value;

    while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
      if (seen !== array) {
        splice$1.call(seen, fromIndex, 1);
      }
      splice$1.call(array, fromIndex, 1);
    }
  }
  return array;
}

/**
 * This method is like `_.pull` except that it accepts an array of values to remove.
 *
 * **Note:** Unlike `_.difference`, this method mutates `array`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {Array} values The values to remove.
 * @returns {Array} Returns `array`.
 * @example
 *
 * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 *
 * _.pullAll(array, ['a', 'c']);
 * console.log(array);
 * // => ['b', 'b']
 */
function pullAll(array, values) {
  return (array && array.length && values && values.length)
    ? basePullAll(array, values)
    : array;
}

/**
 * Removes all given values from `array` using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
 * to remove elements from an array by predicate.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {...*} [values] The values to remove.
 * @returns {Array} Returns `array`.
 * @example
 *
 * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 *
 * _.pull(array, 'a', 'c');
 * console.log(array);
 * // => ['b', 'b']
 */
var pull = baseRest(pullAll);

/**
 * This method is like `_.pullAll` except that it accepts `iteratee` which is
 * invoked for each element of `array` and `values` to generate the criterion
 * by which they're compared. The iteratee is invoked with one argument: (value).
 *
 * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {Array} values The values to remove.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns `array`.
 * @example
 *
 * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
 *
 * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
 * console.log(array);
 * // => [{ 'x': 2 }]
 */
function pullAllBy(array, values, iteratee) {
  return (array && array.length && values && values.length)
    ? basePullAll(array, values, baseIteratee(iteratee))
    : array;
}

/**
 * This method is like `_.pullAll` except that it accepts `comparator` which
 * is invoked to compare elements of `array` to `values`. The comparator is
 * invoked with two arguments: (arrVal, othVal).
 *
 * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
 *
 * @static
 * @memberOf _
 * @since 4.6.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {Array} values The values to remove.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns `array`.
 * @example
 *
 * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
 *
 * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
 * console.log(array);
 * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
 */
function pullAllWith(array, values, comparator) {
  return (array && array.length && values && values.length)
    ? basePullAll(array, values, undefined, comparator)
    : array;
}

/** Used for built-in method references. */
var arrayProto$2 = Array.prototype;

/** Built-in value references. */
var splice = arrayProto$2.splice;

/**
 * The base implementation of `_.pullAt` without support for individual
 * indexes or capturing the removed elements.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {number[]} indexes The indexes of elements to remove.
 * @returns {Array} Returns `array`.
 */
function basePullAt(array, indexes) {
  var length = array ? indexes.length : 0,
      lastIndex = length - 1;

  while (length--) {
    var index = indexes[length];
    if (length == lastIndex || index !== previous) {
      var previous = index;
      if (isIndex(index)) {
        splice.call(array, index, 1);
      } else {
        baseUnset(array, index);
      }
    }
  }
  return array;
}

/**
 * Removes elements from `array` corresponding to `indexes` and returns an
 * array of removed elements.
 *
 * **Note:** Unlike `_.at`, this method mutates `array`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {...(number|number[])} [indexes] The indexes of elements to remove.
 * @returns {Array} Returns the new array of removed elements.
 * @example
 *
 * var array = ['a', 'b', 'c', 'd'];
 * var pulled = _.pullAt(array, [1, 3]);
 *
 * console.log(array);
 * // => ['a', 'c']
 *
 * console.log(pulled);
 * // => ['b', 'd']
 */
var pullAt = flatRest(function(array, indexes) {
  var length = array == null ? 0 : array.length,
      result = baseAt(array, indexes);

  basePullAt(array, arrayMap(indexes, function(index) {
    return isIndex(index, length) ? +index : index;
  }).sort(compareAscending));

  return result;
});

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeFloor$1 = Math.floor,
    nativeRandom$1 = Math.random;

/**
 * The base implementation of `_.random` without support for returning
 * floating-point numbers.
 *
 * @private
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the random number.
 */
function baseRandom(lower, upper) {
  return lower + nativeFloor$1(nativeRandom$1() * (upper - lower + 1));
}

/** Built-in method references without a dependency on `root`. */
var freeParseFloat = parseFloat;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin$5 = Math.min,
    nativeRandom = Math.random;

/**
 * Produces a random number between the inclusive `lower` and `upper` bounds.
 * If only one argument is provided a number between `0` and the given number
 * is returned. If `floating` is `true`, or either `lower` or `upper` are
 * floats, a floating-point number is returned instead of an integer.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @memberOf _
 * @since 0.7.0
 * @category Number
 * @param {number} [lower=0] The lower bound.
 * @param {number} [upper=1] The upper bound.
 * @param {boolean} [floating] Specify returning a floating-point number.
 * @returns {number} Returns the random number.
 * @example
 *
 * _.random(0, 5);
 * // => an integer between 0 and 5
 *
 * _.random(5);
 * // => also an integer between 0 and 5
 *
 * _.random(5, true);
 * // => a floating-point number between 0 and 5
 *
 * _.random(1.2, 5.2);
 * // => a floating-point number between 1.2 and 5.2
 */
function random(lower, upper, floating) {
  if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
    upper = floating = undefined;
  }
  if (floating === undefined) {
    if (typeof upper == 'boolean') {
      floating = upper;
      upper = undefined;
    }
    else if (typeof lower == 'boolean') {
      floating = lower;
      lower = undefined;
    }
  }
  if (lower === undefined && upper === undefined) {
    lower = 0;
    upper = 1;
  }
  else {
    lower = toFinite(lower);
    if (upper === undefined) {
      upper = lower;
      lower = 0;
    } else {
      upper = toFinite(upper);
    }
  }
  if (lower > upper) {
    var temp = lower;
    lower = upper;
    upper = temp;
  }
  if (floating || lower % 1 || upper % 1) {
    var rand = nativeRandom();
    return nativeMin$5(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
  }
  return baseRandom(lower, upper);
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax$4 = Math.max;

/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */
function baseRange(start, end, step, fromRight) {
  var index = -1,
      length = nativeMax$4(nativeCeil((end - start) / (step || 1)), 0),
      result = Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
}

/**
 * Creates a `_.range` or `_.rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */
function createRange(fromRight) {
  return function(start, end, step) {
    if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
      end = step = undefined;
    }
    // Ensure the sign of `-0` is preserved.
    start = toFinite(start);
    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = toFinite(end);
    }
    step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
    return baseRange(start, end, step, fromRight);
  };
}

/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @see _.inRange, _.rangeRight
 * @example
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(-4);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * _.range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * _.range(0);
 * // => []
 */
var range = createRange();

/**
 * This method is like `_.range` except that it populates values in
 * descending order.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @see _.inRange, _.range
 * @example
 *
 * _.rangeRight(4);
 * // => [3, 2, 1, 0]
 *
 * _.rangeRight(-4);
 * // => [-3, -2, -1, 0]
 *
 * _.rangeRight(1, 5);
 * // => [4, 3, 2, 1]
 *
 * _.rangeRight(0, 20, 5);
 * // => [15, 10, 5, 0]
 *
 * _.rangeRight(0, -4, -1);
 * // => [-3, -2, -1, 0]
 *
 * _.rangeRight(1, 4, 0);
 * // => [1, 1, 1]
 *
 * _.rangeRight(0);
 * // => []
 */
var rangeRight = createRange(true);

/** Used to compose bitmasks for function metadata. */
var WRAP_REARG_FLAG = 256;

/**
 * Creates a function that invokes `func` with arguments arranged according
 * to the specified `indexes` where the argument value at the first index is
 * provided as the first argument, the argument value at the second index is
 * provided as the second argument, and so on.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} func The function to rearrange arguments for.
 * @param {...(number|number[])} indexes The arranged argument indexes.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var rearged = _.rearg(function(a, b, c) {
 *   return [a, b, c];
 * }, [2, 0, 1]);
 *
 * rearged('b', 'c', 'a')
 * // => ['a', 'b', 'c']
 */
var rearg = flatRest(function(func, indexes) {
  return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
});

/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */
function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function(value, index, collection) {
    accumulator = initAccum
      ? (initAccum = false, value)
      : iteratee(accumulator, value, index, collection);
  });
  return accumulator;
}

/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduceRight
 * @example
 *
 * _.reduce([1, 2], function(sum, n) {
 *   return sum + n;
 * }, 0);
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 *   return result;
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */
function reduce(collection, iteratee, accumulator) {
  var func = isArray(collection) ? arrayReduce : baseReduce,
      initAccum = arguments.length < 3;

  return func(collection, baseIteratee(iteratee), accumulator, initAccum, baseEach);
}

/**
 * A specialized version of `_.reduceRight` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the last element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduceRight(array, iteratee, accumulator, initAccum) {
  var length = array == null ? 0 : array.length;
  if (initAccum && length) {
    accumulator = array[--length];
  }
  while (length--) {
    accumulator = iteratee(accumulator, array[length], length, array);
  }
  return accumulator;
}

/**
 * This method is like `_.reduce` except that it iterates over elements of
 * `collection` from right to left.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduce
 * @example
 *
 * var array = [[0, 1], [2, 3], [4, 5]];
 *
 * _.reduceRight(array, function(flattened, other) {
 *   return flattened.concat(other);
 * }, []);
 * // => [4, 5, 2, 3, 0, 1]
 */
function reduceRight(collection, iteratee, accumulator) {
  var func = isArray(collection) ? arrayReduceRight : baseReduce,
      initAccum = arguments.length < 3;

  return func(collection, baseIteratee(iteratee), accumulator, initAccum, baseEachRight);
}

/**
 * The opposite of `_.filter`; this method returns the elements of `collection`
 * that `predicate` does **not** return truthy for.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.filter
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': false },
 *   { 'user': 'fred',   'age': 40, 'active': true }
 * ];
 *
 * _.reject(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.reject(users, { 'age': 40, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.reject(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.reject(users, 'active');
 * // => objects for ['barney']
 */
function reject(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, negate(baseIteratee(predicate)));
}

/**
 * Removes all elements from `array` that `predicate` returns truthy for
 * and returns an array of the removed elements. The predicate is invoked
 * with three arguments: (value, index, array).
 *
 * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
 * to pull elements from an array by value.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new array of removed elements.
 * @example
 *
 * var array = [1, 2, 3, 4];
 * var evens = _.remove(array, function(n) {
 *   return n % 2 == 0;
 * });
 *
 * console.log(array);
 * // => [1, 3]
 *
 * console.log(evens);
 * // => [2, 4]
 */
function remove(array, predicate) {
  var result = [];
  if (!(array && array.length)) {
    return result;
  }
  var index = -1,
      indexes = [],
      length = array.length;

  predicate = baseIteratee(predicate);
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result.push(value);
      indexes.push(index);
    }
  }
  basePullAt(array, indexes);
  return result;
}

/**
 * Repeats the given string `n` times.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to repeat.
 * @param {number} [n=1] The number of times to repeat the string.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {string} Returns the repeated string.
 * @example
 *
 * _.repeat('*', 3);
 * // => '***'
 *
 * _.repeat('abc', 2);
 * // => 'abcabc'
 *
 * _.repeat('abc', 0);
 * // => ''
 */
function repeat(string, n, guard) {
  if ((guard ? isIterateeCall(string, n, guard) : n === undefined)) {
    n = 1;
  } else {
    n = toInteger(n);
  }
  return baseRepeat(toString(string), n);
}

/**
 * Replaces matches for `pattern` in `string` with `replacement`.
 *
 * **Note:** This method is based on
 * [`String#replace`](https://mdn.io/String/replace).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to modify.
 * @param {RegExp|string} pattern The pattern to replace.
 * @param {Function|string} replacement The match replacement.
 * @returns {string} Returns the modified string.
 * @example
 *
 * _.replace('Hi Fred', 'Fred', 'Barney');
 * // => 'Hi Barney'
 */
function replace() {
  var args = arguments,
      string = toString(args[0]);

  return args.length < 3 ? string : string.replace(args[1], args[2]);
}

/** Error message constants. */
var FUNC_ERROR_TEXT$2 = 'Expected a function';

/**
 * Creates a function that invokes `func` with the `this` binding of the
 * created function and arguments from `start` and beyond provided as
 * an array.
 *
 * **Note:** This method is based on the
 * [rest parameter](https://mdn.io/rest_parameters).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Function
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var say = _.rest(function(what, names) {
 *   return what + ' ' + _.initial(names).join(', ') +
 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
 * });
 *
 * say('hello', 'fred', 'barney', 'pebbles');
 * // => 'hello fred, barney, & pebbles'
 */
function rest(func, start) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$2);
  }
  start = start === undefined ? start : toInteger(start);
  return baseRest(func, start);
}

/**
 * This method is like `_.get` except that if the resolved value is a
 * function it's invoked with the `this` binding of its parent object and
 * its result is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to resolve.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
 *
 * _.result(object, 'a[0].b.c1');
 * // => 3
 *
 * _.result(object, 'a[0].b.c2');
 * // => 4
 *
 * _.result(object, 'a[0].b.c3', 'default');
 * // => 'default'
 *
 * _.result(object, 'a[0].b.c3', _.constant('default'));
 * // => 'default'
 */
function result(object, path, defaultValue) {
  path = castPath(path, object);

  var index = -1,
      length = path.length;

  // Ensure the loop is entered when path is empty.
  if (!length) {
    length = 1;
    object = undefined;
  }
  while (++index < length) {
    var value = object == null ? undefined : object[toKey(path[index])];
    if (value === undefined) {
      index = length;
      value = defaultValue;
    }
    object = isFunction(value) ? value.call(object) : value;
  }
  return object;
}

/** Used for built-in method references. */
var arrayProto$1 = Array.prototype;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeReverse = arrayProto$1.reverse;

/**
 * Reverses `array` so that the first element becomes the last, the second
 * element becomes the second to last, and so on.
 *
 * **Note:** This method mutates `array` and is based on
 * [`Array#reverse`](https://mdn.io/Array/reverse).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @returns {Array} Returns `array`.
 * @example
 *
 * var array = [1, 2, 3];
 *
 * _.reverse(array);
 * // => [3, 2, 1]
 *
 * console.log(array);
 * // => [3, 2, 1]
 */
function reverse(array) {
  return array == null ? array : nativeReverse.call(array);
}

/**
 * Computes `number` rounded to `precision`.
 *
 * @static
 * @memberOf _
 * @since 3.10.0
 * @category Math
 * @param {number} number The number to round.
 * @param {number} [precision=0] The precision to round to.
 * @returns {number} Returns the rounded number.
 * @example
 *
 * _.round(4.006);
 * // => 4
 *
 * _.round(4.006, 2);
 * // => 4.01
 *
 * _.round(4060, -2);
 * // => 4100
 */
var round = createRound('round');

/**
 * A specialized version of `_.sample` for arrays.
 *
 * @private
 * @param {Array} array The array to sample.
 * @returns {*} Returns the random element.
 */
function arraySample(array) {
  var length = array.length;
  return length ? array[baseRandom(0, length - 1)] : undefined;
}

/**
 * The base implementation of `_.sample`.
 *
 * @private
 * @param {Array|Object} collection The collection to sample.
 * @returns {*} Returns the random element.
 */
function baseSample(collection) {
  return arraySample(values(collection));
}

/**
 * Gets a random element from `collection`.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to sample.
 * @returns {*} Returns the random element.
 * @example
 *
 * _.sample([1, 2, 3, 4]);
 * // => 2
 */
function sample(collection) {
  var func = isArray(collection) ? arraySample : baseSample;
  return func(collection);
}

/**
 * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
 *
 * @private
 * @param {Array} array The array to shuffle.
 * @param {number} [size=array.length] The size of `array`.
 * @returns {Array} Returns `array`.
 */
function shuffleSelf(array, size) {
  var index = -1,
      length = array.length,
      lastIndex = length - 1;

  size = size === undefined ? length : size;
  while (++index < size) {
    var rand = baseRandom(index, lastIndex),
        value = array[rand];

    array[rand] = array[index];
    array[index] = value;
  }
  array.length = size;
  return array;
}

/**
 * A specialized version of `_.sampleSize` for arrays.
 *
 * @private
 * @param {Array} array The array to sample.
 * @param {number} n The number of elements to sample.
 * @returns {Array} Returns the random elements.
 */
function arraySampleSize(array, n) {
  return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
}

/**
 * The base implementation of `_.sampleSize` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to sample.
 * @param {number} n The number of elements to sample.
 * @returns {Array} Returns the random elements.
 */
function baseSampleSize(collection, n) {
  var array = values(collection);
  return shuffleSelf(array, baseClamp(n, 0, array.length));
}

/**
 * Gets `n` random elements at unique keys from `collection` up to the
 * size of `collection`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to sample.
 * @param {number} [n=1] The number of elements to sample.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the random elements.
 * @example
 *
 * _.sampleSize([1, 2, 3], 2);
 * // => [3, 1]
 *
 * _.sampleSize([1, 2, 3], 4);
 * // => [2, 3, 1]
 */
function sampleSize(collection, n, guard) {
  if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
    n = 1;
  } else {
    n = toInteger(n);
  }
  var func = isArray(collection) ? arraySampleSize : baseSampleSize;
  return func(collection, n);
}

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

/**
 * This method is like `_.set` except that it accepts `customizer` which is
 * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
 * path creation is handled by the method instead. The `customizer` is invoked
 * with three arguments: (nsValue, key, nsObject).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {};
 *
 * _.setWith(object, '[0][1]', 'a', Object);
 * // => { '0': { '1': 'a' } }
 */
function setWith(object, path, value, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined;
  return object == null ? object : baseSet(object, path, value, customizer);
}

/**
 * A specialized version of `_.shuffle` for arrays.
 *
 * @private
 * @param {Array} array The array to shuffle.
 * @returns {Array} Returns the new shuffled array.
 */
function arrayShuffle(array) {
  return shuffleSelf(copyArray(array));
}

/**
 * The base implementation of `_.shuffle`.
 *
 * @private
 * @param {Array|Object} collection The collection to shuffle.
 * @returns {Array} Returns the new shuffled array.
 */
function baseShuffle(collection) {
  return shuffleSelf(values(collection));
}

/**
 * Creates an array of shuffled values, using a version of the
 * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to shuffle.
 * @returns {Array} Returns the new shuffled array.
 * @example
 *
 * _.shuffle([1, 2, 3, 4]);
 * // => [4, 1, 3, 2]
 */
function shuffle(collection) {
  var func = isArray(collection) ? arrayShuffle : baseShuffle;
  return func(collection);
}

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/**
 * Gets the size of `collection` by returning its length for array-like
 * values or the number of own enumerable string keyed properties for objects.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @returns {number} Returns the collection size.
 * @example
 *
 * _.size([1, 2, 3]);
 * // => 3
 *
 * _.size({ 'a': 1, 'b': 2 });
 * // => 2
 *
 * _.size('pebbles');
 * // => 7
 */
function size(collection) {
  if (collection == null) {
    return 0;
  }
  if (isArrayLike(collection)) {
    return isString(collection) ? stringSize(collection) : collection.length;
  }
  var tag = getTag$1(collection);
  if (tag == mapTag || tag == setTag) {
    return collection.size;
  }
  return baseKeys(collection).length;
}

/**
 * Creates a slice of `array` from `start` up to, but not including, `end`.
 *
 * **Note:** This method is used instead of
 * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
 * returned.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function slice(array, start, end) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
    start = 0;
    end = length;
  }
  else {
    start = start == null ? 0 : toInteger(start);
    end = end === undefined ? length : toInteger(end);
  }
  return baseSlice(array, start, end);
}

/**
 * Converts `string` to
 * [snake case](https://en.wikipedia.org/wiki/Snake_case).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the snake cased string.
 * @example
 *
 * _.snakeCase('Foo Bar');
 * // => 'foo_bar'
 *
 * _.snakeCase('fooBar');
 * // => 'foo_bar'
 *
 * _.snakeCase('--FOO-BAR--');
 * // => 'foo_bar'
 */
var snakeCase = createCompounder(function(result, word, index) {
  return result + (index ? '_' : '') + word.toLowerCase();
});

/**
 * The base implementation of `_.some` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function baseSome(collection, predicate) {
  var result;

  baseEach(collection, function(value, index, collection) {
    result = predicate(value, index, collection);
    return !result;
  });
  return !!result;
}

/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * Iteration is stopped once `predicate` returns truthy. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 * @example
 *
 * _.some([null, 0, 'yes', false], Boolean);
 * // => true
 *
 * var users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.some(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.some(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.some(users, 'active');
 * // => true
 */
function some(collection, predicate, guard) {
  var func = isArray(collection) ? arraySome : baseSome;
  if (guard && isIterateeCall(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, baseIteratee(predicate));
}

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 30 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
 */
var sortBy = baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
});

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH$4 = 4294967295,
    MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH$4 - 1;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeFloor = Math.floor,
    nativeMin$4 = Math.min;

/**
 * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
 * which invokes `iteratee` for `value` and each element of `array` to compute
 * their sort ranking. The iteratee is invoked with one argument; (value).
 *
 * @private
 * @param {Array} array The sorted array to inspect.
 * @param {*} value The value to evaluate.
 * @param {Function} iteratee The iteratee invoked per element.
 * @param {boolean} [retHighest] Specify returning the highest qualified index.
 * @returns {number} Returns the index at which `value` should be inserted
 *  into `array`.
 */
function baseSortedIndexBy(array, value, iteratee, retHighest) {
  var low = 0,
      high = array == null ? 0 : array.length;
  if (high === 0) {
    return 0;
  }

  value = iteratee(value);
  var valIsNaN = value !== value,
      valIsNull = value === null,
      valIsSymbol = isSymbol(value),
      valIsUndefined = value === undefined;

  while (low < high) {
    var mid = nativeFloor((low + high) / 2),
        computed = iteratee(array[mid]),
        othIsDefined = computed !== undefined,
        othIsNull = computed === null,
        othIsReflexive = computed === computed,
        othIsSymbol = isSymbol(computed);

    if (valIsNaN) {
      var setLow = retHighest || othIsReflexive;
    } else if (valIsUndefined) {
      setLow = othIsReflexive && (retHighest || othIsDefined);
    } else if (valIsNull) {
      setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
    } else if (valIsSymbol) {
      setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
    } else if (othIsNull || othIsSymbol) {
      setLow = false;
    } else {
      setLow = retHighest ? (computed <= value) : (computed < value);
    }
    if (setLow) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return nativeMin$4(high, MAX_ARRAY_INDEX);
}

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH$3 = 4294967295,
    HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH$3 >>> 1;

/**
 * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
 * performs a binary search of `array` to determine the index at which `value`
 * should be inserted into `array` in order to maintain its sort order.
 *
 * @private
 * @param {Array} array The sorted array to inspect.
 * @param {*} value The value to evaluate.
 * @param {boolean} [retHighest] Specify returning the highest qualified index.
 * @returns {number} Returns the index at which `value` should be inserted
 *  into `array`.
 */
function baseSortedIndex(array, value, retHighest) {
  var low = 0,
      high = array == null ? low : array.length;

  if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
    while (low < high) {
      var mid = (low + high) >>> 1,
          computed = array[mid];

      if (computed !== null && !isSymbol(computed) &&
          (retHighest ? (computed <= value) : (computed < value))) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return high;
  }
  return baseSortedIndexBy(array, value, identity, retHighest);
}

/**
 * Uses a binary search to determine the lowest index at which `value`
 * should be inserted into `array` in order to maintain its sort order.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The sorted array to inspect.
 * @param {*} value The value to evaluate.
 * @returns {number} Returns the index at which `value` should be inserted
 *  into `array`.
 * @example
 *
 * _.sortedIndex([30, 50], 40);
 * // => 1
 */
function sortedIndex(array, value) {
  return baseSortedIndex(array, value);
}

/**
 * This method is like `_.sortedIndex` except that it accepts `iteratee`
 * which is invoked for `value` and each element of `array` to compute their
 * sort ranking. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The sorted array to inspect.
 * @param {*} value The value to evaluate.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {number} Returns the index at which `value` should be inserted
 *  into `array`.
 * @example
 *
 * var objects = [{ 'x': 4 }, { 'x': 5 }];
 *
 * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
 * // => 0
 */
function sortedIndexBy(array, value, iteratee) {
  return baseSortedIndexBy(array, value, baseIteratee(iteratee));
}

/**
 * This method is like `_.indexOf` except that it performs a binary
 * search on a sorted `array`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 * @example
 *
 * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
 * // => 1
 */
function sortedIndexOf(array, value) {
  var length = array == null ? 0 : array.length;
  if (length) {
    var index = baseSortedIndex(array, value);
    if (index < length && eq(array[index], value)) {
      return index;
    }
  }
  return -1;
}

/**
 * This method is like `_.sortedIndex` except that it returns the highest
 * index at which `value` should be inserted into `array` in order to
 * maintain its sort order.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The sorted array to inspect.
 * @param {*} value The value to evaluate.
 * @returns {number} Returns the index at which `value` should be inserted
 *  into `array`.
 * @example
 *
 * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
 * // => 4
 */
function sortedLastIndex(array, value) {
  return baseSortedIndex(array, value, true);
}

/**
 * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
 * which is invoked for `value` and each element of `array` to compute their
 * sort ranking. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The sorted array to inspect.
 * @param {*} value The value to evaluate.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {number} Returns the index at which `value` should be inserted
 *  into `array`.
 * @example
 *
 * var objects = [{ 'x': 4 }, { 'x': 5 }];
 *
 * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
 * // => 1
 *
 * // The `_.property` iteratee shorthand.
 * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
 * // => 1
 */
function sortedLastIndexBy(array, value, iteratee) {
  return baseSortedIndexBy(array, value, baseIteratee(iteratee), true);
}

/**
 * This method is like `_.lastIndexOf` except that it performs a binary
 * search on a sorted `array`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 * @example
 *
 * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
 * // => 3
 */
function sortedLastIndexOf(array, value) {
  var length = array == null ? 0 : array.length;
  if (length) {
    var index = baseSortedIndex(array, value, true) - 1;
    if (eq(array[index], value)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseSortedUniq(array, iteratee) {
  var index = -1,
      length = array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    if (!index || !eq(computed, seen)) {
      var seen = computed;
      result[resIndex++] = value === 0 ? 0 : value;
    }
  }
  return result;
}

/**
 * This method is like `_.uniq` except that it's designed and optimized
 * for sorted arrays.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.sortedUniq([1, 1, 2]);
 * // => [1, 2]
 */
function sortedUniq(array) {
  return (array && array.length)
    ? baseSortedUniq(array)
    : [];
}

/**
 * This method is like `_.uniqBy` except that it's designed and optimized
 * for sorted arrays.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
 * // => [1.1, 2.3]
 */
function sortedUniqBy(array, iteratee) {
  return (array && array.length)
    ? baseSortedUniq(array, baseIteratee(iteratee))
    : [];
}

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH$2 = 4294967295;

/**
 * Splits `string` by `separator`.
 *
 * **Note:** This method is based on
 * [`String#split`](https://mdn.io/String/split).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to split.
 * @param {RegExp|string} separator The separator pattern to split by.
 * @param {number} [limit] The length to truncate results to.
 * @returns {Array} Returns the string segments.
 * @example
 *
 * _.split('a-b-c', '-', 2);
 * // => ['a', 'b']
 */
function split(string, separator, limit) {
  if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
    separator = limit = undefined;
  }
  limit = limit === undefined ? MAX_ARRAY_LENGTH$2 : limit >>> 0;
  if (!limit) {
    return [];
  }
  string = toString(string);
  if (string && (
        typeof separator == 'string' ||
        (separator != null && !isRegExp(separator))
      )) {
    separator = baseToString(separator);
    if (!separator && hasUnicode(string)) {
      return castSlice(stringToArray(string), 0, limit);
    }
  }
  return string.split(separator, limit);
}

/** Error message constants. */
var FUNC_ERROR_TEXT$1 = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$3 = Math.max;

/**
 * Creates a function that invokes `func` with the `this` binding of the
 * create function and an array of arguments much like
 * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
 *
 * **Note:** This method is based on the
 * [spread operator](https://mdn.io/spread_operator).
 *
 * @static
 * @memberOf _
 * @since 3.2.0
 * @category Function
 * @param {Function} func The function to spread arguments over.
 * @param {number} [start=0] The start position of the spread.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var say = _.spread(function(who, what) {
 *   return who + ' says ' + what;
 * });
 *
 * say(['fred', 'hello']);
 * // => 'fred says hello'
 *
 * var numbers = Promise.all([
 *   Promise.resolve(40),
 *   Promise.resolve(36)
 * ]);
 *
 * numbers.then(_.spread(function(x, y) {
 *   return x + y;
 * }));
 * // => a Promise of 76
 */
function spread(func, start) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  start = start == null ? 0 : nativeMax$3(toInteger(start), 0);
  return baseRest(function(args) {
    var array = args[start],
        otherArgs = castSlice(args, 0, start);

    if (array) {
      arrayPush(otherArgs, array);
    }
    return apply(func, this, otherArgs);
  });
}

/**
 * Converts `string` to
 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
 *
 * @static
 * @memberOf _
 * @since 3.1.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the start cased string.
 * @example
 *
 * _.startCase('--foo-bar--');
 * // => 'Foo Bar'
 *
 * _.startCase('fooBar');
 * // => 'Foo Bar'
 *
 * _.startCase('__FOO_BAR__');
 * // => 'FOO BAR'
 */
var startCase = createCompounder(function(result, word, index) {
  return result + (index ? ' ' : '') + upperFirst(word);
});

/**
 * Checks if `string` starts with the given target string.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {string} [target] The string to search for.
 * @param {number} [position=0] The position to search from.
 * @returns {boolean} Returns `true` if `string` starts with `target`,
 *  else `false`.
 * @example
 *
 * _.startsWith('abc', 'a');
 * // => true
 *
 * _.startsWith('abc', 'b');
 * // => false
 *
 * _.startsWith('abc', 'b', 1);
 * // => true
 */
function startsWith(string, target, position) {
  string = toString(string);
  position = position == null
    ? 0
    : baseClamp(toInteger(position), 0, string.length);

  target = baseToString(target);
  return string.slice(position, position + target.length) == target;
}

/**
 * This method returns a new empty object.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Object} Returns the new empty object.
 * @example
 *
 * var objects = _.times(2, _.stubObject);
 *
 * console.log(objects);
 * // => [{}, {}]
 *
 * console.log(objects[0] === objects[1]);
 * // => false
 */
function stubObject() {
  return {};
}

/**
 * This method returns an empty string.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {string} Returns the empty string.
 * @example
 *
 * _.times(2, _.stubString);
 * // => ['', '']
 */
function stubString() {
  return '';
}

/**
 * This method returns `true`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `true`.
 * @example
 *
 * _.times(2, _.stubTrue);
 * // => [true, true]
 */
function stubTrue() {
  return true;
}

/**
 * Subtract two numbers.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {number} minuend The first number in a subtraction.
 * @param {number} subtrahend The second number in a subtraction.
 * @returns {number} Returns the difference.
 * @example
 *
 * _.subtract(6, 4);
 * // => 2
 */
var subtract = createMathOperation(function(minuend, subtrahend) {
  return minuend - subtrahend;
}, 0);

/**
 * Computes the sum of the values in `array`.
 *
 * @static
 * @memberOf _
 * @since 3.4.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {number} Returns the sum.
 * @example
 *
 * _.sum([4, 2, 8, 6]);
 * // => 20
 */
function sum(array) {
  return (array && array.length)
    ? baseSum(array, identity)
    : 0;
}

/**
 * This method is like `_.sum` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the value to be summed.
 * The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {number} Returns the sum.
 * @example
 *
 * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
 *
 * _.sumBy(objects, function(o) { return o.n; });
 * // => 20
 *
 * // The `_.property` iteratee shorthand.
 * _.sumBy(objects, 'n');
 * // => 20
 */
function sumBy(array, iteratee) {
  return (array && array.length)
    ? baseSum(array, baseIteratee(iteratee))
    : 0;
}

/**
 * Gets all but the first element of `array`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.tail([1, 2, 3]);
 * // => [2, 3]
 */
function tail(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseSlice(array, 1, length) : [];
}

/**
 * Creates a slice of `array` with `n` elements taken from the beginning.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to take.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.take([1, 2, 3]);
 * // => [1]
 *
 * _.take([1, 2, 3], 2);
 * // => [1, 2]
 *
 * _.take([1, 2, 3], 5);
 * // => [1, 2, 3]
 *
 * _.take([1, 2, 3], 0);
 * // => []
 */
function take(array, n, guard) {
  if (!(array && array.length)) {
    return [];
  }
  n = (guard || n === undefined) ? 1 : toInteger(n);
  return baseSlice(array, 0, n < 0 ? 0 : n);
}

/**
 * Creates a slice of `array` with `n` elements taken from the end.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to take.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.takeRight([1, 2, 3]);
 * // => [3]
 *
 * _.takeRight([1, 2, 3], 2);
 * // => [2, 3]
 *
 * _.takeRight([1, 2, 3], 5);
 * // => [1, 2, 3]
 *
 * _.takeRight([1, 2, 3], 0);
 * // => []
 */
function takeRight(array, n, guard) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  n = (guard || n === undefined) ? 1 : toInteger(n);
  n = length - n;
  return baseSlice(array, n < 0 ? 0 : n, length);
}

/**
 * Creates a slice of `array` with elements taken from the end. Elements are
 * taken until `predicate` returns falsey. The predicate is invoked with
 * three arguments: (value, index, array).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': false }
 * ];
 *
 * _.takeRightWhile(users, function(o) { return !o.active; });
 * // => objects for ['fred', 'pebbles']
 *
 * // The `_.matches` iteratee shorthand.
 * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
 * // => objects for ['pebbles']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.takeRightWhile(users, ['active', false]);
 * // => objects for ['fred', 'pebbles']
 *
 * // The `_.property` iteratee shorthand.
 * _.takeRightWhile(users, 'active');
 * // => []
 */
function takeRightWhile(array, predicate) {
  return (array && array.length)
    ? baseWhile(array, baseIteratee(predicate), false, true)
    : [];
}

/**
 * Creates a slice of `array` with elements taken from the beginning. Elements
 * are taken until `predicate` returns falsey. The predicate is invoked with
 * three arguments: (value, index, array).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.takeWhile(users, function(o) { return !o.active; });
 * // => objects for ['barney', 'fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.takeWhile(users, { 'user': 'barney', 'active': false });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.takeWhile(users, ['active', false]);
 * // => objects for ['barney', 'fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.takeWhile(users, 'active');
 * // => []
 */
function takeWhile(array, predicate) {
  return (array && array.length)
    ? baseWhile(array, baseIteratee(predicate))
    : [];
}

/**
 * This method invokes `interceptor` and returns `value`. The interceptor
 * is invoked with one argument; (value). The purpose of this method is to
 * "tap into" a method chain sequence in order to modify intermediate results.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Seq
 * @param {*} value The value to provide to `interceptor`.
 * @param {Function} interceptor The function to invoke.
 * @returns {*} Returns `value`.
 * @example
 *
 * _([1, 2, 3])
 *  .tap(function(array) {
 *    // Mutate input array.
 *    array.pop();
 *  })
 *  .reverse()
 *  .value();
 * // => [2, 1]
 */
function tap(value, interceptor) {
  interceptor(value);
  return value;
}

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

/**
 * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
 * of source objects to the destination object for all destination properties
 * that resolve to `undefined`.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to assign.
 * @param {Object} object The parent object of `objValue`.
 * @returns {*} Returns the value to assign.
 */
function customDefaultsAssignIn(objValue, srcValue, key, object) {
  if (objValue === undefined ||
      (eq(objValue, objectProto$2[key]) && !hasOwnProperty$2.call(object, key))) {
    return srcValue;
  }
  return objValue;
}

/** Used to escape characters for inclusion in compiled string literals. */
var stringEscapes = {
  '\\': '\\',
  "'": "'",
  '\n': 'n',
  '\r': 'r',
  '\u2028': 'u2028',
  '\u2029': 'u2029'
};

/**
 * Used by `_.template` to escape characters for inclusion in compiled string literals.
 *
 * @private
 * @param {string} chr The matched character to escape.
 * @returns {string} Returns the escaped character.
 */
function escapeStringChar(chr) {
  return '\\' + stringEscapes[chr];
}

/** Used to match template delimiters. */
var reInterpolate = /<%=([\s\S]+?)%>/g;

/** Used to match template delimiters. */
var reEscape = /<%-([\s\S]+?)%>/g;

/** Used to match template delimiters. */
var reEvaluate = /<%([\s\S]+?)%>/g;

/**
 * By default, the template delimiters used by lodash are like those in
 * embedded Ruby (ERB) as well as ES2015 template strings. Change the
 * following template settings to use alternative delimiters.
 *
 * @static
 * @memberOf _
 * @type {Object}
 */
var templateSettings = {

  /**
   * Used to detect `data` property values to be HTML-escaped.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  'escape': reEscape,

  /**
   * Used to detect code to be evaluated.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  'evaluate': reEvaluate,

  /**
   * Used to detect `data` property values to inject.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  'interpolate': reInterpolate,

  /**
   * Used to reference the data object in the template text.
   *
   * @memberOf _.templateSettings
   * @type {string}
   */
  'variable': '',

  /**
   * Used to import variables into the compiled template.
   *
   * @memberOf _.templateSettings
   * @type {Object}
   */
  'imports': {

    /**
     * A reference to the `lodash` function.
     *
     * @memberOf _.templateSettings.imports
     * @type {Function}
     */
    '_': { 'escape': escape }
  }
};

/** Error message constants. */
var INVALID_TEMPL_VAR_ERROR_TEXT = 'Invalid `variable` option passed into `_.template`';

/** Used to match empty string literals in compiled template source. */
var reEmptyStringLeading = /\b__p \+= '';/g,
    reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
    reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

/**
 * Used to validate the `validate` option in `_.template` variable.
 *
 * Forbids characters which could potentially change the meaning of the function argument definition:
 * - "()," (modification of function parameters)
 * - "=" (default value)
 * - "[]{}" (destructuring of function parameters)
 * - "/" (beginning of a comment)
 * - whitespace
 */
var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;

/**
 * Used to match
 * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
 */
var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

/** Used to ensure capturing order of template delimiters. */
var reNoMatch = /($^)/;

/** Used to match unescaped characters in compiled string literals. */
var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * Creates a compiled template function that can interpolate data properties
 * in "interpolate" delimiters, HTML-escape interpolated data properties in
 * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
 * properties may be accessed as free variables in the template. If a setting
 * object is given, it takes precedence over `_.templateSettings` values.
 *
 * **Note:** In the development build `_.template` utilizes
 * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
 * for easier debugging.
 *
 * For more information on precompiling templates see
 * [lodash's custom builds documentation](https://lodash.com/custom-builds).
 *
 * For more information on Chrome extension sandboxes see
 * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category String
 * @param {string} [string=''] The template string.
 * @param {Object} [options={}] The options object.
 * @param {RegExp} [options.escape=_.templateSettings.escape]
 *  The HTML "escape" delimiter.
 * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
 *  The "evaluate" delimiter.
 * @param {Object} [options.imports=_.templateSettings.imports]
 *  An object to import into the template as free variables.
 * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
 *  The "interpolate" delimiter.
 * @param {string} [options.sourceURL='templateSources[n]']
 *  The sourceURL of the compiled template.
 * @param {string} [options.variable='obj']
 *  The data object variable name.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the compiled template function.
 * @example
 *
 * // Use the "interpolate" delimiter to create a compiled template.
 * var compiled = _.template('hello <%= user %>!');
 * compiled({ 'user': 'fred' });
 * // => 'hello fred!'
 *
 * // Use the HTML "escape" delimiter to escape data property values.
 * var compiled = _.template('<b><%- value %></b>');
 * compiled({ 'value': '<script>' });
 * // => '<b>&lt;script&gt;</b>'
 *
 * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
 * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
 * compiled({ 'users': ['fred', 'barney'] });
 * // => '<li>fred</li><li>barney</li>'
 *
 * // Use the internal `print` function in "evaluate" delimiters.
 * var compiled = _.template('<% print("hello " + user); %>!');
 * compiled({ 'user': 'barney' });
 * // => 'hello barney!'
 *
 * // Use the ES template literal delimiter as an "interpolate" delimiter.
 * // Disable support by replacing the "interpolate" delimiter.
 * var compiled = _.template('hello ${ user }!');
 * compiled({ 'user': 'pebbles' });
 * // => 'hello pebbles!'
 *
 * // Use backslashes to treat delimiters as plain text.
 * var compiled = _.template('<%= "\\<%- value %\\>" %>');
 * compiled({ 'value': 'ignored' });
 * // => '<%- value %>'
 *
 * // Use the `imports` option to import `jQuery` as `jq`.
 * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
 * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
 * compiled({ 'users': ['fred', 'barney'] });
 * // => '<li>fred</li><li>barney</li>'
 *
 * // Use the `sourceURL` option to specify a custom sourceURL for the template.
 * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
 * compiled(data);
 * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
 *
 * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
 * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
 * compiled.source;
 * // => function(data) {
 * //   var __t, __p = '';
 * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
 * //   return __p;
 * // }
 *
 * // Use custom template delimiters.
 * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
 * var compiled = _.template('hello {{ user }}!');
 * compiled({ 'user': 'mustache' });
 * // => 'hello mustache!'
 *
 * // Use the `source` property to inline compiled templates for meaningful
 * // line numbers in error messages and stack traces.
 * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
 *   var JST = {\
 *     "main": ' + _.template(mainText).source + '\
 *   };\
 * ');
 */
function template(string, options, guard) {
  // Based on John Resig's `tmpl` implementation
  // (http://ejohn.org/blog/javascript-micro-templating/)
  // and Laura Doktorova's doT.js (https://github.com/olado/doT).
  var settings = templateSettings.imports._.templateSettings || templateSettings;

  if (guard && isIterateeCall(string, options, guard)) {
    options = undefined;
  }
  string = toString(string);
  options = assignInWith({}, options, settings, customDefaultsAssignIn);

  var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
      importsKeys = keys(imports),
      importsValues = baseValues(imports, importsKeys);

  var isEscaping,
      isEvaluating,
      index = 0,
      interpolate = options.interpolate || reNoMatch,
      source = "__p += '";

  // Compile the regexp to match each delimiter.
  var reDelimiters = RegExp(
    (options.escape || reNoMatch).source + '|' +
    interpolate.source + '|' +
    (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
    (options.evaluate || reNoMatch).source + '|$'
  , 'g');

  // Use a sourceURL for easier debugging.
  // The sourceURL gets injected into the source that's eval-ed, so be careful
  // to normalize all kinds of whitespace, so e.g. newlines (and unicode versions of it) can't sneak in
  // and escape the comment, thus injecting code that gets evaled.
  var sourceURL = hasOwnProperty$1.call(options, 'sourceURL')
    ? ('//# sourceURL=' +
       (options.sourceURL + '').replace(/\s/g, ' ') +
       '\n')
    : '';

  string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
    interpolateValue || (interpolateValue = esTemplateValue);

    // Escape characters that can't be included in string literals.
    source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

    // Replace delimiters with snippets.
    if (escapeValue) {
      isEscaping = true;
      source += "' +\n__e(" + escapeValue + ") +\n'";
    }
    if (evaluateValue) {
      isEvaluating = true;
      source += "';\n" + evaluateValue + ";\n__p += '";
    }
    if (interpolateValue) {
      source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
    }
    index = offset + match.length;

    // The JS engine embedded in Adobe products needs `match` returned in
    // order to produce the correct `offset` value.
    return match;
  });

  source += "';\n";

  // If `variable` is not specified wrap a with-statement around the generated
  // code to add the data object to the top of the scope chain.
  var variable = hasOwnProperty$1.call(options, 'variable') && options.variable;
  if (!variable) {
    source = 'with (obj) {\n' + source + '\n}\n';
  }
  // Throw an error if a forbidden character was found in `variable`, to prevent
  // potential command injection attacks.
  else if (reForbiddenIdentifierChars.test(variable)) {
    throw new Error(INVALID_TEMPL_VAR_ERROR_TEXT);
  }

  // Cleanup code by stripping empty strings.
  source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
    .replace(reEmptyStringMiddle, '$1')
    .replace(reEmptyStringTrailing, '$1;');

  // Frame code as the function body.
  source = 'function(' + (variable || 'obj') + ') {\n' +
    (variable
      ? ''
      : 'obj || (obj = {});\n'
    ) +
    "var __t, __p = ''" +
    (isEscaping
       ? ', __e = _.escape'
       : ''
    ) +
    (isEvaluating
      ? ', __j = Array.prototype.join;\n' +
        "function print() { __p += __j.call(arguments, '') }\n"
      : ';\n'
    ) +
    source +
    'return __p\n}';

  var result = attempt(function() {
    return Function(importsKeys, sourceURL + 'return ' + source)
      .apply(undefined, importsValues);
  });

  // Provide the compiled function's source by its `toString` method or
  // the `source` property as a convenience for inlining compiled templates.
  result.source = source;
  if (isError(result)) {
    throw result;
  }
  return result;
}

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * This method is like `_.tap` except that it returns the result of `interceptor`.
 * The purpose of this method is to "pass thru" values replacing intermediate
 * results in a method chain sequence.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Seq
 * @param {*} value The value to provide to `interceptor`.
 * @param {Function} interceptor The function to invoke.
 * @returns {*} Returns the result of `interceptor`.
 * @example
 *
 * _('  abc  ')
 *  .chain()
 *  .trim()
 *  .thru(function(value) {
 *    return [value];
 *  })
 *  .value();
 * // => ['abc']
 */
function thru(value, interceptor) {
  return interceptor(value);
}

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH$1 = 4294967295;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin$3 = Math.min;

/**
 * Invokes the iteratee `n` times, returning an array of the results of
 * each invocation. The iteratee is invoked with one argument; (index).
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 * @example
 *
 * _.times(3, String);
 * // => ['0', '1', '2']
 *
 *  _.times(4, _.constant(0));
 * // => [0, 0, 0, 0]
 */
function times(n, iteratee) {
  n = toInteger(n);
  if (n < 1 || n > MAX_SAFE_INTEGER$1) {
    return [];
  }
  var index = MAX_ARRAY_LENGTH$1,
      length = nativeMin$3(n, MAX_ARRAY_LENGTH$1);

  iteratee = castFunction(iteratee);
  n -= MAX_ARRAY_LENGTH$1;

  var result = baseTimes(length, iteratee);
  while (++index < n) {
    iteratee(index);
  }
  return result;
}

/**
 * Enables the wrapper to be iterable.
 *
 * @name Symbol.iterator
 * @memberOf _
 * @since 4.0.0
 * @category Seq
 * @returns {Object} Returns the wrapper object.
 * @example
 *
 * var wrapped = _([1, 2]);
 *
 * wrapped[Symbol.iterator]() === wrapped;
 * // => true
 *
 * Array.from(wrapped);
 * // => [1, 2]
 */
function wrapperToIterator() {
  return this;
}

/**
 * The base implementation of `wrapperValue` which returns the result of
 * performing a sequence of actions on the unwrapped `value`, where each
 * successive action is supplied the return value of the previous.
 *
 * @private
 * @param {*} value The unwrapped value.
 * @param {Array} actions Actions to perform to resolve the unwrapped value.
 * @returns {*} Returns the resolved value.
 */
function baseWrapperValue(value, actions) {
  var result = value;
  if (result instanceof LazyWrapper) {
    result = result.value();
  }
  return arrayReduce(actions, function(result, action) {
    return action.func.apply(action.thisArg, arrayPush([result], action.args));
  }, result);
}

/**
 * Executes the chain sequence to resolve the unwrapped value.
 *
 * @name value
 * @memberOf _
 * @since 0.1.0
 * @alias toJSON, valueOf
 * @category Seq
 * @returns {*} Returns the resolved unwrapped value.
 * @example
 *
 * _([1, 2, 3]).value();
 * // => [1, 2, 3]
 */
function wrapperValue() {
  return baseWrapperValue(this.__wrapped__, this.__actions__);
}

/**
 * Converts `string`, as a whole, to lower case just like
 * [String#toLowerCase](https://mdn.io/toLowerCase).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the lower cased string.
 * @example
 *
 * _.toLower('--Foo-Bar--');
 * // => '--foo-bar--'
 *
 * _.toLower('fooBar');
 * // => 'foobar'
 *
 * _.toLower('__FOO_BAR__');
 * // => '__foo_bar__'
 */
function toLower(value) {
  return toString(value).toLowerCase();
}

/**
 * Converts `value` to a property path array.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Util
 * @param {*} value The value to convert.
 * @returns {Array} Returns the new property path array.
 * @example
 *
 * _.toPath('a.b.c');
 * // => ['a', 'b', 'c']
 *
 * _.toPath('a[0].b.c');
 * // => ['a', '0', 'b', 'c']
 */
function toPath(value) {
  if (isArray(value)) {
    return arrayMap(value, toKey);
  }
  return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
}

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Converts `value` to a safe integer. A safe integer can be compared and
 * represented correctly.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toSafeInteger(3.2);
 * // => 3
 *
 * _.toSafeInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toSafeInteger(Infinity);
 * // => 9007199254740991
 *
 * _.toSafeInteger('3.2');
 * // => 3
 */
function toSafeInteger(value) {
  return value
    ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER)
    : (value === 0 ? value : 0);
}

/**
 * Converts `string`, as a whole, to upper case just like
 * [String#toUpperCase](https://mdn.io/toUpperCase).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the upper cased string.
 * @example
 *
 * _.toUpper('--foo-bar--');
 * // => '--FOO-BAR--'
 *
 * _.toUpper('fooBar');
 * // => 'FOOBAR'
 *
 * _.toUpper('__foo_bar__');
 * // => '__FOO_BAR__'
 */
function toUpper(value) {
  return toString(value).toUpperCase();
}

/**
 * An alternative to `_.reduce`; this method transforms `object` to a new
 * `accumulator` object which is the result of running each of its own
 * enumerable string keyed properties thru `iteratee`, with each invocation
 * potentially mutating the `accumulator` object. If `accumulator` is not
 * provided, a new object with the same `[[Prototype]]` will be used. The
 * iteratee is invoked with four arguments: (accumulator, value, key, object).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 1.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The custom accumulator value.
 * @returns {*} Returns the accumulated value.
 * @example
 *
 * _.transform([2, 3, 4], function(result, n) {
 *   result.push(n *= n);
 *   return n % 2 == 0;
 * }, []);
 * // => [4, 9]
 *
 * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] }
 */
function transform(object, iteratee, accumulator) {
  var isArr = isArray(object),
      isArrLike = isArr || isBuffer(object) || isTypedArray(object);

  iteratee = baseIteratee(iteratee);
  if (accumulator == null) {
    var Ctor = object && object.constructor;
    if (isArrLike) {
      accumulator = isArr ? new Ctor : [];
    }
    else if (isObject(object)) {
      accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
    }
    else {
      accumulator = {};
    }
  }
  (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
    return iteratee(accumulator, value, index, object);
  });
  return accumulator;
}

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the last unmatched string symbol.
 */
function charsEndIndex(strSymbols, chrSymbols) {
  var index = strSymbols.length;

  while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

/**
 * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the first unmatched string symbol.
 */
function charsStartIndex(strSymbols, chrSymbols) {
  var index = -1,
      length = strSymbols.length;

  while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trim('  abc  ');
 * // => 'abc'
 *
 * _.trim('-_-abc-_-', '_-');
 * // => 'abc'
 *
 * _.map(['  foo  ', '  bar  '], _.trim);
 * // => ['foo', 'bar']
 */
function trim(string, chars, guard) {
  string = toString(string);
  if (string && (guard || chars === undefined)) {
    return baseTrim(string);
  }
  if (!string || !(chars = baseToString(chars))) {
    return string;
  }
  var strSymbols = stringToArray(string),
      chrSymbols = stringToArray(chars),
      start = charsStartIndex(strSymbols, chrSymbols),
      end = charsEndIndex(strSymbols, chrSymbols) + 1;

  return castSlice(strSymbols, start, end).join('');
}

/**
 * Removes trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trimEnd('  abc  ');
 * // => '  abc'
 *
 * _.trimEnd('-_-abc-_-', '_-');
 * // => '-_-abc'
 */
function trimEnd(string, chars, guard) {
  string = toString(string);
  if (string && (guard || chars === undefined)) {
    return string.slice(0, trimmedEndIndex(string) + 1);
  }
  if (!string || !(chars = baseToString(chars))) {
    return string;
  }
  var strSymbols = stringToArray(string),
      end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;

  return castSlice(strSymbols, 0, end).join('');
}

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * Removes leading whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trimStart('  abc  ');
 * // => 'abc  '
 *
 * _.trimStart('-_-abc-_-', '_-');
 * // => 'abc-_-'
 */
function trimStart(string, chars, guard) {
  string = toString(string);
  if (string && (guard || chars === undefined)) {
    return string.replace(reTrimStart, '');
  }
  if (!string || !(chars = baseToString(chars))) {
    return string;
  }
  var strSymbols = stringToArray(string),
      start = charsStartIndex(strSymbols, stringToArray(chars));

  return castSlice(strSymbols, start).join('');
}

/** Used as default options for `_.truncate`. */
var DEFAULT_TRUNC_LENGTH = 30,
    DEFAULT_TRUNC_OMISSION = '...';

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Truncates `string` if it's longer than the given maximum string length.
 * The last characters of the truncated string are replaced with the omission
 * string which defaults to "...".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to truncate.
 * @param {Object} [options={}] The options object.
 * @param {number} [options.length=30] The maximum string length.
 * @param {string} [options.omission='...'] The string to indicate text is omitted.
 * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
 * @returns {string} Returns the truncated string.
 * @example
 *
 * _.truncate('hi-diddly-ho there, neighborino');
 * // => 'hi-diddly-ho there, neighbo...'
 *
 * _.truncate('hi-diddly-ho there, neighborino', {
 *   'length': 24,
 *   'separator': ' '
 * });
 * // => 'hi-diddly-ho there,...'
 *
 * _.truncate('hi-diddly-ho there, neighborino', {
 *   'length': 24,
 *   'separator': /,? +/
 * });
 * // => 'hi-diddly-ho there...'
 *
 * _.truncate('hi-diddly-ho there, neighborino', {
 *   'omission': ' [...]'
 * });
 * // => 'hi-diddly-ho there, neig [...]'
 */
function truncate(string, options) {
  var length = DEFAULT_TRUNC_LENGTH,
      omission = DEFAULT_TRUNC_OMISSION;

  if (isObject(options)) {
    var separator = 'separator' in options ? options.separator : separator;
    length = 'length' in options ? toInteger(options.length) : length;
    omission = 'omission' in options ? baseToString(options.omission) : omission;
  }
  string = toString(string);

  var strLength = string.length;
  if (hasUnicode(string)) {
    var strSymbols = stringToArray(string);
    strLength = strSymbols.length;
  }
  if (length >= strLength) {
    return string;
  }
  var end = length - stringSize(omission);
  if (end < 1) {
    return omission;
  }
  var result = strSymbols
    ? castSlice(strSymbols, 0, end).join('')
    : string.slice(0, end);

  if (separator === undefined) {
    return result + omission;
  }
  if (strSymbols) {
    end += (result.length - end);
  }
  if (isRegExp(separator)) {
    if (string.slice(end).search(separator)) {
      var match,
          substring = result;

      if (!separator.global) {
        separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
      }
      separator.lastIndex = 0;
      while ((match = separator.exec(substring))) {
        var newEnd = match.index;
      }
      result = result.slice(0, newEnd === undefined ? end : newEnd);
    }
  } else if (string.indexOf(baseToString(separator), end) != end) {
    var index = result.lastIndexOf(separator);
    if (index > -1) {
      result = result.slice(0, index);
    }
  }
  return result + omission;
}

/**
 * Creates a function that accepts up to one argument, ignoring any
 * additional arguments.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Function
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 * @example
 *
 * _.map(['6', '8', '10'], _.unary(parseInt));
 * // => [6, 8, 10]
 */
function unary(func) {
  return ary(func, 1);
}

/** Used to map HTML entities to characters. */
var htmlUnescapes = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'"
};

/**
 * Used by `_.unescape` to convert HTML entities to characters.
 *
 * @private
 * @param {string} chr The matched character to unescape.
 * @returns {string} Returns the unescaped character.
 */
var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

/** Used to match HTML entities and HTML characters. */
var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
    reHasEscapedHtml = RegExp(reEscapedHtml.source);

/**
 * The inverse of `_.escape`; this method converts the HTML entities
 * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
 * their corresponding characters.
 *
 * **Note:** No other HTML entities are unescaped. To unescape additional
 * HTML entities use a third-party library like [_he_](https://mths.be/he).
 *
 * @static
 * @memberOf _
 * @since 0.6.0
 * @category String
 * @param {string} [string=''] The string to unescape.
 * @returns {string} Returns the unescaped string.
 * @example
 *
 * _.unescape('fred, barney, &amp; pebbles');
 * // => 'fred, barney, & pebbles'
 */
function unescape(string) {
  string = toString(string);
  return (string && reHasEscapedHtml.test(string))
    ? string.replace(reEscapedHtml, unescapeHtmlChar)
    : string;
}

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

/**
 * Creates an array of unique values, in order, from all given arrays using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * _.union([2], [1, 2]);
 * // => [2, 1]
 */
var union = baseRest(function(arrays) {
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
});

/**
 * This method is like `_.union` except that it accepts `iteratee` which is
 * invoked for each element of each `arrays` to generate the criterion by
 * which uniqueness is computed. Result values are chosen from the first
 * array in which the value occurs. The iteratee is invoked with one argument:
 * (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * _.unionBy([2.1], [1.2, 2.3], Math.floor);
 * // => [2.1, 1.2]
 *
 * // The `_.property` iteratee shorthand.
 * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */
var unionBy = baseRest(function(arrays) {
  var iteratee = last(arrays);
  if (isArrayLikeObject(iteratee)) {
    iteratee = undefined;
  }
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), baseIteratee(iteratee));
});

/**
 * This method is like `_.union` except that it accepts `comparator` which
 * is invoked to compare elements of `arrays`. Result values are chosen from
 * the first array in which the value occurs. The comparator is invoked
 * with two arguments: (arrVal, othVal).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 *
 * _.unionWith(objects, others, _.isEqual);
 * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
 */
var unionWith = baseRest(function(arrays) {
  var comparator = last(arrays);
  comparator = typeof comparator == 'function' ? comparator : undefined;
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
});

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? baseUniq(array) : [];
}

/**
 * This method is like `_.uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed. The order of result values is determined by the
 * order they occur in the array. The iteratee is invoked with one argument:
 * (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
 * // => [2.1, 1.2]
 *
 * // The `_.property` iteratee shorthand.
 * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */
function uniqBy(array, iteratee) {
  return (array && array.length) ? baseUniq(array, baseIteratee(iteratee)) : [];
}

/**
 * This method is like `_.uniq` except that it accepts `comparator` which
 * is invoked to compare elements of `array`. The order of result values is
 * determined by the order they occur in the array.The comparator is invoked
 * with two arguments: (arrVal, othVal).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
 *
 * _.uniqWith(objects, _.isEqual);
 * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
 */
function uniqWith(array, comparator) {
  comparator = typeof comparator == 'function' ? comparator : undefined;
  return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
}

/** Used to generate unique IDs. */
var idCounter = 0;

/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string} Returns the unique ID.
 * @example
 *
 * _.uniqueId('contact_');
 * // => 'contact_104'
 *
 * _.uniqueId();
 * // => '105'
 */
function uniqueId(prefix) {
  var id = ++idCounter;
  return toString(prefix) + id;
}

/**
 * Removes the property at `path` of `object`.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 7 } }] };
 * _.unset(object, 'a[0].b.c');
 * // => true
 *
 * console.log(object);
 * // => { 'a': [{ 'b': {} }] };
 *
 * _.unset(object, ['a', '0', 'b', 'c']);
 * // => true
 *
 * console.log(object);
 * // => { 'a': [{ 'b': {} }] };
 */
function unset(object, path) {
  return object == null ? true : baseUnset(object, path);
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$2 = Math.max;

/**
 * This method is like `_.zip` except that it accepts an array of grouped
 * elements and creates an array regrouping the elements to their pre-zip
 * configuration.
 *
 * @static
 * @memberOf _
 * @since 1.2.0
 * @category Array
 * @param {Array} array The array of grouped elements to process.
 * @returns {Array} Returns the new array of regrouped elements.
 * @example
 *
 * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
 * // => [['a', 1, true], ['b', 2, false]]
 *
 * _.unzip(zipped);
 * // => [['a', 'b'], [1, 2], [true, false]]
 */
function unzip(array) {
  if (!(array && array.length)) {
    return [];
  }
  var length = 0;
  array = arrayFilter(array, function(group) {
    if (isArrayLikeObject(group)) {
      length = nativeMax$2(group.length, length);
      return true;
    }
  });
  return baseTimes(length, function(index) {
    return arrayMap(array, baseProperty(index));
  });
}

/**
 * This method is like `_.unzip` except that it accepts `iteratee` to specify
 * how regrouped values should be combined. The iteratee is invoked with the
 * elements of each group: (...group).
 *
 * @static
 * @memberOf _
 * @since 3.8.0
 * @category Array
 * @param {Array} array The array of grouped elements to process.
 * @param {Function} [iteratee=_.identity] The function to combine
 *  regrouped values.
 * @returns {Array} Returns the new array of regrouped elements.
 * @example
 *
 * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
 * // => [[1, 10, 100], [2, 20, 200]]
 *
 * _.unzipWith(zipped, _.add);
 * // => [3, 30, 300]
 */
function unzipWith(array, iteratee) {
  if (!(array && array.length)) {
    return [];
  }
  var result = unzip(array);
  if (iteratee == null) {
    return result;
  }
  return arrayMap(result, function(group) {
    return apply(iteratee, undefined, group);
  });
}

/**
 * The base implementation of `_.update`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to update.
 * @param {Function} updater The function to produce the updated value.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseUpdate(object, path, updater, customizer) {
  return baseSet(object, path, updater(baseGet(object, path)), customizer);
}

/**
 * This method is like `_.set` except that accepts `updater` to produce the
 * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
 * is invoked with one argument: (value).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.6.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {Function} updater The function to produce the updated value.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.update(object, 'a[0].b.c', function(n) { return n * n; });
 * console.log(object.a[0].b.c);
 * // => 9
 *
 * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
 * console.log(object.x[0].y.z);
 * // => 0
 */
function update(object, path, updater) {
  return object == null ? object : baseUpdate(object, path, castFunction(updater));
}

/**
 * This method is like `_.update` except that it accepts `customizer` which is
 * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
 * path creation is handled by the method instead. The `customizer` is invoked
 * with three arguments: (nsValue, key, nsObject).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.6.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {Function} updater The function to produce the updated value.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {};
 *
 * _.updateWith(object, '[0][1]', _.constant('a'), Object);
 * // => { '0': { '1': 'a' } }
 */
function updateWith(object, path, updater, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined;
  return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
}

/**
 * Converts `string`, as space separated words, to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the upper cased string.
 * @example
 *
 * _.upperCase('--foo-bar');
 * // => 'FOO BAR'
 *
 * _.upperCase('fooBar');
 * // => 'FOO BAR'
 *
 * _.upperCase('__foo_bar__');
 * // => 'FOO BAR'
 */
var upperCase = createCompounder(function(result, word, index) {
  return result + (index ? ' ' : '') + word.toUpperCase();
});

/**
 * Creates an array of the own and inherited enumerable string keyed property
 * values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.valuesIn(new Foo);
 * // => [1, 2, 3] (iteration order is not guaranteed)
 */
function valuesIn(object) {
  return object == null ? [] : baseValues(object, keysIn(object));
}

/**
 * Creates an array excluding all given values using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `_.pull`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...*} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.difference, _.xor
 * @example
 *
 * _.without([2, 1, 2, 3], 1, 2);
 * // => [3]
 */
var without = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, values)
    : [];
});

/**
 * Creates a function that provides `value` to `wrapper` as its first
 * argument. Any additional arguments provided to the function are appended
 * to those provided to the `wrapper`. The wrapper is invoked with the `this`
 * binding of the created function.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {*} value The value to wrap.
 * @param {Function} [wrapper=identity] The wrapper function.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var p = _.wrap(_.escape, function(func, text) {
 *   return '<p>' + func(text) + '</p>';
 * });
 *
 * p('fred, barney, & pebbles');
 * // => '<p>fred, barney, &amp; pebbles</p>'
 */
function wrap(value, wrapper) {
  return partial(castFunction(wrapper), value);
}

/**
 * This method is the wrapper version of `_.at`.
 *
 * @name at
 * @memberOf _
 * @since 1.0.0
 * @category Seq
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
 *
 * _(object).at(['a[0].b.c', 'a[1]']).value();
 * // => [3, 4]
 */
var wrapperAt = flatRest(function(paths) {
  var length = paths.length,
      start = length ? paths[0] : 0,
      value = this.__wrapped__,
      interceptor = function(object) { return baseAt(object, paths); };

  if (length > 1 || this.__actions__.length ||
      !(value instanceof LazyWrapper) || !isIndex(start)) {
    return this.thru(interceptor);
  }
  value = value.slice(start, +start + (length ? 1 : 0));
  value.__actions__.push({
    'func': thru,
    'args': [interceptor],
    'thisArg': undefined
  });
  return new LodashWrapper(value, this.__chain__).thru(function(array) {
    if (length && !array.length) {
      array.push(undefined);
    }
    return array;
  });
});

/**
 * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
 *
 * @name chain
 * @memberOf _
 * @since 0.1.0
 * @category Seq
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 40 }
 * ];
 *
 * // A sequence without explicit chaining.
 * _(users).head();
 * // => { 'user': 'barney', 'age': 36 }
 *
 * // A sequence with explicit chaining.
 * _(users)
 *   .chain()
 *   .head()
 *   .pick('user')
 *   .value();
 * // => { 'user': 'barney' }
 */
function wrapperChain() {
  return chain(this);
}

/**
 * This method is the wrapper version of `_.reverse`.
 *
 * **Note:** This method mutates the wrapped array.
 *
 * @name reverse
 * @memberOf _
 * @since 0.1.0
 * @category Seq
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * var array = [1, 2, 3];
 *
 * _(array).reverse().value()
 * // => [3, 2, 1]
 *
 * console.log(array);
 * // => [3, 2, 1]
 */
function wrapperReverse() {
  var value = this.__wrapped__;
  if (value instanceof LazyWrapper) {
    var wrapped = value;
    if (this.__actions__.length) {
      wrapped = new LazyWrapper(this);
    }
    wrapped = wrapped.reverse();
    wrapped.__actions__.push({
      'func': thru,
      'args': [reverse],
      'thisArg': undefined
    });
    return new LodashWrapper(wrapped, this.__chain__);
  }
  return this.thru(reverse);
}

/**
 * The base implementation of methods like `_.xor`, without support for
 * iteratee shorthands, that accepts an array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of values.
 */
function baseXor(arrays, iteratee, comparator) {
  var length = arrays.length;
  if (length < 2) {
    return length ? baseUniq(arrays[0]) : [];
  }
  var index = -1,
      result = Array(length);

  while (++index < length) {
    var array = arrays[index],
        othIndex = -1;

    while (++othIndex < length) {
      if (othIndex != index) {
        result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
      }
    }
  }
  return baseUniq(baseFlatten(result, 1), iteratee, comparator);
}

/**
 * Creates an array of unique values that is the
 * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
 * of the given arrays. The order of result values is determined by the order
 * they occur in the arrays.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.difference, _.without
 * @example
 *
 * _.xor([2, 1], [2, 3]);
 * // => [1, 3]
 */
var xor = baseRest(function(arrays) {
  return baseXor(arrayFilter(arrays, isArrayLikeObject));
});

/**
 * This method is like `_.xor` except that it accepts `iteratee` which is
 * invoked for each element of each `arrays` to generate the criterion by
 * which by which they're compared. The order of result values is determined
 * by the order they occur in the arrays. The iteratee is invoked with one
 * argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
 * // => [1.2, 3.4]
 *
 * // The `_.property` iteratee shorthand.
 * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 2 }]
 */
var xorBy = baseRest(function(arrays) {
  var iteratee = last(arrays);
  if (isArrayLikeObject(iteratee)) {
    iteratee = undefined;
  }
  return baseXor(arrayFilter(arrays, isArrayLikeObject), baseIteratee(iteratee));
});

/**
 * This method is like `_.xor` except that it accepts `comparator` which is
 * invoked to compare elements of `arrays`. The order of result values is
 * determined by the order they occur in the arrays. The comparator is invoked
 * with two arguments: (arrVal, othVal).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 *
 * _.xorWith(objects, others, _.isEqual);
 * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
 */
var xorWith = baseRest(function(arrays) {
  var comparator = last(arrays);
  comparator = typeof comparator == 'function' ? comparator : undefined;
  return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
});

/**
 * Creates an array of grouped elements, the first of which contains the
 * first elements of the given arrays, the second of which contains the
 * second elements of the given arrays, and so on.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to process.
 * @returns {Array} Returns the new array of grouped elements.
 * @example
 *
 * _.zip(['a', 'b'], [1, 2], [true, false]);
 * // => [['a', 1, true], ['b', 2, false]]
 */
var zip = baseRest(unzip);

/**
 * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
 *
 * @private
 * @param {Array} props The property identifiers.
 * @param {Array} values The property values.
 * @param {Function} assignFunc The function to assign values.
 * @returns {Object} Returns the new object.
 */
function baseZipObject(props, values, assignFunc) {
  var index = -1,
      length = props.length,
      valsLength = values.length,
      result = {};

  while (++index < length) {
    var value = index < valsLength ? values[index] : undefined;
    assignFunc(result, props[index], value);
  }
  return result;
}

/**
 * This method is like `_.fromPairs` except that it accepts two arrays,
 * one of property identifiers and one of corresponding values.
 *
 * @static
 * @memberOf _
 * @since 0.4.0
 * @category Array
 * @param {Array} [props=[]] The property identifiers.
 * @param {Array} [values=[]] The property values.
 * @returns {Object} Returns the new object.
 * @example
 *
 * _.zipObject(['a', 'b'], [1, 2]);
 * // => { 'a': 1, 'b': 2 }
 */
function zipObject(props, values) {
  return baseZipObject(props || [], values || [], assignValue);
}

/**
 * This method is like `_.zipObject` except that it supports property paths.
 *
 * @static
 * @memberOf _
 * @since 4.1.0
 * @category Array
 * @param {Array} [props=[]] The property identifiers.
 * @param {Array} [values=[]] The property values.
 * @returns {Object} Returns the new object.
 * @example
 *
 * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
 * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
 */
function zipObjectDeep(props, values) {
  return baseZipObject(props || [], values || [], baseSet);
}

/**
 * This method is like `_.zip` except that it accepts `iteratee` to specify
 * how grouped values should be combined. The iteratee is invoked with the
 * elements of each group: (...group).
 *
 * @static
 * @memberOf _
 * @since 3.8.0
 * @category Array
 * @param {...Array} [arrays] The arrays to process.
 * @param {Function} [iteratee=_.identity] The function to combine
 *  grouped values.
 * @returns {Array} Returns the new array of grouped elements.
 * @example
 *
 * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
 *   return a + b + c;
 * });
 * // => [111, 222]
 */
var zipWith = baseRest(function(arrays) {
  var length = arrays.length,
      iteratee = length > 1 ? arrays[length - 1] : undefined;

  iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
  return unzipWith(arrays, iteratee);
});

var array = {
  chunk, compact, concat, difference, differenceBy,
  differenceWith, drop, dropRight, dropRightWhile, dropWhile,
  fill, findIndex, findLastIndex, first: head, flatten,
  flattenDeep, flattenDepth, fromPairs, head, indexOf,
  initial, intersection, intersectionBy, intersectionWith, join,
  last, lastIndexOf, nth, pull, pullAll,
  pullAllBy, pullAllWith, pullAt, remove, reverse,
  slice, sortedIndex, sortedIndexBy, sortedIndexOf, sortedLastIndex,
  sortedLastIndexBy, sortedLastIndexOf, sortedUniq, sortedUniqBy, tail,
  take, takeRight, takeRightWhile, takeWhile, union,
  unionBy, unionWith, uniq, uniqBy, uniqWith,
  unzip, unzipWith, without, xor, xorBy,
  xorWith, zip, zipObject, zipObjectDeep, zipWith
};

var collection = {
  countBy, each: forEach, eachRight: forEachRight, every, filter,
  find, findLast, flatMap, flatMapDeep, flatMapDepth,
  forEach, forEachRight, groupBy, includes, invokeMap,
  keyBy, map, orderBy, partition, reduce,
  reduceRight, reject, sample, sampleSize, shuffle,
  size, some, sortBy
};

var date = {
  now
};

var func = {
  after, ary, before, bind, bindKey,
  curry, curryRight, debounce, defer, delay,
  flip, memoize, negate, once, overArgs,
  partial, partialRight, rearg, rest, spread,
  throttle, unary, wrap
};

var lang = {
  castArray, clone, cloneDeep, cloneDeepWith, cloneWith,
  conformsTo, eq, gt, gte, isArguments,
  isArray, isArrayBuffer, isArrayLike, isArrayLikeObject, isBoolean,
  isBuffer, isDate, isElement, isEmpty, isEqual,
  isEqualWith, isError, isFinite, isFunction, isInteger,
  isLength, isMap, isMatch, isMatchWith, isNaN,
  isNative, isNil, isNull, isNumber, isObject,
  isObjectLike, isPlainObject, isRegExp, isSafeInteger, isSet,
  isString, isSymbol, isTypedArray, isUndefined, isWeakMap,
  isWeakSet, lt, lte, toArray, toFinite,
  toInteger, toLength, toNumber, toPlainObject, toSafeInteger,
  toString
};

var math = {
  add, ceil, divide, floor, max,
  maxBy, mean, meanBy, min, minBy,
  multiply, round, subtract, sum, sumBy
};

var number = {
  clamp, inRange, random
};

var object = {
  assign, assignIn, assignInWith, assignWith, at,
  create, defaults, defaultsDeep, entries: toPairs, entriesIn: toPairsIn,
  extend: assignIn, extendWith: assignInWith, findKey, findLastKey, forIn,
  forInRight, forOwn, forOwnRight, functions, functionsIn,
  get, has, hasIn, invert, invertBy,
  invoke, keys, keysIn, mapKeys, mapValues,
  merge, mergeWith, omit, omitBy, pick,
  pickBy, result, set, setWith, toPairs,
  toPairsIn, transform, unset, update, updateWith,
  values, valuesIn
};

var seq = {
  at: wrapperAt, chain, commit: wrapperCommit, lodash, next: wrapperNext,
  plant: wrapperPlant, reverse: wrapperReverse, tap, thru, toIterator: wrapperToIterator,
  toJSON: wrapperValue, value: wrapperValue, valueOf: wrapperValue, wrapperChain
};

var string = {
  camelCase, capitalize, deburr, endsWith, escape,
  escapeRegExp, kebabCase, lowerCase, lowerFirst, pad,
  padEnd, padStart, parseInt: parseInt$1, repeat, replace,
  snakeCase, split, startCase, startsWith, template,
  templateSettings, toLower, toUpper, trim, trimEnd,
  trimStart, truncate, unescape, upperCase, upperFirst,
  words
};

var util = {
  attempt, bindAll, cond, conforms, constant,
  defaultTo, flow, flowRight, identity, iteratee,
  matches, matchesProperty, method, methodOf, mixin: mixin$1,
  noop, nthArg, over, overEvery, overSome,
  property, propertyOf, range, rangeRight, stubArray,
  stubFalse, stubObject, stubString, stubTrue, times,
  toPath, uniqueId
};

/**
 * Creates a clone of the lazy wrapper object.
 *
 * @private
 * @name clone
 * @memberOf LazyWrapper
 * @returns {Object} Returns the cloned `LazyWrapper` object.
 */
function lazyClone() {
  var result = new LazyWrapper(this.__wrapped__);
  result.__actions__ = copyArray(this.__actions__);
  result.__dir__ = this.__dir__;
  result.__filtered__ = this.__filtered__;
  result.__iteratees__ = copyArray(this.__iteratees__);
  result.__takeCount__ = this.__takeCount__;
  result.__views__ = copyArray(this.__views__);
  return result;
}

/**
 * Reverses the direction of lazy iteration.
 *
 * @private
 * @name reverse
 * @memberOf LazyWrapper
 * @returns {Object} Returns the new reversed `LazyWrapper` object.
 */
function lazyReverse() {
  if (this.__filtered__) {
    var result = new LazyWrapper(this);
    result.__dir__ = -1;
    result.__filtered__ = true;
  } else {
    result = this.clone();
    result.__dir__ *= -1;
  }
  return result;
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$1 = Math.max,
    nativeMin$2 = Math.min;

/**
 * Gets the view, applying any `transforms` to the `start` and `end` positions.
 *
 * @private
 * @param {number} start The start of the view.
 * @param {number} end The end of the view.
 * @param {Array} transforms The transformations to apply to the view.
 * @returns {Object} Returns an object containing the `start` and `end`
 *  positions of the view.
 */
function getView(start, end, transforms) {
  var index = -1,
      length = transforms.length;

  while (++index < length) {
    var data = transforms[index],
        size = data.size;

    switch (data.type) {
      case 'drop':      start += size; break;
      case 'dropRight': end -= size; break;
      case 'take':      end = nativeMin$2(end, start + size); break;
      case 'takeRight': start = nativeMax$1(start, end - size); break;
    }
  }
  return { 'start': start, 'end': end };
}

/** Used to indicate the type of lazy iteratees. */
var LAZY_FILTER_FLAG$1 = 1,
    LAZY_MAP_FLAG = 2;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin$1 = Math.min;

/**
 * Extracts the unwrapped value from its lazy wrapper.
 *
 * @private
 * @name value
 * @memberOf LazyWrapper
 * @returns {*} Returns the unwrapped value.
 */
function lazyValue() {
  var array = this.__wrapped__.value(),
      dir = this.__dir__,
      isArr = isArray(array),
      isRight = dir < 0,
      arrLength = isArr ? array.length : 0,
      view = getView(0, arrLength, this.__views__),
      start = view.start,
      end = view.end,
      length = end - start,
      index = isRight ? end : (start - 1),
      iteratees = this.__iteratees__,
      iterLength = iteratees.length,
      resIndex = 0,
      takeCount = nativeMin$1(length, this.__takeCount__);

  if (!isArr || (!isRight && arrLength == length && takeCount == length)) {
    return baseWrapperValue(array, this.__actions__);
  }
  var result = [];

  outer:
  while (length-- && resIndex < takeCount) {
    index += dir;

    var iterIndex = -1,
        value = array[index];

    while (++iterIndex < iterLength) {
      var data = iteratees[iterIndex],
          iteratee = data.iteratee,
          type = data.type,
          computed = iteratee(value);

      if (type == LAZY_MAP_FLAG) {
        value = computed;
      } else if (!computed) {
        if (type == LAZY_FILTER_FLAG$1) {
          continue outer;
        } else {
          break outer;
        }
      }
    }
    result[resIndex++] = value;
  }
  return result;
}

/**
 * @license
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="es" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the semantic version number. */
var VERSION = '4.17.21';

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_KEY_FLAG = 2;

/** Used to indicate the type of lazy iteratees. */
var LAZY_FILTER_FLAG = 1,
    LAZY_WHILE_FLAG = 3;

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var symIterator = Symbol ? Symbol.iterator : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

// wrap `_.mixin` so it works when provided only one argument
var mixin = (function(func) {
  return function(object, source, options) {
    if (options == null) {
      var isObj = isObject(source),
          props = isObj && keys(source),
          methodNames = props && props.length && baseFunctions(source, props);

      if (!(methodNames ? methodNames.length : isObj)) {
        options = source;
        source = object;
        object = this;
      }
    }
    return func(object, source, options);
  };
}(mixin$1));

// Add methods that return wrapped values in chain sequences.
lodash.after = func.after;
lodash.ary = func.ary;
lodash.assign = object.assign;
lodash.assignIn = object.assignIn;
lodash.assignInWith = object.assignInWith;
lodash.assignWith = object.assignWith;
lodash.at = object.at;
lodash.before = func.before;
lodash.bind = func.bind;
lodash.bindAll = util.bindAll;
lodash.bindKey = func.bindKey;
lodash.castArray = lang.castArray;
lodash.chain = seq.chain;
lodash.chunk = array.chunk;
lodash.compact = array.compact;
lodash.concat = array.concat;
lodash.cond = util.cond;
lodash.conforms = util.conforms;
lodash.constant = util.constant;
lodash.countBy = collection.countBy;
lodash.create = object.create;
lodash.curry = func.curry;
lodash.curryRight = func.curryRight;
lodash.debounce = func.debounce;
lodash.defaults = object.defaults;
lodash.defaultsDeep = object.defaultsDeep;
lodash.defer = func.defer;
lodash.delay = func.delay;
lodash.difference = array.difference;
lodash.differenceBy = array.differenceBy;
lodash.differenceWith = array.differenceWith;
lodash.drop = array.drop;
lodash.dropRight = array.dropRight;
lodash.dropRightWhile = array.dropRightWhile;
lodash.dropWhile = array.dropWhile;
lodash.fill = array.fill;
lodash.filter = collection.filter;
lodash.flatMap = collection.flatMap;
lodash.flatMapDeep = collection.flatMapDeep;
lodash.flatMapDepth = collection.flatMapDepth;
lodash.flatten = array.flatten;
lodash.flattenDeep = array.flattenDeep;
lodash.flattenDepth = array.flattenDepth;
lodash.flip = func.flip;
lodash.flow = util.flow;
lodash.flowRight = util.flowRight;
lodash.fromPairs = array.fromPairs;
lodash.functions = object.functions;
lodash.functionsIn = object.functionsIn;
lodash.groupBy = collection.groupBy;
lodash.initial = array.initial;
lodash.intersection = array.intersection;
lodash.intersectionBy = array.intersectionBy;
lodash.intersectionWith = array.intersectionWith;
lodash.invert = object.invert;
lodash.invertBy = object.invertBy;
lodash.invokeMap = collection.invokeMap;
lodash.iteratee = util.iteratee;
lodash.keyBy = collection.keyBy;
lodash.keys = keys;
lodash.keysIn = object.keysIn;
lodash.map = collection.map;
lodash.mapKeys = object.mapKeys;
lodash.mapValues = object.mapValues;
lodash.matches = util.matches;
lodash.matchesProperty = util.matchesProperty;
lodash.memoize = func.memoize;
lodash.merge = object.merge;
lodash.mergeWith = object.mergeWith;
lodash.method = util.method;
lodash.methodOf = util.methodOf;
lodash.mixin = mixin;
lodash.negate = negate;
lodash.nthArg = util.nthArg;
lodash.omit = object.omit;
lodash.omitBy = object.omitBy;
lodash.once = func.once;
lodash.orderBy = collection.orderBy;
lodash.over = util.over;
lodash.overArgs = func.overArgs;
lodash.overEvery = util.overEvery;
lodash.overSome = util.overSome;
lodash.partial = func.partial;
lodash.partialRight = func.partialRight;
lodash.partition = collection.partition;
lodash.pick = object.pick;
lodash.pickBy = object.pickBy;
lodash.property = util.property;
lodash.propertyOf = util.propertyOf;
lodash.pull = array.pull;
lodash.pullAll = array.pullAll;
lodash.pullAllBy = array.pullAllBy;
lodash.pullAllWith = array.pullAllWith;
lodash.pullAt = array.pullAt;
lodash.range = util.range;
lodash.rangeRight = util.rangeRight;
lodash.rearg = func.rearg;
lodash.reject = collection.reject;
lodash.remove = array.remove;
lodash.rest = func.rest;
lodash.reverse = array.reverse;
lodash.sampleSize = collection.sampleSize;
lodash.set = object.set;
lodash.setWith = object.setWith;
lodash.shuffle = collection.shuffle;
lodash.slice = array.slice;
lodash.sortBy = collection.sortBy;
lodash.sortedUniq = array.sortedUniq;
lodash.sortedUniqBy = array.sortedUniqBy;
lodash.split = string.split;
lodash.spread = func.spread;
lodash.tail = array.tail;
lodash.take = array.take;
lodash.takeRight = array.takeRight;
lodash.takeRightWhile = array.takeRightWhile;
lodash.takeWhile = array.takeWhile;
lodash.tap = seq.tap;
lodash.throttle = func.throttle;
lodash.thru = thru;
lodash.toArray = lang.toArray;
lodash.toPairs = object.toPairs;
lodash.toPairsIn = object.toPairsIn;
lodash.toPath = util.toPath;
lodash.toPlainObject = lang.toPlainObject;
lodash.transform = object.transform;
lodash.unary = func.unary;
lodash.union = array.union;
lodash.unionBy = array.unionBy;
lodash.unionWith = array.unionWith;
lodash.uniq = array.uniq;
lodash.uniqBy = array.uniqBy;
lodash.uniqWith = array.uniqWith;
lodash.unset = object.unset;
lodash.unzip = array.unzip;
lodash.unzipWith = array.unzipWith;
lodash.update = object.update;
lodash.updateWith = object.updateWith;
lodash.values = object.values;
lodash.valuesIn = object.valuesIn;
lodash.without = array.without;
lodash.words = string.words;
lodash.wrap = func.wrap;
lodash.xor = array.xor;
lodash.xorBy = array.xorBy;
lodash.xorWith = array.xorWith;
lodash.zip = array.zip;
lodash.zipObject = array.zipObject;
lodash.zipObjectDeep = array.zipObjectDeep;
lodash.zipWith = array.zipWith;

// Add aliases.
lodash.entries = object.toPairs;
lodash.entriesIn = object.toPairsIn;
lodash.extend = object.assignIn;
lodash.extendWith = object.assignInWith;

// Add methods to `lodash.prototype`.
mixin(lodash, lodash);

// Add methods that return unwrapped values in chain sequences.
lodash.add = math.add;
lodash.attempt = util.attempt;
lodash.camelCase = string.camelCase;
lodash.capitalize = string.capitalize;
lodash.ceil = math.ceil;
lodash.clamp = number.clamp;
lodash.clone = lang.clone;
lodash.cloneDeep = lang.cloneDeep;
lodash.cloneDeepWith = lang.cloneDeepWith;
lodash.cloneWith = lang.cloneWith;
lodash.conformsTo = lang.conformsTo;
lodash.deburr = string.deburr;
lodash.defaultTo = util.defaultTo;
lodash.divide = math.divide;
lodash.endsWith = string.endsWith;
lodash.eq = lang.eq;
lodash.escape = string.escape;
lodash.escapeRegExp = string.escapeRegExp;
lodash.every = collection.every;
lodash.find = collection.find;
lodash.findIndex = array.findIndex;
lodash.findKey = object.findKey;
lodash.findLast = collection.findLast;
lodash.findLastIndex = array.findLastIndex;
lodash.findLastKey = object.findLastKey;
lodash.floor = math.floor;
lodash.forEach = collection.forEach;
lodash.forEachRight = collection.forEachRight;
lodash.forIn = object.forIn;
lodash.forInRight = object.forInRight;
lodash.forOwn = object.forOwn;
lodash.forOwnRight = object.forOwnRight;
lodash.get = object.get;
lodash.gt = lang.gt;
lodash.gte = lang.gte;
lodash.has = object.has;
lodash.hasIn = object.hasIn;
lodash.head = array.head;
lodash.identity = identity;
lodash.includes = collection.includes;
lodash.indexOf = array.indexOf;
lodash.inRange = number.inRange;
lodash.invoke = object.invoke;
lodash.isArguments = lang.isArguments;
lodash.isArray = isArray;
lodash.isArrayBuffer = lang.isArrayBuffer;
lodash.isArrayLike = lang.isArrayLike;
lodash.isArrayLikeObject = lang.isArrayLikeObject;
lodash.isBoolean = lang.isBoolean;
lodash.isBuffer = lang.isBuffer;
lodash.isDate = lang.isDate;
lodash.isElement = lang.isElement;
lodash.isEmpty = lang.isEmpty;
lodash.isEqual = lang.isEqual;
lodash.isEqualWith = lang.isEqualWith;
lodash.isError = lang.isError;
lodash.isFinite = lang.isFinite;
lodash.isFunction = lang.isFunction;
lodash.isInteger = lang.isInteger;
lodash.isLength = lang.isLength;
lodash.isMap = lang.isMap;
lodash.isMatch = lang.isMatch;
lodash.isMatchWith = lang.isMatchWith;
lodash.isNaN = lang.isNaN;
lodash.isNative = lang.isNative;
lodash.isNil = lang.isNil;
lodash.isNull = lang.isNull;
lodash.isNumber = lang.isNumber;
lodash.isObject = isObject;
lodash.isObjectLike = lang.isObjectLike;
lodash.isPlainObject = lang.isPlainObject;
lodash.isRegExp = lang.isRegExp;
lodash.isSafeInteger = lang.isSafeInteger;
lodash.isSet = lang.isSet;
lodash.isString = lang.isString;
lodash.isSymbol = lang.isSymbol;
lodash.isTypedArray = lang.isTypedArray;
lodash.isUndefined = lang.isUndefined;
lodash.isWeakMap = lang.isWeakMap;
lodash.isWeakSet = lang.isWeakSet;
lodash.join = array.join;
lodash.kebabCase = string.kebabCase;
lodash.last = last;
lodash.lastIndexOf = array.lastIndexOf;
lodash.lowerCase = string.lowerCase;
lodash.lowerFirst = string.lowerFirst;
lodash.lt = lang.lt;
lodash.lte = lang.lte;
lodash.max = math.max;
lodash.maxBy = math.maxBy;
lodash.mean = math.mean;
lodash.meanBy = math.meanBy;
lodash.min = math.min;
lodash.minBy = math.minBy;
lodash.stubArray = util.stubArray;
lodash.stubFalse = util.stubFalse;
lodash.stubObject = util.stubObject;
lodash.stubString = util.stubString;
lodash.stubTrue = util.stubTrue;
lodash.multiply = math.multiply;
lodash.nth = array.nth;
lodash.noop = util.noop;
lodash.now = date.now;
lodash.pad = string.pad;
lodash.padEnd = string.padEnd;
lodash.padStart = string.padStart;
lodash.parseInt = string.parseInt;
lodash.random = number.random;
lodash.reduce = collection.reduce;
lodash.reduceRight = collection.reduceRight;
lodash.repeat = string.repeat;
lodash.replace = string.replace;
lodash.result = object.result;
lodash.round = math.round;
lodash.sample = collection.sample;
lodash.size = collection.size;
lodash.snakeCase = string.snakeCase;
lodash.some = collection.some;
lodash.sortedIndex = array.sortedIndex;
lodash.sortedIndexBy = array.sortedIndexBy;
lodash.sortedIndexOf = array.sortedIndexOf;
lodash.sortedLastIndex = array.sortedLastIndex;
lodash.sortedLastIndexBy = array.sortedLastIndexBy;
lodash.sortedLastIndexOf = array.sortedLastIndexOf;
lodash.startCase = string.startCase;
lodash.startsWith = string.startsWith;
lodash.subtract = math.subtract;
lodash.sum = math.sum;
lodash.sumBy = math.sumBy;
lodash.template = string.template;
lodash.times = util.times;
lodash.toFinite = lang.toFinite;
lodash.toInteger = toInteger;
lodash.toLength = lang.toLength;
lodash.toLower = string.toLower;
lodash.toNumber = lang.toNumber;
lodash.toSafeInteger = lang.toSafeInteger;
lodash.toString = lang.toString;
lodash.toUpper = string.toUpper;
lodash.trim = string.trim;
lodash.trimEnd = string.trimEnd;
lodash.trimStart = string.trimStart;
lodash.truncate = string.truncate;
lodash.unescape = string.unescape;
lodash.uniqueId = util.uniqueId;
lodash.upperCase = string.upperCase;
lodash.upperFirst = string.upperFirst;

// Add aliases.
lodash.each = collection.forEach;
lodash.eachRight = collection.forEachRight;
lodash.first = array.head;

mixin(lodash, (function() {
  var source = {};
  baseForOwn(lodash, function(func, methodName) {
    if (!hasOwnProperty.call(lodash.prototype, methodName)) {
      source[methodName] = func;
    }
  });
  return source;
}()), { 'chain': false });

/**
 * The semantic version number.
 *
 * @static
 * @memberOf _
 * @type {string}
 */
lodash.VERSION = VERSION;
(lodash.templateSettings = string.templateSettings).imports._ = lodash;

// Assign default placeholders.
arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
  lodash[methodName].placeholder = lodash;
});

// Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
arrayEach(['drop', 'take'], function(methodName, index) {
  LazyWrapper.prototype[methodName] = function(n) {
    n = n === undefined ? 1 : nativeMax(toInteger(n), 0);

    var result = (this.__filtered__ && !index)
      ? new LazyWrapper(this)
      : this.clone();

    if (result.__filtered__) {
      result.__takeCount__ = nativeMin(n, result.__takeCount__);
    } else {
      result.__views__.push({
        'size': nativeMin(n, MAX_ARRAY_LENGTH),
        'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
      });
    }
    return result;
  };

  LazyWrapper.prototype[methodName + 'Right'] = function(n) {
    return this.reverse()[methodName](n).reverse();
  };
});

// Add `LazyWrapper` methods that accept an `iteratee` value.
arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
  var type = index + 1,
      isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;

  LazyWrapper.prototype[methodName] = function(iteratee) {
    var result = this.clone();
    result.__iteratees__.push({
      'iteratee': baseIteratee(iteratee),
      'type': type
    });
    result.__filtered__ = result.__filtered__ || isFilter;
    return result;
  };
});

// Add `LazyWrapper` methods for `_.head` and `_.last`.
arrayEach(['head', 'last'], function(methodName, index) {
  var takeName = 'take' + (index ? 'Right' : '');

  LazyWrapper.prototype[methodName] = function() {
    return this[takeName](1).value()[0];
  };
});

// Add `LazyWrapper` methods for `_.initial` and `_.tail`.
arrayEach(['initial', 'tail'], function(methodName, index) {
  var dropName = 'drop' + (index ? '' : 'Right');

  LazyWrapper.prototype[methodName] = function() {
    return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
  };
});

LazyWrapper.prototype.compact = function() {
  return this.filter(identity);
};

LazyWrapper.prototype.find = function(predicate) {
  return this.filter(predicate).head();
};

LazyWrapper.prototype.findLast = function(predicate) {
  return this.reverse().find(predicate);
};

LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
  if (typeof path == 'function') {
    return new LazyWrapper(this);
  }
  return this.map(function(value) {
    return baseInvoke(value, path, args);
  });
});

LazyWrapper.prototype.reject = function(predicate) {
  return this.filter(negate(baseIteratee(predicate)));
};

LazyWrapper.prototype.slice = function(start, end) {
  start = toInteger(start);

  var result = this;
  if (result.__filtered__ && (start > 0 || end < 0)) {
    return new LazyWrapper(result);
  }
  if (start < 0) {
    result = result.takeRight(-start);
  } else if (start) {
    result = result.drop(start);
  }
  if (end !== undefined) {
    end = toInteger(end);
    result = end < 0 ? result.dropRight(-end) : result.take(end - start);
  }
  return result;
};

LazyWrapper.prototype.takeRightWhile = function(predicate) {
  return this.reverse().takeWhile(predicate).reverse();
};

LazyWrapper.prototype.toArray = function() {
  return this.take(MAX_ARRAY_LENGTH);
};

// Add `LazyWrapper` methods to `lodash.prototype`.
baseForOwn(LazyWrapper.prototype, function(func, methodName) {
  var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
      isTaker = /^(?:head|last)$/.test(methodName),
      lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
      retUnwrapped = isTaker || /^find/.test(methodName);

  if (!lodashFunc) {
    return;
  }
  lodash.prototype[methodName] = function() {
    var value = this.__wrapped__,
        args = isTaker ? [1] : arguments,
        isLazy = value instanceof LazyWrapper,
        iteratee = args[0],
        useLazy = isLazy || isArray(value);

    var interceptor = function(value) {
      var result = lodashFunc.apply(lodash, arrayPush([value], args));
      return (isTaker && chainAll) ? result[0] : result;
    };

    if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
      // Avoid lazy use if the iteratee has a "length" value other than `1`.
      isLazy = useLazy = false;
    }
    var chainAll = this.__chain__,
        isHybrid = !!this.__actions__.length,
        isUnwrapped = retUnwrapped && !chainAll,
        onlyLazy = isLazy && !isHybrid;

    if (!retUnwrapped && useLazy) {
      value = onlyLazy ? value : new LazyWrapper(this);
      var result = func.apply(value, args);
      result.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
      return new LodashWrapper(result, chainAll);
    }
    if (isUnwrapped && onlyLazy) {
      return func.apply(this, args);
    }
    result = this.thru(interceptor);
    return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
  };
});

// Add `Array` methods to `lodash.prototype`.
arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
  var func = arrayProto[methodName],
      chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
      retUnwrapped = /^(?:pop|shift)$/.test(methodName);

  lodash.prototype[methodName] = function() {
    var args = arguments;
    if (retUnwrapped && !this.__chain__) {
      var value = this.value();
      return func.apply(isArray(value) ? value : [], args);
    }
    return this[chainName](function(value) {
      return func.apply(isArray(value) ? value : [], args);
    });
  };
});

// Map minified method names to their real names.
baseForOwn(LazyWrapper.prototype, function(func, methodName) {
  var lodashFunc = lodash[methodName];
  if (lodashFunc) {
    var key = lodashFunc.name + '';
    if (!hasOwnProperty.call(realNames, key)) {
      realNames[key] = [];
    }
    realNames[key].push({ 'name': methodName, 'func': lodashFunc });
  }
});

realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [{
  'name': 'wrapper',
  'func': undefined
}];

// Add methods to `LazyWrapper`.
LazyWrapper.prototype.clone = lazyClone;
LazyWrapper.prototype.reverse = lazyReverse;
LazyWrapper.prototype.value = lazyValue;

// Add chain sequence methods to the `lodash` wrapper.
lodash.prototype.at = seq.at;
lodash.prototype.chain = seq.wrapperChain;
lodash.prototype.commit = seq.commit;
lodash.prototype.next = seq.next;
lodash.prototype.plant = seq.plant;
lodash.prototype.reverse = seq.reverse;
lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = seq.value;

// Add lazy aliases.
lodash.prototype.first = lodash.prototype.head;

if (symIterator) {
  lodash.prototype[symIterator] = seq.toIterator;
}

var Tab = function (_a) {
  var id = _a.id,
    _b = _a.selected,
    selected = _b === void 0 ? '01' : _b,
    _c = _a.data,
    data = _c === void 0 ? [] : _c,
    _d = _a.style,
    style = _d === void 0 ? {} : _d;
    _a.onClick;
  return /*#__PURE__*/React.createElement("div", {
    id: id,
    className: classnames('tab_group_container'),
    style: style
  }, map(data, function (t) {
    return /*#__PURE__*/React.createElement("div", {
      id: "tab-".concat(t.id),
      className: classnames('tab_container', selected === t.id && 'selected')
    }, t.label);
  }));
};

var css_248z$c = ".confirm_container{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;--max-width:330px;background-color:var(--white);border-radius:12px;display:none;flex-direction:column;font-family:SF Pro Display,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Emoji,sans-serif;font-size:18px;font-style:normal;font-weight:700;gap:20px;justify-content:center;left:50%;line-height:25px;max-width:var(--max-width);padding:20px;position:fixed;text-align:center;top:50%;transform:translate(-50%,-50%);width:88%;z-index:9999}.confirm_container.open{display:flex}.confirm_container .buttons_wrap{display:flex;flex-direction:column;gap:8px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbmZpcm0uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFHRSxrQ0FBbUMsQ0FDbkMsaUNBQWtDLENBQ2xDLGlCQUFrQixDQVdsQiw2QkFBOEIsQ0FLOUIsa0JBQW1CLENBZm5CLFlBQWEsQ0FHYixxQkFBc0IsQ0FSdEIsME5BQTZQLENBaUI3UCxjQUFlLENBaEJmLGlCQUFrQixDQWVsQixlQUFnQixDQU1oQixRQUFTLENBZlQsc0JBQXVCLENBSXZCLFFBQVMsQ0FPVCxnQkFBaUIsQ0FKakIsMEJBQTJCLENBTzNCLFlBQWEsQ0FmYixjQUFlLENBYWYsaUJBQWtCLENBVGxCLE9BQVEsQ0FFUiw4QkFBZ0MsQ0FDaEMsU0FBVSxDQUpWLFlBY0YsQ0FDQSx3QkFDRSxZQUNGLENBQ0EsaUNBQ0UsWUFBYSxDQUNiLHFCQUFzQixDQUN0QixPQUNGIiwiZmlsZSI6IkNvbmZpcm0uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25maXJtX2NvbnRhaW5lciB7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBEaXNwbGF5XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgc3lzdGVtLXVpLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJTZWdvZSBVSVwiLCBcIkFwcGxlIFNEIEdvdGhpYyBOZW9cIiwgXCJOb3RvIFNhbnMgS1JcIiwgXCJNYWxndW4gR290aGljXCIsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gRW1vamlcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgLS1tYXgtd2lkdGg6IDMzMHB4O1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB6LWluZGV4OiA5OTk5O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDg4JTtcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMjBweDtcbiAgZ2FwOiAyMHB4O1xufVxuLmNvbmZpcm1fY29udGFpbmVyLm9wZW4ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNvbmZpcm1fY29udGFpbmVyIC5idXR0b25zX3dyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDhweDtcbn0iXX0= */";
styleInject(css_248z$c);

function Confirm(_a) {
  var _b = _a.isShow,
    isShow = _b === void 0 ? false : _b,
    _c = _a.isShowDimm,
    isShowDimm = _c === void 0 ? false : _c,
    _d = _a.buttonList,
    buttonList = _d === void 0 ? [{
      type: 'primary',
      label: '확인',
      click: function () {
        close();
      }
    }] : _d,
    children = _a.children,
    style = _a.style,
    _e = _a.close,
    close = _e === void 0 ? function () {} : _e;
  var csStyle = style || {};
  React.useEffect(function () {
    if (isShowDimm) {
      var dimmElement = document.getElementById('modalDimm');
      var layer = (dimmElement === null || dimmElement === void 0 ? void 0 : dimmElement.dataset.layer) || -1;
      if (isShow) {
        if (!dimmElement) {
          var dimm = document.createElement('div');
          dimm.id = 'modalDimm';
          dimm.classList.add('dimm');
          dimm.style.backgroundColor = 'var(--dimm-layer)';
          dimm.style.cursor = 'pointer';
          dimm.dataset.layer = '0';
          var wrap = document.getElementById('modalStoryWrap');
          if (wrap) {
            wrap.append(dimm);
            wrap.style.overflow = 'hidden';
          } else {
            document.body.append(dimm);
            document.body.style.overflow = 'hidden';
          }
          dimm.addEventListener('click', close);
        } else {
          dimmElement.dataset.layer = String(+layer + 1);
          dimmElement.style.display = 'block';
          document.body.style.overflow = 'hidden';
        }
      } else {
        if (dimmElement) {
          if (+layer < 1) {
            dimmElement.style.display = 'none';
            document.body.style.overflow = 'auto';
            dimmElement.dataset.layer = '-1';
          } else {
            dimmElement.dataset.layer = String(+layer - 1);
          }
        }
      }
    }
  }, [isShow]);
  var renderButtonWrap = function () {
    return /*#__PURE__*/React.createElement("div", {
      className: classnames('buttons_wrap')
    }, map(buttonList, function (button, buttonIdx) {
      return /*#__PURE__*/React.createElement(Button, {
        key: "modal-button-".concat(buttonIdx),
        type: button.type,
        onClick: button.click
      }, button.label);
    }));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: classnames('confirm_container', isShow && 'open'),
    style: csStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "contents"
  }, children), renderButtonWrap());
}

var css_248z$b = ".dropdown_container{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:var(--white);border-radius:12px 12px 0 0;bottom:0;display:none;flex-direction:column;font-family:SF Pro Display,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Emoji,sans-serif;font-style:normal;height:50%;justify-content:center;overflow-y:auto;padding:23px 0;position:fixed;text-align:center;width:100%;z-index:9999}.dropdown_container.open{display:flex}.dropdown_container .option_wrap{display:flex;flex-direction:column;height:100%}.dropdown_container .option_wrap>div{align-items:center;color:var(--grey-80);display:flex;font-size:18px;font-weight:400;height:45px;padding:0 20px;width:100%}.dropdown_container .option_wrap>div.selected{color:var(--primary-orange);font-weight:600}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRyb3Bkb3duLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBR0Usa0NBQW1DLENBQ25DLGlDQUFrQyxDQVVsQyw2QkFBOEIsQ0FFOUIsMkJBQTRCLENBTjVCLFFBQVMsQ0FMVCxZQUFhLENBR2IscUJBQXNCLENBUHRCLDBOQUE2UCxDQUM3UCxpQkFBa0IsQ0FVbEIsVUFBVyxDQUxYLHNCQUF1QixDQU12QixlQUFnQixDQUloQixjQUFlLENBWGYsY0FBZSxDQVNmLGlCQUFrQixDQUpsQixVQUFXLENBRlgsWUFTRixDQUNBLHlCQUNFLFlBQ0YsQ0FDQSxpQ0FDRSxZQUFhLENBQ2IscUJBQXNCLENBQ3RCLFdBQ0YsQ0FDQSxxQ0FFRSxrQkFBbUIsQ0FLbkIsb0JBQXFCLENBTnJCLFlBQWEsQ0FLYixjQUFlLENBRGYsZUFBZ0IsQ0FEaEIsV0FBWSxDQUlaLGNBQWUsQ0FMZixVQU1GLENBQ0EsOENBRUUsMkJBQTRCLENBRDVCLGVBRUYiLCJmaWxlIjoiRHJvcGRvd24uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bl9jb250YWluZXIge1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gRGlzcGxheVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHN5c3RlbS11aSwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiU2Vnb2UgVUlcIiwgXCJBcHBsZSBTRCBHb3RoaWMgTmVvXCIsIFwiTm90byBTYW5zIEtSXCIsIFwiTWFsZ3VuIEdvdGhpY1wiLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIEVtb2ppXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHotaW5kZXg6IDk5OTk7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMDtcbiAgcGFkZGluZzogMjNweCAwO1xufVxuLmRyb3Bkb3duX2NvbnRhaW5lci5vcGVuIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kcm9wZG93bl9jb250YWluZXIgLm9wdGlvbl93cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmRyb3Bkb3duX2NvbnRhaW5lciAub3B0aW9uX3dyYXAgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB2YXIoLS1ncmV5LTgwKTtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLmRyb3Bkb3duX2NvbnRhaW5lciAub3B0aW9uX3dyYXAgPiBkaXYuc2VsZWN0ZWQge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1vcmFuZ2UpO1xufSJdfQ== */";
styleInject(css_248z$b);

function Dropdown(_a) {
  var _b = _a.isShow,
    isShow = _b === void 0 ? false : _b,
    _c = _a.isShowDimm,
    isShowDimm = _c === void 0 ? false : _c,
    _d = _a.selected,
    selected = _d === void 0 ? '01' : _d,
    _e = _a.options,
    options = _e === void 0 ? [] : _e,
    style = _a.style,
    _f = _a.close,
    close = _f === void 0 ? function () {} : _f;
  var csStyle = style || {};
  React.useEffect(function () {
    if (isShowDimm) {
      var dimmElement = document.getElementById('modalDimm');
      var layer = (dimmElement === null || dimmElement === void 0 ? void 0 : dimmElement.dataset.layer) || -1;
      if (isShow) {
        if (!dimmElement) {
          var dimm = document.createElement('div');
          dimm.id = 'modalDimm';
          dimm.classList.add('dimm');
          dimm.style.backgroundColor = 'var(--dimm-layer)';
          dimm.style.cursor = 'pointer';
          dimm.dataset.layer = '0';
          var wrap = document.getElementById('modalStoryWrap');
          if (wrap) {
            wrap.append(dimm);
            wrap.style.overflow = 'hidden';
          } else {
            document.body.append(dimm);
            document.body.style.overflow = 'hidden';
          }
          dimm.addEventListener('click', close);
        } else {
          dimmElement.dataset.layer = String(+layer + 1);
          dimmElement.style.display = 'block';
          document.body.style.overflow = 'hidden';
        }
      } else {
        if (dimmElement) {
          if (+layer < 1) {
            dimmElement.style.display = 'none';
            document.body.style.overflow = 'auto';
            dimmElement.dataset.layer = '-1';
          } else {
            dimmElement.dataset.layer = String(+layer - 1);
          }
        }
      }
    }
  }, [isShow]);
  return /*#__PURE__*/React.createElement("div", {
    className: classnames('dropdown_container', 'slider', isShow && 'open'),
    style: csStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "option_wrap"
  }, map(options, function (opt, optIdx) {
    return /*#__PURE__*/React.createElement("div", {
      key: "dropdown-option-".concat(optIdx),
      className: classnames(opt.id === selected && 'selected'),
      onClick: opt.click
    }, opt.label);
  })));
}

var css_248z$a = ".home_header_container{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;align-items:center;display:flex;font-family:SF Pro Display,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Emoji,sans-serif;font-style:normal;height:47px;justify-content:space-between;min-width:375px;padding:0 20px;width:100%}.home_header_container .logo_wrap{cursor:pointer}.home_header_container .buttons_wrap{display:flex;gap:24px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhvbWVIZWFkZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1QkFHRSxrQ0FBbUMsQ0FDbkMsaUNBQWtDLENBR2xDLGtCQUFtQixDQUZuQixZQUFhLENBSmIsME5BQTZQLENBQzdQLGlCQUFrQixDQVFsQixXQUFZLENBSlosNkJBQThCLENBRzlCLGVBQWdCLENBRWhCLGNBQWUsQ0FIZixVQUlGLENBQ0Esa0NBQ0UsY0FDRixDQUNBLHFDQUNFLFlBQWEsQ0FDYixRQUNGIiwiZmlsZSI6IkhvbWVIZWFkZXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lX2hlYWRlcl9jb250YWluZXIge1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gRGlzcGxheVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHN5c3RlbS11aSwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiU2Vnb2UgVUlcIiwgXCJBcHBsZSBTRCBHb3RoaWMgTmVvXCIsIFwiTm90byBTYW5zIEtSXCIsIFwiTWFsZ3VuIEdvdGhpY1wiLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIEVtb2ppXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMzc1cHg7XG4gIGhlaWdodDogNDdweDtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLmhvbWVfaGVhZGVyX2NvbnRhaW5lciAubG9nb193cmFwIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmhvbWVfaGVhZGVyX2NvbnRhaW5lciAuYnV0dG9uc193cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyNHB4O1xufSJdfQ== */";
styleInject(css_248z$a);

var img = "data:image/svg+xml,%3csvg width='45' height='24' viewBox='0 0 45 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M6.86063 11.6428C6.86063 11.4467 6.86063 11.274 6.88565 11.1028C2.61564 10.6359 1.28351 9.38305 1.28351 7.76136C1.28351 6.80267 1.65407 5.99339 2.81421 5.37864C1.65407 5.0845 1.08651 4.5678 1.08651 3.65891C1.08651 2.52902 1.97459 1.96407 3.25825 1.89093C4.7139 1.81778 5.94753 2.16173 7.0592 2.82472C6.36812 2.38272 6.07261 1.96563 6.1461 1.35089C6.29307 0.122949 8.11927 0 11.0806 0C14.0419 0 15.8431 0.0980481 15.9917 1.35089C16.0417 1.94073 15.7446 2.35782 15.0285 2.82472C16.1386 2.16173 17.4473 1.81778 18.903 1.89093C20.1366 1.98898 21.0247 2.43097 21.0247 3.53751C21.0247 4.4464 20.4571 5.01135 19.2719 5.33039C20.4571 5.94514 20.8511 6.77933 20.8511 7.76292C20.8511 9.3846 19.494 10.6374 15.1989 11.1043C15.224 11.2755 15.224 11.4483 15.224 11.6444V11.8654C16.8031 11.8156 18.3573 11.7424 19.8145 11.6693C21.2467 11.5712 22.1098 12.3074 22.1098 13.2661C22.1098 14.396 21.2467 14.9609 19.7895 15.0589C14.3359 15.4527 7.54858 15.4527 2.26854 15.0589C0.86136 14.936 -0.00170898 14.396 -0.00170898 13.2661C-0.00170898 12.3074 0.86136 11.5712 2.26854 11.6693C3.69917 11.7673 5.25488 11.8171 6.85907 11.8654V11.6444L6.86063 11.6428ZM11.0556 15.7935C17.3238 15.7935 21.1247 16.6526 21.1247 19.896C21.1247 23.1394 17.3238 23.9984 11.0556 23.9984C4.78739 23.9984 0.96299 23.0413 0.96299 19.8975C0.96299 16.7538 4.76393 15.7951 11.0556 15.7951V15.7935ZM12.6598 7.29447C13.1773 7.36761 13.2523 6.65638 12.8568 6.58167C11.6231 6.31087 10.7351 5.91868 9.79694 5.25569C9.50144 5.00979 8.95733 5.54983 9.37792 5.89378C10.291 6.60657 11.4762 7.07347 12.6598 7.29447ZM10.513 21.7636C11.4762 21.0025 12.0187 19.7497 12.3893 18.57C12.5863 18.03 11.8717 17.8821 11.7232 18.2759C11.3527 19.3808 10.8351 20.3146 9.92202 21.2484C9.64997 21.5192 10.094 22.0593 10.5146 21.7636H10.513Z' fill='%23393939'/%3e%3cpath d='M27.3914 22.8452C24.9977 22.8452 23.492 21.1504 23.3935 16.8767C23.295 13.07 23.8125 11.1526 25.2697 9.8515C26.5534 8.72161 27.343 7.71467 27.343 5.4549C27.343 2.87608 28.2811 1.91739 30.6248 1.91739C32.7231 1.91739 33.7832 2.87608 33.7832 5.35685C33.7832 7.42053 35.0418 8.55042 36.3255 9.8764C37.2886 10.8833 38.0031 12.6031 37.8311 17.1226C37.6592 22.0608 36.8195 22.9448 35.0434 22.9448C32.6981 22.9448 31.9085 22.1589 31.9085 17.0993C31.9085 14.1516 31.6364 12.3089 30.6248 10.6639C30.2793 10.1721 29.5147 10.516 29.9588 11.179C30.7483 12.3821 31.0939 14.1516 31.0939 17.4681C31.0939 22.0624 30.1808 22.8483 27.3914 22.8483V22.8452ZM41.4335 23.8039C39.4338 23.8039 38.1016 22.674 38.3487 20.4625C38.9663 15.1819 38.9663 9.87484 38.3737 4.81525C38.1016 2.38272 39.4353 1.22949 41.4335 1.22949C43.1862 1.22949 44.3948 2.21153 44.5919 4.22696C45.1344 9.53245 45.1344 15.5274 44.5919 20.8578C44.3948 22.8234 43.1847 23.8055 41.4335 23.8055V23.8039Z' fill='%23393939'/%3e%3c/svg%3e";

var HomeHeader = function (_a) {
  var _b = _a.homeUrl,
    homeUrl = _b === void 0 ? '/' : _b,
    _c = _a.editUrl,
    editUrl = _c === void 0 ? '/edit' : _c,
    _d = _a.searchUrl,
    searchUrl = _d === void 0 ? '/search' : _d;
    __rest(_a, ["homeUrl", "editUrl", "searchUrl"]);
  var goHome = function () {
    window.location.href = homeUrl;
  };
  var goSearch = function () {
    window.location.href = searchUrl;
  };
  var goEdit = function () {
    window.location.href = editUrl;
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "home_header_container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo_wrap"
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: "\uD64D\uC2DC",
    onClick: goHome
  })), /*#__PURE__*/React.createElement("div", {
    className: "buttons_wrap"
  }, /*#__PURE__*/React.createElement(IconButton, {
    type: "EditWrite",
    size: "sm",
    color: "#393939",
    onClick: goEdit
  }), /*#__PURE__*/React.createElement(IconButton, {
    type: "Search",
    size: "sm",
    color: "#393939",
    onClick: goSearch
  })));
};

var css_248z$9 = ".read_header_container{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;align-items:center;display:flex;font-family:SF Pro Display,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Emoji,sans-serif;font-style:normal;height:47px;justify-content:space-between;min-width:375px;width:100%}.read_header_container .back_wrap{cursor:pointer}.read_header_container .buttons_wrap{display:flex;gap:24px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlYWRIZWFkZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1QkFHRSxrQ0FBbUMsQ0FDbkMsaUNBQWtDLENBR2xDLGtCQUFtQixDQUZuQixZQUFhLENBSmIsME5BQTZQLENBQzdQLGlCQUFrQixDQVFsQixXQUFZLENBSlosNkJBQThCLENBRzlCLGVBQWdCLENBRGhCLFVBR0YsQ0FDQSxrQ0FDRSxjQUNGLENBQ0EscUNBQ0UsWUFBYSxDQUNiLFFBQ0YiLCJmaWxlIjoiUmVhZEhlYWRlci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlYWRfaGVhZGVyX2NvbnRhaW5lciB7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBEaXNwbGF5XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgc3lzdGVtLXVpLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJTZWdvZSBVSVwiLCBcIkFwcGxlIFNEIEdvdGhpYyBOZW9cIiwgXCJOb3RvIFNhbnMgS1JcIiwgXCJNYWxndW4gR290aGljXCIsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gRW1vamlcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAzNzVweDtcbiAgaGVpZ2h0OiA0N3B4O1xufVxuLnJlYWRfaGVhZGVyX2NvbnRhaW5lciAuYmFja193cmFwIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJlYWRfaGVhZGVyX2NvbnRhaW5lciAuYnV0dG9uc193cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyNHB4O1xufSJdfQ== */";
styleInject(css_248z$9);

var ReadHeader = function (_a) {
  var _b = _a.goBack,
    goBack = _b === void 0 ? function () {} : _b,
    _c = _a.openShard,
    openShard = _c === void 0 ? function () {} : _c,
    _d = _a.openMore,
    openMore = _d === void 0 ? function () {} : _d;
    __rest(_a, ["goBack", "openShard", "openMore"]);
  return /*#__PURE__*/React.createElement("div", {
    className: "read_header_container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "back_wrap"
  }, /*#__PURE__*/React.createElement(IconButton, {
    type: "Right",
    size: "sm",
    color: "#393939",
    onClick: goBack
  })), /*#__PURE__*/React.createElement("div", {
    className: "buttons_wrap"
  }, /*#__PURE__*/React.createElement(IconButton, {
    type: "Share",
    size: "sm",
    color: "#393939",
    onClick: openShard
  }), /*#__PURE__*/React.createElement(IconButton, {
    type: "More",
    size: "sm",
    color: "#393939",
    onClick: openMore
  })));
};

var css_248z$8 = ".write_header_container{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;align-items:center;display:flex;font-family:SF Pro Display,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Emoji,sans-serif;font-style:normal;height:47px;justify-content:space-between;min-width:375px;width:100%}.write_header_container .back_wrap{cursor:pointer}.write_header_container .title{font-size:18px;font-weight:700}.write_header_container .buttons_wrap{color:var(--primary-orange);display:flex;font-size:15px;font-weight:700;gap:24px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIldyaXRlSGVhZGVyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0JBR0Usa0NBQW1DLENBQ25DLGlDQUFrQyxDQUdsQyxrQkFBbUIsQ0FGbkIsWUFBYSxDQUpiLDBOQUE2UCxDQUM3UCxpQkFBa0IsQ0FRbEIsV0FBWSxDQUpaLDZCQUE4QixDQUc5QixlQUFnQixDQURoQixVQUdGLENBQ0EsbUNBQ0UsY0FDRixDQUNBLCtCQUVFLGNBQWUsQ0FEZixlQUVGLENBQ0Esc0NBS0UsMkJBQTRCLENBSjVCLFlBQWEsQ0FHYixjQUFlLENBRGYsZUFBZ0IsQ0FEaEIsUUFJRiIsImZpbGUiOiJXcml0ZUhlYWRlci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyaXRlX2hlYWRlcl9jb250YWluZXIge1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gRGlzcGxheVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHN5c3RlbS11aSwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiU2Vnb2UgVUlcIiwgXCJBcHBsZSBTRCBHb3RoaWMgTmVvXCIsIFwiTm90byBTYW5zIEtSXCIsIFwiTWFsZ3VuIEdvdGhpY1wiLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIEVtb2ppXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMzc1cHg7XG4gIGhlaWdodDogNDdweDtcbn1cbi53cml0ZV9oZWFkZXJfY29udGFpbmVyIC5iYWNrX3dyYXAge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ud3JpdGVfaGVhZGVyX2NvbnRhaW5lciAudGl0bGUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ud3JpdGVfaGVhZGVyX2NvbnRhaW5lciAuYnV0dG9uc193cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LW9yYW5nZSk7XG59Il19 */";
styleInject(css_248z$8);

var WriteHeader = function (_a) {
  var _b = _a.goBack,
    goBack = _b === void 0 ? function () {} : _b,
    writeUrl = _a.writeUrl,
    title = _a.title;
    __rest(_a, ["goBack", "writeUrl", "title"]);
  return /*#__PURE__*/React.createElement("div", {
    className: "write_header_container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "back_wrap"
  }, /*#__PURE__*/React.createElement(IconButton, {
    type: "Right",
    size: "sm",
    color: "#393939",
    onClick: goBack
  })), /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "buttons_wrap"
  }, writeUrl && /*#__PURE__*/React.createElement("div", null, "\uB4F1\uB85D")));
};

var css_248z$7 = ".search_header_container{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;align-items:center;display:grid;font-family:SF Pro Display,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Emoji,sans-serif;font-style:normal;gap:11px;grid-template-columns:24px auto;height:47px;min-width:375px;width:100%}.search_header_container .back_wrap{cursor:pointer}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlYXJjaEhlYWRlci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlCQUdFLGtDQUFtQyxDQUNuQyxpQ0FBa0MsQ0FHbEMsa0JBQW1CLENBRm5CLFlBQWEsQ0FKYiwwTkFBNlAsQ0FDN1AsaUJBQWtCLENBU2xCLFFBQVMsQ0FMVCwrQkFBZ0MsQ0FJaEMsV0FBWSxDQURaLGVBQWdCLENBRGhCLFVBSUYsQ0FDQSxvQ0FDRSxjQUNGIiwiZmlsZSI6IlNlYXJjaEhlYWRlci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaF9oZWFkZXJfY29udGFpbmVyIHtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIERpc3BsYXlcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBzeXN0ZW0tdWksIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIlNlZ29lIFVJXCIsIFwiQXBwbGUgU0QgR290aGljIE5lb1wiLCBcIk5vdG8gU2FucyBLUlwiLCBcIk1hbGd1biBHb3RoaWNcIiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBFbW9qaVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI0cHggYXV0bztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMzc1cHg7XG4gIGhlaWdodDogNDdweDtcbiAgZ2FwOiAxMXB4O1xufVxuLnNlYXJjaF9oZWFkZXJfY29udGFpbmVyIC5iYWNrX3dyYXAge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */";
styleInject(css_248z$7);

var convertThousandSeparator = function (number) {
  if (!number && number !== 0) return number;
  var str = split(number, ".");
  str[0] = str[0].toString().replace(/[^0-9]/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  if (String(number).indexOf(".") > -1) {
    return join(str, ".");
  } else {
    return str[0];
  }
};
var makePhoneNumber = function (value) {
  if (!value) return value;
  var currentValue = value.replace(/[^\d]/g, "");
  var cvLength = currentValue.length;
  if (cvLength < 4) return currentValue;
  if (cvLength < 7) return "".concat(currentValue.slice(0, 3), "-").concat(currentValue.slice(3));
  if (cvLength < 10) return "".concat(currentValue.slice(0, 2), "-").concat(currentValue.slice(2, 5), "-").concat(currentValue.slice(5, 9));
  if (cvLength < 11) return "".concat(currentValue.slice(0, 3), "-").concat(currentValue.slice(3, 6), "-").concat(currentValue.slice(6, 10));
  return "".concat(currentValue.slice(0, 3), "-").concat(currentValue.slice(3, 7), "-").concat(currentValue.slice(7, 11));
};

var css_248z$6 = ".input_container{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:SF Pro Display,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Emoji,sans-serif;font-style:normal}.input_container.lg{--font-weight:500;--font-size:18px;--line-height:28px;--input-height:34px}.input_container.md{--font-weight:600;--font-size:15px;--line-height:17px;--input-height:34px}.input_container.sm{--font-weight:600;--font-size:12px;--line-height:15px;--input-height:30px}.input_container .input_wrap{align-items:center;background-color:var(--background-color);border-radius:var(--input-border-radius);box-shadow:none;display:flex;display:-webkit-flex;height:var(--input-height);justify-content:center;padding:var(--input-padding);position:relative}.input_container .input_wrap.decimal,.input_container .input_wrap.default,.input_container .input_wrap.number,.input_container .input_wrap.numberOnly,.input_container .input_wrap.phone{--input-border-radius:0px;--input-padding:0px;--background-color:var(--white);--color:var(--black);--input-placeholder-color:var(--grey-60);--border-color:var(--primary-orange);--focus-border-color:var(--primary-orange);--disabled-color:var(--grey-60);--disabled-background:var(--grey-50);border-bottom:1px solid var(--border-color)}.input_container .input_wrap.search{--input-border-radius:8px;--input-padding:8px 12px;--background-color:var(--grey-30);--color:var(--black);--input-placeholder-color:var(--grey-60);--border-color:var(--grey-20);--focus-border-color:var(--primary-orange);--disabled-color:var(--grey-60);--disabled-background:var(--grey-50);border:1px solid var(--border-color)}.input_container .input_wrap.disabled{background-color:var(--disabled-background);border:none;color:var(--disabled-color)}.input_container .input_wrap.is_focus{border-color:var(--focus-border-color)}.input_container .input_wrap .adornment_wrap{align-items:center;display:inline-flex;display:-webkit-inline-flex;justify-content:center}.input_container .input_wrap .adornment_wrap.start{margin-right:var(--adornment-start-margin-right)}.input_container .input_wrap .adornment_wrap.end{gap:var(--adornment-end-gap);margin-left:var(--adornment-end-margin-left)}.input_container .input_wrap input{background-color:transparent;border:none;caret-color:var(--primary-orange);color:var(--color);flex-grow:1;font-family:inherit;font-size:var(--font-size);font-weight:var(--font-weight);height:100%;line-height:var(--line-height);outline:none;width:0}.input_container .input_wrap input:disabled{color:var(--grey-60)}.input_container .input_wrap input::placeholder{color:var(--input-placeholder-color);font-weight:var(--font-weight)}.input_container .input_wrap input:disabled::placeholder{color:var(--disabled-color)}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRleHRGaWVsZC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUdFLGtDQUFtQyxDQUNuQyxpQ0FBa0MsQ0FIbEMsME5BQTZQLENBQzdQLGlCQUdGLENBQ0Esb0JBQ0UsaUJBQWtCLENBQ2xCLGdCQUFpQixDQUNqQixrQkFBbUIsQ0FDbkIsbUJBQ0YsQ0FDQSxvQkFDRSxpQkFBa0IsQ0FDbEIsZ0JBQWlCLENBQ2pCLGtCQUFtQixDQUNuQixtQkFDRixDQUNBLG9CQUNFLGlCQUFrQixDQUNsQixnQkFBaUIsQ0FDakIsa0JBQW1CLENBQ25CLG1CQUNGLENBQ0EsNkJBS0Usa0JBQW1CLENBS25CLHdDQUF5QyxDQUZ6Qyx3Q0FBeUMsQ0FEekMsZUFBZ0IsQ0FMaEIsWUFBYSxDQUNiLG9CQUFxQixDQUdyQiwwQkFBMkIsQ0FGM0Isc0JBQXVCLENBS3ZCLDRCQUE2QixDQVI3QixpQkFVRixDQUNBLHlMQUNFLHlCQUEwQixDQUMxQixtQkFBb0IsQ0FDcEIsK0JBQWdDLENBQ2hDLG9CQUFxQixDQUNyQix3Q0FBeUMsQ0FDekMsb0NBQXFDLENBQ3JDLDBDQUEyQyxDQUMzQywrQkFBZ0MsQ0FDaEMsb0NBQXFDLENBQ3JDLDJDQUNGLENBQ0Esb0NBQ0UseUJBQTBCLENBQzFCLHdCQUF5QixDQUN6QixpQ0FBa0MsQ0FDbEMsb0JBQXFCLENBQ3JCLHdDQUF5QyxDQUN6Qyw2QkFBOEIsQ0FDOUIsMENBQTJDLENBQzNDLCtCQUFnQyxDQUNoQyxvQ0FBcUMsQ0FDckMsb0NBQ0YsQ0FDQSxzQ0FDRSwyQ0FBNEMsQ0FFNUMsV0FBWSxDQURaLDJCQUVGLENBQ0Esc0NBQ0Usc0NBQ0YsQ0FDQSw2Q0FJRSxrQkFBbUIsQ0FIbkIsbUJBQW9CLENBQ3BCLDJCQUE0QixDQUM1QixzQkFFRixDQUNBLG1EQUNFLGdEQUNGLENBQ0EsaURBRUUsNEJBQTZCLENBRDdCLDRDQUVGLENBQ0EsbUNBVUUsNEJBQTZCLENBRTdCLFdBQVksQ0FIWixpQ0FBa0MsQ0FEbEMsa0JBQW1CLENBTG5CLFdBQVksQ0FGWixtQkFBb0IsQ0FJcEIsMEJBQTJCLENBQzNCLDhCQUErQixDQUYvQixXQUFZLENBR1osOEJBQStCLENBSS9CLFlBQWEsQ0FUYixPQVdGLENBQ0EsNENBQ0Usb0JBQ0YsQ0FDQSxnREFDRSxvQ0FBcUMsQ0FDckMsOEJBQ0YsQ0FDQSx5REFDRSwyQkFDRiIsImZpbGUiOiJUZXh0RmllbGQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dF9jb250YWluZXIge1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gRGlzcGxheVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHN5c3RlbS11aSwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiU2Vnb2UgVUlcIiwgXCJBcHBsZSBTRCBHb3RoaWMgTmVvXCIsIFwiTm90byBTYW5zIEtSXCIsIFwiTWFsZ3VuIEdvdGhpY1wiLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIEVtb2ppXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG4uaW5wdXRfY29udGFpbmVyLmxnIHtcbiAgLS1mb250LXdlaWdodDogNTAwO1xuICAtLWZvbnQtc2l6ZTogMThweDtcbiAgLS1saW5lLWhlaWdodDogMjhweDtcbiAgLS1pbnB1dC1oZWlnaHQ6IDM0cHg7XG59XG4uaW5wdXRfY29udGFpbmVyLm1kIHtcbiAgLS1mb250LXdlaWdodDogNjAwO1xuICAtLWZvbnQtc2l6ZTogMTVweDtcbiAgLS1saW5lLWhlaWdodDogMTdweDtcbiAgLS1pbnB1dC1oZWlnaHQ6IDM0cHg7XG59XG4uaW5wdXRfY29udGFpbmVyLnNtIHtcbiAgLS1mb250LXdlaWdodDogNjAwO1xuICAtLWZvbnQtc2l6ZTogMTJweDtcbiAgLS1saW5lLWhlaWdodDogMTVweDtcbiAgLS1pbnB1dC1oZWlnaHQ6IDMwcHg7XG59XG4uaW5wdXRfY29udGFpbmVyIC5pbnB1dF93cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IHZhcigtLWlucHV0LWhlaWdodCk7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWlucHV0LWJvcmRlci1yYWRpdXMpO1xuICBwYWRkaW5nOiB2YXIoLS1pbnB1dC1wYWRkaW5nKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG59XG4uaW5wdXRfY29udGFpbmVyIC5pbnB1dF93cmFwLmRlZmF1bHQsIC5pbnB1dF9jb250YWluZXIgLmlucHV0X3dyYXAubnVtYmVyLCAuaW5wdXRfY29udGFpbmVyIC5pbnB1dF93cmFwLm51bWJlck9ubHksIC5pbnB1dF9jb250YWluZXIgLmlucHV0X3dyYXAuZGVjaW1hbCwgLmlucHV0X2NvbnRhaW5lciAuaW5wdXRfd3JhcC5waG9uZSB7XG4gIC0taW5wdXQtYm9yZGVyLXJhZGl1czogMHB4O1xuICAtLWlucHV0LXBhZGRpbmc6IDBweDtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIC0tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgLS1pbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0tZ3JleS02MCk7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LW9yYW5nZSk7XG4gIC0tZm9jdXMtYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LW9yYW5nZSk7XG4gIC0tZGlzYWJsZWQtY29sb3I6IHZhcigtLWdyZXktNjApO1xuICAtLWRpc2FibGVkLWJhY2tncm91bmQ6IHZhcigtLWdyZXktNTApO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbn1cbi5pbnB1dF9jb250YWluZXIgLmlucHV0X3dyYXAuc2VhcmNoIHtcbiAgLS1pbnB1dC1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIC0taW5wdXQtcGFkZGluZzogOHB4IDEycHg7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleS0zMCk7XG4gIC0tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgLS1pbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0tZ3JleS02MCk7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ncmV5LTIwKTtcbiAgLS1mb2N1cy1ib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktb3JhbmdlKTtcbiAgLS1kaXNhYmxlZC1jb2xvcjogdmFyKC0tZ3JleS02MCk7XG4gIC0tZGlzYWJsZWQtYmFja2dyb3VuZDogdmFyKC0tZ3JleS01MCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG59XG4uaW5wdXRfY29udGFpbmVyIC5pbnB1dF93cmFwLmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlzYWJsZWQtYmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS1kaXNhYmxlZC1jb2xvcik7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5pbnB1dF9jb250YWluZXIgLmlucHV0X3dyYXAuaXNfZm9jdXMge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZvY3VzLWJvcmRlci1jb2xvcik7XG59XG4uaW5wdXRfY29udGFpbmVyIC5pbnB1dF93cmFwIC5hZG9ybm1lbnRfd3JhcCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pbnB1dF9jb250YWluZXIgLmlucHV0X3dyYXAgLmFkb3JubWVudF93cmFwLnN0YXJ0IHtcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1hZG9ybm1lbnQtc3RhcnQtbWFyZ2luLXJpZ2h0KTtcbn1cbi5pbnB1dF9jb250YWluZXIgLmlucHV0X3dyYXAgLmFkb3JubWVudF93cmFwLmVuZCB7XG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1hZG9ybm1lbnQtZW5kLW1hcmdpbi1sZWZ0KTtcbiAgZ2FwOiB2YXIoLS1hZG9ybm1lbnQtZW5kLWdhcCk7XG59XG4uaW5wdXRfY29udGFpbmVyIC5pbnB1dF93cmFwIGlucHV0IHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIHdpZHRoOiAwO1xuICBmbGV4LWdyb3c6IDE7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQpO1xuICBjb2xvcjogdmFyKC0tY29sb3IpO1xuICBjYXJldC1jb2xvcjogdmFyKC0tcHJpbWFyeS1vcmFuZ2UpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xufVxuLmlucHV0X2NvbnRhaW5lciAuaW5wdXRfd3JhcCBpbnB1dDpkaXNhYmxlZCB7XG4gIGNvbG9yOiB2YXIoLS1ncmV5LTYwKTtcbn1cbi5pbnB1dF9jb250YWluZXIgLmlucHV0X3dyYXAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLWlucHV0LXBsYWNlaG9sZGVyLWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0KTtcbn1cbi5pbnB1dF9jb250YWluZXIgLmlucHV0X3dyYXAgaW5wdXQ6ZGlzYWJsZWQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLWRpc2FibGVkLWNvbG9yKTtcbn0iXX0= */";
styleInject(css_248z$6);

function TextField(_a) {
  var id = _a.id,
    size = _a.size,
    style = _a.style,
    type = _a.type,
    className = _a.className,
    disabled = _a.disabled,
    placeholder = _a.placeholder,
    value = _a.value,
    label = _a.label,
    isState = _a.isState,
    errorMessage = _a.errorMessage,
    isRequired = _a.isRequired,
    hasStartAdornment = _a.hasStartAdornment,
    startAdornmentEl = _a.startAdornmentEl,
    hasEndAdornment = _a.hasEndAdornment,
    endAdornmentEl = _a.endAdornmentEl,
    handleFocus = _a.handleFocus,
    isShowClear = _a.isShowClear,
    regExp = _a.regExp,
    onChange = _a.onChange,
    props = __rest(_a, ["id", "size", "style", "type", "className", "disabled", "placeholder", "value", "label", "isState", "errorMessage", "isRequired", "hasStartAdornment", "startAdornmentEl", "hasEndAdornment", "endAdornmentEl", "handleFocus", "isShowClear", "regExp", "onChange"]);
  var inputFocus = React.useRef(null);
  var csStyle = style || {};
  var _b = React.useState(false),
    isFocus = _b[0],
    setIsFocus = _b[1];
  var _c = React.useState('text'),
    inputType = _c[0];
    _c[1];
  var convertValue = function (_value) {
    switch (type) {
      case 'number':
        return convertThousandSeparator(_value ? String(_value).replace(/[^\d]/g, '') : _value);
      case 'numberOnly':
        return _value ? String(_value).replace(/[^\d]/g, '') : _value;
      case 'decimal':
        if (_value) {
          var roundPositionRegExp = /^([0-9]+|0{1})(\.{1}\d{0,2})?$/g;
          var removeComma = String(_value).replace(/,/g, '');
          if (roundPositionRegExp.test(removeComma)) {
            var convertNumber = last(removeComma) === '.' || last(removeComma) === '0' ? removeComma : +removeComma;
            return convertNumber === '' ? null : convertNumber; //convertThousandSeparator(convertNumber) -> , 찍어주려면 이걸로 리턴
          } else {
            // 정규식에 적합하지 않은 값은 현재값을 되돌려 준다
            return value;
          }
        } else {
          return _value;
        }
      case 'phone':
        return makePhoneNumber(_value);
      default:
        if (regExp) {
          if (_value) {
            if (regExp.test(_value)) {
              return _value;
            } else {
              // 정규식에 적합하지 않은 값은 현재값을 되돌려 준다
              return value;
            }
          } else {
            return _value;
          }
        } else {
          return _value;
        }
    }
  };
  var handleChange = function (e) {
    onChange({
      id: e.target.id || null,
      value: convertValue(e.target.value)
    });
  };
  React.useEffect(function () {
    var _a;
    if (inputFocus && handleFocus) {
      (_a = inputFocus.current) === null || _a === void 0 ? void 0 : _a.focus();
    }
  }, [handleFocus, inputFocus]);
  return /*#__PURE__*/React.createElement("div", {
    className: classnames('input_container', className, size),
    style: csStyle
  }, label && ( /*#__PURE__*/React.createElement("span", {
    className: "input_label"
  }, label, "\u00A0", isRequired && /*#__PURE__*/React.createElement("span", {
    className: "required"
  }, "*"))), /*#__PURE__*/React.createElement("div", {
    className: classnames('input_wrap', type, isState, isFocus && 'is_focus', disabled && 'disabled')
  }, /*#__PURE__*/React.createElement("div", {
    className: "adornment_wrap start"
  }, hasStartAdornment && startAdornmentEl), /*#__PURE__*/React.createElement("input", __assign({
    id: id,
    ref: inputFocus,
    onChange: function (e) {
      return handleChange(e);
    },
    disabled: disabled,
    placeholder: placeholder,
    value: convertValue(value) || '',
    onFocus: function () {
      return setIsFocus(true);
    },
    onBlur: function () {
      return setIsFocus(false);
    },
    type: inputType || 'text'
  }, props)), /*#__PURE__*/React.createElement("div", {
    className: "adornment_wrap end"
  }, isShowClear && ( /*#__PURE__*/React.createElement(Icon, {
    id: "Clear",
    color: "#ABABAB",
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    style: {
      cursor: 'pointer'
    },
    onClick: function (e) {
      if (inputFocus.current) {
        var target = inputFocus.current;
        target.value = '';
        onChange({
          id: target.id || null,
          value: ''
        });
      }
    },
    onMouseDown: function (e) {
      e.preventDefault();
    }
  })), hasEndAdornment && endAdornmentEl)), isState === 'error' && errorMessage && ( /*#__PURE__*/React.createElement("span", {
    className: "input_label_error"
  }, errorMessage)));
}
TextField.defaultProps = {
  size: 'lg',
  type: 'default',
  placeholder: '입력해주세요.',
  handleFocus: false,
  isShowClear: false,
  regExp: undefined,
  onChange: function () {}
};

var css_248z$5 = ".textarea_container{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:SF Pro Display,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Emoji,sans-serif;font-style:normal}.textarea_container .textarea_wrap{align-items:center;box-shadow:none;display:flex;display:-webkit-flex;justify-content:center;padding:6px 0;position:relative}.textarea_container .textarea_wrap.default{--input-placeholder-color:var(--grey-60);--disabled-color:var(--grey-60)}.textarea_container .textarea_wrap textarea{background-color:transparent;border:none;caret-color:var(--primary-orange);color:var(--black);flex-grow:1;font-family:inherit;font-size:18px;font-weight:400;height:100%;letter-spacing:-.3px;line-height:28px;outline:none;width:100%;z-index:1}.textarea_container .textarea_wrap textarea::-webkit-resizer{display:none}.textarea_container .textarea_wrap textarea.virtual{left:0;position:absolute;top:0;visibility:hidden;z-index:0}.textarea_container .textarea_wrap textarea:disabled{color:var(--disabled-color)}.textarea_container .textarea_wrap textarea::placeholder{color:var(--input-placeholder-color)}.textarea_container .textarea_wrap textarea:disabled::placeholder{color:var(--disabled-color)}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRleHRBcmVhLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBR0Usa0NBQW1DLENBQ25DLGlDQUFrQyxDQUhsQywwTkFBNlAsQ0FDN1AsaUJBR0YsQ0FDQSxtQ0FLRSxrQkFBbUIsQ0FDbkIsZUFBZ0IsQ0FKaEIsWUFBYSxDQUNiLG9CQUFxQixDQUNyQixzQkFBdUIsQ0FHdkIsYUFBYyxDQU5kLGlCQU9GLENBQ0EsMkNBQ0Usd0NBQXlDLENBQ3pDLCtCQUNGLENBQ0EsNENBV0UsNEJBQTZCLENBRTdCLFdBQVksQ0FIWixpQ0FBa0MsQ0FEbEMsa0JBQW1CLENBTm5CLFdBQVksQ0FGWixtQkFBb0IsQ0FJcEIsY0FBZSxDQUNmLGVBQWdCLENBRmhCLFdBQVksQ0FJWixvQkFBc0IsQ0FEdEIsZ0JBQWlCLENBS2pCLFlBQWEsQ0FWYixVQUFXLENBWVgsU0FDRixDQUNBLDZEQUNFLFlBQ0YsQ0FDQSxvREFFRSxNQUFPLENBRFAsaUJBQWtCLENBRWxCLEtBQU0sQ0FFTixpQkFBa0IsQ0FEbEIsU0FFRixDQUNBLHFEQUNFLDJCQUNGLENBQ0EseURBQ0Usb0NBQ0YsQ0FDQSxrRUFDRSwyQkFDRiIsImZpbGUiOiJUZXh0QXJlYS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRhcmVhX2NvbnRhaW5lciB7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBEaXNwbGF5XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgc3lzdGVtLXVpLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJTZWdvZSBVSVwiLCBcIkFwcGxlIFNEIEdvdGhpYyBOZW9cIiwgXCJOb3RvIFNhbnMgS1JcIiwgXCJNYWxndW4gR290aGljXCIsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gRW1vamlcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cbi50ZXh0YXJlYV9jb250YWluZXIgLnRleHRhcmVhX3dyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmc6IDZweCAwO1xufVxuLnRleHRhcmVhX2NvbnRhaW5lciAudGV4dGFyZWFfd3JhcC5kZWZhdWx0IHtcbiAgLS1pbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0tZ3JleS02MCk7XG4gIC0tZGlzYWJsZWQtY29sb3I6IHZhcigtLWdyZXktNjApO1xufVxuLnRleHRhcmVhX2NvbnRhaW5lciAudGV4dGFyZWFfd3JhcCB0ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1ncm93OiAxO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIGNhcmV0LWNvbG9yOiB2YXIoLS1wcmltYXJ5LW9yYW5nZSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHotaW5kZXg6IDE7XG59XG4udGV4dGFyZWFfY29udGFpbmVyIC50ZXh0YXJlYV93cmFwIHRleHRhcmVhOjotd2Via2l0LXJlc2l6ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnRleHRhcmVhX2NvbnRhaW5lciAudGV4dGFyZWFfd3JhcCB0ZXh0YXJlYS52aXJ0dWFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi50ZXh0YXJlYV9jb250YWluZXIgLnRleHRhcmVhX3dyYXAgdGV4dGFyZWE6ZGlzYWJsZWQge1xuICBjb2xvcjogdmFyKC0tZGlzYWJsZWQtY29sb3IpO1xufVxuLnRleHRhcmVhX2NvbnRhaW5lciAudGV4dGFyZWFfd3JhcCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0taW5wdXQtcGxhY2Vob2xkZXItY29sb3IpO1xufVxuLnRleHRhcmVhX2NvbnRhaW5lciAudGV4dGFyZWFfd3JhcCB0ZXh0YXJlYTpkaXNhYmxlZDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tZGlzYWJsZWQtY29sb3IpO1xufSJdfQ== */";
styleInject(css_248z$5);

function TextArea(_a) {
  var id = _a.id,
    style = _a.style,
    type = _a.type,
    className = _a.className,
    disabled = _a.disabled,
    placeholder = _a.placeholder,
    value = _a.value,
    label = _a.label,
    isState = _a.isState,
    errorMessage = _a.errorMessage,
    isRequired = _a.isRequired,
    handleFocus = _a.handleFocus,
    onChange = _a.onChange,
    props = __rest(_a, ["id", "style", "type", "className", "disabled", "placeholder", "value", "label", "isState", "errorMessage", "isRequired", "handleFocus", "onChange"]);
  var textareaRef = React.useRef(null);
  var textareaVirtualRef = React.useRef(null);
  var csStyle = style || {};
  var defaultHeight = 28;
  var maxHeight = 280;
  var _b = React.useState(false),
    isFocus = _b[0],
    setIsFocus = _b[1];
  var _c = React.useState(defaultHeight),
    height = _c[0],
    setHeight = _c[1];
  var handleChange = function (e) {
    onChange({
      id: e.target.id || null,
      value: e.target.value
    });
  };
  var handleHeight = function () {
    var _a;
    var beHeight = (_a = textareaVirtualRef.current) === null || _a === void 0 ? void 0 : _a.scrollHeight;
    if (beHeight && beHeight <= maxHeight) {
      setHeight(beHeight);
    }
  };
  React.useEffect(function () {
    var _a;
    if (textareaRef && handleFocus) {
      (_a = textareaRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }
  }, [handleFocus, textareaRef]);
  React.useEffect(function () {
    if (textareaVirtualRef.current) {
      handleHeight();
    }
  }, [value]);
  return /*#__PURE__*/React.createElement("div", {
    className: classnames('textarea_container', className),
    style: csStyle
  }, label && ( /*#__PURE__*/React.createElement("span", {
    className: "input_label"
  }, label, "\u00A0", isRequired && /*#__PURE__*/React.createElement("span", {
    className: "required"
  }, "*"))), /*#__PURE__*/React.createElement("div", {
    className: classnames('textarea_wrap', type, isState, isFocus && 'is_focus', disabled && 'disabled')
  }, /*#__PURE__*/React.createElement("textarea", __assign({
    ref: textareaRef,
    id: id,
    disabled: disabled,
    placeholder: placeholder,
    value: value,
    style: {
      height: height
    },
    onFocus: function () {
      return setIsFocus(true);
    },
    onBlur: function () {
      return setIsFocus(false);
    },
    onChange: function (e) {
      return handleChange(e);
    }
  }, props)), /*#__PURE__*/React.createElement("textarea", __assign({
    ref: textareaVirtualRef,
    id: "".concat(id, "-virtual"),
    value: value,
    readOnly: true,
    className: "virtual",
    style: {
      height: defaultHeight
    }
  }, props))), isState === 'error' && errorMessage && ( /*#__PURE__*/React.createElement("span", {
    className: "input_label_error"
  }, errorMessage)));
}
TextArea.defaultProps = {
  size: 'lg',
  type: 'default',
  placeholder: '입력해주세요.',
  handleFocus: false,
  onChange: function () {}
};

var css_248z$4 = ".comment_container{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:SF Pro Display,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Emoji,sans-serif;font-style:normal;max-height:321px;max-width:375px;overflow-y:hidden;padding:14.13px 0 14.13px 20px}.comment_container.lg{--font-weight:500;--font-size:18px;--line-height:28px;--input-height:34px}.comment_container.md{--font-weight:600;--font-size:15px;--line-height:17px;--input-height:34px}.comment_container.sm{--font-weight:600;--font-size:12px;--line-height:15px;--input-height:30px}.comment_container .comment_wrap{display:grid;gap:20px;grid-template-columns:40px auto;position:relative}.comment_container .comment_wrap .img_box{align-items:center;background-color:var(--grey-30);border-radius:50%;display:flex;height:42px;justify-content:center;position:relative;width:42px}.comment_container .comment_wrap .img_box img{border-radius:50%}.comment_container .comment_wrap .img_box.img_default{background-color:var(--grey-30)}.comment_container .comment_wrap textarea{padding-right:53px;z-index:1}.comment_container .comment_wrap .button_wrap{align-items:flex-end;bottom:0;display:flex;position:absolute;right:20px;z-index:2}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbW1lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFHRSxrQ0FBbUMsQ0FDbkMsaUNBQWtDLENBSGxDLDBOQUE2UCxDQUM3UCxpQkFBa0IsQ0FJbEIsZ0JBQWlCLENBRGpCLGVBQWdCLENBRWhCLGlCQUFrQixDQUNsQiw4QkFDRixDQUNBLHNCQUNFLGlCQUFrQixDQUNsQixnQkFBaUIsQ0FDakIsa0JBQW1CLENBQ25CLG1CQUNGLENBQ0Esc0JBQ0UsaUJBQWtCLENBQ2xCLGdCQUFpQixDQUNqQixrQkFBbUIsQ0FDbkIsbUJBQ0YsQ0FDQSxzQkFDRSxpQkFBa0IsQ0FDbEIsZ0JBQWlCLENBQ2pCLGtCQUFtQixDQUNuQixtQkFDRixDQUNBLGlDQUNFLFlBQWEsQ0FFYixRQUFTLENBRFQsK0JBQWdDLENBRWhDLGlCQUNGLENBQ0EsMENBRUUsa0JBQW1CLENBTW5CLCtCQUFnQyxDQURoQyxpQkFBa0IsQ0FObEIsWUFBYSxDQUtiLFdBQVksQ0FIWixzQkFBdUIsQ0FDdkIsaUJBQWtCLENBQ2xCLFVBSUYsQ0FDQSw4Q0FDRSxpQkFDRixDQUNBLHNEQUNFLCtCQUNGLENBQ0EsMENBQ0Usa0JBQW1CLENBQ25CLFNBQ0YsQ0FDQSw4Q0FFRSxvQkFBcUIsQ0FHckIsUUFBUyxDQUpULFlBQWEsQ0FFYixpQkFBa0IsQ0FDbEIsVUFBVyxDQUVYLFNBQ0YiLCJmaWxlIjoiQ29tbWVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbW1lbnRfY29udGFpbmVyIHtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIERpc3BsYXlcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBzeXN0ZW0tdWksIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIlNlZ29lIFVJXCIsIFwiQXBwbGUgU0QgR290aGljIE5lb1wiLCBcIk5vdG8gU2FucyBLUlwiLCBcIk1hbGd1biBHb3RoaWNcIiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBFbW9qaVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICBtYXgtd2lkdGg6IDM3NXB4O1xuICBtYXgtaGVpZ2h0OiAzMjFweDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBwYWRkaW5nOiAxNC4xM3B4IDAgMTQuMTNweCAyMHB4O1xufVxuLmNvbW1lbnRfY29udGFpbmVyLmxnIHtcbiAgLS1mb250LXdlaWdodDogNTAwO1xuICAtLWZvbnQtc2l6ZTogMThweDtcbiAgLS1saW5lLWhlaWdodDogMjhweDtcbiAgLS1pbnB1dC1oZWlnaHQ6IDM0cHg7XG59XG4uY29tbWVudF9jb250YWluZXIubWQge1xuICAtLWZvbnQtd2VpZ2h0OiA2MDA7XG4gIC0tZm9udC1zaXplOiAxNXB4O1xuICAtLWxpbmUtaGVpZ2h0OiAxN3B4O1xuICAtLWlucHV0LWhlaWdodDogMzRweDtcbn1cbi5jb21tZW50X2NvbnRhaW5lci5zbSB7XG4gIC0tZm9udC13ZWlnaHQ6IDYwMDtcbiAgLS1mb250LXNpemU6IDEycHg7XG4gIC0tbGluZS1oZWlnaHQ6IDE1cHg7XG4gIC0taW5wdXQtaGVpZ2h0OiAzMHB4O1xufVxuLmNvbW1lbnRfY29udGFpbmVyIC5jb21tZW50X3dyYXAge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwcHggYXV0bztcbiAgZ2FwOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29tbWVudF9jb250YWluZXIgLmNvbW1lbnRfd3JhcCAuaW1nX2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleS0zMCk7XG59XG4uY29tbWVudF9jb250YWluZXIgLmNvbW1lbnRfd3JhcCAuaW1nX2JveCBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uY29tbWVudF9jb250YWluZXIgLmNvbW1lbnRfd3JhcCAuaW1nX2JveC5pbWdfZGVmYXVsdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXktMzApO1xufVxuLmNvbW1lbnRfY29udGFpbmVyIC5jb21tZW50X3dyYXAgdGV4dGFyZWEge1xuICBwYWRkaW5nLXJpZ2h0OiA1M3B4O1xuICB6LWluZGV4OiAxO1xufVxuLmNvbW1lbnRfY29udGFpbmVyIC5jb21tZW50X3dyYXAgLmJ1dHRvbl93cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDI7XG59Il19 */";
styleInject(css_248z$4);

function Comment(_a) {
  var _b = _a.profileUrl,
    profileUrl = _b === void 0 ? '' : _b,
    style = _a.style;
    _a.placeholder;
    var value = _a.value,
    onChange = _a.onChange;
    __rest(_a, ["profileUrl", "style", "placeholder", "value", "onChange"]);
  var csStyle = style || {};
  return /*#__PURE__*/React.createElement("div", {
    className: classnames('comment_container'),
    style: csStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "comment_wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: classnames('img_box', (!profileUrl || profileUrl === '') && 'img_default')
  }, profileUrl && /*#__PURE__*/React.createElement("img", {
    src: profileUrl,
    width: "100%",
    height: "100%"
  }), (!profileUrl || profileUrl === '') && ( /*#__PURE__*/React.createElement(Icon, {
    id: "Default",
    width: 20,
    height: 20,
    color: "#ABABAB"
  }))), /*#__PURE__*/React.createElement(TextArea, {
    value: value,
    onChange: onChange
  }), /*#__PURE__*/React.createElement("div", {
    className: "button_wrap"
  }, /*#__PURE__*/React.createElement(TextButton, null, "\uB4F1\uB85D"))));
}
Comment.defaultProps = {};

var SearchHeader = function (_a) {
  var _b = _a.goBack,
    goBack = _b === void 0 ? function () {} : _b,
    _c = _a.disabled,
    disabled = _c === void 0 ? false : _c;
    __rest(_a, ["goBack", "disabled"]);
  return /*#__PURE__*/React.createElement("div", {
    className: "search_header_container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "back_wrap"
  }, /*#__PURE__*/React.createElement(IconButton, {
    type: "Right",
    size: "sm",
    color: "#393939",
    onClick: goBack
  })), /*#__PURE__*/React.createElement("div", {
    className: "input_wrap"
  }, /*#__PURE__*/React.createElement(TextField, {
    type: "search",
    size: "md",
    disabled: disabled
  })));
};

var css_248z$3 = ".chatting_header_container{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;align-items:center;display:flex;font-family:SF Pro Display,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Emoji,sans-serif;font-style:normal;height:47px;justify-content:space-between;min-width:375px;width:100%}.chatting_header_container .back_wrap{align-items:flex-start;cursor:pointer;display:flex;gap:10px}.chatting_header_container .back_wrap .title{font-size:18px;font-weight:700;line-height:25px}.chatting_header_container .buttons_wrap{display:flex;gap:24px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNoYXR0aW5nSGVhZGVyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkJBR0Usa0NBQW1DLENBQ25DLGlDQUFrQyxDQUdsQyxrQkFBbUIsQ0FGbkIsWUFBYSxDQUpiLDBOQUE2UCxDQUM3UCxpQkFBa0IsQ0FRbEIsV0FBWSxDQUpaLDZCQUE4QixDQUc5QixlQUFnQixDQURoQixVQUdGLENBQ0Esc0NBRUUsc0JBQXVCLENBQ3ZCLGNBQWUsQ0FGZixZQUFhLENBR2IsUUFDRixDQUNBLDZDQUVFLGNBQWUsQ0FEZixlQUFnQixDQUVoQixnQkFDRixDQUNBLHlDQUNFLFlBQWEsQ0FDYixRQUNGIiwiZmlsZSI6IkNoYXR0aW5nSGVhZGVyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdHRpbmdfaGVhZGVyX2NvbnRhaW5lciB7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBEaXNwbGF5XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgc3lzdGVtLXVpLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJTZWdvZSBVSVwiLCBcIkFwcGxlIFNEIEdvdGhpYyBOZW9cIiwgXCJOb3RvIFNhbnMgS1JcIiwgXCJNYWxndW4gR290aGljXCIsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gRW1vamlcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAzNzVweDtcbiAgaGVpZ2h0OiA0N3B4O1xufVxuLmNoYXR0aW5nX2hlYWRlcl9jb250YWluZXIgLmJhY2tfd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGdhcDogMTBweDtcbn1cbi5jaGF0dGluZ19oZWFkZXJfY29udGFpbmVyIC5iYWNrX3dyYXAgLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbn1cbi5jaGF0dGluZ19oZWFkZXJfY29udGFpbmVyIC5idXR0b25zX3dyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDI0cHg7XG59Il19 */";
styleInject(css_248z$3);

var ChattingHeader = function (_a) {
  var _b = _a.goBack,
    goBack = _b === void 0 ? function () {} : _b,
    _c = _a.openMore,
    openMore = _c === void 0 ? function () {} : _c,
    _d = _a.title,
    title = _d === void 0 ? '제목' : _d,
    _e = _a.searchUrl,
    searchUrl = _e === void 0 ? '' : _e,
    _f = _a.alarmFg,
    alarmFg = _f === void 0 ? true : _f;
    __rest(_a, ["goBack", "openMore", "title", "searchUrl", "alarmFg"]);
  var goSearch = function () {
    window.location.href = searchUrl;
  };
  var setAlarm = function () {};
  return /*#__PURE__*/React.createElement("div", {
    className: "chatting_header_container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "back_wrap"
  }, /*#__PURE__*/React.createElement(IconButton, {
    type: "Right",
    size: "sm",
    color: "#393939",
    onClick: goBack
  }), /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, title)), /*#__PURE__*/React.createElement("div", {
    className: "buttons_wrap"
  }, /*#__PURE__*/React.createElement(IconButton, {
    type: alarmFg ? 'Notification' : 'NotificationNone',
    size: "sm",
    fill: "#393939",
    color: "#393939",
    onClick: setAlarm
  }), /*#__PURE__*/React.createElement(IconButton, {
    type: "Search",
    size: "sm",
    color: "#393939",
    onClick: goSearch
  }), /*#__PURE__*/React.createElement(IconButton, {
    type: "More",
    size: "sm",
    color: "#393939",
    onClick: openMore
  })));
};

var css_248z$2 = ".sort_header_container{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;align-items:center;background-color:var(--grey-10);display:flex;font-family:SF Pro Display,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Emoji,sans-serif;font-style:normal;height:47px;justify-content:space-between;min-width:375px;padding:13px 20px;width:100%}.sort_header_container .filter_wrap *,.sort_header_container .order_wrap *{color:var(--grey-60)!important}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNvcnRIZWFkZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1QkFHRSxrQ0FBbUMsQ0FDbkMsaUNBQWtDLENBR2xDLGtCQUFtQixDQUluQiwrQkFBZ0MsQ0FOaEMsWUFBYSxDQUpiLDBOQUE2UCxDQUM3UCxpQkFBa0IsQ0FRbEIsV0FBWSxDQUpaLDZCQUE4QixDQUc5QixlQUFnQixDQUdoQixpQkFBa0IsQ0FKbEIsVUFLRixDQUNBLDJFQUVFLDhCQUNGIiwiZmlsZSI6IlNvcnRIZWFkZXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zb3J0X2hlYWRlcl9jb250YWluZXIge1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gRGlzcGxheVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHN5c3RlbS11aSwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiU2Vnb2UgVUlcIiwgXCJBcHBsZSBTRCBHb3RoaWMgTmVvXCIsIFwiTm90byBTYW5zIEtSXCIsIFwiTWFsZ3VuIEdvdGhpY1wiLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIEVtb2ppXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMzc1cHg7XG4gIGhlaWdodDogNDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleS0xMCk7XG4gIHBhZGRpbmc6IDEzcHggMjBweDtcbn1cbi5zb3J0X2hlYWRlcl9jb250YWluZXIgLm9yZGVyX3dyYXAgKixcbi5zb3J0X2hlYWRlcl9jb250YWluZXIgLmZpbHRlcl93cmFwICoge1xuICBjb2xvcjogdmFyKC0tZ3JleS02MCkgIWltcG9ydGFudDtcbn0iXX0= */";
styleInject(css_248z$2);

var SortHeader = function (_a) {
  __rest(_a, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "sort_header_container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "order_wrap"
  }, /*#__PURE__*/React.createElement(IconButton, {
    type: "Dropdown",
    size: "md",
    iconWidth: 20,
    iconHeight: 20,
    color: "#ABABAB"
  }, "\uCD5C\uC2E0\uC21C")), /*#__PURE__*/React.createElement("div", {
    className: "filter_wrap"
  }, /*#__PURE__*/React.createElement(IconButton, {
    type: "Filter",
    size: "md",
    iconWidth: 13,
    iconHeight: 13,
    color: "#ABABAB"
  }, "\uC804\uCCB4")));
};

var css_248z$1 = ".sheet_container{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;align-items:center;background-color:var(--white);display:flex;font-family:SF Pro Display,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Emoji,sans-serif;font-style:normal;justify-content:space-between;min-width:375px;padding:20px}.sheet_container .message_wrap{font-size:22px;font-weight:700;line-height:30px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNoZWV0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBR0Usa0NBQW1DLENBQ25DLGlDQUFrQyxDQUVsQyxrQkFBbUIsQ0FJbkIsNkJBQThCLENBTDlCLFlBQWEsQ0FKYiwwTkFBNlAsQ0FDN1AsaUJBQWtCLENBS2xCLDZCQUE4QixDQUM5QixlQUFnQixDQUNoQixZQUVGLENBQ0EsK0JBQ0UsY0FBZSxDQUVmLGVBQWdCLENBRGhCLGdCQUVGIiwiZmlsZSI6IlNoZWV0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hlZXRfY29udGFpbmVyIHtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIERpc3BsYXlcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBzeXN0ZW0tdWksIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIlNlZ29lIFVJXCIsIFwiQXBwbGUgU0QgR290aGljIE5lb1wiLCBcIk5vdG8gU2FucyBLUlwiLCBcIk1hbGd1biBHb3RoaWNcIiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBFbW9qaVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1pbi13aWR0aDogMzc1cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cbi5zaGVldF9jb250YWluZXIgLm1lc3NhZ2Vfd3JhcCB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59Il19 */";
styleInject(css_248z$1);

var Sheet = function (_a) {
  var message = _a.message,
    url = _a.url;
    __rest(_a, ["message", "url"]);
  return /*#__PURE__*/React.createElement("div", {
    className: "sheet_container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "message_wrap"
  }, message && parser(message)), url && /*#__PURE__*/React.createElement(Icon, {
    id: "Left"
  }));
};

var css_248z = ".snackbar_container{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;align-items:center;animation:snackbar 1s ease 0s 1 normal forwards;background-color:var(--black);border-radius:10px;display:none;font-family:SF Pro Display,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Emoji,sans-serif;font-style:normal;height:50px;justify-content:space-between;min-width:335px;padding:16px 20px}.snackbar_container.open{display:flex}.snackbar_container .message_wrap{align-items:center;color:var(--white);display:flex;font-size:15px;font-weight:700;gap:10px;line-height:18px}.snackbar_container .message_wrap .icon_wrap{align-items:center;background-color:var(--primary-orange);border-radius:10px;display:flex;height:20px;justify-content:center;width:20px}.snackbar_container .message_wrap .icon_wrap svg{height:10px;width:10px}.snackbar_container .button_wrap{color:var(--primary-orange);cursor:pointer;font-size:15px;font-weight:700;line-height:18px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNuYWNrYmFyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBR0Usa0NBQW1DLENBQ25DLGlDQUFrQyxDQUVsQyxrQkFBbUIsQ0FPbkIsK0NBQWdELENBRmhELDZCQUE4QixDQUM5QixrQkFBbUIsQ0FQbkIsWUFBYSxDQUpiLDBOQUE2UCxDQUM3UCxpQkFBa0IsQ0FPbEIsV0FBWSxDQUZaLDZCQUE4QixDQUM5QixlQUFnQixDQUVoQixpQkFJRixDQUNBLHlCQUNFLFlBQ0YsQ0FDQSxrQ0FFRSxrQkFBbUIsQ0FLbkIsa0JBQW1CLENBTm5CLFlBQWEsQ0FHYixjQUFlLENBRWYsZUFBZ0IsQ0FIaEIsUUFBUyxDQUVULGdCQUdGLENBQ0EsNkNBRUUsa0JBQW1CLENBS25CLHNDQUF1QyxDQUR2QyxrQkFBbUIsQ0FMbkIsWUFBYSxDQUliLFdBQVksQ0FGWixzQkFBdUIsQ0FDdkIsVUFJRixDQUNBLGlEQUVFLFdBQVksQ0FEWixVQUVGLENBQ0EsaUNBSUUsMkJBQTRCLENBQzVCLGNBQWUsQ0FKZixjQUFlLENBRWYsZUFBZ0IsQ0FEaEIsZ0JBSUYiLCJmaWxlIjoiU25hY2tiYXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbmFja2Jhcl9jb250YWluZXIge1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gRGlzcGxheVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHN5c3RlbS11aSwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiU2Vnb2UgVUlcIiwgXCJBcHBsZSBTRCBHb3RoaWMgTmVvXCIsIFwiTm90byBTYW5zIEtSXCIsIFwiTWFsZ3VuIEdvdGhpY1wiLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIEVtb2ppXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWluLXdpZHRoOiAzMzVweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYW5pbWF0aW9uOiBzbmFja2JhciAxcyBlYXNlIDBzIDEgbm9ybWFsIGZvcndhcmRzO1xufVxuLnNuYWNrYmFyX2NvbnRhaW5lci5vcGVuIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5zbmFja2Jhcl9jb250YWluZXIgLm1lc3NhZ2Vfd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cbi5zbmFja2Jhcl9jb250YWluZXIgLm1lc3NhZ2Vfd3JhcCAuaWNvbl93cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktb3JhbmdlKTtcbn1cbi5zbmFja2Jhcl9jb250YWluZXIgLm1lc3NhZ2Vfd3JhcCAuaWNvbl93cmFwIHN2ZyB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG59XG4uc25hY2tiYXJfY29udGFpbmVyIC5idXR0b25fd3JhcCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LW9yYW5nZSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */";
styleInject(css_248z);

var Snackbar = function (_a) {
  var _b = _a.open,
    open = _b === void 0 ? true : _b,
    _c = _a.message,
    message = _c === void 0 ? '텍스트' : _c,
    action = _a.action,
    icon = _a.icon,
    _d = _a.onAction,
    onAction = _d === void 0 ? function () {} : _d;
    __rest(_a, ["open", "message", "action", "icon", "onAction"]);
  return /*#__PURE__*/React.createElement("div", {
    className: classnames('snackbar_container', open && 'open')
  }, /*#__PURE__*/React.createElement("div", {
    className: "message_wrap"
  }, icon && ( /*#__PURE__*/React.createElement("div", {
    className: "icon_wrap"
  }, /*#__PURE__*/React.createElement(Icon, {
    id: icon,
    color: "#ffffff"
  }))), message), /*#__PURE__*/React.createElement("div", {
    className: "button_wrap",
    onClick: onAction
  }, action));
};

var Skeleton = function (_a) {
  var width = _a.width,
    height = _a.height,
    viewBox = _a.viewBox,
    props = __rest(_a, ["width", "height", "viewBox"]);
  return /*#__PURE__*/React.createElement(ContentLoader, {
    speed: 1,
    width: width,
    height: height,
    viewBox: viewBox,
    backgroundColor: "#e9e9e9",
    foregroundColor: "#efefef"
  }, props.children && props.children);
};

export { BasicItem as BasicListItem, Button, ChattingHeader, Chatting as ChattingListItem, Comment, Confirm, Dropdown, Gather as GatherListItem, HomeHeader, Icon, IconButton, ReadHeader, SearchHeader, Sheet, Skeleton, Snackbar, SortHeader, Tab, Tag, TextArea, TextButton, TextField, WriteHeader };
//# sourceMappingURL=index.bundle.js.map
