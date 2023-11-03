- create-react-app install the user-event library by default

# "@testing-library/user-event": "^13.5.0",

- To upgrade from version 13 ro 14 this, Run this in Terminal
- npm upgrade @testing-library/user-event@latest
- npm update @testing-library/user-event

## All user-event API's are Asynchronous, so add async - await keywords

# "@testing-library/user-event": "^13.5.0",

# Pointer Interactions
# Convenience APIs
click()
dblClick()
tripleClick()
hover()
unhover()

# low level - Pointer API
# Pointer Interactions
# Pointer APIs

pointer({keys: '[MouseLeft]'})
pointer({keys: [MouseLeft][Mouseright]})
pointer ('[MouseLeft][Mouseright]')
pointer( [MouseLeft>])          // without releasing
pointer('[/MouseLeft]')         // Just releasing the previously pressed button

