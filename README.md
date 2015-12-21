```
443164: HTTP2_SESSION
localhost:8020 (DIRECT)
Start Time: 2015-12-21 22:33:02.968

t=37072 [st=  0] +HTTP2_SESSION  [dt=?]
                  --> host = "localhost:8020"
                  --> proxy = "DIRECT"
t=37072 [st=  0]    HTTP2_SESSION_INITIALIZED
                    --> protocol = "h2"
                    --> source_dependency = 443163 (SOCKET)
t=37072 [st=  0]    HTTP2_SESSION_SEND_SETTINGS
                    --> settings = ["[id:3 flags:0 value:1000]","[id:4 flags:0 value:6291456]"]
t=37072 [st=  0]    HTTP2_STREAM_UPDATE_RECV_WINDOW
                    --> delta = 15663105
                    --> window_size = 15728640
t=37072 [st=  0]    HTTP2_SESSION_SENT_WINDOW_UPDATE_FRAME
                    --> delta = 15663105
                    --> stream_id = 0
t=37073 [st=  1]    HTTP2_SESSION_SEND_HEADERS
                    --> fin = true
                    --> :method: GET
                        :authority: localhost:8020
                        :scheme: https
                        :path: /
                        cache-control: max-age=0
                        accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
                        upgrade-insecure-requests: 1
                        user-agent: Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36
                        accept-encoding: gzip, deflate, sdch
                        accept-language: en,de;q=0.8,en-US;q=0.6
                        cookie: [61 bytes were stripped]
                    --> priority = 0
                    --> stream_id = 1
                    --> unidirectional = false
t=37076 [st=  4]    HTTP2_SESSION_RECV_SETTINGS
                    --> clear_persisted = false
                    --> host = "localhost:8020"
t=37129 [st= 57]    HTTP2_SESSION_RECV_PUSH_PROMISE
                    --> :method: GET
                        :scheme: https
                        :authority: localhost:8020
                        :path: /main.js
                    --> id = 1
                    --> promised_stream_id = 2
t=37129 [st= 57]    HTTP2_SESSION_RECV_HEADERS
                    --> fin = false
                    --> :status: 200
                        content-type: text/html
                        date: Mon, 21 Dec 2015 21:34:59 GMT
                    --> stream_id = 1
t=37129 [st= 57]    HTTP2_SESSION_RECV_DATA
                    --> fin = false
                    --> size = 53
                    --> stream_id = 1
t=37129 [st= 57]    HTTP2_SESSION_UPDATE_RECV_WINDOW
                    --> delta = -53
                    --> window_size = 15728587
t=37129 [st= 57]    HTTP2_SESSION_RECV_DATA
                    --> fin = true
                    --> size = 0
                    --> stream_id = 1
t=37129 [st= 57]    HTTP2_STREAM_UPDATE_RECV_WINDOW
                    --> delta = 53
                    --> window_size = 15728640
t=37129 [st= 57]    HTTP2_SESSION_RECV_HEADERS
                    --> fin = false
                    --> :status: 200
                        content-type: application/javascript
                        date: Mon, 21 Dec 2015 21:34:59 GMT
                    --> stream_id = 2
t=37129 [st= 57]    HTTP2_SESSION_RECV_DATA
                    --> fin = false
                    --> size = 120
                    --> stream_id = 2
t=37129 [st= 57]    HTTP2_SESSION_UPDATE_RECV_WINDOW
                    --> delta = -120
                    --> window_size = 15728520
t=37129 [st= 57]    HTTP2_SESSION_RECV_DATA
                    --> fin = true
                    --> size = 0
                    --> stream_id = 2
t=37201 [st=129]    HTTP2_STREAM_ADOPTED_PUSH_STREAM
                    --> stream_id = 2
                    --> url = "https://localhost:8020/main.js"
t=37201 [st=129]    HTTP2_STREAM_UPDATE_RECV_WINDOW
                    --> delta = 120
                    --> window_size = 15728640