# FullStackOpen Part 0

- [FullStackOpen Part 0](#fullstackopen-part-0)
  - [ Exercise 0.4 - New note diagram](#-exercise-04---new-note-diagram)
  - [ Exercise 0.5 - Single page app diagram](#-exercise-05---single-page-app-diagram)

---

## <a name="04"></a> Exercise 0.4 - New note diagram

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

## <a name="05"></a> Exercise 0.5 - Single page app diagram
