import '@testing-library/jest-dom/extend-expect'

// TESTING REFERENCE

// Jest expect methods:
// https://jestjs.io/docs/en/expect

// React Testing Library Cheat Sheat
// https://testing-library.com/docs/react-testing-library/cheatsheet

//React Testing Library Queries
// getBy * queries return the first matching node for a query, and throw an error if no elements match or if more than one match is found(use getAllBy instead).
// queryBy * queries return the first matching node for a query, and return null if no elements match.This is useful for asserting an element that is not present.This throws if more than one match is found(use queryAllBy instead).
// findBy * queries return a promise which resolves when an element is found which matches the given query.The promise is rejected if no element is found or if more than one element is found after a default timeout of 4500ms. If you need to find more than one element, then use findAllBy.

// React Testing Library jest-dom Custom Matchers
// https://github.com/testing-library/jest-dom#table-of-contents
