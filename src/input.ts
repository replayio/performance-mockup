
import { PerformanceAnalysisResult } from "./interfaceTypes";

export function getResult(): PerformanceAnalysisResult {
  return gResult;
}

const gResult: PerformanceAnalysisResult = {
    "spec": {
      "recordingId": "d636f3e6-4d48-452e-a7a8-6ea7c2ae3343"
    },
    "summaries": [
      {
        "startTime": 10.9754638671875,
        "endTime": 10627.536669995685,
        "elapsed": 10616.561206128497,
        "networkTime": 9823.346923083285,
        "schedulingTime": 225.2628136711938,
        "mainThreadTime": 531.7347334683375,
        "workerThreadTime": 0,
        "timerTime": 0,
        "unknownTime": 35.46919440568047,
        "reactSliceTime": {
          "FlushPassiveEffects": 39.49711372281786,
          "SyncRender": 58.426646489988116,
          "Commit": 49.514442806438296
        },
        "reactEventTime": {
          "LayoutEffect": 36.697802871156455,
          "PassiveEffect": 23.34830356384157,
          "RenderFiber": 12.881626935642544
        },
        "reactEvents": [
          {
            "kind": "LayoutEffect",
            "functionLocation": {
              "line": 66,
              "column": 24,
              "url": "webpack://_N_E/src/ui/components/Timeline/Timeline.tsx"
            },
            "count": 1,
            "elapsed": 36.697802871156455
          },
          {
            "kind": "PassiveEffect",
            "functionLocation": {
              "line": 128,
              "column": 6,
              "url": "webpack://_N_E/src/ui/hooks/recordings.ts"
            },
            "count": 1,
            "elapsed": 6.077894510052829
          },
          {
            "kind": "PassiveEffect",
            "functionLocation": {
              "line": 149,
              "column": 4,
              "url": "webpack://_N_E/pages/[[...id]].tsx"
            },
            "count": 1,
            "elapsed": 6.072739550422284
          },
          {
            "kind": "RenderFiber",
            "functionLocation": {
              "line": 372,
              "column": 19,
              "url": "webpack://_N_E/src/ui/components/Toolbar.tsx"
            },
            "count": 5,
            "elapsed": 5.904512131381125
          },
          {
            "kind": "RenderFiber",
            "functionLocation": {
              "line": 84,
              "column": 43,
              "url": "webpack://_N_E/node_modules/next/dist/shared/lib/loadable.js"
            },
            "count": 1,
            "elapsed": 4.394155909483288
          },
          {
            "kind": "PassiveEffect",
            "functionLocation": {
              "line": 49,
              "column": 15,
              "url": "webpack://_N_E/node_modules/next/dist/shared/lib/side-effect.js"
            },
            "count": 5,
            "elapsed": 3.1831303521123573
          },
          {
            "kind": "PassiveEffect",
            "functionLocation": {
              "line": 12,
              "column": 30,
              "url": "webpack://_N_E/src/ui/hooks/useAuthTelemetry.ts"
            },
            "count": 1,
            "elapsed": 3.0560394923348895
          },
          {
            "kind": "PassiveEffect",
            "functionLocation": {
              "line": 39,
              "column": 4,
              "url": "webpack://_N_E/pages/_app.tsx"
            },
            "count": 1,
            "elapsed": 3.024723921981149
          },
          {
            "kind": "RenderFiber",
            "functionLocation": {
              "line": 33,
              "column": 36,
              "url": "webpack://_N_E/src/ui/components/Header/Header.tsx"
            },
            "count": 1,
            "elapsed": 2.5829588947781303
          },
          {
            "kind": "PassiveEffect",
            "functionLocation": {
              "line": 75,
              "column": 0,
              "url": "webpack://_N_E/node_modules/@apollo/client/react/hooks/useQuery.js"
            },
            "count": 23,
            "elapsed": 1.9337757369380597
          }
        ],
        "numNetworkRoundTrips": 15,
        "dependencySteps": [
          {
            "code": "DocumentBeginLoad",
            "url": "https://app.replay.io/recording/replay-of-wwwnprorg--00372e20-18f4-4fb6-a54f-bae359aecf02",
            "time": 0
          },
          {
            "code": "NetworkReceiveData",
            "numBytes": 3413,
            "time": 10.9754638671875
          },
          {
            "code": "DocumentInitiateNetworkRequest",
            "url": "https://app.replay.io/recording/fonts/material_icons/material_icons.css",
            "time": 22.9896665
          },
          {
            "code": "NetworkReceiveResource",
            "time": 333.619229
          },
          {
            "code": "DocumentExecuteBlockedScript",
            "url": "https://app.replay.io/recording/_next/static/chunks/pages/%5B%5B...id%5D%5D-9be2024cb2927ffb.js",
            "time": 555.563916
          },
          {
            "code": "ReactHydrateRoot",
            "time": 615.7751892156863,
            "point": "649037107507845277097535322718210"
          },
          {
            "code": "ReactRender",
            "time": 681.1773762504118,
            "point": "973555661167069825562051080093698",
            "calleeLocation": {
              "line": 361,
              "column": 19,
              "url": "webpack://_N_E/node_modules/next/dist/client/index.js"
            }
          },
          {
            "code": "ReactReturnElement",
            "time": 681.3506187116968,
            "point": "973555661167082507698601755410436"
          },
          {
            "code": "ReactRender",
            "time": 682.2640789621088,
            "point": "973555661167149377145868952535042",
            "calleeLocation": {
              "line": 191,
              "column": 40,
              "url": "webpack://_N_E/node_modules/next/dist/client/index.js"
            }
          },
          {
            "code": "ReactCreateElement",
            "time": 683.2090378418451,
            "point": "973555661167218552436085233811456"
          },
          {
            "code": "ReactRender",
            "time": 684.4847323294892,
            "point": "973555661167311939078018517958658",
            "calleeLocation": {
              "line": 60,
              "column": 33,
              "url": "webpack://_N_E/node_modules/next/dist/shared/lib/router/adapters.js"
            }
          },
          {
            "code": "ReactReturnElement",
            "time": 684.7839693080725,
            "point": "973555661167333844586606048051208"
          },
          {
            "code": "ReactRender",
            "time": 686.1541596836903,
            "point": "973555661167434148757506843738114",
            "calleeLocation": {
              "line": 42724,
              "column": 10,
              "url": "https://app.replay.io/recording/_next/static/chunks/pages/_app-d753789f6db4329b.js"
            }
          },
          {
            "code": "ReactCallUseEffect",
            "time": 686.5321432355848,
            "point": "973555661167461818873479969112067"
          },
          {
            "code": "ReactEffectFirstCall",
            "time": 769.239319,
            "point": "1298074214826437336292244733296642",
            "calleeLocation": {
              "line": 115,
              "column": 9,
              "url": "webpack://_N_E/pages/_app.tsx"
            }
          },
          {
            "code": "ScriptInitiateNetworkRequest",
            "url": "https://app.replay.io/api/token",
            "time": 769.3905414999999,
            "point": "1298074214826438489213714980405251"
          },
          {
            "code": "NetworkReceiveResource",
            "time": 1343.8489990234375
          },
          {
            "code": "ReactCallSetState",
            "time": 1344.363162,
            "point": "2596148429463079581576525560938498"
          },
          {
            "code": "ReactRender",
            "time": 1412.3574586321838,
            "point": "2920666983127251316216896981827586",
            "calleeLocation": {
              "line": 42724,
              "column": 10,
              "url": "https://app.replay.io/recording/_next/static/chunks/pages/_app-d753789f6db4329b.js"
            }
          },
          {
            "code": "ReactCreateElement",
            "time": 1413.2570408620688,
            "point": "2920666983127501500183370897817600"
          },
          {
            "code": "ReactRender",
            "time": 1414.2934259195401,
            "point": "2920666983127789730559582739103746",
            "calleeLocation": {
              "line": 35,
              "column": 28,
              "url": "webpack://_N_E/pages/_app.tsx"
            }
          },
          {
            "code": "ReactCallUseEffect",
            "time": 1414.3846278045976,
            "point": "2920666983127815094832546650783747"
          },
          {
            "code": "ReactEffectFirstCall",
            "time": 1419.3662081429227,
            "point": "2920666983128572564259939477880834",
            "calleeLocation": {
              "line": 39,
              "column": 4,
              "url": "webpack://_N_E/pages/_app.tsx"
            }
          },
          {
            "code": "ScriptInitiateNetworkRequest",
            "url": "https://api.replay.io/v1/graphql",
            "time": 1432.87009325,
            "point": "2920666983158403255270927310520325"
          },
          {
            "code": "NetworkReceiveResource",
            "time": 2083.085875484375
          },
          {
            "code": "ScriptInitiateNetworkRequest",
            "url": "https://api.replay.io/v1/graphql",
            "time": 2139.06126025,
            "point": "3894222644149929252541810452987909"
          },
          {
            "code": "NetworkReceiveResource",
            "time": 2378.4264057578125
          },
          {
            "code": "ReactCallSetState",
            "time": 2383.3206607142856,
            "point": "4867778305136058424249766383714306"
          },
          {
            "code": "ReactRender",
            "time": 2396.965728239354,
            "point": "4867778305137803947408050387681282",
            "calleeLocation": {
              "line": 89,
              "column": 21,
              "url": "webpack://_N_E/src/ui/components/App.tsx"
            }
          },
          {
            "code": "ReactReturnElement",
            "time": 2397.3770448986784,
            "point": "4867778305138103706999248167895072"
          },
          {
            "code": "ReactRender",
            "time": 2397.584285215492,
            "point": "4867778305138254739716386024587266",
            "calleeLocation": {
              "line": 231,
              "column": 30,
              "url": "webpack://_N_E/pages/[[...id]].tsx"
            }
          },
          {
            "code": "ReactCreateElement",
            "time": 2397.5921951512482,
            "point": "4867778305138260504323883289018368"
          },
          {
            "code": "ReactRender",
            "time": 2397.6301628428782,
            "point": "4867778305138288174439916543934466",
            "calleeLocation": {
              "line": 334,
              "column": 0,
              "url": "webpack://_N_E/node_modules/react-redux/es/components/connect.js"
            }
          },
          {
            "code": "ReactCreateElement",
            "time": 2397.827911236784,
            "point": "4867778305138432289627829191049216"
          },
          {
            "code": "ReactRender",
            "time": 2397.864296941263,
            "point": "4867778305138458806822701436502018",
            "calleeLocation": {
              "line": 136,
              "column": 16,
              "url": "webpack://_N_E/pages/[[...id]].tsx"
            }
          },
          {
            "code": "ReactCallUseEffect",
            "time": 2399.0159835873715,
            "point": "4867778305139298133677917782147075"
          },
          {
            "code": "ReactEffectFirstCall",
            "time": 2425.7802196255434,
            "point": "4867778305159594163842955132010498",
            "calleeLocation": {
              "line": 149,
              "column": 4,
              "url": "webpack://_N_E/pages/[[...id]].tsx"
            }
          },
          {
            "code": "ScriptCreateWebSocket",
            "url": "wss://dispatch.replay.io",
            "time": 2431.760416,
            "point": "4867778305162206683972291168043027"
          },
          {
            "code": "WebSocketConnected",
            "time": 3556.716875
          },
          {
            "code": "ScriptSendWebSocketMessage",
            "time": 3557.343625,
            "point": "8112963842013694639379483367309321"
          },
          {
            "code": "WebSocketMessageReceived",
            "time": 3815.030958
          },
          {
            "code": "ScriptSendWebSocketMessage",
            "time": 3816.593666,
            "point": "9086519503037424040117079319248905"
          },
          {
            "code": "WebSocketMessageReceived",
            "time": 4170.255875
          },
          {
            "code": "ScriptSendWebSocketMessage",
            "time": 4172.975430333333,
            "point": "10060075164124613699232715589550089"
          },
          {
            "code": "WebSocketMessageReceived",
            "time": 4499.257916
          },
          {
            "code": "ScriptSendWebSocketMessage",
            "time": 4501.5809659999995,
            "point": "11033630825158338929415218545033225"
          },
          {
            "code": "WebSocketMessageReceived",
            "time": 5526.47125
          },
          {
            "code": "ScriptSendWebSocketMessage",
            "time": 5530.813574999999,
            "point": "14278816362016161035566349939638281"
          },
          {
            "code": "WebSocketMessageReceived",
            "time": 5816.940583
          },
          {
            "code": "ScriptSendWebSocketMessage",
            "time": 5817.8229996,
            "point": "15252372023036086948260213543665673"
          },
          {
            "code": "WebSocketMessageReceived",
            "time": 6073.263583
          },
          {
            "code": "ScriptSendWebSocketMessage",
            "time": 6096.3221082,
            "point": "15901409130402149397486155027447817"
          },
          {
            "code": "WebSocketMessageReceived",
            "time": 6381.616458
          },
          {
            "code": "ScriptSendWebSocketMessage",
            "time": 6483.038026181818,
            "point": "16874964791516703648513634810724361"
          },
          {
            "code": "WebSocketMessageReceived",
            "time": 6731.786375
          },
          {
            "code": "ScriptSendWebSocketMessage",
            "time": 6739.454975,
            "point": "17848520452589934886972995984687113"
          },
          {
            "code": "WebSocketMessageReceived",
            "time": 10623.009708
          }
        ],
        "origin": {
          "kind": "documentLoad",
          "time": 0
        },
        "commitElapsed": 736.4663313173896,
        "triggerPoint": "27259558511662848083186292455636994"
      },
      {
        "startTime": 11334.093291500001,
        "endTime": 14599.129498912622,
        "elapsed": 3265.0362074126206,
        "networkTime": 2882.49730382857,
        "schedulingTime": 58.208203488326035,
        "mainThreadTime": 311.1465510532016,
        "workerThreadTime": 0,
        "timerTime": 0,
        "unknownTime": 13.184149042523131,
        "reactSliceTime": {
          "FlushPassiveEffects": 22.69492186213938,
          "SyncRender": 157.98518806325046,
          "Commit": 43.28268718138497,
          "ConcurrentRender": 48.946148141545564
        },
        "reactEventTime": {
          "RenderFiber": 58.196109571850684,
          "PassiveEffect": 4.464561182312536
        },
        "reactEvents": [
          {
            "kind": "RenderFiber",
            "functionLocation": {
              "line": 37,
              "column": 39,
              "url": "webpack://_N_E/packages/replay-next/components/sources/SourceListRowMouseEvents.tsx"
            },
            "count": 507,
            "elapsed": 23.439441972386703
          },
          {
            "kind": "RenderFiber",
            "functionLocation": {
              "line": 250,
              "column": 6,
              "url": "webpack://_N_E/packages/replay-next/components/sources/SourceListRow.tsx"
            },
            "count": 432,
            "elapsed": 16.378867325480314
          },
          {
            "kind": "RenderFiber",
            "functionLocation": {
              "line": 176,
              "column": 19,
              "url": "webpack://_N_E/src/devtools/client/debugger/src/components/SecondaryPanes/CommandBar.tsx"
            },
            "count": 54,
            "elapsed": 6.6792928066024615
          },
          {
            "kind": "RenderFiber",
            "functionLocation": {
              "line": 44,
              "column": 23,
              "url": "webpack://_N_E/src/devtools/client/debugger/src/components/SecondaryPanes/Frames/NewFrames.tsx"
            },
            "count": 8,
            "elapsed": 2.9247159147034836
          },
          {
            "kind": "PassiveEffect",
            "functionLocation": {
              "line": 1717,
              "column": 29,
              "url": "webpack://_N_E/node_modules/suspense/dist/suspense.esm.js"
            },
            "count": 396,
            "elapsed": 2.6821228331627935
          },
          {
            "kind": "RenderFiber",
            "functionLocation": {
              "line": 22,
              "column": 17,
              "url": "webpack://_N_E/src/devtools/client/debugger/src/components/Editor/SourcemapVisualizerLink.tsx"
            },
            "count": 10,
            "elapsed": 2.529623396752868
          },
          {
            "kind": "RenderFiber",
            "functionLocation": {
              "line": 45,
              "column": 19,
              "url": "webpack://_N_E/src/devtools/client/debugger/src/components/Editor/SourcemapToggle.tsx"
            },
            "count": 10,
            "elapsed": 2.127531993239245
          },
          {
            "kind": "RenderFiber",
            "functionLocation": {
              "line": 21,
              "column": 40,
              "url": "webpack://_N_E/packages/replay-next/components/console/Source.tsx"
            },
            "count": 97,
            "elapsed": 2.0965302072690974
          },
          {
            "kind": "RenderFiber",
            "functionLocation": {
              "line": 81,
              "column": 23,
              "url": "webpack://_N_E/src/devtools/client/debugger/src/components/SecondaryPanes/Frames/Frame.tsx"
            },
            "count": 36,
            "elapsed": 2.0201059554165113
          },
          {
            "kind": "PassiveEffect",
            "functionLocation": {
              "line": 1651,
              "column": 29,
              "url": "webpack://_N_E/node_modules/suspense/dist/suspense.esm.js"
            },
            "count": 94,
            "elapsed": 1.7824383491497429
          }
        ],
        "numNetworkRoundTrips": 5,
        "dependencySteps": [
          {
            "code": "DispatchInputEventHandler",
            "type": "click",
            "time": 11334.093291500001
          },
          {
            "code": "ScriptSendWebSocketMessage",
            "time": 11435.387541,
            "point": "28882151280343399819087493780733961"
          },
          {
            "code": "WebSocketMessageReceived",
            "time": 11665.836791
          },
          {
            "code": "ScriptSendWebSocketMessage",
            "time": 11695.49675,
            "point": "29855706941620419156858152012480521"
          },
          {
            "code": "WebSocketMessageReceived",
            "time": 12838.072541
          },
          {
            "code": "ReactResumeSuspendedRender",
            "time": 12907.536342149777
          },
          {
            "code": "ReactRender",
            "time": 13038.01587711589,
            "point": "33425411032591185387474998238642178",
            "calleeLocation": {
              "line": 44,
              "column": 23,
              "url": "webpack://_N_E/src/devtools/client/debugger/src/components/SecondaryPanes/Frames/NewFrames.tsx"
            }
          },
          {
            "code": "ReactCreateElement",
            "time": 13038.450024975948,
            "point": "33425411032593232976067154229067776"
          },
          {
            "code": "ReactRender",
            "time": 13045.15411081982,
            "point": "33425411032604645746041283177086978",
            "calleeLocation": {
              "line": 40,
              "column": 18,
              "url": "webpack://_N_E/packages/replay-next/components/errors/InlineErrorBoundary.tsx"
            }
          },
          {
            "code": "ReactCreateElement",
            "time": 13045.157414873873,
            "point": "33425411032604656122334798868905984"
          },
          {
            "code": "ReactRender",
            "time": 13045.168795504504,
            "point": "33425411032604691862901433091227650",
            "calleeLocation": {
              "line": 71,
              "column": 6,
              "url": "webpack://_N_E/node_modules/react-error-boundary/dist/react-error-boundary.esm.js"
            }
          },
          {
            "code": "ReactRender",
            "time": 13045.201489428571,
            "point": "33425411032604773720328294537101314",
            "calleeLocation": {
              "line": 44,
              "column": 23,
              "url": "webpack://_N_E/src/devtools/client/debugger/src/components/SecondaryPanes/Frames/NewFrames.tsx"
            }
          },
          {
            "code": "ScriptSendWebSocketMessage",
            "time": 13047.196675000001,
            "point": "33425411032605868995757774120943625"
          },
          {
            "code": "WebSocketMessageReceived",
            "time": 13532.695916
          },
          {
            "code": "ReactResumeSuspendedRender",
            "time": 13533.038336784604
          },
          {
            "code": "ReactRender",
            "time": 13546.106727096401,
            "point": "34074448140127035127919876256038914",
            "calleeLocation": {
              "line": 44,
              "column": 23,
              "url": "webpack://_N_E/src/devtools/client/debugger/src/components/SecondaryPanes/Frames/NewFrames.tsx"
            }
          },
          {
            "code": "ReactCreateElement",
            "time": 13546.562820196434,
            "point": "34074448140129082716512032246464512"
          },
          {
            "code": "ReactRender",
            "time": 13553.786484630631,
            "point": "34074448140140445910861463100063746",
            "calleeLocation": {
              "line": 40,
              "column": 18,
              "url": "webpack://_N_E/packages/replay-next/components/errors/InlineErrorBoundary.tsx"
            }
          },
          {
            "code": "ReactCreateElement",
            "time": 13553.789572441441,
            "point": "34074448140140456287154978791882752"
          },
          {
            "code": "ReactRender",
            "time": 13553.800208234234,
            "point": "34074448140140492027721613014204418",
            "calleeLocation": {
              "line": 71,
              "column": 6,
              "url": "webpack://_N_E/node_modules/react-error-boundary/dist/react-error-boundary.esm.js"
            }
          },
          {
            "code": "ReactRender",
            "time": 13553.827012556887,
            "point": "34074448140140573885148474460078082",
            "calleeLocation": {
              "line": 44,
              "column": 23,
              "url": "webpack://_N_E/src/devtools/client/debugger/src/components/SecondaryPanes/Frames/NewFrames.tsx"
            }
          },
          {
            "code": "ScriptSendWebSocketMessage",
            "time": 13562.255160571429,
            "point": "34074448140155258646352754949226505"
          },
          {
            "code": "WebSocketMessageReceived",
            "time": 13821.976416
          },
          {
            "code": "ReactResumeSuspendedRender",
            "time": 13822.070498134328
          },
          {
            "code": "ReactRender",
            "time": 13822.588123462367,
            "point": "34723485247493226704354333706682370",
            "calleeLocation": {
              "line": 44,
              "column": 23,
              "url": "webpack://_N_E/src/devtools/client/debugger/src/components/SecondaryPanes/Frames/NewFrames.tsx"
            }
          },
          {
            "code": "ScriptSendWebSocketMessage",
            "time": 13827.4933166,
            "point": "34723485247501625737515497666117641"
          },
          {
            "code": "WebSocketMessageReceived",
            "time": 14591.745083
          }
        ],
        "origin": {
          "kind": "dispatchEvent",
          "time": 11334.093291500001,
          "eventType": "click"
        },
        "commitElapsed": 2.296111432944599,
        "triggerPoint": "36995115123258944247015930360496130"
      },
      {
        "startTime": 17331.3088745,
        "endTime": 18358.206798234376,
        "elapsed": 1026.8979237343774,
        "networkTime": 984.4580324000017,
        "schedulingTime": 17.699099671935983,
        "mainThreadTime": 21.85576225231489,
        "workerThreadTime": 0,
        "timerTime": 0,
        "unknownTime": 2.8850294101248437,
        "reactSliceTime": {
          "FlushPassiveEffects": 1.2189293749033823,
          "SyncRender": 2.0116877654436394,
          "Commit": 1.609272126781434,
          "ConcurrentRender": 14.081305147854437
        },
        "reactEventTime": {
          "RenderFiber": 2.678012529217085
        },
        "reactEvents": [
          {
            "kind": "RenderFiber",
            "functionLocation": {
              "line": 42,
              "column": 17,
              "url": "webpack://_N_E/packages/replay-next/components/inspector/PropertiesRenderer.tsx"
            },
            "count": 2,
            "elapsed": 0.9528782874622266
          },
          {
            "kind": "RenderFiber",
            "functionLocation": {
              "line": 7,
              "column": 37,
              "url": "webpack://_N_E/packages/replay-next/components/inspector/KeyValueRendererWithContextMenu.tsx"
            },
            "count": 26,
            "elapsed": 0.6371216333645862
          },
          {
            "kind": "RenderFiber",
            "functionLocation": {
              "line": 127,
              "column": 6,
              "url": "webpack://_N_E/packages/replay-next/components/inspector/KeyValueRenderer.tsx"
            },
            "count": 24,
            "elapsed": 0.5422016660158988
          },
          {
            "kind": "RenderFiber",
            "functionLocation": {
              "line": 46,
              "column": 39,
              "url": "webpack://_N_E/packages/replay-next/components/Expandable.tsx"
            },
            "count": 6,
            "elapsed": 0.17687597125041066
          },
          {
            "kind": "RenderFiber",
            "functionLocation": {
              "line": 40,
              "column": 17,
              "url": "webpack://_N_E/packages/replay-next/components/inspector/ValueRenderer.tsx"
            },
            "count": 22,
            "elapsed": 0.13931479215898435
          },
          {
            "kind": "RenderFiber",
            "functionLocation": {
              "line": 39,
              "column": 50,
              "url": "webpack://_N_E/packages/replay-next/components/inspector/values/ClientValueValueRenderer.tsx"
            },
            "count": 19,
            "elapsed": 0.07284167058242019
          },
          {
            "kind": "RenderFiber",
            "functionLocation": {
              "line": 18,
              "column": 17,
              "url": "webpack://_N_E/packages/replay-next/components/inspector/properties/PrototypeRenderer.tsx"
            },
            "count": 2,
            "elapsed": 0.054041495863202726
          },
          {
            "kind": "RenderFiber",
            "functionLocation": {
              "line": 113,
              "column": 24,
              "url": "webpack://_N_E/packages/replay-next/components/Icon.tsx"
            },
            "count": 9,
            "elapsed": 0.04347578612578218
          },
          {
            "kind": "RenderFiber",
            "functionLocation": {
              "line": 15,
              "column": 28,
              "url": "webpack://_N_E/packages/replay-next/components/LazyActivity.tsx"
            },
            "count": 6,
            "elapsed": 0.03903705972697935
          },
          {
            "kind": "RenderFiber",
            "functionLocation": {
              "line": 17,
              "column": 40,
              "url": "webpack://_N_E/packages/replay-next/components/inspector/values/FunctionRenderer.tsx"
            },
            "count": 3,
            "elapsed": 0.0202241666665941
          }
        ],
        "numNetworkRoundTrips": 2,
        "dependencySteps": [
          {
            "code": "DispatchInputEventHandler",
            "type": "click",
            "time": 17331.3088745
          },
          {
            "code": "ReactCallSetState",
            "time": 17331.678960611167,
            "point": "44459041857652529030707569733140482"
          },
          {
            "code": "ReactRender",
            "time": 17340.19478082223,
            "point": "44459041857660650209786226521669634",
            "calleeLocation": {
              "line": 127,
              "column": 6,
              "url": "webpack://_N_E/packages/replay-next/components/inspector/KeyValueRenderer.tsx"
            }
          },
          {
            "code": "ReactCreateElement",
            "time": 17340.316344044528,
            "point": "44459041857660730914291523231154176"
          },
          {
            "code": "ReactRender",
            "time": 17341.243697768932,
            "point": "44459041857661346574375043416981506",
            "calleeLocation": {
              "line": 42,
              "column": 17,
              "url": "webpack://_N_E/packages/replay-next/components/inspector/PropertiesRenderer.tsx"
            }
          },
          {
            "code": "ReactReturnElement",
            "time": 17341.927925048738,
            "point": "44459041857661800825447858514690094"
          },
          {
            "code": "ReactRender",
            "time": 17343.979551658227,
            "point": "44459041857663432209376877203161090",
            "calleeLocation": {
              "line": 18,
              "column": 17,
              "url": "webpack://_N_E/packages/replay-next/components/inspector/properties/PrototypeRenderer.tsx"
            }
          },
          {
            "code": "ScriptSendWebSocketMessage",
            "time": 17346.9060746,
            "point": "44459041857669027337438837310750729"
          },
          {
            "code": "WebSocketMessageReceived",
            "time": 17707.968291
          },
          {
            "code": "ReactResumeSuspendedRender",
            "time": 17709.202986242624
          },
          {
            "code": "ReactRender",
            "time": 17710.73232083186,
            "point": "45432597518647698259933251030220802",
            "calleeLocation": {
              "line": 42,
              "column": 17,
              "url": "webpack://_N_E/packages/replay-next/components/inspector/PropertiesRenderer.tsx"
            }
          },
          {
            "code": "ReactCreateElement",
            "time": 17710.97925777876,
            "point": "45432597518648135217183436895682560"
          },
          {
            "code": "ReactRender",
            "time": 17712.658682128204,
            "point": "45432597518652678880833152609157122",
            "calleeLocation": {
              "line": 7,
              "column": 37,
              "url": "webpack://_N_E/packages/replay-next/components/inspector/KeyValueRendererWithContextMenu.tsx"
            }
          },
          {
            "code": "ReactResumeSuspendedRender",
            "time": 17713.58026521831
          },
          {
            "code": "ReactRender",
            "time": 17730.482520301073,
            "point": "45432597518665274548270982412369922",
            "calleeLocation": {
              "line": 7,
              "column": 37,
              "url": "webpack://_N_E/packages/replay-next/components/inspector/KeyValueRendererWithContextMenu.tsx"
            }
          },
          {
            "code": "ReactResumeSuspendedRender",
            "time": 17730.761943181817
          },
          {
            "code": "ReactRender",
            "time": 17733.56630021138,
            "point": "45432597518673385351055891580846082",
            "calleeLocation": {
              "line": 7,
              "column": 37,
              "url": "webpack://_N_E/packages/replay-next/components/inspector/KeyValueRendererWithContextMenu.tsx"
            }
          },
          {
            "code": "ReactCreateElement",
            "time": 17733.57899282927,
            "point": "45432597518673472973090215931412480"
          },
          {
            "code": "ReactRender",
            "time": 17733.58806818182,
            "point": "45432597518673505254892370692931586",
            "calleeLocation": {
              "line": 127,
              "column": 6,
              "url": "webpack://_N_E/packages/replay-next/components/inspector/KeyValueRenderer.tsx"
            }
          },
          {
            "code": "ScriptSendWebSocketMessage",
            "time": 17733.97035,
            "point": "45432597518674770009783027483279369"
          },
          {
            "code": "WebSocketMessageReceived",
            "time": 18357.366166
          }
        ],
        "origin": {
          "kind": "dispatchEvent",
          "time": 17331.3088745,
          "eventType": "click"
        },
        "commitElapsed": 5.52410480322942,
        "triggerPoint": "46081634626065955771515994208468994"
      },
      {
        "startTime": 20234.324083,
        "endTime": 21290.106315868263,
        "elapsed": 1055.7822328682632,
        "networkTime": 992.2158676000035,
        "schedulingTime": 30.461054639432405,
        "mainThreadTime": 30.241623904777953,
        "workerThreadTime": 0,
        "timerTime": 0,
        "unknownTime": 2.8636867240493302,
        "reactSliceTime": {
          "FlushPassiveEffects": 0.7638085866856272,
          "SyncRender": 3.6680307960123173,
          "Commit": 2.592625953249808,
          "ConcurrentRender": 19.358513235747523
        },
        "reactEventTime": {
          "RenderFiber": 2.787562986748526
        },
        "reactEvents": [
          {
            "kind": "RenderFiber",
            "functionLocation": {
              "line": 7,
              "column": 37,
              "url": "webpack://_N_E/packages/replay-next/components/inspector/KeyValueRendererWithContextMenu.tsx"
            },
            "count": 9,
            "elapsed": 0.6682512571424013
          },
          {
            "kind": "RenderFiber",
            "functionLocation": {
              "line": 19,
              "column": 17,
              "url": "webpack://_N_E/packages/replay-next/components/inspector/properties/FunctionLocationRenderer.tsx"
            },
            "count": 2,
            "elapsed": 0.6185598343181482
          },
          {
            "kind": "RenderFiber",
            "functionLocation": {
              "line": 42,
              "column": 17,
              "url": "webpack://_N_E/packages/replay-next/components/inspector/PropertiesRenderer.tsx"
            },
            "count": 2,
            "elapsed": 0.5044758473886759
          },
          {
            "kind": "RenderFiber",
            "functionLocation": {
              "line": 127,
              "column": 6,
              "url": "webpack://_N_E/packages/replay-next/components/inspector/KeyValueRenderer.tsx"
            },
            "count": 8,
            "elapsed": 0.4802713187527843
          },
          {
            "kind": "RenderFiber",
            "functionLocation": {
              "line": 46,
              "column": 39,
              "url": "webpack://_N_E/packages/replay-next/components/Expandable.tsx"
            },
            "count": 4,
            "elapsed": 0.21759439391462365
          },
          {
            "kind": "RenderFiber",
            "functionLocation": {
              "line": 40,
              "column": 17,
              "url": "webpack://_N_E/packages/replay-next/components/inspector/ValueRenderer.tsx"
            },
            "count": 6,
            "elapsed": 0.1028747218188073
          },
          {
            "kind": "RenderFiber",
            "functionLocation": {
              "line": 18,
              "column": 17,
              "url": "webpack://_N_E/packages/replay-next/components/inspector/properties/PrototypeRenderer.tsx"
            },
            "count": 2,
            "elapsed": 0.07066196189043694
          },
          {
            "kind": "RenderFiber",
            "functionLocation": {
              "line": 39,
              "column": 50,
              "url": "webpack://_N_E/packages/replay-next/components/inspector/values/ClientValueValueRenderer.tsx"
            },
            "count": 5,
            "elapsed": 0.0471131294107181
          },
          {
            "kind": "RenderFiber",
            "functionLocation": {
              "line": 113,
              "column": 24,
              "url": "webpack://_N_E/packages/replay-next/components/Icon.tsx"
            },
            "count": 4,
            "elapsed": 0.045054538175463676
          },
          {
            "kind": "RenderFiber",
            "functionLocation": {
              "line": 15,
              "column": 28,
              "url": "webpack://_N_E/packages/replay-next/components/LazyActivity.tsx"
            },
            "count": 3,
            "elapsed": 0.03270598393646651
          }
        ],
        "numNetworkRoundTrips": 2,
        "dependencySteps": [
          {
            "code": "DispatchInputEventHandler",
            "type": "click",
            "time": 20234.324083
          },
          {
            "code": "ReactCallSetState",
            "time": 20234.871453108794,
            "point": "50300375823720682654509359691726850"
          },
          {
            "code": "ReactRender",
            "time": 20244.81320470627,
            "point": "50300375823730160822198938739146754",
            "calleeLocation": {
              "line": 127,
              "column": 6,
              "url": "webpack://_N_E/packages/replay-next/components/inspector/KeyValueRenderer.tsx"
            }
          },
          {
            "code": "ReactCreateElement",
            "time": 20244.92994670258,
            "point": "50300375823730241526704235448631296"
          },
          {
            "code": "ReactRender",
            "time": 20245.820521360147,
            "point": "50300375823730857186787755634458626",
            "calleeLocation": {
              "line": 42,
              "column": 17,
              "url": "webpack://_N_E/packages/replay-next/components/inspector/PropertiesRenderer.tsx"
            }
          },
          {
            "code": "ReactCreateElement",
            "time": 20246.04733438155,
            "point": "50300375823731013984112356395843584"
          },
          {
            "code": "ReactRender",
            "time": 20250.81760806329,
            "point": "50300375823731872910633314266644482",
            "calleeLocation": {
              "line": 18,
              "column": 17,
              "url": "webpack://_N_E/packages/replay-next/components/inspector/properties/PrototypeRenderer.tsx"
            }
          },
          {
            "code": "ScriptSendWebSocketMessage",
            "time": 20253.7283578,
            "point": "50300375823736055709852130986688521"
          },
          {
            "code": "WebSocketMessageReceived",
            "time": 20607.7445
          },
          {
            "code": "ReactResumeSuspendedRender",
            "time": 20609.29226235461
          },
          {
            "code": "ReactRender",
            "time": 20612.274772792276,
            "point": "51273931484716544789559309703839746",
            "calleeLocation": {
              "line": 42,
              "column": 17,
              "url": "webpack://_N_E/packages/replay-next/components/inspector/PropertiesRenderer.tsx"
            }
          },
          {
            "code": "ReactCreateElement",
            "time": 20612.44953314749,
            "point": "51273931484716735021607509704048640"
          },
          {
            "code": "ReactRender",
            "time": 20614.331875,
            "point": "51273931484717489032271582711513090",
            "calleeLocation": {
              "line": 7,
              "column": 37,
              "url": "webpack://_N_E/packages/replay-next/components/inspector/KeyValueRendererWithContextMenu.tsx"
            }
          },
          {
            "code": "ReactResumeSuspendedRender",
            "time": 20615.206439857142
          },
          {
            "code": "ReactRender",
            "time": 20643.950655913977,
            "point": "51598450038386172148759721242787842",
            "calleeLocation": {
              "line": 7,
              "column": 37,
              "url": "webpack://_N_E/packages/replay-next/components/inspector/KeyValueRendererWithContextMenu.tsx"
            }
          },
          {
            "code": "ScriptSendWebSocketMessage",
            "time": 20644.4635246,
            "point": "51598450038387614453562087487569929"
          },
          {
            "code": "WebSocketMessageReceived",
            "time": 21282.66325
          },
          {
            "code": "ReactResumeSuspendedRender",
            "time": 21283.827554683674
          },
          {
            "code": "ReactRender",
            "time": 21287.772749182648,
            "point": "52572005699369950513519646373576706",
            "calleeLocation": {
              "line": 7,
              "column": 37,
              "url": "webpack://_N_E/packages/replay-next/components/inspector/KeyValueRendererWithContextMenu.tsx"
            }
          },
          {
            "code": "ReactCreateElement",
            "time": 21287.833646178082,
            "point": "52572005699370038135553970724143104"
          },
          {
            "code": "ReactRender",
            "time": 21287.856081913244,
            "point": "52572005699370070417356125485662210",
            "calleeLocation": {
              "line": 127,
              "column": 6,
              "url": "webpack://_N_E/packages/replay-next/components/inspector/KeyValueRenderer.tsx"
            }
          },
          {
            "code": "ReactCreateElement",
            "time": 21287.892940621005,
            "point": "52572005699370123451745311630819328"
          },
          {
            "code": "ReactRender",
            "time": 21288.62082644086,
            "point": "52572005699370689536203996283273218",
            "calleeLocation": {
              "line": 40,
              "column": 17,
              "url": "webpack://_N_E/packages/replay-next/components/inspector/ValueRenderer.tsx"
            }
          },
          {
            "code": "ReactCreateElement",
            "time": 21288.646301021505,
            "point": "52572005699370727582613622539419648"
          },
          {
            "code": "ReactRender",
            "time": 21288.66251211828,
            "point": "52572005699370751793965348132225026",
            "calleeLocation": {
              "line": 14,
              "column": 33,
              "url": "webpack://_N_E/packages/replay-next/components/inspector/values/ObjectRenderer.tsx"
            }
          },
          {
            "code": "ReactCreateElement",
            "time": 21288.669459731183,
            "point": "52572005699370762170258829464305664"
          },
          {
            "code": "ReactRender",
            "time": 21288.76732369403,
            "point": "52572005699370897062074928594944002",
            "calleeLocation": {
              "line": 127,
              "column": 6,
              "url": "webpack://_N_E/packages/replay-next/components/inspector/KeyValueRenderer.tsx"
            }
          }
        ],
        "origin": {
          "kind": "dispatchEvent",
          "time": 20234.324083,
          "eventType": "click"
        },
        "commitElapsed": 5.407707696027501,
        "triggerPoint": "52572005699375477619212972116148226"
      }
    ],
    "errors": [
      {
        "point": "18497557560069305308741260250447889",
        "why": "UnexpectedCommitMutation"
      },
      {
        "point": "18497557560069305308741260250447889",
        "why": "UnexpectedCommitMutation"
      },
      {
        "point": "19795631775282364495310964872183825",
        "why": "UnexpectedCommitMutation"
      },
      {
        "point": "34074448140153922410322799580151812",
        "why": "UnexpectedCommitMutation"
      },
      {
        "point": "34074448140154063066746395975221263",
        "why": "UnexpectedCommitMutation"
      },
      {
        "point": "34074448140154063066746395975221263",
        "why": "UnexpectedCommitMutation"
      },
      {
        "point": "34074448140154063066746395975221263",
        "why": "UnexpectedCommitMutation"
      },
      {
        "point": "34074448140154063066746395975221263",
        "why": "UnexpectedCommitMutation"
      },
      {
        "point": "34074448140154063066746395975221264",
        "why": "UnexpectedCommitMutation"
      },
      {
        "point": "34074448140154063066746395975221265",
        "why": "UnexpectedCommitMutation"
      },
      {
        "point": "34074448140154063066746395975221265",
        "why": "UnexpectedCommitMutation"
      },
      {
        "point": "34074448140154063066746395975221265",
        "why": "UnexpectedCommitMutation"
      },
      {
        "point": "17848520452602592812172177636851714",
        "why": "UnknownRenderTriggerPoint"
      },
      {
        "point": "18497557560075810091870355160301570",
        "why": "UnknownRenderTriggerPoint"
      },
      {
        "point": "18497557560069229215921887479070722",
        "why": "UnknownRenderTriggerPoint"
      }
    ]
  };
