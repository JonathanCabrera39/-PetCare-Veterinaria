import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from './Button';

describe('Button Component', () => {
  it('renderiza el texto del children', () => {
    render(<Button>Hacer Click</Button>);
    expect(screen.getByText('Hacer Click')).toBeInTheDocument();
  });

  it('llama a onClick cuando se hace click', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('está deshabilitado cuando disabled=true', () => {
    render(<Button disabled>Deshabilitado</Button>);
    expect(screen.getByText('Deshabilitado')).toBeDisabled();
  });
});