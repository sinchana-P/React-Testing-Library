# Query method

1. getByRole
2. getByLabelText
3. getByPlaceholderText
4. getByText
5. getByDisplayValue
6. getByAltText
7. getByTitle
8. getByTestId


# 1. getByRole options

getByRole Options
name
level
hidden
selected
checked
pressed

# Note:

- getByRole : shd be ur top preference

# Priority Order for Queries
1. getByRole
2. getByLabelText
3. getByPlaceholderText
4. getByText
5. getByDisplayValue
6. getByAltText
7. getByTitle
8. getByTestId

# Priority Order for Queries
1. getByRole
2. getByLabelText
3. getByPlaceholderText
4. getByText
5. getByDisplayValue
6. getByAltText
7. getByTitle
8. getByTestId

## RTL getBy and getAllBy Queries

getByRole
getByLabel Text
getByPlaceholder Text
getByText
getByDisplayValue
getByAltText
getByTitle
getByTestld

# Query Multiple Elements
getAllByRole
getAllByLabelText
getAllByPlaceholderText
getAllByText
getAliByDisplayValue
getAlliByAltText
getAllBy Title
getAllBy Testld

# queryBy and queryAllBy
# queryBy
• Returns the matching node for a query, and return null if no elements match
• Useful for asserting an element that is "not present"
• Throws an error if more than one match is found

# queryAllBy
• Returns an array[] of all matching nodes for a query, and return an empty array
if no elements match

# RTL queryBy and queryAllBy Queries
# queryBy
queryByRole
queryByLabelText
queryByPlaceholderText
queryByText
queryByDisplayValue
queryByAltText
queryByTitle
queryByTestld

# queryAllBy
queryAllByRole
queryAllByLabelText
queryAllByPlaceholder Text
queryAllByText
queryAllByDisplay Value
queryAliByAltText
queryAllByTitle
queryAllByTestld

# Queries so far
- getBy and getAllBy class of queries to assert if elements are "present" in the DOM
- queryBy and queryAllBy class of queries to assert if elements are "not present" in
the DOM

# Appearance / Disappearance
What if elements are not present in the DOM to begin but make their way into the
DOM after some time?

For example, data that is fetched from a server will be rendered only after a few
milliseconds

# 