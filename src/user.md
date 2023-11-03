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

# Keyboard Interactions

# Utility API
type()
# Convenience AP!
tab()


Keyboard Interactions
# Utility API
clear()
•
•
test('clear', async () => {
render(<textarea defaultValue="Hello, World!" />)
await userEvent. clear( screen.getByRole( textbox'))
expect (screen. getByRole( textbox' )). toHaveValue('')
})

Keyboard Interactions
# Utility API
selectOptions()

test('selectOptions', async () => {
render(
<select multiple>
<option value="1">A</option>
<option value="2">B</option>
<option value="3">C</option>
</select>,
)
await userEvent.selectOptions(screen.getByRole('listbox), ['1', 'C'])
expect(screen.getByRole('option', {name: 'A'}).selected).toBe(true)
expect(screen.getByRole('option', {name: 'B'}).selected).toBe(false)
expect(screen.getByRole('option', {name: 'C'}).selected).toBe(true)
})

# Keyboard Interactions
# Clipboard APIs
сору()
cut()
paste()

# Section Summary
user-event library
CRA installs user-event but needs upgrading
Mouse and keyboard interactions with Counter component
Mouse click events
Keyboard type and tab events
Convenience APIs, utility APIs, clipboard APIs
Pointer and keyboard APIs

