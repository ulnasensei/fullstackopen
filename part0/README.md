# FullStackOpen Part 0

## Exercise 0.4 - New note diagram

```yaml
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

[![](https://mermaid.ink/img/pako:eNqtVF9v2jAQ_yonP0OAsNLCQ59WbZq2tRK8LdN0xJfEJbEz24EilO--cwhUk-imSrxEyZ3z--ezDyI1ksRCOPrdkE7po8LcYpXotTU7R3Z4f8_PLdkFfF6tnuDTwwoK72u3GI2cb6QiF6UuKqh0Sm9UlKkRvWBVl4R1PdLGk0v0EWHIWD1qAPv2dRi4r8RUodLcvkz22rwe1_M_qEIv0cE8GF4A527_As6j9Q7ohdLGK53Ds-vCAF-gBxv2wnH_y_LxO0j0CJk1FRzpIGBfxUdAZq1GX3Ty4wCp0Z60X0Aiwn6BYsno9okYBFUU6vF4Mh-Ob4bxNBHQDiCKop__MX90TY7NEtCWCaBALUtu9fa1JOugGx7wBqRydYn7N2CbDpOF8i_Y_QSMBmmp0o0D16wr5WHdeB98vpnc0-PyXYNNu1-B6qzJqrzwYLJXXYdEdCtEiAk14I6cqQiOxfZvNyct_RY73Pb5dEt2yheQNtaGrELyXlUd9cWDxW6m4_j9p_RCuoOzsBpzOo1taVCGocWch10MREWWx17yLXJINLBbFl71xiXaTSIS3fI6bLxZ7nUqFt42NBBNHbz0N45YZFi6c_VBKm_suRgoiT8Pwu_rcF_lynmG5AnNVB7qjS25fDId2lHOsTXrKDXVyClZsPZiO5-NZvHsDuMpzW6neDOdynQ9md9l8YdJJm_HkxhF27Z_AF070uc?type=png)](https://mermaid.live/edit#pako:eNqtVF9v2jAQ_yonP0OAsNLCQ59WbZq2tRK8LdN0xJfEJbEz24EilO--cwhUk-imSrxEyZ3z--ezDyI1ksRCOPrdkE7po8LcYpXotTU7R3Z4f8_PLdkFfF6tnuDTwwoK72u3GI2cb6QiF6UuKqh0Sm9UlKkRvWBVl4R1PdLGk0v0EWHIWD1qAPv2dRi4r8RUodLcvkz22rwe1_M_qEIv0cE8GF4A527_As6j9Q7ohdLGK53Ds-vCAF-gBxv2wnH_y_LxO0j0CJk1FRzpIGBfxUdAZq1GX3Ty4wCp0Z60X0Aiwn6BYsno9okYBFUU6vF4Mh-Ob4bxNBHQDiCKop__MX90TY7NEtCWCaBALUtu9fa1JOugGx7wBqRydYn7N2CbDpOF8i_Y_QSMBmmp0o0D16wr5WHdeB98vpnc0-PyXYNNu1-B6qzJqrzwYLJXXYdEdCtEiAk14I6cqQiOxfZvNyct_RY73Pb5dEt2yheQNtaGrELyXlUd9cWDxW6m4_j9p_RCuoOzsBpzOo1taVCGocWch10MREWWx17yLXJINLBbFl71xiXaTSIS3fI6bLxZ7nUqFt42NBBNHbz0N45YZFi6c_VBKm_suRgoiT8Pwu_rcF_lynmG5AnNVB7qjS25fDId2lHOsTXrKDXVyClZsPZiO5-NZvHsDuMpzW6neDOdynQ9md9l8YdJJm_HkxhF27Z_AF070uc)
