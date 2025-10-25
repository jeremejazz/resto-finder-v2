import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'
import App from '../src/App'
import { Provider } from '../src/components/ui/provider'

describe('App search UI', () => {
  it('renders the search input and dropdown', () => {
    render(
      <Provider>
        <App />
      </Provider>
    )

    // Input should be a text box
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()

    // Dropdown should be a native select (role: combobox)
    const dropdown = screen.getByRole('combobox')
    expect(dropdown).toBeInTheDocument()
  })
})
