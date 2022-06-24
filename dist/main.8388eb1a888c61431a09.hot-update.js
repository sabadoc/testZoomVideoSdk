webpackHotUpdate("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _zoom_videosdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @zoom/videosdk */ "./node_modules/@zoom/videosdk/dist/index.umd.js");
/* harmony import */ var _zoom_videosdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_zoom_videosdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var _feature_home_home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feature/home/home */ "./src/feature/home/home.tsx");
/* harmony import */ var _feature_video_video__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./feature/video/video */ "./src/feature/video/video.tsx");
/* harmony import */ var _feature_video_video_single__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./feature/video/video-single */ "./src/feature/video/video-single.tsx");
/* harmony import */ var _feature_video_video_non_sab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./feature/video/video-non-sab */ "./src/feature/video/video-non-sab.tsx");
/* harmony import */ var _feature_preview_preview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./feature/preview/preview */ "./src/feature/preview/preview.tsx");
/* harmony import */ var _context_zoom_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./context/zoom-context */ "./src/context/zoom-context.ts");
/* harmony import */ var _context_media_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./context/media-context */ "./src/context/media-context.ts");
/* harmony import */ var _context_chat_context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./context/chat-context */ "./src/context/chat-context.ts");
/* harmony import */ var _context_cmd_context__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./context/cmd-context */ "./src/context/cmd-context.ts");
/* harmony import */ var _context_recording_context__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./context/recording-context */ "./src/context/recording-context.ts");
/* harmony import */ var _component_loading_layer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/loading-layer */ "./src/component/loading-layer.tsx");
/* harmony import */ var _feature_chat_chat__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./feature/chat/chat */ "./src/feature/chat/chat.tsx");
/* harmony import */ var _feature_command_command__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./feature/command/command */ "./src/feature/command/command.tsx");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "C:\\Users\\csabadoc\\Documents\\workspace\\zoom-video-sdk-web-1.3.0\\zoom-video-sdk-web-1.3.0\\react-demo\\src\\App.tsx",
    _s = __webpack_require__.$Refresh$.signature();






















const mediaShape = {
  audio: {
    encode: false,
    decode: false
  },
  video: {
    encode: false,
    decode: false
  },
  share: {
    encode: false,
    decode: false
  }
};
const mediaReducer = Object(immer__WEBPACK_IMPORTED_MODULE_5__["default"])((draft, action) => {
  switch (action.type) {
    case "audio-encode":
      {
        draft.audio.encode = action.payload;
        break;
      }

    case "audio-decode":
      {
        draft.audio.decode = action.payload;
        break;
      }

    case "video-encode":
      {
        draft.video.encode = action.payload;
        break;
      }

    case "video-decode":
      {
        draft.video.decode = action.payload;
        break;
      }

    case "share-encode":
      {
        draft.share.encode = action.payload;
        break;
      }

    case "share-decode":
      {
        draft.share.decode = action.payload;
        break;
      }

    case "reset-media":
      {
        Object.assign(draft, { ...mediaShape
        });
        break;
      }

    default:
      break;
  }
}, mediaShape);

function App(props) {
  _s();

  const {
    meetingArgs: {
      sdkKey,
      topic,
      signature,
      name,
      password,
      enforceGalleryView
    }
  } = props;
  const [loading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [loadingText, setLoadingText] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [isFailover, setIsFailover] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [status, setStatus] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("closed");
  const [mediaState, dispatch] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(mediaReducer, mediaShape);
  const [mediaStream, setMediaStream] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [chatClient, setChatClient] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [recordingClient, setRecordingClient] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [commandClient, setCommandClient] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [isSupportGalleryView, setIsSupportGalleryView] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const zmClient = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_zoom_context__WEBPACK_IMPORTED_MODULE_11__["default"]);
  const webEndpoint = 'zoom.us';
  const galleryViewWithoutSAB = !!enforceGalleryView && !window.crossOriginIsolated;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const init = async () => {
      await zmClient.init("en-US", `${window.location.origin}/lib`, {
        webEndpoint,
        enforceMultipleVideos: galleryViewWithoutSAB
      });

      try {
        setLoadingText("Joining the session...");
        await zmClient.join(topic, signature, name, password);
        const stream = zmClient.getMediaStream();
        setMediaStream(stream);
        setIsSupportGalleryView(stream.isSupportMultipleVideos());
        const chatClient = zmClient.getChatClient();
        const commandClient = zmClient.getCommandClient();
        const recordingClient = zmClient.getRecordingClient();
        setChatClient(chatClient);
        setCommandClient(commandClient);
        setRecordingClient(recordingClient);
        setIsLoading(false);
      } catch (e) {
        console.log('Error joining meeting', e);
        setIsLoading(false);
        antd__WEBPACK_IMPORTED_MODULE_3__["message"].error(e.reason);
      }
    };

    init();
    return () => {
      _zoom_videosdk__WEBPACK_IMPORTED_MODULE_2___default.a.destroyClient();
    };
  }, [sdkKey, signature, zmClient, topic, name, password, webEndpoint, galleryViewWithoutSAB]);
  const onConnectionChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(payload => {
    if (payload.state === _zoom_videosdk__WEBPACK_IMPORTED_MODULE_2__["ConnectionState"].Reconnecting) {
      setIsLoading(true);
      setIsFailover(true);
      setStatus("connecting");
      const {
        reason
      } = payload;

      if (reason === "failover") {
        setLoadingText("Session Disconnected,Try to reconnect");
      }
    } else if (payload.state === _zoom_videosdk__WEBPACK_IMPORTED_MODULE_2__["ConnectionState"].Connected) {
      setStatus("connected");

      if (isFailover) {
        setIsLoading(false);
      }
    } else if (payload.state === _zoom_videosdk__WEBPACK_IMPORTED_MODULE_2__["ConnectionState"].Closed) {
      setStatus("closed");
      dispatch({
        type: 'reset-media'
      });

      if (payload.reason === "ended by host") {
        antd__WEBPACK_IMPORTED_MODULE_3__["Modal"].warning({
          title: "Meeting ended",
          content: "This meeting has been ended by host"
        });
      }
    }
  }, [isFailover]);
  const onMediaSDKChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(payload => {
    const {
      action,
      type,
      result
    } = payload;
    dispatch({
      type: `${type}-${action}`,
      payload: result === "success"
    });
  }, []);
  const onDialoutChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(payload => {
    console.log('onDialoutChange', payload);
  }, []);
  const onAudioMerged = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(payload => {
    console.log('onAudioMerged', payload);
  }, []);
  const onLeaveOrJoinSession = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async () => {
    if (status === "closed") {
      setIsLoading(true); // await zmClient.join(topic, signature, name, password);

      await zmClient.join({
        signature: signature,
        meetingNumber: '95668635987',
        userName: 'prueba',
        sdkKey: 'TOPdtj0HQSDEVF17BGwg5PH2WXi6cRM4Ezj9',
        userEmail: 'emal@email.com ',
        passWord: 'aaaa',
        success: success => {
          console.log(success);
        },
        error: error => {
          console.log(error);
        }
      });
      setIsLoading(false);
    } else if (status === "connected") {
      await zmClient.leave();
      antd__WEBPACK_IMPORTED_MODULE_3__["message"].warn("You have left the session.");
    }
  }, [zmClient, status, topic, signature, name, password]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    zmClient.on("connection-change", onConnectionChange);
    zmClient.on("media-sdk-change", onMediaSDKChange);
    zmClient.on("dialout-state-change", onDialoutChange);
    zmClient.on("merged-audio", onAudioMerged);
    return () => {
      zmClient.off("connection-change", onConnectionChange);
      zmClient.off("media-sdk-change", onMediaSDKChange);
      zmClient.off("dialout-state-change", onDialoutChange);
      zmClient.off("merged-audio", onAudioMerged);
    };
  }, [zmClient, onConnectionChange, onMediaSDKChange, onDialoutChange, onAudioMerged]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])("div", {
    className: "App",
    children: [loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_component_loading_layer__WEBPACK_IMPORTED_MODULE_16__["default"], {
      content: loadingText
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 19
    }, this), !loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_context_media_context__WEBPACK_IMPORTED_MODULE_12__["default"].Provider, {
      value: { ...mediaState,
        mediaStream
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_context_chat_context__WEBPACK_IMPORTED_MODULE_13__["default"].Provider, {
        value: chatClient,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_context_recording_context__WEBPACK_IMPORTED_MODULE_15__["default"].Provider, {
          value: recordingClient,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_context_cmd_context__WEBPACK_IMPORTED_MODULE_14__["default"].Provider, {
            value: commandClient,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                  path: "/",
                  render: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_feature_home_home__WEBPACK_IMPORTED_MODULE_6__["default"], { ...props,
                    status: status,
                    onLeaveOrJoinSession: onLeaveOrJoinSession
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 243,
                    columnNumber: 21
                  }, this),
                  exact: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 240,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                  path: "/index.html",
                  render: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_feature_home_home__WEBPACK_IMPORTED_MODULE_6__["default"], { ...props,
                    status: status,
                    onLeaveOrJoinSession: onLeaveOrJoinSession
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 254,
                    columnNumber: 21
                  }, this),
                  exact: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 251,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                  path: "/preview",
                  component: _feature_preview_preview__WEBPACK_IMPORTED_MODULE_10__["default"]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 262,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                  path: "/video",
                  component: isSupportGalleryView ? _feature_video_video__WEBPACK_IMPORTED_MODULE_7__["default"] : galleryViewWithoutSAB ? _feature_video_video_non_sab__WEBPACK_IMPORTED_MODULE_9__["default"] : _feature_video_video_single__WEBPACK_IMPORTED_MODULE_8__["default"]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 263,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                  path: "/chat",
                  component: _feature_chat_chat__WEBPACK_IMPORTED_MODULE_17__["default"]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 264,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                  path: "/command",
                  component: _feature_command_command__WEBPACK_IMPORTED_MODULE_18__["default"]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 265,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 239,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 231,
    columnNumber: 5
  }, this);
}

_s(App, "JSWMQzGENzFY8cbdWRjtsZumwmw=");

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/react-scripts/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/react-scripts/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.8388eb1a888c61431a09.hot-update.js.map