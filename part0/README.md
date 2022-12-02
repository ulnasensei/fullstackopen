# FullStackOpen Part 0

- [FullStackOpen Part 0](#fullstackopen-part-0)
  - [Exercise 0.4 - New note diagram](#exercise-04---new-note-diagram)
  - [Exercise 0.5 - Single page app diagram](#exercise-05---single-page-app-diagram)
  - [Exercise 0.6 - New note in Single page app diagram](#exercise-06---new-note-in-single-page-app-diagram)

---

## Exercise 0.4 - New note diagram

```
note over browser: user enters a note and clicks submit button

browser->>server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note

note right of browser: {"note": "an awesome note"}

note over server: server saves the note with current datetime

server-->>browser: HTTP 302 https://studies.cs.helsinki.fi/exampleapp/notes

browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
server-->>browser: HTML-code
browser->server: ...(rest of the page loading requests/responses)...
```

[![](https://mermaid.ink/img/pako:eNqVUk1r3DAQ_SuDTi1k7azdbhIfcmpoDy0NZI-GMpbGtlhbcjXSbsPi_17J-9EeSiEYZDx-8968pzkKaRWJSjD9DGQkfdLYORxrY6wnsHty0Dh7YHIVhHgCGU-OAWEBoFEgBy13DByaUXtogvfW1PE5960eH-O5TwRftttneP7-soXe-4mrPGcflCbOJGc9DazNTmetzukXjtNAOE25ocOPJJUYF0mnu96Dbf_MdazFghAV1AIN4IHYjgSn4nztXNxcZjm9gXFPDL4_oeGgfQ8yOBdtgkJPXo-L9Am-imausoub8rZ4i5mowf_J5vPT9u1s_xzt29dVutm_lC5CWZa9c8RLhMn3hB3BYFFp04FLa8Ce84iYbKTm9xEvbsRIbkSt4qYcawMx59g6niNX6Ha1qM0ccRi8fXk1UlTeBboRYUopnrdKVC0OfK0-Ke2tuxbTDBQ_j8K_TmknO80-UkprWt2lenBDLF8CSr-zLl5YaDJpx5y16tH5fv-wyTfF5h6LkjZ3JX4sSyWb9cN9W3xYt-rudl2gmOf5N6S5D7g?type=png)](https://mermaid.live/edit#pako:eNqVUk1r3DAQ_SuDTi1k7azdbhIfcmpoDy0NZI-GMpbGtlhbcjXSbsPi_17J-9EeSiEYZDx-8968pzkKaRWJSjD9DGQkfdLYORxrY6wnsHty0Dh7YHIVhHgCGU-OAWEBoFEgBy13DByaUXtogvfW1PE5960eH-O5TwRftttneP7-soXe-4mrPGcflCbOJGc9DazNTmetzukXjtNAOE25ocOPJJUYF0mnu96Dbf_MdazFghAV1AIN4IHYjgSn4nztXNxcZjm9gXFPDL4_oeGgfQ8yOBdtgkJPXo-L9Am-imausoub8rZ4i5mowf_J5vPT9u1s_xzt29dVutm_lC5CWZa9c8RLhMn3hB3BYFFp04FLa8Ce84iYbKTm9xEvbsRIbkSt4qYcawMx59g6niNX6Ha1qM0ccRi8fXk1UlTeBboRYUopnrdKVC0OfK0-Ke2tuxbTDBQ_j8K_TmknO80-UkprWt2lenBDLF8CSr-zLl5YaDJpx5y16tH5fv-wyTfF5h6LkjZ3JX4sSyWb9cN9W3xYt-rudl2gmOf5N6S5D7g)

---

## Exercise 0.5 - Single page app diagram

```
browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
server-->>browser: HTML-code
browser->>server: HTTP GET 	https://studies.cs.helsinki.fi/exampleapp/main.css
server-->>browser: main.css
browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server-->>browser: spa.js

note over browser: browser starts executing js-code that requests JSON data from server

browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->>browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

note over browser: browser executes the JS function that renders notes to display
```

[![](https://mermaid.ink/img/pako:eNqtU8lu2zAQ_ZUBz7Zky40T65BTgxZFNyC-lT3Q4shiIpEqZ5TGMPTvHdZLL0aTQy6C8B71lhlqr6pgUZWK8NeAvsL3zmyj6bTfxPCbME5vb-X5hLGEj-v1d_hwt4aGuacyz4kH65CyirIGW3L-0WW1y_HZdH2Lpu9z6o32h--nonTUTFJfPk-T8399NL_eqTPOC00X7f6Rb9Uqe7jsdKK094ERgvBwJo8vQGwiE-AzVgM7v4UH-jsM4MYwxLQJEv7T_bevYA0bqGPo4OAGSftNWiRlyRr8xSI_9lAFz-i5BK3SvsBJZEM7rSYpFSa8mM1X09nVtFhoBeMEsiz7-UL5Q2skKYtSEerBV-yCP5X3FiNBEpAjAayjvjU7NVEdRtmjlbu61x7EXAQ61CrlsCY-aqX9KOfMwOF-5ytVchxwooY-pT3ea1XWpqUzemcdh3gG22DEXZV7xbs-_RVbRyySMonabRM-xFbg05ATnW0dN8Mmq0KXk7ONrLZ5Wi3zZbG8McUCl9cLc7VY2GozX93Uxbt5ba9n88KocRz_AHTBOzc?type=png)](https://mermaid.live/edit#pako:eNqtU8lu2zAQ_ZUBz7Zky40T65BTgxZFNyC-lT3Q4shiIpEqZ5TGMPTvHdZLL0aTQy6C8B71lhlqr6pgUZWK8NeAvsL3zmyj6bTfxPCbME5vb-X5hLGEj-v1d_hwt4aGuacyz4kH65CyirIGW3L-0WW1y_HZdH2Lpu9z6o32h--nonTUTFJfPk-T8399NL_eqTPOC00X7f6Rb9Uqe7jsdKK094ERgvBwJo8vQGwiE-AzVgM7v4UH-jsM4MYwxLQJEv7T_bevYA0bqGPo4OAGSftNWiRlyRr8xSI_9lAFz-i5BK3SvsBJZEM7rSYpFSa8mM1X09nVtFhoBeMEsiz7-UL5Q2skKYtSEerBV-yCP5X3FiNBEpAjAayjvjU7NVEdRtmjlbu61x7EXAQ61CrlsCY-aqX9KOfMwOF-5ytVchxwooY-pT3ea1XWpqUzemcdh3gG22DEXZV7xbs-_RVbRyySMonabRM-xFbg05ATnW0dN8Mmq0KXk7ONrLZ5Wi3zZbG8McUCl9cLc7VY2GozX93Uxbt5ba9n88KocRz_AHTBOzc)

---

## Exercise 0.6 - New note in Single page app diagram

```
note over Browser: user enters a note and clicks save button

note over Browser: JS script creates a note object with note text and date

note over Browser: JS script appends the note to notes array

note over Browser: JS script updates the notes displayed on the Browser

note over Browser: JS script sends the new note to the server

Browser ->> Server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
note right of Browser: {"content":"spa note","date":"2022-12-02T13:18:53.579Z"}

note over Server: server checks if the received data is valid

note over Server: server saves the note

Server -->> Browser: HTTP 201 {"message":"note created"}
```

[![](https://mermaid.ink/img/pako:eNqFU02vmzAQ_CsrnxMI0CQvHN6haqWqlz4pOVWWnhx7ATdgU9uQF0X577VNPlSpai4gxrPjmd3lTLgWSEpi8feAiuMXyWrDOqqUdgh6RAOfjT5aNCUM_gmoHBoLDCKBKQG8lfxgwbIRYT84pxVV_6z_vgXLjewdcIPM4V1F738hd3CUrpkAhx8uagtPe6rG-h6VsOAavJbr-Pb6xrDT0_qhF9HNrd6CkLZv2QkFaBXha9VTKfswgse7mfDtieMkcC2D-esrbCNawrfd7g3efmx30DjX2zJNrRuERJtwmzTYWqkOMqlkih-s61v0kVN_w3u44d327GrLyLpxoKuHtTP1E_YjU46SkhJPja4omVESmxvQfJHn8yyfL_JdVpTZS7kskuV685OSy9-Jb3anMMAbDJOXVUxokKMcMQ6NgbQwslaK_wqEnXn0PVAnAsxDc-4hYnfyRRbSdGgtqyffUXfaJeG9kpk_NR2Twi_0mSoASrx2F8gQ4poDJVQFHhuc3p4UJ6UzA87ItALX5SdlxVp7R78K6bS5g61mAv3nmbhTH36dWlrnJX2bK1kHfDCth2-DDMdJ7Vd72Cdcd6mVomHGNeNmla7y1QvLC1ytC7YsCsH32ealyj9llVgvspyRy-XyB_CFRow?type=png)](https://mermaid.live/edit#pako:eNqFU02vmzAQ_CsrnxMI0CQvHN6haqWqlz4pOVWWnhx7ATdgU9uQF0X577VNPlSpai4gxrPjmd3lTLgWSEpi8feAiuMXyWrDOqqUdgh6RAOfjT5aNCUM_gmoHBoLDCKBKQG8lfxgwbIRYT84pxVV_6z_vgXLjewdcIPM4V1F738hd3CUrpkAhx8uagtPe6rG-h6VsOAavJbr-Pb6xrDT0_qhF9HNrd6CkLZv2QkFaBXha9VTKfswgse7mfDtieMkcC2D-esrbCNawrfd7g3efmx30DjX2zJNrRuERJtwmzTYWqkOMqlkih-s61v0kVN_w3u44d327GrLyLpxoKuHtTP1E_YjU46SkhJPja4omVESmxvQfJHn8yyfL_JdVpTZS7kskuV685OSy9-Jb3anMMAbDJOXVUxokKMcMQ6NgbQwslaK_wqEnXn0PVAnAsxDc-4hYnfyRRbSdGgtqyffUXfaJeG9kpk_NR2Twi_0mSoASrx2F8gQ4poDJVQFHhuc3p4UJ6UzA87ItALX5SdlxVp7R78K6bS5g61mAv3nmbhTH36dWlrnJX2bK1kHfDCth2-DDMdJ7Vd72Cdcd6mVomHGNeNmla7y1QvLC1ytC7YsCsH32ealyj9llVgvspyRy-XyB_CFRow)
