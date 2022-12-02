# FullStackOpen Part 0

-   [Exercise 0.4 - New note diagram](#04)

---

## <a name="04"></a> Exercise 0.4 - New note diagram

```
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
server-->browser: HTML-code
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
server-->browser: main.js

note over browser:
browser starts executing js-code
that requests JSON data from server
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

note over browser:
browser executes the event handler
that renders notes to display
end note
note over browser:
user enters a note and
clicks submit button
end note

browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
note right of browser:
{"note": "an awesome note"}
end note

note over server:
server saves the note with
current datetime
end note

server-->browser: HTTP 302 https://studies.cs.helsinki.fi/exampleapp/notes

note over browser, server:
page starts loading again
```

[![](https://mermaid.ink/img/pako:eNqtVEtv2kAQ_iujPYMB05DAIadGraq2iURudVUN3rG9wd51d9cQhPzfO2sMUSVoFYkLMjOj7zGP3YvUSBIL4eh3Qzqljwpzi1WiV9ZsHdnh_T3_bsgu4PPz8xN8eniGwvvaLUYj5xupyEWpiwoqndJrFWVqRK9Y1SVhXY-08eQSfUAYMlaPGsC-fR0G7isxVag0p8-TvSWvx_XyD6qQS3QwD4YL4JTtP8B5tN4BvVLaeKVzeHFdM8AX6MGGWTjOf1k-fgeJHiGzpoIDHQTsq_gIyKzV6LNOfuwhNdqT9gtIRJgXKJaMbpeIQVBFIR6PJ_Ph-GYYTxMB7QCiKPr5H_MH1-TYLAFtmAAK1LLkVG9fS7IOuuUBb0AqV5e4uwDLjBcyTcfGFhgMOzhgHkhLla4duGZVKQ-rxvvQgYs9fXpcvmvlafsrUJ00WZUXHkz2pmufiK5ChAaiBtySMxXBIdj-7eaopR--w03fua5kq3wBaWNt6GKYiVdVR3325NjNdBy__37PdHdwElZjTseFLg3KsM6Y8xmIgajI8kFIfl_2iQZ2y8Kr3rhEu05Eoluuw8ab5U6nYuFtQwPR1MFL_xaJRYalO0UfpPLGnoKBkvjvXvhdHV6yXDnPkLy7mcpDvLElh4-mQzrKuW3NKkpNNXJKFqy92Mxno1k8u8N4SrPbKd5MpzJdTeZ3Wfxhksnb8SRG0bbtHycH3BU?type=png)](https://mermaid.live/edit#pako:eNqtVEtv2kAQ_iujPYMB05DAIadGraq2iURudVUN3rG9wd51d9cQhPzfO2sMUSVoFYkLMjOj7zGP3YvUSBIL4eh3Qzqljwpzi1WiV9ZsHdnh_T3_bsgu4PPz8xN8eniGwvvaLUYj5xupyEWpiwoqndJrFWVqRK9Y1SVhXY-08eQSfUAYMlaPGsC-fR0G7isxVag0p8-TvSWvx_XyD6qQS3QwD4YL4JTtP8B5tN4BvVLaeKVzeHFdM8AX6MGGWTjOf1k-fgeJHiGzpoIDHQTsq_gIyKzV6LNOfuwhNdqT9gtIRJgXKJaMbpeIQVBFIR6PJ_Ph-GYYTxMB7QCiKPr5H_MH1-TYLAFtmAAK1LLkVG9fS7IOuuUBb0AqV5e4uwDLjBcyTcfGFhgMOzhgHkhLla4duGZVKQ-rxvvQgYs9fXpcvmvlafsrUJ00WZUXHkz2pmufiK5ChAaiBtySMxXBIdj-7eaopR--w03fua5kq3wBaWNt6GKYiVdVR3325NjNdBy__37PdHdwElZjTseFLg3KsM6Y8xmIgajI8kFIfl_2iQZ2y8Kr3rhEu05Eoluuw8ab5U6nYuFtQwPR1MFL_xaJRYalO0UfpPLGnoKBkvjvXvhdHV6yXDnPkLy7mcpDvLElh4-mQzrKuW3NKkpNNXJKFqy92Mxno1k8u8N4SrPbKd5MpzJdTeZ3Wfxhksnb8SRG0bbtHycH3BU)
