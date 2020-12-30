import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('maaran oletusarvo 10', () => {
  render(<App />);
  const linkElement = screen.getByTestId('maara');
  expect(linkElement).toBeInTheDocument();
  expect(linkElement.value).toBe("10");
});

test('maara ei alle 1', () => {
  render(<App />);
  const linkElement = screen.getByTestId('maara');
  expect(linkElement).toBeInTheDocument();
  fireEvent.change(linkElement, { target: { value: '-1' } });
  expect(linkElement.value).not.toBe("-1");
});

test('vitsilistan ollessa tyhja', () => {
  render(<App />);
  const linkElement = screen.getByTestId('laatikot');
  expect(linkElement).toBeInTheDocument();
  expect(linkElement.childElementCount).toBe(3);

  const teksti = screen.getByText(/No jokes/i);
  expect(teksti).toBeInTheDocument();

  const element = screen.getByTestId('nappula');
  fireEvent.click(element);
  expect(teksti).not.toBe();

  
  
});